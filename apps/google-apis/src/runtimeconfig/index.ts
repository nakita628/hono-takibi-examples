import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConfigsRoute,
  getV1beta1ParentVariablesRoute,
  getV1beta1ParentWaitersRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  postV1beta1NameWatchRoute,
  postV1beta1ParentConfigsRoute,
  postV1beta1ParentVariablesRoute,
  postV1beta1ParentWaitersRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  putV1beta1NameRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentConfigsRouteHandler,
  getV1beta1ParentVariablesRouteHandler,
  getV1beta1ParentWaitersRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  postV1beta1NameWatchRouteHandler,
  postV1beta1ParentConfigsRouteHandler,
  postV1beta1ParentVariablesRouteHandler,
  postV1beta1ParentWaitersRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
  putV1beta1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(putV1beta1NameRoute, putV1beta1NameRouteHandler)
  .openapi(postV1beta1NameWatchRoute, postV1beta1NameWatchRouteHandler)
  .openapi(getV1beta1ParentConfigsRoute, getV1beta1ParentConfigsRouteHandler)
  .openapi(postV1beta1ParentConfigsRoute, postV1beta1ParentConfigsRouteHandler)
  .openapi(getV1beta1ParentVariablesRoute, getV1beta1ParentVariablesRouteHandler)
  .openapi(postV1beta1ParentVariablesRoute, postV1beta1ParentVariablesRouteHandler)
  .openapi(getV1beta1ParentWaitersRoute, getV1beta1ParentWaitersRouteHandler)
  .openapi(postV1beta1ParentWaitersRoute, postV1beta1ParentWaitersRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
