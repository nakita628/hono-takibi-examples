import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameAccessRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentSecretsRoute,
  getV1beta1ParentVersionsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameDestroyRoute,
  postV1beta1NameDisableRoute,
  postV1beta1NameEnableRoute,
  postV1beta1ParentAddVersionRoute,
  postV1beta1ParentSecretsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameAccessRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentSecretsRouteHandler,
  getV1beta1ParentVersionsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameDestroyRouteHandler,
  postV1beta1NameDisableRouteHandler,
  postV1beta1NameEnableRouteHandler,
  postV1beta1ParentAddVersionRouteHandler,
  postV1beta1ParentSecretsRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameAccessRoute, getV1beta1NameAccessRouteHandler)
  .openapi(postV1beta1NameDestroyRoute, postV1beta1NameDestroyRouteHandler)
  .openapi(postV1beta1NameDisableRoute, postV1beta1NameDisableRouteHandler)
  .openapi(postV1beta1NameEnableRoute, postV1beta1NameEnableRouteHandler)
  .openapi(getV1beta1ParentSecretsRoute, getV1beta1ParentSecretsRouteHandler)
  .openapi(postV1beta1ParentSecretsRoute, postV1beta1ParentSecretsRouteHandler)
  .openapi(getV1beta1ParentVersionsRoute, getV1beta1ParentVersionsRouteHandler)
  .openapi(postV1beta1ParentAddVersionRoute, postV1beta1ParentAddVersionRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
