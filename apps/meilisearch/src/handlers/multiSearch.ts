import { OpenAPIHono } from '@hono/zod-openapi'
import { postMultiSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const multiSearchHandler = app.openapi(postMultiSearchRoute, (c) => {
  throw new Error('Not implemented')
})
