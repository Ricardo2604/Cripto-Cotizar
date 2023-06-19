import styled from "@emotion/styled"

const Resultadocss = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 25px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;

`

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <Resultadocss>
      <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="imagen cripto" />  
      <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>El Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>El Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Resultadocss>
  )
}

export default Resultado
