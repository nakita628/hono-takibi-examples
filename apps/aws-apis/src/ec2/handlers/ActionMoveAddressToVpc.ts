import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionMoveAddressToVpcRoute, postActionMoveAddressToVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionMoveAddressToVpcHandler = app
  .openapi(getActionMoveAddressToVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionMoveAddressToVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
