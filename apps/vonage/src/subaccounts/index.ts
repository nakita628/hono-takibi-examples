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
} from './routes'
import {
  getApiKeyBalanceTransfersRouteHandler,
  getApiKeyCreditTransfersRouteHandler,
  getApiKeySubaccountsRouteHandler,
  getApiKeySubaccountsSubaccountKeyRouteHandler,
  patchApiKeySubaccountsSubaccountKeyRouteHandler,
  postApiKeyBalanceTransfersRouteHandler,
  postApiKeyCreditTransfersRouteHandler,
  postApiKeySubaccountsRouteHandler,
  postApiKeyTransferNumberRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiKeyBalanceTransfersRoute, getApiKeyBalanceTransfersRouteHandler)
  .openapi(postApiKeyBalanceTransfersRoute, postApiKeyBalanceTransfersRouteHandler)
  .openapi(getApiKeyCreditTransfersRoute, getApiKeyCreditTransfersRouteHandler)
  .openapi(postApiKeyCreditTransfersRoute, postApiKeyCreditTransfersRouteHandler)
  .openapi(getApiKeySubaccountsRoute, getApiKeySubaccountsRouteHandler)
  .openapi(postApiKeySubaccountsRoute, postApiKeySubaccountsRouteHandler)
  .openapi(getApiKeySubaccountsSubaccountKeyRoute, getApiKeySubaccountsSubaccountKeyRouteHandler)
  .openapi(
    patchApiKeySubaccountsSubaccountKeyRoute,
    patchApiKeySubaccountsSubaccountKeyRouteHandler,
  )
  .openapi(postApiKeyTransferNumberRoute, postApiKeyTransferNumberRouteHandler)

export default app
