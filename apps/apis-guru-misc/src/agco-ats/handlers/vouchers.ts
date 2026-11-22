import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2VouchersVoucherCodeRoute,
  getApiV2VouchersRoute,
  getApiV2VouchersVoucherCodeRoute,
  getApiV2VouchersVoucherCodeVoucherHistoryRoute,
  postApiV2VouchersRoute,
  putApiV2VouchersVoucherCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vouchersHandler = app
  .openapi(getApiV2VouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2VouchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2VouchersVoucherCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VouchersVoucherCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2VouchersVoucherCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VouchersVoucherCodeVoucherHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
