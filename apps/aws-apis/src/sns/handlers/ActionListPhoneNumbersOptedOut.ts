import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListPhoneNumbersOptedOutRoute,
  postActionListPhoneNumbersOptedOutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListPhoneNumbersOptedOutHandler = app
  .openapi(getActionListPhoneNumbersOptedOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPhoneNumbersOptedOutRoute, (c) => {
    throw new Error('Not implemented')
  })
