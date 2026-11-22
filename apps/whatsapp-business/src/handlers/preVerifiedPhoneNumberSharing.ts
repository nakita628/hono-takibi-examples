import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionBusinessIDSharePreverifiedNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const preVerifiedPhoneNumberSharingHandler = app.openapi(
  postVersionBusinessIDSharePreverifiedNumbersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
