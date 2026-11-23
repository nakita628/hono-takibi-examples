import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeyKeyRoute,
  getAccountIdRoute,
  getBlockchainIdRoute,
  getBlockchainRoute,
  getBlockIdRoute,
  getBlockIdTransactionIndexRoute,
  getBlockIdTransactionRoute,
  getBlockRoute,
  getContractIdRoute,
  getErc20AddressRoute,
  getErc20Route,
  getKeyRoute,
  getTransactionHashReceiptRoute,
  getTransactionHashRoute,
  getVersionRoute,
  getWalletAccountIdRoute,
  getWalletAccountRoute,
  getWalletRoute,
  optionsAccountIdRoute,
  optionsAccountRoute,
  optionsBlockchainIdRoute,
  optionsBlockchainRoute,
  optionsBlockIdRoute,
  optionsBlockIdTransactionIndexRoute,
  optionsBlockIdTransactionRoute,
  optionsBlockRoute,
  optionsContractIdRoute,
  optionsContractRoute,
  optionsEchoRoute,
  optionsErc20AddressRoute,
  optionsErc20Route,
  optionsKeyKeyRoute,
  optionsKeyRoute,
  optionsRoute,
  optionsTransactionHashReceiptRoute,
  optionsTransactionHashRoute,
  optionsTransactionRoute,
  optionsVersionRoute,
  optionsWalletAccountIdPayRoute,
  optionsWalletAccountIdRoute,
  optionsWalletAccountRoute,
  optionsWalletRoute,
  postAccountRoute,
  postContractIdRoute,
  postContractRoute,
  postErc20AddressRoute,
  postErc20Route,
  postKeyRoute,
  postTransactionRoute,
  postWalletAccountIdContractRoute,
  postWalletAccountIdErc20Route,
  postWalletAccountIdPayRoute,
  postWalletAccountRoute,
  postWalletRoute,
} from './routes'
import {
  deleteKeyKeyRouteHandler,
  getAccountIdRouteHandler,
  getBlockchainIdRouteHandler,
  getBlockchainRouteHandler,
  getBlockIdRouteHandler,
  getBlockIdTransactionIndexRouteHandler,
  getBlockIdTransactionRouteHandler,
  getBlockRouteHandler,
  getContractIdRouteHandler,
  getErc20AddressRouteHandler,
  getErc20RouteHandler,
  getKeyRouteHandler,
  getTransactionHashReceiptRouteHandler,
  getTransactionHashRouteHandler,
  getVersionRouteHandler,
  getWalletAccountIdRouteHandler,
  getWalletAccountRouteHandler,
  getWalletRouteHandler,
  optionsAccountIdRouteHandler,
  optionsAccountRouteHandler,
  optionsBlockchainIdRouteHandler,
  optionsBlockchainRouteHandler,
  optionsBlockIdRouteHandler,
  optionsBlockIdTransactionIndexRouteHandler,
  optionsBlockIdTransactionRouteHandler,
  optionsBlockRouteHandler,
  optionsContractIdRouteHandler,
  optionsContractRouteHandler,
  optionsEchoRouteHandler,
  optionsErc20AddressRouteHandler,
  optionsErc20RouteHandler,
  optionsKeyKeyRouteHandler,
  optionsKeyRouteHandler,
  optionsRouteHandler,
  optionsTransactionHashReceiptRouteHandler,
  optionsTransactionHashRouteHandler,
  optionsTransactionRouteHandler,
  optionsVersionRouteHandler,
  optionsWalletAccountIdPayRouteHandler,
  optionsWalletAccountIdRouteHandler,
  optionsWalletAccountRouteHandler,
  optionsWalletRouteHandler,
  postAccountRouteHandler,
  postContractIdRouteHandler,
  postContractRouteHandler,
  postErc20AddressRouteHandler,
  postErc20RouteHandler,
  postKeyRouteHandler,
  postTransactionRouteHandler,
  postWalletAccountIdContractRouteHandler,
  postWalletAccountIdErc20RouteHandler,
  postWalletAccountIdPayRouteHandler,
  postWalletAccountRouteHandler,
  postWalletRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(optionsRoute, optionsRouteHandler)
  .openapi(optionsAccountRoute, optionsAccountRouteHandler)
  .openapi(postAccountRoute, postAccountRouteHandler)
  .openapi(getAccountIdRoute, getAccountIdRouteHandler)
  .openapi(optionsAccountIdRoute, optionsAccountIdRouteHandler)
  .openapi(getBlockRoute, getBlockRouteHandler)
  .openapi(optionsBlockRoute, optionsBlockRouteHandler)
  .openapi(getBlockIdRoute, getBlockIdRouteHandler)
  .openapi(optionsBlockIdRoute, optionsBlockIdRouteHandler)
  .openapi(getBlockIdTransactionRoute, getBlockIdTransactionRouteHandler)
  .openapi(optionsBlockIdTransactionRoute, optionsBlockIdTransactionRouteHandler)
  .openapi(getBlockIdTransactionIndexRoute, getBlockIdTransactionIndexRouteHandler)
  .openapi(optionsBlockIdTransactionIndexRoute, optionsBlockIdTransactionIndexRouteHandler)
  .openapi(getBlockchainRoute, getBlockchainRouteHandler)
  .openapi(optionsBlockchainRoute, optionsBlockchainRouteHandler)
  .openapi(getBlockchainIdRoute, getBlockchainIdRouteHandler)
  .openapi(optionsBlockchainIdRoute, optionsBlockchainIdRouteHandler)
  .openapi(optionsContractRoute, optionsContractRouteHandler)
  .openapi(postContractRoute, postContractRouteHandler)
  .openapi(getContractIdRoute, getContractIdRouteHandler)
  .openapi(optionsContractIdRoute, optionsContractIdRouteHandler)
  .openapi(postContractIdRoute, postContractIdRouteHandler)
  .openapi(optionsEchoRoute, optionsEchoRouteHandler)
  .openapi(getErc20Route, getErc20RouteHandler)
  .openapi(optionsErc20Route, optionsErc20RouteHandler)
  .openapi(postErc20Route, postErc20RouteHandler)
  .openapi(getErc20AddressRoute, getErc20AddressRouteHandler)
  .openapi(optionsErc20AddressRoute, optionsErc20AddressRouteHandler)
  .openapi(postErc20AddressRoute, postErc20AddressRouteHandler)
  .openapi(getKeyRoute, getKeyRouteHandler)
  .openapi(optionsKeyRoute, optionsKeyRouteHandler)
  .openapi(postKeyRoute, postKeyRouteHandler)
  .openapi(deleteKeyKeyRoute, deleteKeyKeyRouteHandler)
  .openapi(optionsKeyKeyRoute, optionsKeyKeyRouteHandler)
  .openapi(optionsTransactionRoute, optionsTransactionRouteHandler)
  .openapi(postTransactionRoute, postTransactionRouteHandler)
  .openapi(getTransactionHashRoute, getTransactionHashRouteHandler)
  .openapi(optionsTransactionHashRoute, optionsTransactionHashRouteHandler)
  .openapi(getTransactionHashReceiptRoute, getTransactionHashReceiptRouteHandler)
  .openapi(optionsTransactionHashReceiptRoute, optionsTransactionHashReceiptRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)
  .openapi(optionsVersionRoute, optionsVersionRouteHandler)
  .openapi(getWalletRoute, getWalletRouteHandler)
  .openapi(optionsWalletRoute, optionsWalletRouteHandler)
  .openapi(postWalletRoute, postWalletRouteHandler)
  .openapi(getWalletAccountRoute, getWalletAccountRouteHandler)
  .openapi(optionsWalletAccountRoute, optionsWalletAccountRouteHandler)
  .openapi(postWalletAccountRoute, postWalletAccountRouteHandler)
  .openapi(getWalletAccountIdRoute, getWalletAccountIdRouteHandler)
  .openapi(optionsWalletAccountIdRoute, optionsWalletAccountIdRouteHandler)
  .openapi(postWalletAccountIdContractRoute, postWalletAccountIdContractRouteHandler)
  .openapi(postWalletAccountIdErc20Route, postWalletAccountIdErc20RouteHandler)
  .openapi(optionsWalletAccountIdPayRoute, optionsWalletAccountIdPayRouteHandler)
  .openapi(postWalletAccountIdPayRoute, postWalletAccountIdPayRouteHandler)

export default app
