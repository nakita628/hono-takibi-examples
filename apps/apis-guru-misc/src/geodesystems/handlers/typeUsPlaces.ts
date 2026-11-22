import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeUsPlacesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeUsPlacesHandler = app.openapi(getRepositorySearchTypeUsPlacesRoute, (c) => {
  throw new Error('Not implemented')
})
