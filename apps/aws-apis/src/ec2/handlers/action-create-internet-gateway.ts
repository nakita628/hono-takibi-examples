import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateInternetGatewayRoute,
  postActionCreateInternetGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateInternetGatewayHandler = app
  .openapi(getActionCreateInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
