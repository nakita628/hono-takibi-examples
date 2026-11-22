import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeFeedRoute, getUsersUserIdFeedRoute } from '../routes'

const app = new OpenAPIHono()

export const usersFeedsHandler = app
  .openapi(getMeFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
