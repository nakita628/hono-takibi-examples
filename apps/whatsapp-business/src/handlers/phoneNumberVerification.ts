import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postVersionPhoneNumberIDRequestCodeRoute,
  postVersionPhoneNumberIDVerifyCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberVerificationHandler = app
  .openapi(postVersionPhoneNumberIDRequestCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDVerifyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
