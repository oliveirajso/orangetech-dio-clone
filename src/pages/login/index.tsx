import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { api } from "../../services/api";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";
import { IFormData } from "./types";
const Login = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("email não é valido")
        .required("Email é obrigatório"),
      password: yup
        .string()
        .min(3, "No minimo 3 caracteres")
        .required("Senha é obrigatória"),
    })
    .required();

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("email ou senha inválido");
      }
    } catch (error) {
      alert("Houve um erro, tente novamente.");
    }
  };

  const handleNewAccount = () => {
    navigate("/cadastrar");
  };
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="email"
                placeholder="E-mail"
                errorMessage={errors?.email?.message}
                leftIcon={<MdEmail />}
              />
              <Input
                control={control}
                name="password"
                placeholder="Password"
                errorMessage={errors?.password?.message}
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText> Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleNewAccount}> Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
