import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1FundsConfirmationsRoute } from '../routes'

const app = new OpenAPIHono()

export const confirmationOfFundsServicePIISHandler = app.openapi(
  postV1FundsConfirmationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
