import { OpenAPIHono } from '@hono/zod-openapi'
import { getClicksRoute } from '../routes'

const app = new OpenAPIHono()

export const clickHandler = app.openapi(getClicksRoute, (c) => {
  throw new Error('Not implemented')
})
