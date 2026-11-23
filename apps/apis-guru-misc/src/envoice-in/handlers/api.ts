import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiClientAllRoute,
  getApiClientCandeleteRoute,
  getApiClientDetailsRoute,
  getApiEstimationAllRoute,
  getApiEstimationDetailsRoute,
  getApiEstimationStatusRoute,
  getApiEstimationUriRoute,
  getApiGeneralCountriesRoute,
  getApiGeneralCurrenciesRoute,
  getApiGeneralDateformatsRoute,
  getApiGeneralUilanguagesRoute,
  getApiInvoiceAllcategoriesRoute,
  getApiInvoiceAllRoute,
  getApiInvoiceDetailsRoute,
  getApiInvoicePdfRoute,
  getApiInvoiceStatusRoute,
  getApiInvoiceUriRoute,
  getApiOrderAllRoute,
  getApiOrderDetailsRoute,
  getApiPaymentlinkAllRoute,
  getApiPaymentlinkUriRoute,
  getApiPaymentSupportedRoute,
  getApiProductAllRoute,
  getApiProductDetailsRoute,
  getApiTaxAllRoute,
  getApiWorktypeAllRoute,
  getApiWorktypeDetailsRoute,
  getApiWorktypeSearchRoute,
  postApiClientDeleteRoute,
  postApiClientNewRoute,
  postApiClientUpdateRoute,
  postApiEstimationChangestatusRoute,
  postApiEstimationConvertRoute,
  postApiEstimationDeleteRoute,
  postApiEstimationNewRoute,
  postApiEstimationSendtoclientRoute,
  postApiEstimationUpdateRoute,
  postApiInvoiceChangestatusRoute,
  postApiInvoiceDeletecategoryRoute,
  postApiInvoiceDeleteRoute,
  postApiInvoiceNewcategoryRoute,
  postApiInvoiceNewRoute,
  postApiInvoiceSendtoaccountantRoute,
  postApiInvoiceSendtoclientRoute,
  postApiInvoiceUpdatecategoryRoute,
  postApiInvoiceUpdateRoute,
  postApiOrderChangeshippingdetailsRoute,
  postApiOrderChangestatusRoute,
  postApiOrderDeleteRoute,
  postApiOrderNewRoute,
  postApiPaymentlinkDeleteRoute,
  postApiPaymentlinkNewRoute,
  postApiProductDeleteRoute,
  postApiProductNewRoute,
  postApiProductUpdateRoute,
  postApiTaxDeleteRoute,
  postApiTaxNewRoute,
  postApiTaxUpdateRoute,
  postApiWorktypeDeleteRoute,
  postApiWorktypeNewRoute,
  postApiWorktypeUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiClientAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientCandeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClientDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClientUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationChangestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationSendtoclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEstimationUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEstimationUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralDateformatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGeneralUilanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceAllcategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceChangestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceDeletecategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceNewcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoicePdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceSendtoaccountantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceSendtoclientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInvoiceUpdatecategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInvoiceUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrderAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderChangeshippingdetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderChangestatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrderDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrderNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentlinkAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentlinkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentlinkNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentlinkUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProductAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProductDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProductDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProductNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProductUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaxAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaxDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaxNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaxUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorktypeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorktypeDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorktypeDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorktypeNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorktypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorktypeUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
