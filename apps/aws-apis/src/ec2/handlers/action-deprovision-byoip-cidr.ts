import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeprovisionByoipCidrRoute, postActionDeprovisionByoipCidrRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeprovisionByoipCidrHandler = app
  .openapi(getActionDeprovisionByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeprovisionByoipCidrRoute, (c) => {
    throw new Error('Not implemented')
  })
