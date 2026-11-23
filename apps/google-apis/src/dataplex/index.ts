import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentActionsRoute,
  getV1ParentAssetsRoute,
  getV1ParentAttributesRoute,
  getV1ParentContentitemsRoute,
  getV1ParentContentRoute,
  getV1ParentDataAttributeBindingsRoute,
  getV1ParentDataScansRoute,
  getV1ParentDataTaxonomiesRoute,
  getV1ParentEntitiesRoute,
  getV1ParentEnvironmentsRoute,
  getV1ParentJobsRoute,
  getV1ParentLakesRoute,
  getV1ParentPartitionsRoute,
  getV1ParentSessionsRoute,
  getV1ParentTasksRoute,
  getV1ParentZonesRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRunRoute,
  postV1ParentAssetsRoute,
  postV1ParentAttributesRoute,
  postV1ParentContentitemsRoute,
  postV1ParentContentRoute,
  postV1ParentDataAttributeBindingsRoute,
  postV1ParentDataScansRoute,
  postV1ParentDataTaxonomiesRoute,
  postV1ParentEntitiesRoute,
  postV1ParentEnvironmentsRoute,
  postV1ParentLakesRoute,
  postV1ParentPartitionsRoute,
  postV1ParentTasksRoute,
  postV1ParentZonesRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  putV1NameRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameLocationsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentActionsRouteHandler,
  getV1ParentAssetsRouteHandler,
  getV1ParentAttributesRouteHandler,
  getV1ParentContentitemsRouteHandler,
  getV1ParentContentRouteHandler,
  getV1ParentDataAttributeBindingsRouteHandler,
  getV1ParentDataScansRouteHandler,
  getV1ParentDataTaxonomiesRouteHandler,
  getV1ParentEntitiesRouteHandler,
  getV1ParentEnvironmentsRouteHandler,
  getV1ParentJobsRouteHandler,
  getV1ParentLakesRouteHandler,
  getV1ParentPartitionsRouteHandler,
  getV1ParentSessionsRouteHandler,
  getV1ParentTasksRouteHandler,
  getV1ParentZonesRouteHandler,
  getV1ResourceGetIamPolicyRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameRunRouteHandler,
  postV1ParentAssetsRouteHandler,
  postV1ParentAttributesRouteHandler,
  postV1ParentContentitemsRouteHandler,
  postV1ParentContentRouteHandler,
  postV1ParentDataAttributeBindingsRouteHandler,
  postV1ParentDataScansRouteHandler,
  postV1ParentDataTaxonomiesRouteHandler,
  postV1ParentEntitiesRouteHandler,
  postV1ParentEnvironmentsRouteHandler,
  postV1ParentLakesRouteHandler,
  postV1ParentPartitionsRouteHandler,
  postV1ParentTasksRouteHandler,
  postV1ParentZonesRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  putV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(putV1NameRoute, putV1NameRouteHandler)
  .openapi(getV1NameLocationsRoute, getV1NameLocationsRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameRunRoute, postV1NameRunRouteHandler)
  .openapi(getV1ParentActionsRoute, getV1ParentActionsRouteHandler)
  .openapi(getV1ParentAssetsRoute, getV1ParentAssetsRouteHandler)
  .openapi(postV1ParentAssetsRoute, postV1ParentAssetsRouteHandler)
  .openapi(getV1ParentAttributesRoute, getV1ParentAttributesRouteHandler)
  .openapi(postV1ParentAttributesRoute, postV1ParentAttributesRouteHandler)
  .openapi(getV1ParentContentRoute, getV1ParentContentRouteHandler)
  .openapi(postV1ParentContentRoute, postV1ParentContentRouteHandler)
  .openapi(getV1ParentContentitemsRoute, getV1ParentContentitemsRouteHandler)
  .openapi(postV1ParentContentitemsRoute, postV1ParentContentitemsRouteHandler)
  .openapi(getV1ParentDataAttributeBindingsRoute, getV1ParentDataAttributeBindingsRouteHandler)
  .openapi(postV1ParentDataAttributeBindingsRoute, postV1ParentDataAttributeBindingsRouteHandler)
  .openapi(getV1ParentDataScansRoute, getV1ParentDataScansRouteHandler)
  .openapi(postV1ParentDataScansRoute, postV1ParentDataScansRouteHandler)
  .openapi(getV1ParentDataTaxonomiesRoute, getV1ParentDataTaxonomiesRouteHandler)
  .openapi(postV1ParentDataTaxonomiesRoute, postV1ParentDataTaxonomiesRouteHandler)
  .openapi(getV1ParentEntitiesRoute, getV1ParentEntitiesRouteHandler)
  .openapi(postV1ParentEntitiesRoute, postV1ParentEntitiesRouteHandler)
  .openapi(getV1ParentEnvironmentsRoute, getV1ParentEnvironmentsRouteHandler)
  .openapi(postV1ParentEnvironmentsRoute, postV1ParentEnvironmentsRouteHandler)
  .openapi(getV1ParentJobsRoute, getV1ParentJobsRouteHandler)
  .openapi(getV1ParentLakesRoute, getV1ParentLakesRouteHandler)
  .openapi(postV1ParentLakesRoute, postV1ParentLakesRouteHandler)
  .openapi(getV1ParentPartitionsRoute, getV1ParentPartitionsRouteHandler)
  .openapi(postV1ParentPartitionsRoute, postV1ParentPartitionsRouteHandler)
  .openapi(getV1ParentSessionsRoute, getV1ParentSessionsRouteHandler)
  .openapi(getV1ParentTasksRoute, getV1ParentTasksRouteHandler)
  .openapi(postV1ParentTasksRoute, postV1ParentTasksRouteHandler)
  .openapi(getV1ParentZonesRoute, getV1ParentZonesRouteHandler)
  .openapi(postV1ParentZonesRoute, postV1ParentZonesRouteHandler)
  .openapi(getV1ResourceGetIamPolicyRoute, getV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
