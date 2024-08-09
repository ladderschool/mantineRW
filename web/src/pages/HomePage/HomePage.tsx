import { Metadata } from '@redwoodjs/web'

import Test from 'src/components/Test/Test'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>Testing mantine with storybook:</p>
      <Test />
    </>
  )
}

export default HomePage
