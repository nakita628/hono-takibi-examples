import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmulationOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const emulationOutputHandler = app.openapi(postEmulationOutputRoute, (c) => {
  throw new Error('Not implemented')
})
