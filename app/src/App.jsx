import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { RoutesMain } from './routes/RoutesMain'
import { AppTheme } from './components/main/AppTheme/AppTheme'

function App() {
    return (
        <AppTheme>
            <BrowserRouter>
                <Routes>
                    {RoutesMain}
                    <Route path="*" element={<>страница не найдена</>} />
                </Routes>
            </BrowserRouter>
        </AppTheme>
    )
}

export default App
