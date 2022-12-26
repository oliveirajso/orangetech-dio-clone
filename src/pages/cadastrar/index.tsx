import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { api } from "../../services/api";
import {
  Column,
  Container,
  JatemLogin,
  PoliticasText,
  Row,
  SubTitleCadastrar,
  Title,
  TitleCadastrar,
  Wrapper,
} from "./style";
import { IFormData } from "./types";
const Cadastrar = () => {
  const schema = yup
    .object({
      nome: yup
        .string()
        .min(3, "No minimo 3 caracteres")
        .required("Nome é obrigatório"),
      email: yup
        .string()
        .email("email não é valido")
        .required("E-mail é obrigatório"),
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
      const { data } = await api.post(`users`, {
        nome: formData.nome,
        email: formData.email,
        password: formData.password,
      });

      if (data.id !== 0) {
        console.log(
          "Cadastro realizado com sucesso!<br> Você será redirecionado."
        );
        navigate("/feed");
      } else {
        alert("email ou senha inválido");
      }
    } catch (error) {
      console.log(error);
      alert("Houve um erro, tente novamente.");
    }
  };
  const handleLoginPage = () => {
    navigate("/login");
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
            <TitleCadastrar>Comece agora grátis</TitleCadastrar>
            <SubTitleCadastrar>Crie sua conta.</SubTitleCadastrar>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="nome"
                placeholder="Nome Completo"
                errorMessage={errors?.nome?.message}
                leftIcon={<MdPerson />}
              />
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
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <PoliticasText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </PoliticasText>
            </Row>
            <Row>
              <JatemLogin>
                {" "}
                Já tenho conta:{" "}
                <span onClick={handleLoginPage}>Fazer login</span>
              </JatemLogin>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastrar };
