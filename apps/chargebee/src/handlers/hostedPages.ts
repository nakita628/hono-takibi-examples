import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHostedPagesHostedPageIdRoute,
  getHostedPagesRoute,
  postHostedPagesAcceptQuoteRoute,
  postHostedPagesCheckoutExistingForItemsRoute,
  postHostedPagesCheckoutGiftForItemsRoute,
  postHostedPagesCheckoutNewForItemsRoute,
  postHostedPagesCheckoutOneTimeForItemsRoute,
  postHostedPagesClaimGiftRoute,
  postHostedPagesCollectNowRoute,
  postHostedPagesEventsRoute,
  postHostedPagesExtendSubscriptionRoute,
  postHostedPagesHostedPageIdAcknowledgeRoute,
  postHostedPagesManagePaymentSourcesRoute,
  postHostedPagesPreCancelRoute,
  postHostedPagesRetrieveAgreementPdfRoute,
  postHostedPagesViewVoucherRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostedPagesHandler = app
  .openapi(postHostedPagesCheckoutOneTimeForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesExtendSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesCheckoutGiftForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHostedPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesViewVoucherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesCollectNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesAcceptQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesCheckoutNewForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesClaimGiftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesCheckoutExistingForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesPreCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesHostedPageIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesRetrieveAgreementPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHostedPagesHostedPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHostedPagesManagePaymentSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
