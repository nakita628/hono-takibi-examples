import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ServicesServiceNameRoute,
  getV1NameRoute,
  getV1OperationsRoute,
  getV1ServicesRoute,
  getV1ServicesServiceNameConfigRoute,
  getV1ServicesServiceNameConfigsConfigIdRoute,
  getV1ServicesServiceNameConfigsRoute,
  getV1ServicesServiceNameRolloutsRolloutIdRoute,
  getV1ServicesServiceNameRolloutsRoute,
  getV1ServicesServiceNameRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  postV1ServicesGenerateConfigReportRoute,
  postV1ServicesRoute,
  postV1ServicesServiceNameConfigsRoute,
  postV1ServicesServiceNameConfigsSubmitRoute,
  postV1ServicesServiceNameRolloutsRoute,
  postV1ServicesServiceNameUndeleteRoute,
} from './routes'
import {
  deleteV1ServicesServiceNameRouteHandler,
  getV1NameRouteHandler,
  getV1OperationsRouteHandler,
  getV1ServicesRouteHandler,
  getV1ServicesServiceNameConfigRouteHandler,
  getV1ServicesServiceNameConfigsConfigIdRouteHandler,
  getV1ServicesServiceNameConfigsRouteHandler,
  getV1ServicesServiceNameRolloutsRolloutIdRouteHandler,
  getV1ServicesServiceNameRolloutsRouteHandler,
  getV1ServicesServiceNameRouteHandler,
  postV1ResourceGetIamPolicyRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  postV1ServicesGenerateConfigReportRouteHandler,
  postV1ServicesRouteHandler,
  postV1ServicesServiceNameConfigsRouteHandler,
  postV1ServicesServiceNameConfigsSubmitRouteHandler,
  postV1ServicesServiceNameRolloutsRouteHandler,
  postV1ServicesServiceNameUndeleteRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1OperationsRoute, getV1OperationsRouteHandler)
  .openapi(getV1ServicesRoute, getV1ServicesRouteHandler)
  .openapi(postV1ServicesRoute, postV1ServicesRouteHandler)
  .openapi(deleteV1ServicesServiceNameRoute, deleteV1ServicesServiceNameRouteHandler)
  .openapi(getV1ServicesServiceNameRoute, getV1ServicesServiceNameRouteHandler)
  .openapi(getV1ServicesServiceNameConfigRoute, getV1ServicesServiceNameConfigRouteHandler)
  .openapi(getV1ServicesServiceNameConfigsRoute, getV1ServicesServiceNameConfigsRouteHandler)
  .openapi(postV1ServicesServiceNameConfigsRoute, postV1ServicesServiceNameConfigsRouteHandler)
  .openapi(
    getV1ServicesServiceNameConfigsConfigIdRoute,
    getV1ServicesServiceNameConfigsConfigIdRouteHandler,
  )
  .openapi(
    postV1ServicesServiceNameConfigsSubmitRoute,
    postV1ServicesServiceNameConfigsSubmitRouteHandler,
  )
  .openapi(getV1ServicesServiceNameRolloutsRoute, getV1ServicesServiceNameRolloutsRouteHandler)
  .openapi(postV1ServicesServiceNameRolloutsRoute, postV1ServicesServiceNameRolloutsRouteHandler)
  .openapi(
    getV1ServicesServiceNameRolloutsRolloutIdRoute,
    getV1ServicesServiceNameRolloutsRolloutIdRouteHandler,
  )
  .openapi(postV1ServicesServiceNameUndeleteRoute, postV1ServicesServiceNameUndeleteRouteHandler)
  .openapi(postV1ServicesGenerateConfigReportRoute, postV1ServicesGenerateConfigReportRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1ResourceGetIamPolicyRoute, postV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)

export default app
