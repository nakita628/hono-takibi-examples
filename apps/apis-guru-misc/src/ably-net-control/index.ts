import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdNamespacesNamespaceIdRoute,
  deleteAppsAppIdQueuesQueueIdRoute,
  deleteAppsAppIdRulesRuleIdRoute,
  deleteAppsIdRoute,
  getAccountsAccountIdAppsRoute,
  getAppsAppIdKeysRoute,
  getAppsAppIdNamespacesRoute,
  getAppsAppIdQueuesRoute,
  getAppsAppIdRulesRoute,
  getAppsAppIdRulesRuleIdRoute,
  getMeRoute,
  patchAppsAppIdKeysKeyIdRoute,
  patchAppsAppIdNamespacesNamespaceIdRoute,
  patchAppsAppIdRulesRuleIdRoute,
  patchAppsIdRoute,
  postAccountsAccountIdAppsRoute,
  postAppsAppIdKeysKeyIdRevokeRoute,
  postAppsAppIdKeysRoute,
  postAppsAppIdNamespacesRoute,
  postAppsAppIdQueuesRoute,
  postAppsAppIdRulesRoute,
  postAppsIdPkcs12Route,
} from './routes'
import {
  deleteAppsAppIdNamespacesNamespaceIdRouteHandler,
  deleteAppsAppIdQueuesQueueIdRouteHandler,
  deleteAppsAppIdRulesRuleIdRouteHandler,
  deleteAppsIdRouteHandler,
  getAccountsAccountIdAppsRouteHandler,
  getAppsAppIdKeysRouteHandler,
  getAppsAppIdNamespacesRouteHandler,
  getAppsAppIdQueuesRouteHandler,
  getAppsAppIdRulesRouteHandler,
  getAppsAppIdRulesRuleIdRouteHandler,
  getMeRouteHandler,
  patchAppsAppIdKeysKeyIdRouteHandler,
  patchAppsAppIdNamespacesNamespaceIdRouteHandler,
  patchAppsAppIdRulesRuleIdRouteHandler,
  patchAppsIdRouteHandler,
  postAccountsAccountIdAppsRouteHandler,
  postAppsAppIdKeysKeyIdRevokeRouteHandler,
  postAppsAppIdKeysRouteHandler,
  postAppsAppIdNamespacesRouteHandler,
  postAppsAppIdQueuesRouteHandler,
  postAppsAppIdRulesRouteHandler,
  postAppsIdPkcs12RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsAccountIdAppsRoute, getAccountsAccountIdAppsRouteHandler)
  .openapi(postAccountsAccountIdAppsRoute, postAccountsAccountIdAppsRouteHandler)
  .openapi(getAppsAppIdKeysRoute, getAppsAppIdKeysRouteHandler)
  .openapi(postAppsAppIdKeysRoute, postAppsAppIdKeysRouteHandler)
  .openapi(patchAppsAppIdKeysKeyIdRoute, patchAppsAppIdKeysKeyIdRouteHandler)
  .openapi(postAppsAppIdKeysKeyIdRevokeRoute, postAppsAppIdKeysKeyIdRevokeRouteHandler)
  .openapi(getAppsAppIdNamespacesRoute, getAppsAppIdNamespacesRouteHandler)
  .openapi(postAppsAppIdNamespacesRoute, postAppsAppIdNamespacesRouteHandler)
  .openapi(
    deleteAppsAppIdNamespacesNamespaceIdRoute,
    deleteAppsAppIdNamespacesNamespaceIdRouteHandler,
  )
  .openapi(
    patchAppsAppIdNamespacesNamespaceIdRoute,
    patchAppsAppIdNamespacesNamespaceIdRouteHandler,
  )
  .openapi(getAppsAppIdQueuesRoute, getAppsAppIdQueuesRouteHandler)
  .openapi(postAppsAppIdQueuesRoute, postAppsAppIdQueuesRouteHandler)
  .openapi(deleteAppsAppIdQueuesQueueIdRoute, deleteAppsAppIdQueuesQueueIdRouteHandler)
  .openapi(getAppsAppIdRulesRoute, getAppsAppIdRulesRouteHandler)
  .openapi(postAppsAppIdRulesRoute, postAppsAppIdRulesRouteHandler)
  .openapi(deleteAppsAppIdRulesRuleIdRoute, deleteAppsAppIdRulesRuleIdRouteHandler)
  .openapi(getAppsAppIdRulesRuleIdRoute, getAppsAppIdRulesRuleIdRouteHandler)
  .openapi(patchAppsAppIdRulesRuleIdRoute, patchAppsAppIdRulesRuleIdRouteHandler)
  .openapi(deleteAppsIdRoute, deleteAppsIdRouteHandler)
  .openapi(patchAppsIdRoute, patchAppsIdRouteHandler)
  .openapi(postAppsIdPkcs12Route, postAppsIdPkcs12RouteHandler)
  .openapi(getMeRoute, getMeRouteHandler)

export default app
