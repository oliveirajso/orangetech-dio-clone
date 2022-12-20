import Card from "../../components/Card";
import { Header } from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./style";
const Feed = () => {
  return (<>
    <Header autenticado={true} />
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighlight># Ranquing 5 top da Semana</TitleHighlight>
        <UserInfo nome="Jefferson" percentual={80} image="https://avatars.githubusercontent.com/u/81790374?v=4" />
        <UserInfo nome="Jefferson" percentual={35} image="https://avatars.githubusercontent.com/u/81790374?v=4" />
        <UserInfo nome="Jefferson" percentual={70} image="https://avatars.githubusercontent.com/u/81790374?v=4" />
        <UserInfo nome="Jefferson" percentual={53} image="https://avatars.githubusercontent.com/u/81790374?v=4" />
        <UserInfo nome="Jefferson" percentual={90} image="https://avatars.githubusercontent.com/u/81790374?v=4" />
      </Column>
    </Container>
  </>
  )
}

export { Feed };
