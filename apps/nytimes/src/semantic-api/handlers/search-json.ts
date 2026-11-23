import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const searchJsonHandler = app.openapi(getSearchJsonRoute, (c) => {
  throw new Error('Not implemented')
})
