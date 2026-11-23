import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublickeyRoute } from '../routes'

const app = new OpenAPIHono()

export const publickeyHandler = app.openapi(getPublickeyRoute, (c) => {
  throw new Error('Not implemented')
})
