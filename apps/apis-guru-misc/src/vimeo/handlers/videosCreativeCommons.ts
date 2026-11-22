import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreativecommonsRoute } from '../routes'

const app = new OpenAPIHono()

export const videosCreativeCommonsHandler = app.openapi(getCreativecommonsRoute, (c) => {
  throw new Error('Not implemented')
})
