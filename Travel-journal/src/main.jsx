import { createRoot } from 'react-dom/client'
import { HeaderFile } from '../components/headerFile.jsx'
import { MainBody } from '../components/mainBody.jsx'
import { travelData } from '../Data/data.js'

const root = createRoot(document.getElementById('root'))

const data = travelData.map((item) => {
  return <MainBody 
    key={item.id}
    {...item}
  />
})

root.render(
  <>
    <HeaderFile />
    {data}
  </> 
) 