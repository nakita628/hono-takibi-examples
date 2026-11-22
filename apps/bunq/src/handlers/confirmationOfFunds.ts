import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDConfirmationOfFundsRoute } from '../routes'

const app = new OpenAPIHono()

export const confirmationOfFundsHandler = app.openapi(
  postUserUserIDConfirmationOfFundsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
