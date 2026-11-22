import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCataloglinkRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCataloglinkHandler = app.openapi(getRepositorySearchTypeCataloglinkRoute, (c) => {
  throw new Error('Not implemented')
})
