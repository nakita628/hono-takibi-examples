import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableAddressTransferRoute,
  postActionDisableAddressTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableAddressTransferHandler = app
  .openapi(getActionDisableAddressTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableAddressTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
