import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postClearAddressRoute,
  postDeleteAddressRoute,
  postExportAddressRoute,
  postGetBlockRoute,
  postGetEthereumBalanceRoute,
  postGetExchangeRateRoute,
  postGetGasPriceRoute,
  postGetLastBlockNumberRoute,
  postGetTokenBalanceRoute,
  postGetTokenRoute,
  postGetTransactionsRoute,
  postImportAddressRoute,
  postListAddressesRoute,
  postListFailedIPNsRoute,
  postListSubscribedAddressesRoute,
  postNewAddressRoute,
  postResendFailedIPNRoute,
  postSendEthereumRoute,
  postSendTokenRoute,
  postSubscribeAddressRoute,
  postUnsubscribeAddressRoute,
} from './routes'
import {
  postClearAddressRouteHandler,
  postDeleteAddressRouteHandler,
  postExportAddressRouteHandler,
  postGetBlockRouteHandler,
  postGetEthereumBalanceRouteHandler,
  postGetExchangeRateRouteHandler,
  postGetGasPriceRouteHandler,
  postGetLastBlockNumberRouteHandler,
  postGetTokenBalanceRouteHandler,
  postGetTokenRouteHandler,
  postGetTransactionsRouteHandler,
  postImportAddressRouteHandler,
  postListAddressesRouteHandler,
  postListFailedIPNsRouteHandler,
  postListSubscribedAddressesRouteHandler,
  postNewAddressRouteHandler,
  postResendFailedIPNRouteHandler,
  postSendEthereumRouteHandler,
  postSendTokenRouteHandler,
  postSubscribeAddressRouteHandler,
  postUnsubscribeAddressRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postClearAddressRoute, postClearAddressRouteHandler)
  .openapi(postDeleteAddressRoute, postDeleteAddressRouteHandler)
  .openapi(postExportAddressRoute, postExportAddressRouteHandler)
  .openapi(postGetBlockRoute, postGetBlockRouteHandler)
  .openapi(postGetEthereumBalanceRoute, postGetEthereumBalanceRouteHandler)
  .openapi(postGetExchangeRateRoute, postGetExchangeRateRouteHandler)
  .openapi(postGetGasPriceRoute, postGetGasPriceRouteHandler)
  .openapi(postGetLastBlockNumberRoute, postGetLastBlockNumberRouteHandler)
  .openapi(postGetTokenRoute, postGetTokenRouteHandler)
  .openapi(postGetTokenBalanceRoute, postGetTokenBalanceRouteHandler)
  .openapi(postGetTransactionsRoute, postGetTransactionsRouteHandler)
  .openapi(postImportAddressRoute, postImportAddressRouteHandler)
  .openapi(postListAddressesRoute, postListAddressesRouteHandler)
  .openapi(postListFailedIPNsRoute, postListFailedIPNsRouteHandler)
  .openapi(postListSubscribedAddressesRoute, postListSubscribedAddressesRouteHandler)
  .openapi(postNewAddressRoute, postNewAddressRouteHandler)
  .openapi(postResendFailedIPNRoute, postResendFailedIPNRouteHandler)
  .openapi(postSendEthereumRoute, postSendEthereumRouteHandler)
  .openapi(postSendTokenRoute, postSendTokenRouteHandler)
  .openapi(postSubscribeAddressRoute, postSubscribeAddressRouteHandler)
  .openapi(postUnsubscribeAddressRoute, postUnsubscribeAddressRouteHandler)

export default app
