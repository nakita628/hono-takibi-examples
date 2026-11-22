import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1OtpsAuthenticateRoute,
  postV1OtpsEmailLoginOrCreateRoute,
  postV1OtpsEmailSendRoute,
  postV1OtpsSmsLoginOrCreateRoute,
  postV1OtpsSmsSendRoute,
  postV1OtpsWhatsappLoginOrCreateRoute,
  postV1OtpsWhatsappSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otpHandler = app
  .openapi(postV1OtpsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsSmsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsSmsLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsWhatsappSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsWhatsappLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OtpsEmailLoginOrCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
