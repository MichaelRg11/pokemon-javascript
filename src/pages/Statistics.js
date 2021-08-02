import { useState } from "react";
import { Loading } from "../assets/style/style";
import { RenderBarChart } from "../components/Graph/BarChart";
import { RenderPieChart } from "../components/Graph/PieChart";
import { useFetchType } from "../hooks/useFetchType";

export const Statistics = () => {
  const { data, loading } = useFetchType()
  const [active, setActive] = useState(1)
  if (loading) return <Loading />

  return (
    <div style={{ maxWidth: '1400px', margin: '20px auto auto auto' }}>
      <RenderBarChart data={data} name='name' value='value' pokemon={false} active={active} setActive={setActive} />
      <RenderPieChart data={data} name='name' value='value' active={active} setActive={setActive} />
    </div>
  )
}
