import { OpenAPIHono } from '@hono/zod-openapi'
import { getEpsRevisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const epsRevisionsHandler = app.openapi(getEpsRevisionsRoute, (c) => {
  throw new Error('Not implemented')
})
