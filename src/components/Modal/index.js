import { Button, Img, Title } from '../Card/style'
import { RenderBarChart } from '../Graph/BarChart'
import { ModalContainer, ModalContent, ModalBody, Close } from './style'
import useFetch from '../../hooks/useFetch';
import { Loading } from '../../assets/style/style';
import { capitalizeFirstLetter } from '../../helpers';
import { useState } from 'react';

export default function Modal({ show = false, setShowModal, name, color, image, stats, location }) {
  const { data, loading, error } = useFetch(location)
  const [active, setActive] = useState(1)

  if (loading) return <ModalContainer show={loading}><Loading /></ModalContainer>

  if (error) return <Loading />

  return (
    <ModalContainer show={show} >
      <ModalContent >
        <ModalBody>
          <Close onClick={() => setShowModal(false)}>X</Close>
          <Title color={color} style={{ textAlign: 'center', fontSize: '40px', marginTop: '20px' }}>{name}</Title>
          <Img src={image} alt={image} style={{ height: '150px', display: 'flex', margin: 'auto', marginBottom: 10 }} />
          <RenderBarChart data={stats} color={color} name='name' value='value' active={active} setActive={setActive} />
          <Title color={color} style={{ textAlign: 'center', fontSize: '30px' }}>Location</Title>
          <div style={{ textAlign: 'center' }}>
            {data?.length !== 0 ?
              data?.map((item, index) => {
                return <Button color={color} key={index}>{capitalizeFirstLetter(item.location_area.name.replace(/-/g, ' '))}</Button>
              })
              :
              <Title color={color}>Your location was not found</Title>
            }
          </div>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  )
}

