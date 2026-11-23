import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1EnterprisesRoute,
  getV1NameRoute,
  getV1ParentDevicesRoute,
  getV1ParentEnrollmentTokensRoute,
  getV1ParentPoliciesRoute,
  getV1ParentWebAppsRoute,
  patchV1NameRoute,
  postV1EnterprisesRoute,
  postV1NameCancelRoute,
  postV1NameIssueCommandRoute,
  postV1ParentEnrollmentTokensRoute,
  postV1ParentWebAppsRoute,
  postV1ParentWebTokensRoute,
  postV1SignupUrlsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1EnterprisesRouteHandler,
  getV1NameRouteHandler,
  getV1ParentDevicesRouteHandler,
  getV1ParentEnrollmentTokensRouteHandler,
  getV1ParentPoliciesRouteHandler,
  getV1ParentWebAppsRouteHandler,
  patchV1NameRouteHandler,
  postV1EnterprisesRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameIssueCommandRouteHandler,
  postV1ParentEnrollmentTokensRouteHandler,
  postV1ParentWebAppsRouteHandler,
  postV1ParentWebTokensRouteHandler,
  postV1SignupUrlsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1EnterprisesRoute, getV1EnterprisesRouteHandler)
  .openapi(postV1EnterprisesRoute, postV1EnterprisesRouteHandler)
  .openapi(postV1SignupUrlsRoute, postV1SignupUrlsRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameIssueCommandRoute, postV1NameIssueCommandRouteHandler)
  .openapi(getV1ParentDevicesRoute, getV1ParentDevicesRouteHandler)
  .openapi(getV1ParentEnrollmentTokensRoute, getV1ParentEnrollmentTokensRouteHandler)
  .openapi(postV1ParentEnrollmentTokensRoute, postV1ParentEnrollmentTokensRouteHandler)
  .openapi(getV1ParentPoliciesRoute, getV1ParentPoliciesRouteHandler)
  .openapi(getV1ParentWebAppsRoute, getV1ParentWebAppsRouteHandler)
  .openapi(postV1ParentWebAppsRoute, postV1ParentWebAppsRouteHandler)
  .openapi(postV1ParentWebTokensRoute, postV1ParentWebTokensRouteHandler)

export default app
