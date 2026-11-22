import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTerminalsRoute } from '../routes'

const app = new OpenAPIHono()

export const terminalsHandler = app.openapi(getApiTerminalsRoute, (c) => {
  throw new Error('Not implemented')
})
