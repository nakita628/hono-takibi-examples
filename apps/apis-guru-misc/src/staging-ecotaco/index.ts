import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsPaymentMethodsRoute,
  getAccountsRoute,
  getCatchementAreasIdRoute,
  getCatchementAreasRoute,
  getCreditCardsIdRoute,
  getCreditCardsRoute,
  getProductsIdRoute,
  getProductsRoute,
  getPromotionalCodesRoute,
  getRidesIdCancelFeesRoute,
  getRidesIdCancelRoute,
  getRidesIdEstimateRoute,
  getRidesIdRoute,
  getRidesPagePagePerPagePerPageRoute,
  getRoute,
  getVersionRoute,
  postAccountsPasswordRoute,
  postAccountsRoute,
  postAccountsSettingsRoute,
  postAccountsSignInRoute,
  postAddressesPlacesAutocompleteRoute,
  postAddressesPlacesDetailsRoute,
  postPromotionalCodesRoute,
  postRidesIdReserveRoute,
  postRidesPagePagePerPagePerPageRoute,
  putAccountsRoute,
  putAccountsUpdatePasswordRoute,
} from './routes'
import {
  getAccountsPaymentMethodsRouteHandler,
  getAccountsRouteHandler,
  getCatchementAreasIdRouteHandler,
  getCatchementAreasRouteHandler,
  getCreditCardsIdRouteHandler,
  getCreditCardsRouteHandler,
  getProductsIdRouteHandler,
  getProductsRouteHandler,
  getPromotionalCodesRouteHandler,
  getRidesIdCancelFeesRouteHandler,
  getRidesIdCancelRouteHandler,
  getRidesIdEstimateRouteHandler,
  getRidesIdRouteHandler,
  getRidesPagePagePerPagePerPageRouteHandler,
  getRouteHandler,
  getVersionRouteHandler,
  postAccountsPasswordRouteHandler,
  postAccountsRouteHandler,
  postAccountsSettingsRouteHandler,
  postAccountsSignInRouteHandler,
  postAddressesPlacesAutocompleteRouteHandler,
  postAddressesPlacesDetailsRouteHandler,
  postPromotionalCodesRouteHandler,
  postRidesIdReserveRouteHandler,
  postRidesPagePagePerPagePerPageRouteHandler,
  putAccountsRouteHandler,
  putAccountsUpdatePasswordRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(putAccountsRoute, putAccountsRouteHandler)
  .openapi(postAccountsPasswordRoute, postAccountsPasswordRouteHandler)
  .openapi(getAccountsPaymentMethodsRoute, getAccountsPaymentMethodsRouteHandler)
  .openapi(postAccountsSettingsRoute, postAccountsSettingsRouteHandler)
  .openapi(postAccountsSignInRoute, postAccountsSignInRouteHandler)
  .openapi(putAccountsUpdatePasswordRoute, putAccountsUpdatePasswordRouteHandler)
  .openapi(postAddressesPlacesAutocompleteRoute, postAddressesPlacesAutocompleteRouteHandler)
  .openapi(postAddressesPlacesDetailsRoute, postAddressesPlacesDetailsRouteHandler)
  .openapi(getCatchementAreasRoute, getCatchementAreasRouteHandler)
  .openapi(getCatchementAreasIdRoute, getCatchementAreasIdRouteHandler)
  .openapi(getCreditCardsRoute, getCreditCardsRouteHandler)
  .openapi(getCreditCardsIdRoute, getCreditCardsIdRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(getProductsIdRoute, getProductsIdRouteHandler)
  .openapi(getPromotionalCodesRoute, getPromotionalCodesRouteHandler)
  .openapi(postPromotionalCodesRoute, postPromotionalCodesRouteHandler)
  .openapi(getRidesIdRoute, getRidesIdRouteHandler)
  .openapi(getRidesIdCancelRoute, getRidesIdCancelRouteHandler)
  .openapi(getRidesIdCancelFeesRoute, getRidesIdCancelFeesRouteHandler)
  .openapi(getRidesIdEstimateRoute, getRidesIdEstimateRouteHandler)
  .openapi(postRidesIdReserveRoute, postRidesIdReserveRouteHandler)
  .openapi(getRidesPagePagePerPagePerPageRoute, getRidesPagePagePerPagePerPageRouteHandler)
  .openapi(postRidesPagePagePerPagePerPageRoute, postRidesPagePagePerPagePerPageRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
