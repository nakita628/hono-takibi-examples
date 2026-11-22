import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PayoutWithdrawalsIdVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const payoutsAPIHandler = app.openapi(postV1PayoutWithdrawalsIdVerifyRoute, (c) => {
  throw new Error('Not implemented')
})
