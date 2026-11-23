import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysKeyConfigsConfigRoute,
  deleteKeysKeyLicenseesLicenseeRoute,
  getAddressesRoute,
  getAutocompleteAddressesAddressGbrRoute,
  getAutocompleteAddressesAddressUsaRoute,
  getAutocompleteAddressesRoute,
  getEmailsRoute,
  getKeysKeyConfigsConfigRoute,
  getKeysKeyConfigsRoute,
  getKeysKeyDetailsRoute,
  getKeysKeyLicenseesLicenseeRoute,
  getKeysKeyLicenseesRoute,
  getKeysKeyLookupsRoute,
  getKeysKeyRoute,
  getKeysKeyUsageRoute,
  getPhoneNumbersRoute,
  getPlacesPlaceRoute,
  getPlacesRoute,
  getPostcodesPostcodeRoute,
  getUdprnUdprnRoute,
  getUmprnUmprnRoute,
  postCleanseAddressesRoute,
  postKeysKeyConfigsConfigRoute,
  postKeysKeyConfigsRoute,
  postKeysKeyLicenseesRoute,
  putKeysKeyLicenseesLicenseeRoute,
} from './routes'
import {
  deleteKeysKeyConfigsConfigRouteHandler,
  deleteKeysKeyLicenseesLicenseeRouteHandler,
  getAddressesRouteHandler,
  getAutocompleteAddressesAddressGbrRouteHandler,
  getAutocompleteAddressesAddressUsaRouteHandler,
  getAutocompleteAddressesRouteHandler,
  getEmailsRouteHandler,
  getKeysKeyConfigsConfigRouteHandler,
  getKeysKeyConfigsRouteHandler,
  getKeysKeyDetailsRouteHandler,
  getKeysKeyLicenseesLicenseeRouteHandler,
  getKeysKeyLicenseesRouteHandler,
  getKeysKeyLookupsRouteHandler,
  getKeysKeyRouteHandler,
  getKeysKeyUsageRouteHandler,
  getPhoneNumbersRouteHandler,
  getPlacesPlaceRouteHandler,
  getPlacesRouteHandler,
  getPostcodesPostcodeRouteHandler,
  getUdprnUdprnRouteHandler,
  getUmprnUmprnRouteHandler,
  postCleanseAddressesRouteHandler,
  postKeysKeyConfigsConfigRouteHandler,
  postKeysKeyConfigsRouteHandler,
  postKeysKeyLicenseesRouteHandler,
  putKeysKeyLicenseesLicenseeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAddressesRoute, getAddressesRouteHandler)
  .openapi(getAutocompleteAddressesRoute, getAutocompleteAddressesRouteHandler)
  .openapi(getAutocompleteAddressesAddressGbrRoute, getAutocompleteAddressesAddressGbrRouteHandler)
  .openapi(getAutocompleteAddressesAddressUsaRoute, getAutocompleteAddressesAddressUsaRouteHandler)
  .openapi(postCleanseAddressesRoute, postCleanseAddressesRouteHandler)
  .openapi(getEmailsRoute, getEmailsRouteHandler)
  .openapi(getKeysKeyRoute, getKeysKeyRouteHandler)
  .openapi(getKeysKeyConfigsRoute, getKeysKeyConfigsRouteHandler)
  .openapi(postKeysKeyConfigsRoute, postKeysKeyConfigsRouteHandler)
  .openapi(deleteKeysKeyConfigsConfigRoute, deleteKeysKeyConfigsConfigRouteHandler)
  .openapi(getKeysKeyConfigsConfigRoute, getKeysKeyConfigsConfigRouteHandler)
  .openapi(postKeysKeyConfigsConfigRoute, postKeysKeyConfigsConfigRouteHandler)
  .openapi(getKeysKeyDetailsRoute, getKeysKeyDetailsRouteHandler)
  .openapi(getKeysKeyLicenseesRoute, getKeysKeyLicenseesRouteHandler)
  .openapi(postKeysKeyLicenseesRoute, postKeysKeyLicenseesRouteHandler)
  .openapi(deleteKeysKeyLicenseesLicenseeRoute, deleteKeysKeyLicenseesLicenseeRouteHandler)
  .openapi(getKeysKeyLicenseesLicenseeRoute, getKeysKeyLicenseesLicenseeRouteHandler)
  .openapi(putKeysKeyLicenseesLicenseeRoute, putKeysKeyLicenseesLicenseeRouteHandler)
  .openapi(getKeysKeyLookupsRoute, getKeysKeyLookupsRouteHandler)
  .openapi(getKeysKeyUsageRoute, getKeysKeyUsageRouteHandler)
  .openapi(getPhoneNumbersRoute, getPhoneNumbersRouteHandler)
  .openapi(getPlacesRoute, getPlacesRouteHandler)
  .openapi(getPlacesPlaceRoute, getPlacesPlaceRouteHandler)
  .openapi(getPostcodesPostcodeRoute, getPostcodesPostcodeRouteHandler)
  .openapi(getUdprnUdprnRoute, getUdprnUdprnRouteHandler)
  .openapi(getUmprnUmprnRoute, getUmprnUmprnRouteHandler)

export default app
