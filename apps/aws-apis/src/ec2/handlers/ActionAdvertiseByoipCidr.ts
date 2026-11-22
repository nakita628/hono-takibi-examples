import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAdvertiseByoipCidrRoute, postActionAdvertiseByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAdvertiseByoipCidrHandler = app
  .openapi(getActionAdvertiseByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAdvertiseByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
