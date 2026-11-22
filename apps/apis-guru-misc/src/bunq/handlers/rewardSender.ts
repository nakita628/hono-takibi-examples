import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDRewardSenderItemIdRoute, getUserUserIDRewardSenderRoute } from '../routes'

const app = new OpenAPIHono()

export const rewardSenderHandler = app
  .openapi(getUserUserIDRewardSenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDRewardSenderItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
