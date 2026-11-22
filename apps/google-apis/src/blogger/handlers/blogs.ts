import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3BlogsBlogIdRoute, getV3BlogsByurlRoute, getV3UsersUserIdBlogsRoute } from '../routes'

const app = new OpenAPIHono()

export const blogsHandler = app
  .openapi(getV3BlogsByurlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3BlogsBlogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdBlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
