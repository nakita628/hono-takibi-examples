import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAttachInternetGatewayRoute,
  postActionAttachInternetGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAttachInternetGatewayHandler = app
  .openapi(getActionAttachInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
