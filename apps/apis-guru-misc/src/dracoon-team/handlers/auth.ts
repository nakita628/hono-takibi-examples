import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4AuthOpenidLoginRoute,
  getV4AuthPingRoute,
  getV4AuthResetPasswordTokenRoute,
  postV4AuthLoginRoute,
  postV4AuthOpenidLoginRoute,
  postV4AuthRecoverUsernameRoute,
  postV4AuthResetPasswordRoute,
  putV4AuthResetPasswordTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postV4AuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AuthOpenidLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AuthOpenidLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AuthPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AuthRecoverUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4AuthResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AuthResetPasswordTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4AuthResetPasswordTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
