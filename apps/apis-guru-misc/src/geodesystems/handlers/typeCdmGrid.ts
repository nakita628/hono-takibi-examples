import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCdmGridRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCdmGridHandler = app.openapi(getRepositorySearchTypeCdmGridRoute, (c) => {
  throw new Error('Not implemented')
})
