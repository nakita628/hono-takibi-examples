import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentFunctionsRoute,
  getV2ParentRuntimesRoute,
  getV2ResourceGetIamPolicyRoute,
  patchV2NameRoute,
  postV2NameAbortFunctionUpgradeRoute,
  postV2NameCommitFunctionUpgradeRoute,
  postV2NameGenerateDownloadUrlRoute,
  postV2NameRedirectFunctionUpgradeTrafficRoute,
  postV2NameRollbackFunctionUpgradeTrafficRoute,
  postV2NameSetupFunctionUpgradeConfigRoute,
  postV2ParentFunctionsGenerateUploadUrlRoute,
  postV2ParentFunctionsRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameLocationsRouteHandler,
  getV2NameOperationsRouteHandler,
  getV2NameRouteHandler,
  getV2ParentFunctionsRouteHandler,
  getV2ParentRuntimesRouteHandler,
  getV2ResourceGetIamPolicyRouteHandler,
  patchV2NameRouteHandler,
  postV2NameAbortFunctionUpgradeRouteHandler,
  postV2NameCommitFunctionUpgradeRouteHandler,
  postV2NameGenerateDownloadUrlRouteHandler,
  postV2NameRedirectFunctionUpgradeTrafficRouteHandler,
  postV2NameRollbackFunctionUpgradeTrafficRouteHandler,
  postV2NameSetupFunctionUpgradeConfigRouteHandler,
  postV2ParentFunctionsGenerateUploadUrlRouteHandler,
  postV2ParentFunctionsRouteHandler,
  postV2ResourceSetIamPolicyRouteHandler,
  postV2ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameLocationsRoute, getV2NameLocationsRouteHandler)
  .openapi(getV2NameOperationsRoute, getV2NameOperationsRouteHandler)
  .openapi(postV2NameAbortFunctionUpgradeRoute, postV2NameAbortFunctionUpgradeRouteHandler)
  .openapi(postV2NameCommitFunctionUpgradeRoute, postV2NameCommitFunctionUpgradeRouteHandler)
  .openapi(postV2NameGenerateDownloadUrlRoute, postV2NameGenerateDownloadUrlRouteHandler)
  .openapi(
    postV2NameRedirectFunctionUpgradeTrafficRoute,
    postV2NameRedirectFunctionUpgradeTrafficRouteHandler,
  )
  .openapi(
    postV2NameRollbackFunctionUpgradeTrafficRoute,
    postV2NameRollbackFunctionUpgradeTrafficRouteHandler,
  )
  .openapi(
    postV2NameSetupFunctionUpgradeConfigRoute,
    postV2NameSetupFunctionUpgradeConfigRouteHandler,
  )
  .openapi(getV2ParentFunctionsRoute, getV2ParentFunctionsRouteHandler)
  .openapi(postV2ParentFunctionsRoute, postV2ParentFunctionsRouteHandler)
  .openapi(
    postV2ParentFunctionsGenerateUploadUrlRoute,
    postV2ParentFunctionsGenerateUploadUrlRouteHandler,
  )
  .openapi(getV2ParentRuntimesRoute, getV2ParentRuntimesRouteHandler)
  .openapi(getV2ResourceGetIamPolicyRoute, getV2ResourceGetIamPolicyRouteHandler)
  .openapi(postV2ResourceSetIamPolicyRoute, postV2ResourceSetIamPolicyRouteHandler)
  .openapi(postV2ResourceTestIamPermissionsRoute, postV2ResourceTestIamPermissionsRouteHandler)

export default app
