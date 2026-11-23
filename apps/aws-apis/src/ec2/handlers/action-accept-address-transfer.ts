import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAcceptAddressTransferRoute,
  postActionAcceptAddressTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAcceptAddressTransferHandler = app
  .openapi(getActionAcceptAddressTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAcceptAddressTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
