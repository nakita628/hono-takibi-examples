import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQuickConnectConnectRoute,
  getQuickConnectInitiateRoute,
  getQuickConnectStatusRoute,
  postQuickConnectActivateRoute,
  postQuickConnectAuthorizeRoute,
  postQuickConnectAvailableRoute,
  postQuickConnectDeauthorizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quickConnectHandler = app
  .openapi(postQuickConnectActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectDeauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
