import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsEmailSmsEmailAddressIdRoute,
  getSmsEmailSmsEmailAddressIdRoute,
  getSmsEmailSmsRoute,
  postSmsEmailSmsRoute,
  putSmsEmailSmsEmailAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailToSMSAllowedAddressHandler = app
  .openapi(getSmsEmailSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsEmailSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsEmailSmsEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsEmailSmsEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsEmailSmsEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
