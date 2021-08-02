import { Card, Title } from '../Card/style'

export const CardError = () => {
  return (
    <Card color='#e75353' border='#2b3710'>
      <Title style={{ textAlign: 'center' }} color='#fff'>Ha ocurrido un error con la carga🚧</Title>
    </Card>
  )
}
