import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ProductAvailabilitySkuSubjectIdRoute,
  getApiV1ProductCatalogCountryRoute,
  getApiV1ProductNotifierNotifierIdRoute,
  getApiV1ProductOrderIdRoute,
  getApiV1ProductSearchSubjectIdRoute,
  getApiV1ProductStatusOrderIdRoute,
  postApiV1ProductNotifierOrderIdTypeUriRoute,
  postApiV1ProductOrderConciergeRoute,
  postApiV1ProductOrderSkuOptionSubjectIdRoute,
  postApiV1ProductOrderSkuSubjectIdRoute,
  postApiV1ProductOrderUboRoute,
  postApiV1ProductUpdateActionOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1ProductHandler = app
  .openapi(getApiV1ProductAvailabilitySkuSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductCatalogCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductNotifierNotifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductNotifierOrderIdTypeUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderConciergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderUboRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderSkuOptionSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderSkuSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductSearchSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductStatusOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductUpdateActionOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
