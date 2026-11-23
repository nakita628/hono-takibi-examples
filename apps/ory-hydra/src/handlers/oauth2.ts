import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauth2RegisterIdRoute,
  getOauth2AuthRoute,
  getOauth2DeviceVerifyRoute,
  getOauth2RegisterIdRoute,
  getOauth2SessionsLogoutRoute,
  postOauth2DeviceAuthRoute,
  postOauth2RegisterRoute,
  postOauth2RevokeRoute,
  postOauth2TokenRoute,
  putOauth2RegisterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(getOauth2AuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2DeviceAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2DeviceVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2RegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2RegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2RegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOauth2RegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2RevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2SessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
