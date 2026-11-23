import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiKeyBalanceTransfersRoute,
  getApiKeyCreditTransfersRoute,
  getApiKeySubaccountsRoute,
  getApiKeySubaccountsSubaccountKeyRoute,
  patchApiKeySubaccountsSubaccountKeyRoute,
  postApiKeyBalanceTransfersRoute,
  postApiKeyCreditTransfersRoute,
  postApiKeySubaccountsRoute,
  postApiKeyTransferNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeyHandler = app
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
  .openapi(getApiKeySubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeySubaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeySubaccountsSubaccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiKeySubaccountsSubaccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeyTransferNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
