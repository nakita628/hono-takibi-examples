import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionProvisionByoipCidrRoute, postActionProvisionByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionProvisionByoipCidrHandler = app
  .openapi(getActionProvisionByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionProvisionByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
