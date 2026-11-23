import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateNatGatewayRoute, postActionCreateNatGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateNatGatewayHandler = app
  .openapi(getActionCreateNatGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateNatGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
