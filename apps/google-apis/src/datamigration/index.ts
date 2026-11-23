import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConnectionProfilesRoute,
  getV1beta1ParentMigrationJobsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1MigrationJobGenerateSshScriptRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NamePromoteRoute,
  postV1beta1NameRestartRoute,
  postV1beta1NameResumeRoute,
  postV1beta1NameStartRoute,
  postV1beta1NameStopRoute,
  postV1beta1NameVerifyRoute,
  postV1beta1ParentConnectionProfilesRoute,
  postV1beta1ParentMigrationJobsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentConnectionProfilesRouteHandler,
  getV1beta1ParentMigrationJobsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1MigrationJobGenerateSshScriptRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NamePromoteRouteHandler,
  postV1beta1NameRestartRouteHandler,
  postV1beta1NameResumeRouteHandler,
  postV1beta1NameStartRouteHandler,
  postV1beta1NameStopRouteHandler,
  postV1beta1NameVerifyRouteHandler,
  postV1beta1ParentConnectionProfilesRouteHandler,
  postV1beta1ParentMigrationJobsRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta1MigrationJobGenerateSshScriptRoute,
    postV1beta1MigrationJobGenerateSshScriptRouteHandler,
  )
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NamePromoteRoute, postV1beta1NamePromoteRouteHandler)
  .openapi(postV1beta1NameRestartRoute, postV1beta1NameRestartRouteHandler)
  .openapi(postV1beta1NameResumeRoute, postV1beta1NameResumeRouteHandler)
  .openapi(postV1beta1NameStartRoute, postV1beta1NameStartRouteHandler)
  .openapi(postV1beta1NameStopRoute, postV1beta1NameStopRouteHandler)
  .openapi(postV1beta1NameVerifyRoute, postV1beta1NameVerifyRouteHandler)
  .openapi(getV1beta1ParentConnectionProfilesRoute, getV1beta1ParentConnectionProfilesRouteHandler)
  .openapi(
    postV1beta1ParentConnectionProfilesRoute,
    postV1beta1ParentConnectionProfilesRouteHandler,
  )
  .openapi(getV1beta1ParentMigrationJobsRoute, getV1beta1ParentMigrationJobsRouteHandler)
  .openapi(postV1beta1ParentMigrationJobsRoute, postV1beta1ParentMigrationJobsRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
