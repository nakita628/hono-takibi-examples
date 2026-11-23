import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  patchPhoneNumbersPhoneNumberIdRoute,
  postPhoneNumbersPhoneNumberIdAttemptVerificationRoute,
  postPhoneNumbersPhoneNumberIdPrepareVerificationRoute,
  postPhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app
  .openapi(postPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersPhoneNumberIdPrepareVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersPhoneNumberIdAttemptVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
