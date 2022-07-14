import { MainPage } from '../../pages/main-page/main-page';

type MainPageProps = {
  offersCount: number;
};

function App({offersCount}:MainPageProps): JSX.Element {
  return <MainPage offersCount={offersCount}/>;
}

export default App;
