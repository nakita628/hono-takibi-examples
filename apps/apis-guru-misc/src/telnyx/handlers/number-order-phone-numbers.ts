import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  getNumberOrderPhoneNumbersRoute,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numberOrderPhoneNumbersHandler = app
  .openapi(getNumberOrderPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
