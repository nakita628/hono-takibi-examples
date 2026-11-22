import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BusinessAccountsTransfersBusinessAccountsTransferIdRoute,
  postV2BusinessAccountsTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersAPIHandler = app
  .openapi(postV2BusinessAccountsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsTransfersBusinessAccountsTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
