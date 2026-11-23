import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisableRoute } from '../routes'

const app = new OpenAPIHono()

export const disableHandler = app.openapi(postDisableRoute, (c) => {
  throw new Error('Not implemented')
})
