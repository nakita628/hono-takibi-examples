import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1KeyRetrieveLegacySecretKeyRoute,
  getV1NameRoute,
  getV1ParentFirewallpoliciesRoute,
  getV1ParentKeysRoute,
  getV1ParentMembershipsRoute,
  getV1ParentRelatedaccountgroupsRoute,
  patchV1NameRoute,
  postV1NameAnnotateRoute,
  postV1NameMigrateRoute,
  postV1ParentAssessmentsRoute,
  postV1ParentFirewallpoliciesRoute,
  postV1ParentKeysRoute,
  postV1ProjectRelatedaccountgroupmembershipsSearchRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1KeyRetrieveLegacySecretKeyRouteHandler,
  getV1NameRouteHandler,
  getV1ParentFirewallpoliciesRouteHandler,
  getV1ParentKeysRouteHandler,
  getV1ParentMembershipsRouteHandler,
  getV1ParentRelatedaccountgroupsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameAnnotateRouteHandler,
  postV1NameMigrateRouteHandler,
  postV1ParentAssessmentsRouteHandler,
  postV1ParentFirewallpoliciesRouteHandler,
  postV1ParentKeysRouteHandler,
  postV1ProjectRelatedaccountgroupmembershipsSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1KeyRetrieveLegacySecretKeyRoute, getV1KeyRetrieveLegacySecretKeyRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameAnnotateRoute, postV1NameAnnotateRouteHandler)
  .openapi(postV1NameMigrateRoute, postV1NameMigrateRouteHandler)
  .openapi(postV1ParentAssessmentsRoute, postV1ParentAssessmentsRouteHandler)
  .openapi(getV1ParentFirewallpoliciesRoute, getV1ParentFirewallpoliciesRouteHandler)
  .openapi(postV1ParentFirewallpoliciesRoute, postV1ParentFirewallpoliciesRouteHandler)
  .openapi(getV1ParentKeysRoute, getV1ParentKeysRouteHandler)
  .openapi(postV1ParentKeysRoute, postV1ParentKeysRouteHandler)
  .openapi(getV1ParentMembershipsRoute, getV1ParentMembershipsRouteHandler)
  .openapi(getV1ParentRelatedaccountgroupsRoute, getV1ParentRelatedaccountgroupsRouteHandler)
  .openapi(
    postV1ProjectRelatedaccountgroupmembershipsSearchRoute,
    postV1ProjectRelatedaccountgroupmembershipsSearchRouteHandler,
  )

export default app
