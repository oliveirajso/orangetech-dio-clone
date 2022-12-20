import { MdEmail, MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./style";


const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/feed");
  }
  return (<>
    <Header />
    <Container>
      <Column>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias
          e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubTitleLogin>Faça seu login</SubTitleLogin>
          <form>
            <Input placeholder="Email" leftIcon={<MdEmail />} />
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" onClick={handleClick} type="botton" />
          </form>
          <Row>
            <EsqueciText> Esqueci minha senha</EsqueciText>
            <CriarText> Criar conta</CriarText>
          </Row>
        </Wrapper>

      </Column>
    </Container>
  </>
  )
}

export { Login };
