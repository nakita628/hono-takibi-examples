import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentProductsRoute,
  getV1ParentPromotionsRoute,
  postV1NameCancelRoute,
  postV1NameEntitleRoute,
  postV1NameExtendRoute,
  postV1NameUndoCancelRoute,
  postV1ParentPromotionsFindEligibleRoute,
  postV1ParentSubscriptionsProvisionRoute,
  postV1ParentSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameEntitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameUndoCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPromotionsFindEligibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSubscriptionsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
