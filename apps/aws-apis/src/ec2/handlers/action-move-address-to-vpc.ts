import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionMoveAddressToVpcRoute, postActionMoveAddressToVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const actionMoveAddressToVpcHandler = app
  .openapi(getActionMoveAddressToVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionMoveAddressToVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
