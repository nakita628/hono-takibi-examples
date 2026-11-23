import { OpenAPIHono } from '@hono/zod-openapi'
import { optionsEchoRoute } from '../routes'

const app = new OpenAPIHono()

export const echoHandler = app.openapi(optionsEchoRoute, (c) => {
  throw new Error('Not implemented')
})
