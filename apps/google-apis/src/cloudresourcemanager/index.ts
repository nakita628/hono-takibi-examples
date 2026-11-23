import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3NameRoute,
  getV3EffectiveTagsRoute,
  getV3FoldersRoute,
  getV3FoldersSearchRoute,
  getV3LiensRoute,
  getV3NameRoute,
  getV3OrganizationsSearchRoute,
  getV3ParentTagHoldsRoute,
  getV3ProjectsRoute,
  getV3ProjectsSearchRoute,
  getV3TagBindingsRoute,
  getV3TagKeysNamespacedRoute,
  getV3TagKeysRoute,
  getV3TagValuesNamespacedRoute,
  getV3TagValuesRoute,
  patchV3NameRoute,
  postV3FoldersRoute,
  postV3LiensRoute,
  postV3NameMoveRoute,
  postV3NameUndeleteRoute,
  postV3ParentTagHoldsRoute,
  postV3ProjectsRoute,
  postV3ResourceGetIamPolicyRoute,
  postV3ResourceSetIamPolicyRoute,
  postV3ResourceTestIamPermissionsRoute,
  postV3TagBindingsRoute,
  postV3TagKeysRoute,
  postV3TagValuesRoute,
} from './routes'
import {
  deleteV3NameRouteHandler,
  getV3EffectiveTagsRouteHandler,
  getV3FoldersRouteHandler,
  getV3FoldersSearchRouteHandler,
  getV3LiensRouteHandler,
  getV3NameRouteHandler,
  getV3OrganizationsSearchRouteHandler,
  getV3ParentTagHoldsRouteHandler,
  getV3ProjectsRouteHandler,
  getV3ProjectsSearchRouteHandler,
  getV3TagBindingsRouteHandler,
  getV3TagKeysNamespacedRouteHandler,
  getV3TagKeysRouteHandler,
  getV3TagValuesNamespacedRouteHandler,
  getV3TagValuesRouteHandler,
  patchV3NameRouteHandler,
  postV3FoldersRouteHandler,
  postV3LiensRouteHandler,
  postV3NameMoveRouteHandler,
  postV3NameUndeleteRouteHandler,
  postV3ParentTagHoldsRouteHandler,
  postV3ProjectsRouteHandler,
  postV3ResourceGetIamPolicyRouteHandler,
  postV3ResourceSetIamPolicyRouteHandler,
  postV3ResourceTestIamPermissionsRouteHandler,
  postV3TagBindingsRouteHandler,
  postV3TagKeysRouteHandler,
  postV3TagValuesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV3EffectiveTagsRoute, getV3EffectiveTagsRouteHandler)
  .openapi(getV3FoldersRoute, getV3FoldersRouteHandler)
  .openapi(postV3FoldersRoute, postV3FoldersRouteHandler)
  .openapi(getV3FoldersSearchRoute, getV3FoldersSearchRouteHandler)
  .openapi(getV3LiensRoute, getV3LiensRouteHandler)
  .openapi(postV3LiensRoute, postV3LiensRouteHandler)
  .openapi(getV3OrganizationsSearchRoute, getV3OrganizationsSearchRouteHandler)
  .openapi(getV3ProjectsRoute, getV3ProjectsRouteHandler)
  .openapi(postV3ProjectsRoute, postV3ProjectsRouteHandler)
  .openapi(getV3ProjectsSearchRoute, getV3ProjectsSearchRouteHandler)
  .openapi(getV3TagBindingsRoute, getV3TagBindingsRouteHandler)
  .openapi(postV3TagBindingsRoute, postV3TagBindingsRouteHandler)
  .openapi(getV3TagKeysRoute, getV3TagKeysRouteHandler)
  .openapi(postV3TagKeysRoute, postV3TagKeysRouteHandler)
  .openapi(getV3TagKeysNamespacedRoute, getV3TagKeysNamespacedRouteHandler)
  .openapi(getV3TagValuesRoute, getV3TagValuesRouteHandler)
  .openapi(postV3TagValuesRoute, postV3TagValuesRouteHandler)
  .openapi(getV3TagValuesNamespacedRoute, getV3TagValuesNamespacedRouteHandler)
  .openapi(deleteV3NameRoute, deleteV3NameRouteHandler)
  .openapi(getV3NameRoute, getV3NameRouteHandler)
  .openapi(patchV3NameRoute, patchV3NameRouteHandler)
  .openapi(postV3NameMoveRoute, postV3NameMoveRouteHandler)
  .openapi(postV3NameUndeleteRoute, postV3NameUndeleteRouteHandler)
  .openapi(getV3ParentTagHoldsRoute, getV3ParentTagHoldsRouteHandler)
  .openapi(postV3ParentTagHoldsRoute, postV3ParentTagHoldsRouteHandler)
  .openapi(postV3ResourceGetIamPolicyRoute, postV3ResourceGetIamPolicyRouteHandler)
  .openapi(postV3ResourceSetIamPolicyRoute, postV3ResourceSetIamPolicyRouteHandler)
  .openapi(postV3ResourceTestIamPermissionsRoute, postV3ResourceTestIamPermissionsRouteHandler)

export default app
