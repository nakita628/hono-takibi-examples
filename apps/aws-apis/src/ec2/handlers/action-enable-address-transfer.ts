import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableAddressTransferRoute,
  postActionEnableAddressTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableAddressTransferHandler = app
  .openapi(getActionEnableAddressTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableAddressTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
