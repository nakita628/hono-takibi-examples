import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3UsersUserIdBlogsBlogIdPostsPostIdRoute,
  getV3UsersUserIdBlogsBlogIdPostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postUserInfosHandler = app
  .openapi(getV3UsersUserIdBlogsBlogIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3UsersUserIdBlogsBlogIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
