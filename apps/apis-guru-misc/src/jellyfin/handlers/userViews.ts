import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserIdGroupingOptionsRoute, getUsersUserIdViewsRoute } from '../routes'

const app = new OpenAPIHono()

export const userViewsHandler = app
  .openapi(getUsersUserIdGroupingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
