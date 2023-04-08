import SideBarComp from '@/components/Sections/SharedSections/SidebarComp/SideBarComp'
import '@/styles/globals.css'
import { Grid } from '@mui/material'

export default function App({ Component, pageProps }) {
  return <>
    <Grid container >

      <Grid item xs={1.7} >
        <SideBarComp />
      </Grid>
      <Grid item xs={10.3} >
        <Component {...pageProps} />

      </Grid>


    </Grid>

  </>
}

