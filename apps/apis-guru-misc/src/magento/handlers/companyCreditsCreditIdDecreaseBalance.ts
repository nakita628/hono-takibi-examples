import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CompanyCreditsCreditIdDecreaseBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsCreditIdDecreaseBalanceHandler = app.openapi(
  postV1CompanyCreditsCreditIdDecreaseBalanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
