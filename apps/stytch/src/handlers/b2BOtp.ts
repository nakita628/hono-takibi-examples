import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bOtpsEmailAuthenticateRoute,
  postV1B2bOtpsEmailLoginOrSignupRoute,
  postV1B2bOtpsSmsAuthenticateRoute,
  postV1B2bOtpsSmsSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BOtpHandler = app
  .openapi(postV1B2bOtpsSmsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsSmsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailLoginOrSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
