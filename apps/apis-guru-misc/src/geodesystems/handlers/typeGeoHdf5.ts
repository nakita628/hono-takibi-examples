import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoHdf5Route } from '../routes'

const app = new OpenAPIHono()

export const typeGeoHdf5Handler = app.openapi(getRepositorySearchTypeGeoHdf5Route, (c) => {
  throw new Error('Not implemented')
})
