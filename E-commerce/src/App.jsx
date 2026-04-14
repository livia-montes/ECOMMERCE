import './App.css'
import Topo from './components/Topo'
import Capa from './components/Capa'
import Produtos from './components/Produtos'

function App() {

  return (
    <div>
      <header>
        <Topo />
      </header>

      <main>
        <Capa/>
        <section>
          <Produtos/>
        </section>
      </main>
    </div>
  )
}

export default App
