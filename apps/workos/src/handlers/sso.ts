import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSsoAuthorizeRoute,
  getSsoJwksClientIdRoute,
  getSsoLogoutRoute,
  getSsoProfileRoute,
  postSsoLogoutAuthorizeRoute,
  postSsoTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssoHandler = app
  .openapi(getSsoAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoJwksClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoLogoutAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsoProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSsoTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
