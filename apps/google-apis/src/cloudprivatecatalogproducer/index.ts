import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1CatalogsRoute,
  getV1beta1NameRoute,
  getV1beta1OperationsRoute,
  getV1beta1ParentAssociationsRoute,
  getV1beta1ParentProductsRoute,
  getV1beta1ParentVersionsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1CatalogsRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameCopyRoute,
  postV1beta1NameUndeleteRoute,
  postV1beta1ParentAssociationsRoute,
  postV1beta1ParentProductsRoute,
  postV1beta1ParentVersionsRoute,
  postV1beta1ProductIconsUploadRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1CatalogsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1OperationsRouteHandler,
  getV1beta1ParentAssociationsRouteHandler,
  getV1beta1ParentProductsRouteHandler,
  getV1beta1ParentVersionsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1CatalogsRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameCopyRouteHandler,
  postV1beta1NameUndeleteRouteHandler,
  postV1beta1ParentAssociationsRouteHandler,
  postV1beta1ParentProductsRouteHandler,
  postV1beta1ParentVersionsRouteHandler,
  postV1beta1ProductIconsUploadRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1CatalogsRoute, getV1beta1CatalogsRouteHandler)
  .openapi(postV1beta1CatalogsRoute, postV1beta1CatalogsRouteHandler)
  .openapi(getV1beta1OperationsRoute, getV1beta1OperationsRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameCopyRoute, postV1beta1NameCopyRouteHandler)
  .openapi(postV1beta1NameUndeleteRoute, postV1beta1NameUndeleteRouteHandler)
  .openapi(getV1beta1ParentAssociationsRoute, getV1beta1ParentAssociationsRouteHandler)
  .openapi(postV1beta1ParentAssociationsRoute, postV1beta1ParentAssociationsRouteHandler)
  .openapi(getV1beta1ParentProductsRoute, getV1beta1ParentProductsRouteHandler)
  .openapi(postV1beta1ParentProductsRoute, postV1beta1ParentProductsRouteHandler)
  .openapi(getV1beta1ParentVersionsRoute, getV1beta1ParentVersionsRouteHandler)
  .openapi(postV1beta1ParentVersionsRoute, postV1beta1ParentVersionsRouteHandler)
  .openapi(postV1beta1ProductIconsUploadRoute, postV1beta1ProductIconsUploadRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
