import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsIdRoute,
  deleteProjectsIdWebhooksRoute,
  deleteProjectsProjectIdDocumentsDocumentIdRoute,
  deleteProjectsProjectIdGlossariesGlossaryIdRoute,
  deleteProjectsProjectIdStyleguidesStyleGuideIdRoute,
  getProjectsFromInternalIdProjectIdRoute,
  getProjectsIdCallbackActionTypeRoute,
  getProjectsIdDownloadLanguageRoute,
  getProjectsIdDownloadRoute,
  getProjectsIdInvoiceHtmlRoute,
  getProjectsIdInvoicePdfRoute,
  getProjectsIdInvoiceRoute,
  getProjectsIdPackageCheckRoute,
  getProjectsIdProgressRoute,
  getProjectsIdRoute,
  getProjectsIdSalesActivitiesRoute,
  getProjectsIdWebhooksRoute,
  getProjectsProjectIdActivitiesActivityIdCommentsRoute,
  getProjectsProjectIdActivitiesActivityIdRoute,
  getProjectsProjectIdActivitiesRoute,
  getProjectsProjectIdCommentsRoute,
  getProjectsProjectIdDocumentsDocumentIdDownloadRoute,
  getProjectsProjectIdDocumentsDocumentIdRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsRoute,
  getProjectsProjectIdDocumentsRoute,
  getProjectsProjectIdGlossariesGlossaryIdDownloadRoute,
  getProjectsProjectIdGlossariesGlossaryIdRoute,
  getProjectsProjectIdGlossariesRoute,
  getProjectsProjectIdStringsLanguageCodePackageStatusRoute,
  getProjectsProjectIdStringsLanguageRoute,
  getProjectsProjectIdStringsPackageStatusRoute,
  getProjectsProjectIdStringsRoute,
  getProjectsProjectIdStyleguidesRoute,
  getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute,
  getProjectsProjectIdStyleguidesStyleGuideIdRoute,
  getProjectsProjectIdTranslationsLanguageRoute,
  getProjectsProjectIdTranslationsRoute,
  getProjectsProjectIdVendorsRoute,
  getProjectsRoute,
  getProjectsVendorRoute,
  postProjectsIdAssignCmRoute,
  postProjectsIdCancelRoute,
  postProjectsIdDeliverRoute,
  postProjectsIdEmailQuoteRoute,
  postProjectsIdLaunchRoute,
  postProjectsIdPackageLanguageRoute,
  postProjectsIdPackageRoute,
  postProjectsIdRecreateRoute,
  postProjectsIdReportsRoute,
  postProjectsIdSalesActivitiesRoute,
  postProjectsIdWebhooksRoute,
  postProjectsProjectIdActivitiesActivityIdRoute,
  postProjectsProjectIdDocumentsDocumentIdRoute,
  postProjectsProjectIdDocumentsRoute,
  postProjectsProjectIdGlossariesRoute,
  postProjectsProjectIdStringsLanguageCodePackageRoute,
  postProjectsProjectIdStringsPackageRoute,
  postProjectsProjectIdStyleguidesRoute,
  postProjectsRoute,
  putProjectsIdRoute,
  putProjectsIdWebhooksRoute,
  putProjectsProjectIdGlossariesGlossaryIdRoute,
  putProjectsProjectIdStyleguidesStyleGuideIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsFromInternalIdProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdAssignCmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdCallbackActionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdDeliverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdDownloadLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdEmailQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdInvoiceHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdInvoicePdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdLaunchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdPackageCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdPackageLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdRecreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdSalesActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdSalesActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdActivitiesActivityIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdGlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdGlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGlossariesGlossaryIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdStringsPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsPackageStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdStringsLanguageCodePackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsLanguageCodePackageStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStyleguidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdStyleguidesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdStyleguidesStyleGuideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStyleguidesStyleGuideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdStyleguidesStyleGuideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStyleguidesStyleGuideIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
