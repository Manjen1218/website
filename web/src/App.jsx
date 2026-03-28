import { useRouter }         from './hooks/useRouter.js'
import { useTheme }          from './hooks/useTheme.js'
import { useCursor }         from './hooks/useCursor.js'

import Cursor                from './components/Cursor.jsx'
import Navbar                from './components/Navbar.jsx'
import ProgressBar           from './components/ProgressBar.jsx'
import ViewTransition        from './components/ViewTransition.jsx'

import Home                  from './components/views/Home.jsx'
import About                 from './components/views/About.jsx'
import Education             from './components/views/Education.jsx'
import Skills                from './components/views/Skills.jsx'
import Goal                  from './components/views/Goal.jsx'
import Contact               from './components/views/Contact.jsx'

const VIEWS = {
  home:      Home,
  about:     About,
  education: Education,
  skills:    Skills,
  goal:      Goal,
  contact:   Contact,
}

export default function App() {
  const { route, navigate, leaving } = useRouter()
  const { theme, toggle }            = useTheme()
  useCursor()

  return (
    <>
      <Cursor />
      <ProgressBar />

      <Navbar
        route={route}
        navigate={navigate}
        theme={theme}
        toggleTheme={toggle}
      />

      <main style={{ paddingTop: 64 }}>
        {Object.entries(VIEWS).map(([key, View]) => (
          <ViewTransition
            key={key}
            active={route === key}
            leaving={leaving && route !== key}
          >
            <View navigate={navigate} />
          </ViewTransition>
        ))}
      </main>
    </>
  )
}
