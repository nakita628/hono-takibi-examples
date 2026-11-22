import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteInternetGatewayRoute,
  postActionDeleteInternetGatewayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteInternetGatewayHandler = app
  .openapi(getActionDeleteInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteInternetGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
