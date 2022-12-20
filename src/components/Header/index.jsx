import React from 'react';
import { Button } from '../Button';
import UserPicture from '../UserPicture';
import logo from './../../assets/logo-dio.png';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row, Wrapper
} from './styles';
import { useNavigate } from 'react-router-dom';

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" onClick={handleClick} />
          {autenticado ? <>
            <BuscarInputContainer>
              <Input placeholder='Buscar...' />
            </BuscarInputContainer>
            <Menu>Live Code </Menu>
            <Menu>Global</Menu> 
          </> : null}

        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/81790374?v=4" alt="Jefferson da Silva Oliveira" />
          ) :
            (
              <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            )}

        </Row>
      </Container>
    </Wrapper>
  )
}
export { Header };
