import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiKeyBalanceTransfersRoute,
  getApiKeyCreditTransfersRoute,
  postApiKeyBalanceTransfersRoute,
  postApiKeyCreditTransfersRoute,
  postApiKeyTransferNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersHandler = app
  .openapi(getApiKeyBalanceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyBalanceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeyCreditTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyCreditTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyTransferNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
