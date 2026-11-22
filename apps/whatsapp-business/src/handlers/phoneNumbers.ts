import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionPhoneNumberIDRoute, postVersionPhoneNumberIDRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app
  .openapi(getVersionPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDRoute, (c) => {
    throw new Error('Not implemented')
  })
