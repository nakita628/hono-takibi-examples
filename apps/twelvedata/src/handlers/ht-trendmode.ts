import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtTrendmodeRoute } from '../routes'

const app = new OpenAPIHono()

export const htTrendmodeHandler = app.openapi(getHtTrendmodeRoute, (c) => {
  throw new Error('Not implemented')
})
