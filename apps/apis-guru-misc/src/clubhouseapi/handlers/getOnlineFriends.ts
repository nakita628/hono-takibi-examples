import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetOnlineFriendsRoute } from '../routes'

const app = new OpenAPIHono()

export const getOnlineFriendsHandler = app.openapi(postGetOnlineFriendsRoute, (c) => {
  throw new Error('Not implemented')
})
