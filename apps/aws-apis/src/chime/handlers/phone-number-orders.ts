import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumberOrdersPhoneNumberOrderIdRoute,
  getPhoneNumberOrdersRoute,
  postPhoneNumberOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberOrdersHandler = app
  .openapi(postPhoneNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumberOrdersPhoneNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
