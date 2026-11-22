import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDRewardRecipientItemIdRoute,
  getUserUserIDRewardRecipientRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rewardRecipientHandler = app
  .openapi(getUserUserIDRewardRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDRewardRecipientItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
