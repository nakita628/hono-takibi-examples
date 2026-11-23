import { OpenAPIHono } from '@hono/zod-openapi'
import { getKeyExecutivesRoute } from '../routes'

const app = new OpenAPIHono()

export const keyExecutivesHandler = app.openapi(getKeyExecutivesRoute, (c) => {
  throw new Error('Not implemented')
})
