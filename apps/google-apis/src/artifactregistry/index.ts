import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameLocationsRoute,
  getV1beta2NameRoute,
  getV1beta2ParentFilesRoute,
  getV1beta2ParentPackagesRoute,
  getV1beta2ParentRepositoriesRoute,
  getV1beta2ParentTagsRoute,
  getV1beta2ParentVersionsRoute,
  getV1beta2ResourceGetIamPolicyRoute,
  patchV1beta2NameRoute,
  postV1beta2ParentAptArtifactsCreateRoute,
  postV1beta2ParentAptArtifactsImportRoute,
  postV1beta2ParentRepositoriesRoute,
  postV1beta2ParentTagsRoute,
  postV1beta2ParentYumArtifactsCreateRoute,
  postV1beta2ParentYumArtifactsImportRoute,
  postV1beta2ResourceSetIamPolicyRoute,
  postV1beta2ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta2NameRouteHandler,
  getV1beta2NameLocationsRouteHandler,
  getV1beta2NameRouteHandler,
  getV1beta2ParentFilesRouteHandler,
  getV1beta2ParentPackagesRouteHandler,
  getV1beta2ParentRepositoriesRouteHandler,
  getV1beta2ParentTagsRouteHandler,
  getV1beta2ParentVersionsRouteHandler,
  getV1beta2ResourceGetIamPolicyRouteHandler,
  patchV1beta2NameRouteHandler,
  postV1beta2ParentAptArtifactsCreateRouteHandler,
  postV1beta2ParentAptArtifactsImportRouteHandler,
  postV1beta2ParentRepositoriesRouteHandler,
  postV1beta2ParentTagsRouteHandler,
  postV1beta2ParentYumArtifactsCreateRouteHandler,
  postV1beta2ParentYumArtifactsImportRouteHandler,
  postV1beta2ResourceSetIamPolicyRouteHandler,
  postV1beta2ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta2NameRoute, deleteV1beta2NameRouteHandler)
  .openapi(getV1beta2NameRoute, getV1beta2NameRouteHandler)
  .openapi(patchV1beta2NameRoute, patchV1beta2NameRouteHandler)
  .openapi(getV1beta2NameLocationsRoute, getV1beta2NameLocationsRouteHandler)
  .openapi(
    postV1beta2ParentAptArtifactsCreateRoute,
    postV1beta2ParentAptArtifactsCreateRouteHandler,
  )
  .openapi(
    postV1beta2ParentAptArtifactsImportRoute,
    postV1beta2ParentAptArtifactsImportRouteHandler,
  )
  .openapi(getV1beta2ParentFilesRoute, getV1beta2ParentFilesRouteHandler)
  .openapi(getV1beta2ParentPackagesRoute, getV1beta2ParentPackagesRouteHandler)
  .openapi(getV1beta2ParentRepositoriesRoute, getV1beta2ParentRepositoriesRouteHandler)
  .openapi(postV1beta2ParentRepositoriesRoute, postV1beta2ParentRepositoriesRouteHandler)
  .openapi(getV1beta2ParentTagsRoute, getV1beta2ParentTagsRouteHandler)
  .openapi(postV1beta2ParentTagsRoute, postV1beta2ParentTagsRouteHandler)
  .openapi(getV1beta2ParentVersionsRoute, getV1beta2ParentVersionsRouteHandler)
  .openapi(
    postV1beta2ParentYumArtifactsCreateRoute,
    postV1beta2ParentYumArtifactsCreateRouteHandler,
  )
  .openapi(
    postV1beta2ParentYumArtifactsImportRoute,
    postV1beta2ParentYumArtifactsImportRouteHandler,
  )
  .openapi(getV1beta2ResourceGetIamPolicyRoute, getV1beta2ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta2ResourceSetIamPolicyRoute, postV1beta2ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta2ResourceTestIamPermissionsRoute,
    postV1beta2ResourceTestIamPermissionsRouteHandler,
  )

export default app
