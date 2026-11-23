import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConsumerQuotaMetricsRoute,
  getV1beta1ParentProducerOverridesRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRoute,
  postV1beta1ParentProducerOverridesRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentConsumerQuotaMetricsRouteHandler,
  getV1beta1ParentProducerOverridesRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRouteHandler,
  postV1beta1ParentProducerOverridesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(
    getV1beta1ParentConsumerQuotaMetricsRoute,
    getV1beta1ParentConsumerQuotaMetricsRouteHandler,
  )
  .openapi(
    postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRoute,
    postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRouteHandler,
  )
  .openapi(getV1beta1ParentProducerOverridesRoute, getV1beta1ParentProducerOverridesRouteHandler)
  .openapi(postV1beta1ParentProducerOverridesRoute, postV1beta1ParentProducerOverridesRouteHandler)

export default app
