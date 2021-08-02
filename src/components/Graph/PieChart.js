// @ts-nocheck
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { capitalizeFirstLetter, colorBorder } from '../../helpers';
import { CardComponet } from '../Card';
import { Title } from '../Card/style';
import { Content } from '../ListCard/style';

export const RenderPieChart = ({ data, color, name, value, active, setActive }) => {

  const handleClick = (data, index) => {
    setActive(index);
  };

  const setColor = (index) => {
    return index === active ? (color ? color : colorBorder(data[active].name)) : color ? '#0000004d' : colorBorder(data[index].name)
  }

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Tooltip />
          <Pie
            dataKey={value}
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            onClick={handleClick}
            label
          >
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={setColor(index)} key={`cell-${index}`} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Title color={setColor(active)} style={{ textAlign: 'center', fontSize: '40px' }}>
        {capitalizeFirstLetter(data[active].name.replace(/-/g, ' '))}
      </Title>
      <Content>
        {data[active].pokemons.map((item, index) => {
          console.log(index)
          return (<CardComponet key={index} url={item.pokemon.url} />);
        })}
      </Content>
    </>
  );
}
