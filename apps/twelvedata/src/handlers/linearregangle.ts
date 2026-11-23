import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinearregangleRoute } from '../routes'

const app = new OpenAPIHono()

export const linearregangleHandler = app.openapi(getLinearregangleRoute, (c) => {
  throw new Error('Not implemented')
})
