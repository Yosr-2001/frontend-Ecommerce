import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ListArticles from "./components/articles/ListArticles"
import InsertArticle from "./components/articles/InsertArticle"
import EditArticles from "./components/articles/EditArticles"
import ViewArticles from "./components/articles/ViewArticles"
import ListCategories from "./components/categories/ListCategories"
import ViewCategories from "./components/categories/ViewCategories"
import InsertCategorie from "./components/categories/InsertCategorie"
import EditCategories from "./components/categories/EditCategories"
import ViewScategorie from "./components/scategories/ViewScategorie"
import EditScategorie from "./components/scategories/EditScategorie"
import InsertScategorie from "./components/scategories/InsertScategorie"
import ListScategorie from "./components/scategories/ListScategorie"
import Menu from "./components/menu"

function App() {

  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<ListArticles />}></Route>
          <Route path="/articles/add" element={<InsertArticle />}></Route>
          <Route path="/articles/edit/:id" element={<EditArticles />}></Route>
          <Route path="/articles/view/:id" element={<ViewArticles />}></Route>

          <Route path="/categories" element={<ListCategories />}></Route>
          <Route path="/categories/add" element={<InsertCategorie />}></Route>
          <Route path="/categories/edit/:id" element={<EditCategories />}></Route>
          <Route path="/categories/view/:id" element={<ViewCategories />}></Route>

          <Route path="/scategories" element={<ListScategorie />}></Route>
          <Route path="/scategories/add" element={<InsertScategorie />}></Route>
          <Route path="/scategories/edit/:id" element={<EditScategorie />}></Route>
          <Route path="/scategories/view/:id" element={<ViewScategorie />}></Route>


        </Routes>
      </Router>
      <h1>Bienvenu dans notre site web!</h1>
    </>
  )
}

export default App
