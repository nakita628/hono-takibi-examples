import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtPhasorRoute } from '../routes'

const app = new OpenAPIHono()

export const htPhasorHandler = app.openapi(getHtPhasorRoute, (c) => {
  throw new Error('Not implemented')
})
