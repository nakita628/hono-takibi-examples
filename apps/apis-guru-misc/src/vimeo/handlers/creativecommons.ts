import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreativecommonsRoute } from '../routes'

const app = new OpenAPIHono()

export const creativecommonsHandler = app.openapi(getCreativecommonsRoute, (c) => {
  throw new Error('Not implemented')
})
