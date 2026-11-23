import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimestagsRoute } from '../routes'

const app = new OpenAPIHono()

export const timestagsHandler = app.openapi(getTimestagsRoute, (c) => {
  throw new Error('Not implemented')
})
