import { OpenAPIHono } from '@hono/zod-openapi'
import { getPadUsersCountRoute, postPadUsersCountRoute } from '../routes'

const app = new OpenAPIHono()

export const padUsersCountHandler = app
  .openapi(getPadUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPadUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
