import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descriao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Gabrial Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        gabrielcastro77
      </Paragrafo>
      <Descriao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descriao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
