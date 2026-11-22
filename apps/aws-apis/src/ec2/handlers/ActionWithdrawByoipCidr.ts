import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionWithdrawByoipCidrRoute, postActionWithdrawByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionWithdrawByoipCidrHandler = app
  .openapi(getActionWithdrawByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionWithdrawByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
