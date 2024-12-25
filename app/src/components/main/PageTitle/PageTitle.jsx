import { useEffect } from 'react'

export function PageTitle(titlePage = "") {
    const title = titlePage ? `${titlePage} · Эвкалипт` : `Альтернативный магазин приложений Эвкалипт`
    useEffect(() => {
        document.title = title
    }, [])
}
