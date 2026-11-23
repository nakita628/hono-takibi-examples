import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1OperationsRoute,
  getV1beta1ParentAdminOverridesRoute,
  getV1beta1ParentConsumerOverridesRoute,
  getV1beta1ParentConsumerQuotaMetricsRoute,
  getV1beta1ParentServicesRoute,
  patchV1beta1NameRoute,
  postV1beta1NameDisableRoute,
  postV1beta1NameEnableRoute,
  postV1beta1ParentAdminOverridesRoute,
  postV1beta1ParentConsumerOverridesRoute,
  postV1beta1ParentConsumerQuotaMetricsImportAdminOverridesRoute,
  postV1beta1ParentConsumerQuotaMetricsImportConsumerOverridesRoute,
  postV1beta1ParentGenerateServiceIdentityRoute,
  postV1beta1ParentServicesBatchEnableRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1OperationsRouteHandler,
  getV1beta1ParentAdminOverridesRouteHandler,
  getV1beta1ParentConsumerOverridesRouteHandler,
  getV1beta1ParentConsumerQuotaMetricsRouteHandler,
  getV1beta1ParentServicesRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameDisableRouteHandler,
  postV1beta1NameEnableRouteHandler,
  postV1beta1ParentAdminOverridesRouteHandler,
  postV1beta1ParentConsumerOverridesRouteHandler,
  postV1beta1ParentConsumerQuotaMetricsImportAdminOverridesRouteHandler,
  postV1beta1ParentConsumerQuotaMetricsImportConsumerOverridesRouteHandler,
  postV1beta1ParentGenerateServiceIdentityRouteHandler,
  postV1beta1ParentServicesBatchEnableRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1OperationsRoute, getV1beta1OperationsRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameDisableRoute, postV1beta1NameDisableRouteHandler)
  .openapi(postV1beta1NameEnableRoute, postV1beta1NameEnableRouteHandler)
  .openapi(getV1beta1ParentAdminOverridesRoute, getV1beta1ParentAdminOverridesRouteHandler)
  .openapi(postV1beta1ParentAdminOverridesRoute, postV1beta1ParentAdminOverridesRouteHandler)
  .openapi(getV1beta1ParentConsumerOverridesRoute, getV1beta1ParentConsumerOverridesRouteHandler)
  .openapi(postV1beta1ParentConsumerOverridesRoute, postV1beta1ParentConsumerOverridesRouteHandler)
  .openapi(
    getV1beta1ParentConsumerQuotaMetricsRoute,
    getV1beta1ParentConsumerQuotaMetricsRouteHandler,
  )
  .openapi(
    postV1beta1ParentConsumerQuotaMetricsImportAdminOverridesRoute,
    postV1beta1ParentConsumerQuotaMetricsImportAdminOverridesRouteHandler,
  )
  .openapi(
    postV1beta1ParentConsumerQuotaMetricsImportConsumerOverridesRoute,
    postV1beta1ParentConsumerQuotaMetricsImportConsumerOverridesRouteHandler,
  )
  .openapi(getV1beta1ParentServicesRoute, getV1beta1ParentServicesRouteHandler)
  .openapi(
    postV1beta1ParentServicesBatchEnableRoute,
    postV1beta1ParentServicesBatchEnableRouteHandler,
  )
  .openapi(
    postV1beta1ParentGenerateServiceIdentityRoute,
    postV1beta1ParentGenerateServiceIdentityRouteHandler,
  )

export default app
