import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContinuousProjectsIdRoute,
  deleteContinuousProjectsIdSubscriptionRoute,
  deleteContinuousProjectsProjectIdWidgetsWidgetIdRoute,
  getContinuousProjectsIdAnalyticsTokenRoute,
  getContinuousProjectsIdRoute,
  getContinuousProjectsIdSubscriptionRoute,
  getContinuousProjectsProjectIdDocumentsDocumentIdProgressRoute,
  getContinuousProjectsProjectIdDocumentsDocumentIdRoute,
  getContinuousProjectsProjectIdDocumentsRoute,
  getContinuousProjectsProjectIdInvoicesRoute,
  getContinuousProjectsProjectIdProgressRoute,
  getContinuousProjectsProjectIdWidgetsRoute,
  getContinuousProjectsProjectIdWidgetsWidgetIdRoute,
  getContinuousProjectsRoute,
  postContinuousProjectsIdCollectAnalyticsRoute,
  postContinuousProjectsIdCompleteRoute,
  postContinuousProjectsIdDocumentsDocumentIdCompleteRoute,
  postContinuousProjectsIdDocumentsDocumentIdQuoteRoute,
  postContinuousProjectsIdDocumentsQuoteRoute,
  postContinuousProjectsIdLanguagesQuoteRoute,
  postContinuousProjectsIdLanguagesTargetLanguageCompleteRoute,
  postContinuousProjectsIdLanguagesTargetLanguageQuoteRoute,
  postContinuousProjectsIdRoute,
  postContinuousProjectsIdSubscriptionRoute,
  postContinuousProjectsIdTranslateTargetLanguageRoute,
  postContinuousProjectsProjectIdDocumentsDocumentIdRoute,
  postContinuousProjectsProjectIdDocumentsProgressRoute,
  postContinuousProjectsProjectIdDocumentsRoute,
  postContinuousProjectsProjectIdWidgetsRoute,
  postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRoute,
  postContinuousProjectsProjectIdWidgetsWidgetIdRoute,
  postContinuousProjectsRoute,
  putContinuousProjectsIdSubscriptionPaymentRoute,
  putContinuousProjectsIdSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const continuousProjectHandler = app
  .openapi(getContinuousProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContinuousProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsIdAnalyticsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdCollectAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdDocumentsQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdDocumentsDocumentIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdDocumentsDocumentIdQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdLanguagesQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdLanguagesTargetLanguageCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdLanguagesTargetLanguageQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContinuousProjectsIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContinuousProjectsIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContinuousProjectsIdSubscriptionPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsIdTranslateTargetLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdDocumentsProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdDocumentsDocumentIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContinuousProjectsProjectIdWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdWidgetsWidgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdWidgetsWidgetIdResetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
