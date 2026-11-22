import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3UsersUserIdBlogsBlogIdRoute } from '../routes'

const app = new OpenAPIHono()

export const blogUserInfosHandler = app.openapi(getV3UsersUserIdBlogsBlogIdRoute, (c) => {
  throw new Error('Not implemented')
})
