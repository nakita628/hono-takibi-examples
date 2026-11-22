import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMobilePhoneNumbersIdMessagingRoute,
  getMobilePhoneNumbersMessagingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileNumberSettingsHandler = app
  .openapi(getMobilePhoneNumbersMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMobilePhoneNumbersIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
