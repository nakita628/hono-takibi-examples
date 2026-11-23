import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchFormatRoute, (c) => {
  throw new Error('Not implemented')
})
