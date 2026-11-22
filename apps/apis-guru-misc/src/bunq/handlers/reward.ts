import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDRewardItemIdRoute, getUserUserIDRewardRoute } from '../routes'

const app = new OpenAPIHono()

export const rewardHandler = app
  .openapi(getUserUserIDRewardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDRewardItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
