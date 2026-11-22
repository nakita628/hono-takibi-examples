import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionProfilePhoneNumberRoute,
  postApiVersionProfilePhoneNumberRoute,
  postApiVersionProfilePhoneNumberVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberHandler = app
  .openapi(postApiVersionProfilePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfilePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfilePhoneNumberVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
