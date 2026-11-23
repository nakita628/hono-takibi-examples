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
} from './routes'
import {
  getApiClientAllRouteHandler,
  getApiClientCandeleteRouteHandler,
  getApiClientDetailsRouteHandler,
  getApiEstimationAllRouteHandler,
  getApiEstimationDetailsRouteHandler,
  getApiEstimationStatusRouteHandler,
  getApiEstimationUriRouteHandler,
  getApiGeneralCountriesRouteHandler,
  getApiGeneralCurrenciesRouteHandler,
  getApiGeneralDateformatsRouteHandler,
  getApiGeneralUilanguagesRouteHandler,
  getApiInvoiceAllcategoriesRouteHandler,
  getApiInvoiceAllRouteHandler,
  getApiInvoiceDetailsRouteHandler,
  getApiInvoicePdfRouteHandler,
  getApiInvoiceStatusRouteHandler,
  getApiInvoiceUriRouteHandler,
  getApiOrderAllRouteHandler,
  getApiOrderDetailsRouteHandler,
  getApiPaymentlinkAllRouteHandler,
  getApiPaymentlinkUriRouteHandler,
  getApiPaymentSupportedRouteHandler,
  getApiProductAllRouteHandler,
  getApiProductDetailsRouteHandler,
  getApiTaxAllRouteHandler,
  getApiWorktypeAllRouteHandler,
  getApiWorktypeDetailsRouteHandler,
  getApiWorktypeSearchRouteHandler,
  postApiClientDeleteRouteHandler,
  postApiClientNewRouteHandler,
  postApiClientUpdateRouteHandler,
  postApiEstimationChangestatusRouteHandler,
  postApiEstimationConvertRouteHandler,
  postApiEstimationDeleteRouteHandler,
  postApiEstimationNewRouteHandler,
  postApiEstimationSendtoclientRouteHandler,
  postApiEstimationUpdateRouteHandler,
  postApiInvoiceChangestatusRouteHandler,
  postApiInvoiceDeletecategoryRouteHandler,
  postApiInvoiceDeleteRouteHandler,
  postApiInvoiceNewcategoryRouteHandler,
  postApiInvoiceNewRouteHandler,
  postApiInvoiceSendtoaccountantRouteHandler,
  postApiInvoiceSendtoclientRouteHandler,
  postApiInvoiceUpdatecategoryRouteHandler,
  postApiInvoiceUpdateRouteHandler,
  postApiOrderChangeshippingdetailsRouteHandler,
  postApiOrderChangestatusRouteHandler,
  postApiOrderDeleteRouteHandler,
  postApiOrderNewRouteHandler,
  postApiPaymentlinkDeleteRouteHandler,
  postApiPaymentlinkNewRouteHandler,
  postApiProductDeleteRouteHandler,
  postApiProductNewRouteHandler,
  postApiProductUpdateRouteHandler,
  postApiTaxDeleteRouteHandler,
  postApiTaxNewRouteHandler,
  postApiTaxUpdateRouteHandler,
  postApiWorktypeDeleteRouteHandler,
  postApiWorktypeNewRouteHandler,
  postApiWorktypeUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiClientAllRoute, getApiClientAllRouteHandler)
  .openapi(getApiClientCandeleteRoute, getApiClientCandeleteRouteHandler)
  .openapi(postApiClientDeleteRoute, postApiClientDeleteRouteHandler)
  .openapi(getApiClientDetailsRoute, getApiClientDetailsRouteHandler)
  .openapi(postApiClientNewRoute, postApiClientNewRouteHandler)
  .openapi(postApiClientUpdateRoute, postApiClientUpdateRouteHandler)
  .openapi(getApiEstimationAllRoute, getApiEstimationAllRouteHandler)
  .openapi(postApiEstimationChangestatusRoute, postApiEstimationChangestatusRouteHandler)
  .openapi(postApiEstimationConvertRoute, postApiEstimationConvertRouteHandler)
  .openapi(postApiEstimationDeleteRoute, postApiEstimationDeleteRouteHandler)
  .openapi(getApiEstimationDetailsRoute, getApiEstimationDetailsRouteHandler)
  .openapi(postApiEstimationNewRoute, postApiEstimationNewRouteHandler)
  .openapi(postApiEstimationSendtoclientRoute, postApiEstimationSendtoclientRouteHandler)
  .openapi(getApiEstimationStatusRoute, getApiEstimationStatusRouteHandler)
  .openapi(postApiEstimationUpdateRoute, postApiEstimationUpdateRouteHandler)
  .openapi(getApiEstimationUriRoute, getApiEstimationUriRouteHandler)
  .openapi(getApiGeneralCountriesRoute, getApiGeneralCountriesRouteHandler)
  .openapi(getApiGeneralCurrenciesRoute, getApiGeneralCurrenciesRouteHandler)
  .openapi(getApiGeneralDateformatsRoute, getApiGeneralDateformatsRouteHandler)
  .openapi(getApiGeneralUilanguagesRoute, getApiGeneralUilanguagesRouteHandler)
  .openapi(getApiInvoiceAllRoute, getApiInvoiceAllRouteHandler)
  .openapi(getApiInvoiceAllcategoriesRoute, getApiInvoiceAllcategoriesRouteHandler)
  .openapi(postApiInvoiceChangestatusRoute, postApiInvoiceChangestatusRouteHandler)
  .openapi(postApiInvoiceDeleteRoute, postApiInvoiceDeleteRouteHandler)
  .openapi(postApiInvoiceDeletecategoryRoute, postApiInvoiceDeletecategoryRouteHandler)
  .openapi(getApiInvoiceDetailsRoute, getApiInvoiceDetailsRouteHandler)
  .openapi(postApiInvoiceNewRoute, postApiInvoiceNewRouteHandler)
  .openapi(postApiInvoiceNewcategoryRoute, postApiInvoiceNewcategoryRouteHandler)
  .openapi(getApiInvoicePdfRoute, getApiInvoicePdfRouteHandler)
  .openapi(postApiInvoiceSendtoaccountantRoute, postApiInvoiceSendtoaccountantRouteHandler)
  .openapi(postApiInvoiceSendtoclientRoute, postApiInvoiceSendtoclientRouteHandler)
  .openapi(getApiInvoiceStatusRoute, getApiInvoiceStatusRouteHandler)
  .openapi(postApiInvoiceUpdateRoute, postApiInvoiceUpdateRouteHandler)
  .openapi(postApiInvoiceUpdatecategoryRoute, postApiInvoiceUpdatecategoryRouteHandler)
  .openapi(getApiInvoiceUriRoute, getApiInvoiceUriRouteHandler)
  .openapi(getApiOrderAllRoute, getApiOrderAllRouteHandler)
  .openapi(postApiOrderChangeshippingdetailsRoute, postApiOrderChangeshippingdetailsRouteHandler)
  .openapi(postApiOrderChangestatusRoute, postApiOrderChangestatusRouteHandler)
  .openapi(postApiOrderDeleteRoute, postApiOrderDeleteRouteHandler)
  .openapi(getApiOrderDetailsRoute, getApiOrderDetailsRouteHandler)
  .openapi(postApiOrderNewRoute, postApiOrderNewRouteHandler)
  .openapi(getApiPaymentSupportedRoute, getApiPaymentSupportedRouteHandler)
  .openapi(getApiPaymentlinkAllRoute, getApiPaymentlinkAllRouteHandler)
  .openapi(postApiPaymentlinkDeleteRoute, postApiPaymentlinkDeleteRouteHandler)
  .openapi(postApiPaymentlinkNewRoute, postApiPaymentlinkNewRouteHandler)
  .openapi(getApiPaymentlinkUriRoute, getApiPaymentlinkUriRouteHandler)
  .openapi(getApiProductAllRoute, getApiProductAllRouteHandler)
  .openapi(postApiProductDeleteRoute, postApiProductDeleteRouteHandler)
  .openapi(getApiProductDetailsRoute, getApiProductDetailsRouteHandler)
  .openapi(postApiProductNewRoute, postApiProductNewRouteHandler)
  .openapi(postApiProductUpdateRoute, postApiProductUpdateRouteHandler)
  .openapi(getApiTaxAllRoute, getApiTaxAllRouteHandler)
  .openapi(postApiTaxDeleteRoute, postApiTaxDeleteRouteHandler)
  .openapi(postApiTaxNewRoute, postApiTaxNewRouteHandler)
  .openapi(postApiTaxUpdateRoute, postApiTaxUpdateRouteHandler)
  .openapi(getApiWorktypeAllRoute, getApiWorktypeAllRouteHandler)
  .openapi(postApiWorktypeDeleteRoute, postApiWorktypeDeleteRouteHandler)
  .openapi(getApiWorktypeDetailsRoute, getApiWorktypeDetailsRouteHandler)
  .openapi(postApiWorktypeNewRoute, postApiWorktypeNewRouteHandler)
  .openapi(getApiWorktypeSearchRoute, getApiWorktypeSearchRouteHandler)
  .openapi(postApiWorktypeUpdateRoute, postApiWorktypeUpdateRouteHandler)

export default app
