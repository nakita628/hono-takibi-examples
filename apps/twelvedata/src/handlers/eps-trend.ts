import { OpenAPIHono } from '@hono/zod-openapi'
import { getEpsTrendRoute } from '../routes'

const app = new OpenAPIHono()

export const epsTrendHandler = app.openapi(getEpsTrendRoute, (c) => {
  throw new Error('Not implemented')
})
