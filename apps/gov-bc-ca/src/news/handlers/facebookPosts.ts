import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFacebookPostsByUriRoute } from '../routes'

const app = new OpenAPIHono()

export const facebookPostsHandler = app.openapi(getApiFacebookPostsByUriRoute, (c) => {
  throw new Error('Not implemented')
})
