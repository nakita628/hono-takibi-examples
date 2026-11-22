import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionPreVerifiedPhoneNumberIDRoute,
  getVersionBusinessIDPreverifiedNumbersRoute,
  getVersionPreVerifiedPhoneNumberIDRoute,
  postVersionPreVerifiedPhoneNumberIDRequestCodeRoute,
  postVersionPreVerifiedPhoneNumberIDVerifyCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preVerifiedPhoneNumbersHandler = app
  .openapi(getVersionBusinessIDPreverifiedNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionPreVerifiedPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionPreVerifiedPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPreVerifiedPhoneNumberIDRequestCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPreVerifiedPhoneNumberIDVerifyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
