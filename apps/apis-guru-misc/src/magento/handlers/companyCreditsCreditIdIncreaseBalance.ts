import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CompanyCreditsCreditIdIncreaseBalanceRoute } from '../routes'

const app = new OpenAPIHono()

export const companyCreditsCreditIdIncreaseBalanceHandler = app.openapi(
  postV1CompanyCreditsCreditIdIncreaseBalanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
