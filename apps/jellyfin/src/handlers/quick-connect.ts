import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuickConnectConnectRoute,
  getQuickConnectEnabledRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quickConnectHandler = app
  .openapi(postQuickConnectAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })
