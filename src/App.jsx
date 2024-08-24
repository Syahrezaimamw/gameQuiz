import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './data'

function App() {
  const [benar, setBenar] = useState(0)
  const [count, setCount] = useState(1)
  const [dataBaru, setDataBaru] = useState(
    data.filter((a) => {
      if (a.id == count) {
        return a
      }

    }))

  function handlePilihJawaban(status, c) {
    setCount(count + 1)
    if (status == true) {
      setBenar(benar + 1)
    }
    setDataBaru(data.filter((a) => {
      if (a.id == count + 1) {
        return a
      }

    }))

  }
  return (
    <div className='w-[100vw] h-[100vh]   flex justify-center items-center'>

      <div className='min-h-[200px] w-[300px] p-3 border-2 border-sky-400 rounded-lg'>
        {dataBaru.map((dt, n) => (
          // console.log(n)

          dataBaru.length >= 0 ?
            <div key={n}>

              <div className='border-2 soal border-sky-200 px-2 h-[100px]'>
                {dt.soal}
              </div>
              <ul className='flex flex-col gap-3 mt-4'>
                {dt.jawaban.map((jw, i) => (

                  <li key={i} onClick={() => handlePilihJawaban(jw.st, i + 1)} className='flex items-center gap-2 px-2 py-1 border-2 cursor-pointer active:border-red-900' ><span className='h-[25px] w-[25px] rounded-full bg-red-400 flex items-center justify-center'>{jw.code}</span>
                    {jw.list}</li>
                ))}

              </ul>
            </div>
            : <div key={n}>ss</div>

        ))}

        {dataBaru.length == 0 ? <div className='flex flex-col items-center justify-center w-full h-100'>
          <div>
            <div>

          {Math.round(benar / data.length * 100)}/100</div>
            </div>

            <div className='flex items-center gap-3'>

            <div>benar : {benar}</div>
            <div>Dari : {data.length}</div>
            </div>
          </div>
          : <div></div>
        }
      </div>
    </div>
  )
}

export default App
