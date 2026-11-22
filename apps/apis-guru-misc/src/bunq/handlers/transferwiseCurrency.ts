import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDTransferwiseCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const transferwiseCurrencyHandler = app.openapi(
  getUserUserIDTransferwiseCurrencyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
