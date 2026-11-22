import { OpenAPIHono } from '@hono/zod-openapi'
import { getHandpickedSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const handpickedHandler = app.openapi(getHandpickedSlugRoute, (c) => {
  throw new Error('Not implemented')
})
