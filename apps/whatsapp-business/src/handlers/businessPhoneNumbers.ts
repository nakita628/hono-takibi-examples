import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionBusinessIDAddPhoneNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const businessPhoneNumbersHandler = app.openapi(
  postVersionBusinessIDAddPhoneNumbersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
