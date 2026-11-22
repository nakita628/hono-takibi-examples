import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionWABAIDPhoneNumbersRoute,
  postVersionPhoneNumberIDDeregisterRoute,
  postVersionWABAIDPhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberManagementHandler = app
  .openapi(postVersionPhoneNumberIDDeregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
