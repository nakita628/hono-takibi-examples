import { OpenAPIHono } from '@hono/zod-openapi'
import { getAntichessRoute } from '../routes'

const app = new OpenAPIHono()

export const antichessHandler = app.openapi(getAntichessRoute, (c) => {
  throw new Error('Not implemented')
})
