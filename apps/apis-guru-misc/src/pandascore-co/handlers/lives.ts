import { OpenAPIHono } from '@hono/zod-openapi'
import { getLivesRoute } from '../routes'

const app = new OpenAPIHono()

export const livesHandler = app.openapi(getLivesRoute, (c) => {
  throw new Error('Not implemented')
})
