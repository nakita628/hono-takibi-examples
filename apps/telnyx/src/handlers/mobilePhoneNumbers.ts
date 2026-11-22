import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMobilePhoneNumbersIdRoute,
  getMobilePhoneNumbersRoute,
  patchMobilePhoneNumbersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobilePhoneNumbersHandler = app
  .openapi(getMobilePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMobilePhoneNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMobilePhoneNumbersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
