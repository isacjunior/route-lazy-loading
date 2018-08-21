import React from 'react'
import Loadable from 'react-loadable'

const LoadingComponent = () => <div>Loading...</div>

const LazyImport = opts => Loadable({
  ...opts,
  loading: LoadingComponent,
})

export default LazyImport
