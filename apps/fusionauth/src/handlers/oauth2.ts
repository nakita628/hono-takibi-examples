import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth2DeviceValidateRoute,
  getOauth2UserinfoRoute,
  postOauth2DeviceApproveRoute,
  postOauth2DeviceAuthorizeRoute,
  postOauth2DeviceUserCodeRoute,
  postOauth2IntrospectRoute,
  postOauth2TokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(postOauth2DeviceApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2DeviceUserCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2DeviceValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2DeviceAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2IntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2UserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
