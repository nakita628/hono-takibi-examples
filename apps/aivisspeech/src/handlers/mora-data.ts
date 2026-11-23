import { OpenAPIHono } from '@hono/zod-openapi'
import { postMoraDataRoute } from '../routes'

const app = new OpenAPIHono()

export const moraDataHandler = app.openapi(postMoraDataRoute, (c) => {
  throw new Error('Not implemented')
})
