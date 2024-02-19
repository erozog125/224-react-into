import { Header } from '../../Layouts/Header/Header'



import { Main } from '../../Layouts/Main/Main'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { DescriptionProfile } from '../../DescriptionProfile/DescriptionProfile'
import { Card } from '../../Card/Card'
import { myProjects } from '../../../app/projects' 


export const Home = () => {
  return (
    <>    
    <Main>
      <PictureProfile />
      <DescriptionProfile />      
    </Main>    
    <Main styleMain={'style-main'}>
      <h2>Mis proyectos</h2>
      <div className="container-cards">
           {
            myProjects.map( (card,idx) => <Card
              key={card.title+idx}
              img = {card.img}
              title = {card.title}
              description = {card.description}
             /> )
           }
      </div>
    </Main>
    </>
  )
}
