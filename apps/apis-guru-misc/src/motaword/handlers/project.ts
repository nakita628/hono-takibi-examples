import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsIdRoute,
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
  getProjectsProjectIdVendorsRoute,
  getProjectsRoute,
  getProjectsVendorRoute,
  getUserIdProjectsVendorRoute,
  postProjectsIdAssignCmRoute,
  postProjectsIdCancelRoute,
  postProjectsIdDeliverRoute,
  postProjectsIdEmailQuoteRoute,
  postProjectsIdLaunchRoute,
  postProjectsIdPackageLanguageRoute,
  postProjectsIdPackageRoute,
  postProjectsIdRecreateRoute,
  postProjectsIdReportsRoute,
  postProjectsRoute,
  putProjectsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
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
  .openapi(getProjectsProjectIdVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserIdProjectsVendorRoute, (c) => {
    throw new Error('Not implemented')
  })
