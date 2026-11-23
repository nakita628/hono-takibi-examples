import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersPhoneNumberIdRoute,
  getPhoneNumbersRoute,
  postPhoneNumbersPhoneNumberIdOperationRestoreRoute,
  postPhoneNumbersPhoneNumberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app
  .openapi(deletePhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersPhoneNumberIdOperationRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
