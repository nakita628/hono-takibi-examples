import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBioOmeTiffRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBioOmeTiffHandler = app.openapi(getRepositorySearchTypeBioOmeTiffRoute, (c) => {
  throw new Error('Not implemented')
})
