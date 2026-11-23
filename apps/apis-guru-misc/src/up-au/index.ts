import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsTransactionIdRelationshipsTagsRoute,
  deleteWebhooksIdRoute,
  getAccountsAccountIdTransactionsRoute,
  getAccountsIdRoute,
  getAccountsRoute,
  getCategoriesIdRoute,
  getCategoriesRoute,
  getTagsRoute,
  getTransactionsIdRoute,
  getTransactionsRoute,
  getUtilPingRoute,
  getWebhooksIdRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdLogsRoute,
  patchTransactionsTransactionIdRelationshipsCategoryRoute,
  postTransactionsTransactionIdRelationshipsTagsRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdPingRoute,
} from './routes'
import {
  deleteTransactionsTransactionIdRelationshipsTagsRouteHandler,
  deleteWebhooksIdRouteHandler,
  getAccountsAccountIdTransactionsRouteHandler,
  getAccountsIdRouteHandler,
  getAccountsRouteHandler,
  getCategoriesIdRouteHandler,
  getCategoriesRouteHandler,
  getTagsRouteHandler,
  getTransactionsIdRouteHandler,
  getTransactionsRouteHandler,
  getUtilPingRouteHandler,
  getWebhooksIdRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdLogsRouteHandler,
  patchTransactionsTransactionIdRelationshipsCategoryRouteHandler,
  postTransactionsTransactionIdRelationshipsTagsRouteHandler,
  postWebhooksRouteHandler,
  postWebhooksWebhookIdPingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAccountsAccountIdTransactionsRoute, getAccountsAccountIdTransactionsRouteHandler)
  .openapi(getAccountsIdRoute, getAccountsIdRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(getCategoriesIdRoute, getCategoriesIdRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(getTransactionsIdRoute, getTransactionsIdRouteHandler)
  .openapi(
    patchTransactionsTransactionIdRelationshipsCategoryRoute,
    patchTransactionsTransactionIdRelationshipsCategoryRouteHandler,
  )
  .openapi(
    deleteTransactionsTransactionIdRelationshipsTagsRoute,
    deleteTransactionsTransactionIdRelationshipsTagsRouteHandler,
  )
  .openapi(
    postTransactionsTransactionIdRelationshipsTagsRoute,
    postTransactionsTransactionIdRelationshipsTagsRouteHandler,
  )
  .openapi(getUtilPingRoute, getUtilPingRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksIdRoute, deleteWebhooksIdRouteHandler)
  .openapi(getWebhooksIdRoute, getWebhooksIdRouteHandler)
  .openapi(getWebhooksWebhookIdLogsRoute, getWebhooksWebhookIdLogsRouteHandler)
  .openapi(postWebhooksWebhookIdPingRoute, postWebhooksWebhookIdPingRouteHandler)

export default app
