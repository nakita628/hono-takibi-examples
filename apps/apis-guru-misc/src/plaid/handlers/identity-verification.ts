import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIdentityVerificationCreateRoute,
  postIdentityVerificationGetRoute,
  postIdentityVerificationListRoute,
  postIdentityVerificationRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityVerificationHandler = app
  .openapi(postIdentityVerificationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityVerificationRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
