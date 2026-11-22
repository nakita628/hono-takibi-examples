import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchJsonRoute, (c) => {
  throw new Error('Not implemented')
})
