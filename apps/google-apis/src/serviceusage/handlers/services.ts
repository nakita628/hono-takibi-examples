import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAdminOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAdminOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConsumerOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsumerOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentConsumerQuotaMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsumerQuotaMetricsImportAdminOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentConsumerQuotaMetricsImportConsumerOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentServicesBatchEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentGenerateServiceIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
