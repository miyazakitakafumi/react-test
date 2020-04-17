import React from 'react'
import './App.css'

const App = () => {
  // ダウンロードリンクレンダー
  const renderDLlinks = (fileId, fileKeys) => {
    const links = getLinks(fileId, fileKeys)
    if (links === null) return null

    return links.map((l, key) => {
      return (
        <>
          <a key={key} href={l}>
            ファイル{key + 1}をダウンロード
          </a>
          <br />
        </>
      )
    })
  }

  // ダウンロードリンクコピー
  const copyLinkBtn = (fileId, fileKeys) => {
    const links = getLinks(fileId, fileKeys)

    if (links === null) return

    return <button onClick={() => console.log(links.join('\n'))}>copy</button>
  }

  const getLinks = (fileId, fileKeys) => {
    const getUrl = (fileId, fileKey = '') => {
      return `/download/${fileId}/${fileKey}`
    }

    if (fileKeys === undefined) return [getUrl(fileId)]
    if (fileKeys.length === 0) return null
    if (fileKeys.length === 1) return [getUrl(fileId, fileKeys)]
    if (fileKeys.length > 1) {
      return fileKeys.map(k => {
        return getUrl(fileId, k)
      })
    }
  }

  const fileId = 100
  const fileKeys = undefined

  return (
    <div>
      {renderDLlinks(fileId, fileKeys)}
      {copyLinkBtn(fileId, fileKeys)}
    </div>
  )
}

export default App
