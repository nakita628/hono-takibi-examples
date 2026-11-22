import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RewardMineUseRewardRoute } from '../routes'

const app = new OpenAPIHono()

export const rewardMineUseRewardHandler = app.openapi(postV1RewardMineUseRewardRoute, (c) => {
  throw new Error('Not implemented')
})
