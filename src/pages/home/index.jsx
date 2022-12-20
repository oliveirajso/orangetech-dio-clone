import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./style";
import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }
  return (<>
    <Header />
    <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente
            <br />
          </TitleHighlight>
          o seu fututo global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
          desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title={"Começar agora"} variant="secondary" onClick={() => handleClick()} />
      </div>
      <div>
        <img src={bannerImage} alt="Imagem Principal" />
      </div>
    </Container>
  </>
  )
}

export { Home };
