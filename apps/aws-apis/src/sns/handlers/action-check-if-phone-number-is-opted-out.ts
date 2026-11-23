import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCheckIfPhoneNumberIsOptedOutRoute,
  postActionCheckIfPhoneNumberIsOptedOutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCheckIfPhoneNumberIsOptedOutHandler = app
  .openapi(getActionCheckIfPhoneNumberIsOptedOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCheckIfPhoneNumberIsOptedOutRoute, (c) => {
    throw new Error('Not implemented')
  })
