import Layout from './Layout'
import './App.css'
import Widget from './components/Widget'
import VerticalCarousel from './components/VerticalCarousel'
import { useEffect, useState } from 'react'
import { ContentService } from './services/ContentService'
import { EndOfDayWidgetData } from './types/EndOfDayWidgetData'
import { SuggestionWidgetData } from './types/SuggestionWidgetData'
import { EndWidgetData } from './types/EndWidgetData'
import Container from './components/Container'
import { generateWidgets } from './utils/generateWidgets'
import { CategoryType } from './types/Categories'
import { Widget as WidgetType } from './types/Widget'
import AnalyzingVoice from './components/categories/AnalyzingVoice'
import Initialization from './Initialization'

function App() {
    return (
        <>
            <Layout>
                <AppProvider />
            </Layout>
        </>
    )
}

export default App

const AppProvider = () => {
    const [onInitialLoad, setOnInitialLoad] = useState(true);
    const [name, setName] = useState<string | null>(null);
    useEffect(() => {
      if (!localStorage.getItem('name')) {  
        setOnInitialLoad(true);
      } else {
        setOnInitialLoad(false);
      }
    }, [name])
    return (
        <>
            { onInitialLoad ? <InitializeApp setName={setName} /> : <NonInitializedApp /> }
        </>
    );
}

interface InitializeAppProps {
    setName: (name: string) => void;
}
const InitializeApp = (props: InitializeAppProps) => {
    const [username, setUsername] = useState<string | null>(null);
    // animate this 
    return (
      <>
        <div className="inital h-full w-full">
        <>
        <Initialization setName={props.setName} />
        </>
        </div>
      </>
    );
}

const NonInitializedApp = () => {
    const [widget, setWidgets] = useState<React.ReactNode[]>([]);
    const [configState, setConfigState] = useState<true | false | null>(true);

    useEffect(() => {
        if (!localStorage.getItem('config')) {
            const config = generateConfig();
            localStorage.setItem('config', JSON.stringify(config));
            setConfigState(false)
        } else {
            setConfigState(true);
        }
    }, [configState]);
 


    useEffect(() => {
        const newWidgets = generateConfig();
        /*

        for (const slide of slideData) {
            if (slide instanceof EndOfDayWidgetData) {
                newWidgets.push(
                    <Widget>
                        End of day Widget
                    </Widget>
                );
            }
            else if (slide instanceof SuggestionWidgetData) {
                newWidgets.push(
                    <Widget>
                        Suggestion: {slide.suggestion}
                    </Widget>
                );
            }

            else if (slide instanceof EndWidgetData) {
                newWidgets.push(
                    <Widget>
                        There are no more wigets :(
                    </Widget>
                );
            } else {
                console.error("Unknown slide type", slide)
            }
        }*/

        setWidgets(newWidgets);
    }, []);

    return (
         /// start with the logic that collects the voice recording then transition to the widgets
        <>
        {configState ? <AnalyzingVoice setWidgets={setWidgets} setConfigState={setConfigState} /> : 
          <Container>
              <VerticalCarousel slides={widget}>
              </VerticalCarousel>
          </Container>
    }
        </>
    );
}

function generateConfig() {
    const widgetConfig = {
        [CategoryType.EXCERSIZE]: ['Run', 'Yoga', 'Gym'],
        [CategoryType.SOCIAL]: ['Call a friend', 'Join a club', 'Attend a meetup'],
        [CategoryType.FOOD]: ['Eat a salad', 'Try a new recipe', 'Have a smoothie'],
        [CategoryType.WATER]: ['Drink a glass of water', 'Have some herbal tea', 'Stay hydrated']
    };

    const widgetData: WidgetType = {
        config: widgetConfig,
        numberOfWidgets: 10
    };

    const config = generateWidgets(widgetData);

    console.log(config);

    return (config);
}
