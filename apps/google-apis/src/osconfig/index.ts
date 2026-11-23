import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaNameRoute,
  getV1betaParentGuestPoliciesRoute,
  getV1betaParentInstanceDetailsRoute,
  getV1betaParentPatchDeploymentsRoute,
  getV1betaParentPatchJobsRoute,
  patchV1betaNameRoute,
  postV1betaInstanceLookupEffectiveGuestPolicyRoute,
  postV1betaNameCancelRoute,
  postV1betaNamePauseRoute,
  postV1betaNameResumeRoute,
  postV1betaParentGuestPoliciesRoute,
  postV1betaParentPatchDeploymentsRoute,
  postV1betaParentPatchJobsExecuteRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentGuestPoliciesRouteHandler,
  getV1betaParentInstanceDetailsRouteHandler,
  getV1betaParentPatchDeploymentsRouteHandler,
  getV1betaParentPatchJobsRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaInstanceLookupEffectiveGuestPolicyRouteHandler,
  postV1betaNameCancelRouteHandler,
  postV1betaNamePauseRouteHandler,
  postV1betaNameResumeRouteHandler,
  postV1betaParentGuestPoliciesRouteHandler,
  postV1betaParentPatchDeploymentsRouteHandler,
  postV1betaParentPatchJobsExecuteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1betaInstanceLookupEffectiveGuestPolicyRoute,
    postV1betaInstanceLookupEffectiveGuestPolicyRouteHandler,
  )
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(postV1betaNameCancelRoute, postV1betaNameCancelRouteHandler)
  .openapi(postV1betaNamePauseRoute, postV1betaNamePauseRouteHandler)
  .openapi(postV1betaNameResumeRoute, postV1betaNameResumeRouteHandler)
  .openapi(getV1betaParentGuestPoliciesRoute, getV1betaParentGuestPoliciesRouteHandler)
  .openapi(postV1betaParentGuestPoliciesRoute, postV1betaParentGuestPoliciesRouteHandler)
  .openapi(getV1betaParentInstanceDetailsRoute, getV1betaParentInstanceDetailsRouteHandler)
  .openapi(getV1betaParentPatchDeploymentsRoute, getV1betaParentPatchDeploymentsRouteHandler)
  .openapi(postV1betaParentPatchDeploymentsRoute, postV1betaParentPatchDeploymentsRouteHandler)
  .openapi(getV1betaParentPatchJobsRoute, getV1betaParentPatchJobsRouteHandler)
  .openapi(postV1betaParentPatchJobsExecuteRoute, postV1betaParentPatchJobsExecuteRouteHandler)

export default app
