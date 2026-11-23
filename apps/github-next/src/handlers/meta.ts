import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetaRoute } from '../routes'

const app = new OpenAPIHono()

export const metaHandler = app.openapi(getMetaRoute, (c) => {
  throw new Error('Not implemented')
})
