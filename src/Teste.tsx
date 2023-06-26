// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "styled-components"

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? "green" : "red")};
  font-size: ${(props) => props.fontSize || "16px"};
  margin-left: 12px;
`

const Teste = () => {
  return (
    <>
      <div>
        <Botao fontSize="20px" principal={true}>
          Clique aqui
        </Botao>
        <Botao principal={false}>cancelar</Botao>
        <Botao principal={true}>cancelar</Botao>
      </div>
    </>
  )
}
export default Teste
