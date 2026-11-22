import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app.openapi(getV1NameRoute, (c) => {
  throw new Error('Not implemented')
})
