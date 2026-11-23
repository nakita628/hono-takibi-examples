import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentConsumerQuotaMetricsRoute,
  getV1beta1ParentProducerOverridesRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRoute,
  postV1beta1ParentProducerOverridesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConsumerQuotaMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsumerQuotaMetricsImportProducerOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentProducerOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentProducerOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
