import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizationRoute,
  postAuthorizationDeviceCodeRoute,
  postAuthorizationDeviceRoute,
  postAuthorizationProfileRoute,
  postAuthorizationRefreshRoute,
  postAuthorizationRoute,
  postAuthorizationSsoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationHandler = app
  .openapi(deleteAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationDeviceCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
