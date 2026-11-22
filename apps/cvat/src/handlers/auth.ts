import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAuthAccessTokensIdRoute,
  getApiAuthAccessTokensIdRoute,
  getApiAuthAccessTokensRoute,
  getApiAuthAccessTokensSelfRoute,
  getApiAuthRulesRoute,
  patchApiAuthAccessTokensIdRoute,
  postApiAuthAccessTokensRoute,
  postApiAuthLoginRoute,
  postApiAuthLogoutRoute,
  postApiAuthPasswordChangeRoute,
  postApiAuthPasswordResetConfirmRoute,
  postApiAuthPasswordResetRoute,
  postApiAuthRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getApiAuthAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAuthAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAuthAccessTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthAccessTokensSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthPasswordChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthPasswordResetConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAuthRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAuthRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
