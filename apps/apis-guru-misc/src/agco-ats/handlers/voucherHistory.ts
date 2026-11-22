import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2VoucherHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const voucherHistoryHandler = app.openapi(getApiV2VoucherHistoryRoute, (c) => {
  throw new Error('Not implemented')
})
