import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDRegisterRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumberRegistrationHandler = app.openapi(
  postVersionPhoneNumberIDRegisterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
