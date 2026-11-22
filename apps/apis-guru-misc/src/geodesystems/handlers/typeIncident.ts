import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeIncidentRoute } from '../routes'

const app = new OpenAPIHono()

export const typeIncidentHandler = app.openapi(getRepositorySearchTypeIncidentRoute, (c) => {
  throw new Error('Not implemented')
})
