import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVerifyRoute,
  postLogoutRoute,
  postMagiclinkRoute,
  postOtpRoute,
  postRecoverRoute,
  postResendRoute,
  postSignupRoute,
  postTokenRoute,
  postVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMagiclinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
