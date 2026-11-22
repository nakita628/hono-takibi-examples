import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SecurityCsrfTokenIndexRoute,
  postApiV1SecurityGuestTokenIndexRoute,
  postApiV1SecurityLoginRoute,
  postApiV1SecurityPasswordRecoveryIndexRoute,
  postApiV1SecurityPasswordRecoveryResetIndexRoute,
  postApiV1SecurityRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityHandler = app
  .openapi(getApiV1SecurityCsrfTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityGuestTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityPasswordRecoveryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityPasswordRecoveryResetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SecurityRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
