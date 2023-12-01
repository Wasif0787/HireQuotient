import { RecoilRoot } from "recoil"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Table from "./Components/Table"

function App() {
  return (
    <RecoilRoot>
      <div className="m-5">
        <Header />
        <Table />
        <Footer />
      </div>
    </RecoilRoot>
  )
}

export default App
