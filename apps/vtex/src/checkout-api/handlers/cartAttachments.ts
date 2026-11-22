import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCheckoutPubProfilesRoute,
  postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataRoute,
  postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataRoute,
  postApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataRoute,
  postApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataRoute,
  postApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataRoute,
  postApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartAttachmentsHandler = app
  .openapi(postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientPreferencesDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdAttachmentsClientProfileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdAttachmentsMarketingDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdAttachmentsMerchantContextDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdAttachmentsPaymentDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdAttachmentsShippingDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCheckoutPubProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
