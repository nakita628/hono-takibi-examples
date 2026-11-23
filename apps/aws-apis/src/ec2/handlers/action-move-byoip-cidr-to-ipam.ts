import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionMoveByoipCidrToIpamRoute, postActionMoveByoipCidrToIpamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionMoveByoipCidrToIpamHandler = app
  .openapi(getActionMoveByoipCidrToIpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionMoveByoipCidrToIpamRoute, (c) => {
    throw new Error('Not implemented')
  })
