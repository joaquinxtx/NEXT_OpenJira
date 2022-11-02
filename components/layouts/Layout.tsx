import { Box } from '@mui/material'
import Head from 'next/head'

import { NavBar, SideBar } from '../ui';

type Props = {
    children?: React.ReactNode
    title?:string
  };

export const Layout:React.FC<Props> = ({title = 'OpenJira-APP', children}) => {
  return (
    <Box sx={{

    }}>
        <Head>
            <title>{title} </title>
        </Head>

        <NavBar/>
        <SideBar/>
        <Box sx={{
            padding:'10px 20px'
        }} >
            { children }
        </Box>

    </Box>
  )
}
