import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2BusinessAccountsPayeeVerificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyPayeeAPIHandler = app.openapi(
  postV2BusinessAccountsPayeeVerificationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
