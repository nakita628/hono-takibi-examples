import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AllowlistPrivateAllowlistIdContentRoute,
  deleteV1AllowlistPrivateAllowlistIdRoute,
  deleteV1AllowlistPublicAllowlistIdRoute,
  deleteV1DenylistPrivateDenylistIdContentRoute,
  deleteV1DenylistPrivateDenylistIdRoute,
  deleteV1DenylistPublicDenylistIdRoute,
  deleteV1DenylistReportedIpAllRoute,
  deleteV1DenylistReportedIpIpAddressRoute,
  deleteV1OriginTokenRoute,
  getV1AllowlistPrivateAllowlistIdContentRoute,
  getV1AllowlistPrivateAllowlistIdRoute,
  getV1AllowlistPrivateAllResourceTypeRoute,
  getV1AllowlistPrivateAllRoute,
  getV1AllowlistPrivateIpAddressRoute,
  getV1AllowlistPublicAllowlistIdRoute,
  getV1AllowlistPublicAllResourceTypeRoute,
  getV1AllowlistPublicAllRoute,
  getV1AllowlistPublicIpAddressRoute,
  getV1AllowlistPublicOwnedResourceTypeRoute,
  getV1AllowlistPublicOwnedRoute,
  getV1AsnIpIpAddressRoute,
  getV1AsnNumberPrefixesRoute,
  getV1AsnNumberRoute,
  getV1AsnRegistryAllRoute,
  getV1AsnRegistryCodeRoute,
  getV1AsnStatusAllRoute,
  getV1AsnStatusCodeRoute,
  getV1AssessIpIpAddressRoute,
  getV1DatacenterDatacenterIdPrefixesRoute,
  getV1DatacenterDatacenterIdRoute,
  getV1DatacenterIpIpAddressRoute,
  getV1DatasetIpNameRoute,
  getV1DatasetIpRoute,
  getV1DenylistPrivateAllResourceTypeRoute,
  getV1DenylistPrivateAllRoute,
  getV1DenylistPrivateDenylistIdContentRoute,
  getV1DenylistPrivateDenylistIdRoute,
  getV1DenylistPrivateIpAddressRoute,
  getV1DenylistPublicAllResourceTypeRoute,
  getV1DenylistPublicAllRoute,
  getV1DenylistPublicDenylistIdRoute,
  getV1DenylistPublicIpAddressRoute,
  getV1DenylistPublicOwnedResourceTypeRoute,
  getV1DenylistPublicOwnedRoute,
  getV1DenylistReportedIpIpAddressRoute,
  getV1DenylistReportedIpRoute,
  getV1GeoIpAddressRoute,
  getV1LogIpIdLogchangeIdRoute,
  getV1LogIpIpAddressRoute,
  getV1OriginAddressesRoute,
  getV1OriginAllRoute,
  getV1OriginClientAnalysisRoute,
  getV1OriginCookiesRoute,
  getV1OriginRoute,
  getV1OriginScriptsRoute,
  getV1OriginStatusDetailsRoute,
  getV1OriginStatusDetailStatusIdRoute,
  getV1OriginTokenAllRoute,
  getV1OriginTrafficAnalysisRoute,
  getV1SourceIpRoute,
  getV1SourceIpSourceRangeTimeRangeRoute,
  getV1SourceIpSourceRoute,
  getV1TokenActivityRoute,
  getV1TokenRoute,
  getV1UaDeviceCodeRoute,
  getV1UaFamilyCodeRoute,
  getV1UaOsCodeRoute,
  getV1UaTypeCodeRoute,
  getV1UaUserAgentUrlencodedRoute,
  getV1UaVendorCodeRoute,
  postV1AllowlistPrivateRoute,
  postV1AsnPrefixRoute,
  postV1AssessIpCsvRoute,
  postV1AssessIpRoute,
  postV1DatacenterPrefixRoute,
  postV1DenylistPrivateRoute,
  postV1GeoCsvRoute,
  postV1GeoRoute,
  postV1OriginStatusRoute,
  postV1OriginTokenNewRoute,
  postV1OriginTokenRoute,
  postV1UaCsvRoute,
  postV1UaRoute,
  putV1AllowlistPrivateAllowlistIdContentRoute,
  putV1AllowlistPrivateAllowlistIdOriginRoute,
  putV1AllowlistPrivateAllowlistIdRoute,
  putV1AllowlistPublicAllowlistIdOriginRoute,
  putV1AllowlistPublicAllowlistIdRoute,
  putV1DenylistPrivateDenylistIdContentRoute,
  putV1DenylistPrivateDenylistIdOriginRoute,
  putV1DenylistPrivateDenylistIdRoute,
  putV1DenylistPublicDenylistIdOriginRoute,
  putV1DenylistPublicDenylistIdRoute,
  putV1OriginRoute,
  putV1OriginTokenDisableRoute,
  putV1OriginTokenEnableRoute,
} from './routes'
import {
  deleteV1AllowlistPrivateAllowlistIdContentRouteHandler,
  deleteV1AllowlistPrivateAllowlistIdRouteHandler,
  deleteV1AllowlistPublicAllowlistIdRouteHandler,
  deleteV1DenylistPrivateDenylistIdContentRouteHandler,
  deleteV1DenylistPrivateDenylistIdRouteHandler,
  deleteV1DenylistPublicDenylistIdRouteHandler,
  deleteV1DenylistReportedIpAllRouteHandler,
  deleteV1DenylistReportedIpIpAddressRouteHandler,
  deleteV1OriginTokenRouteHandler,
  getV1AllowlistPrivateAllowlistIdContentRouteHandler,
  getV1AllowlistPrivateAllowlistIdRouteHandler,
  getV1AllowlistPrivateAllResourceTypeRouteHandler,
  getV1AllowlistPrivateAllRouteHandler,
  getV1AllowlistPrivateIpAddressRouteHandler,
  getV1AllowlistPublicAllowlistIdRouteHandler,
  getV1AllowlistPublicAllResourceTypeRouteHandler,
  getV1AllowlistPublicAllRouteHandler,
  getV1AllowlistPublicIpAddressRouteHandler,
  getV1AllowlistPublicOwnedResourceTypeRouteHandler,
  getV1AllowlistPublicOwnedRouteHandler,
  getV1AsnIpIpAddressRouteHandler,
  getV1AsnNumberPrefixesRouteHandler,
  getV1AsnNumberRouteHandler,
  getV1AsnRegistryAllRouteHandler,
  getV1AsnRegistryCodeRouteHandler,
  getV1AsnStatusAllRouteHandler,
  getV1AsnStatusCodeRouteHandler,
  getV1AssessIpIpAddressRouteHandler,
  getV1DatacenterDatacenterIdPrefixesRouteHandler,
  getV1DatacenterDatacenterIdRouteHandler,
  getV1DatacenterIpIpAddressRouteHandler,
  getV1DatasetIpNameRouteHandler,
  getV1DatasetIpRouteHandler,
  getV1DenylistPrivateAllResourceTypeRouteHandler,
  getV1DenylistPrivateAllRouteHandler,
  getV1DenylistPrivateDenylistIdContentRouteHandler,
  getV1DenylistPrivateDenylistIdRouteHandler,
  getV1DenylistPrivateIpAddressRouteHandler,
  getV1DenylistPublicAllResourceTypeRouteHandler,
  getV1DenylistPublicAllRouteHandler,
  getV1DenylistPublicDenylistIdRouteHandler,
  getV1DenylistPublicIpAddressRouteHandler,
  getV1DenylistPublicOwnedResourceTypeRouteHandler,
  getV1DenylistPublicOwnedRouteHandler,
  getV1DenylistReportedIpIpAddressRouteHandler,
  getV1DenylistReportedIpRouteHandler,
  getV1GeoIpAddressRouteHandler,
  getV1LogIpIdLogchangeIdRouteHandler,
  getV1LogIpIpAddressRouteHandler,
  getV1OriginAddressesRouteHandler,
  getV1OriginAllRouteHandler,
  getV1OriginClientAnalysisRouteHandler,
  getV1OriginCookiesRouteHandler,
  getV1OriginRouteHandler,
  getV1OriginScriptsRouteHandler,
  getV1OriginStatusDetailsRouteHandler,
  getV1OriginStatusDetailStatusIdRouteHandler,
  getV1OriginTokenAllRouteHandler,
  getV1OriginTrafficAnalysisRouteHandler,
  getV1SourceIpRouteHandler,
  getV1SourceIpSourceRangeTimeRangeRouteHandler,
  getV1SourceIpSourceRouteHandler,
  getV1TokenActivityRouteHandler,
  getV1TokenRouteHandler,
  getV1UaDeviceCodeRouteHandler,
  getV1UaFamilyCodeRouteHandler,
  getV1UaOsCodeRouteHandler,
  getV1UaTypeCodeRouteHandler,
  getV1UaUserAgentUrlencodedRouteHandler,
  getV1UaVendorCodeRouteHandler,
  postV1AllowlistPrivateRouteHandler,
  postV1AsnPrefixRouteHandler,
  postV1AssessIpCsvRouteHandler,
  postV1AssessIpRouteHandler,
  postV1DatacenterPrefixRouteHandler,
  postV1DenylistPrivateRouteHandler,
  postV1GeoCsvRouteHandler,
  postV1GeoRouteHandler,
  postV1OriginStatusRouteHandler,
  postV1OriginTokenNewRouteHandler,
  postV1OriginTokenRouteHandler,
  postV1UaCsvRouteHandler,
  postV1UaRouteHandler,
  putV1AllowlistPrivateAllowlistIdContentRouteHandler,
  putV1AllowlistPrivateAllowlistIdOriginRouteHandler,
  putV1AllowlistPrivateAllowlistIdRouteHandler,
  putV1AllowlistPublicAllowlistIdOriginRouteHandler,
  putV1AllowlistPublicAllowlistIdRouteHandler,
  putV1DenylistPrivateDenylistIdContentRouteHandler,
  putV1DenylistPrivateDenylistIdOriginRouteHandler,
  putV1DenylistPrivateDenylistIdRouteHandler,
  putV1DenylistPublicDenylistIdOriginRouteHandler,
  putV1DenylistPublicDenylistIdRouteHandler,
  putV1OriginRouteHandler,
  putV1OriginTokenDisableRouteHandler,
  putV1OriginTokenEnableRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AllowlistPrivateRoute, postV1AllowlistPrivateRouteHandler)
  .openapi(getV1AllowlistPrivateAllRoute, getV1AllowlistPrivateAllRouteHandler)
  .openapi(
    getV1AllowlistPrivateAllResourceTypeRoute,
    getV1AllowlistPrivateAllResourceTypeRouteHandler,
  )
  .openapi(getV1AllowlistPrivateIpAddressRoute, getV1AllowlistPrivateIpAddressRouteHandler)
  .openapi(
    deleteV1AllowlistPrivateAllowlistIdRoute,
    deleteV1AllowlistPrivateAllowlistIdRouteHandler,
  )
  .openapi(getV1AllowlistPrivateAllowlistIdRoute, getV1AllowlistPrivateAllowlistIdRouteHandler)
  .openapi(putV1AllowlistPrivateAllowlistIdRoute, putV1AllowlistPrivateAllowlistIdRouteHandler)
  .openapi(
    deleteV1AllowlistPrivateAllowlistIdContentRoute,
    deleteV1AllowlistPrivateAllowlistIdContentRouteHandler,
  )
  .openapi(
    getV1AllowlistPrivateAllowlistIdContentRoute,
    getV1AllowlistPrivateAllowlistIdContentRouteHandler,
  )
  .openapi(
    putV1AllowlistPrivateAllowlistIdContentRoute,
    putV1AllowlistPrivateAllowlistIdContentRouteHandler,
  )
  .openapi(
    putV1AllowlistPrivateAllowlistIdOriginRoute,
    putV1AllowlistPrivateAllowlistIdOriginRouteHandler,
  )
  .openapi(getV1AllowlistPublicAllRoute, getV1AllowlistPublicAllRouteHandler)
  .openapi(
    getV1AllowlistPublicAllResourceTypeRoute,
    getV1AllowlistPublicAllResourceTypeRouteHandler,
  )
  .openapi(getV1AllowlistPublicIpAddressRoute, getV1AllowlistPublicIpAddressRouteHandler)
  .openapi(getV1AllowlistPublicOwnedRoute, getV1AllowlistPublicOwnedRouteHandler)
  .openapi(
    getV1AllowlistPublicOwnedResourceTypeRoute,
    getV1AllowlistPublicOwnedResourceTypeRouteHandler,
  )
  .openapi(deleteV1AllowlistPublicAllowlistIdRoute, deleteV1AllowlistPublicAllowlistIdRouteHandler)
  .openapi(getV1AllowlistPublicAllowlistIdRoute, getV1AllowlistPublicAllowlistIdRouteHandler)
  .openapi(putV1AllowlistPublicAllowlistIdRoute, putV1AllowlistPublicAllowlistIdRouteHandler)
  .openapi(
    putV1AllowlistPublicAllowlistIdOriginRoute,
    putV1AllowlistPublicAllowlistIdOriginRouteHandler,
  )
  .openapi(getV1AsnIpIpAddressRoute, getV1AsnIpIpAddressRouteHandler)
  .openapi(postV1AsnPrefixRoute, postV1AsnPrefixRouteHandler)
  .openapi(getV1AsnRegistryAllRoute, getV1AsnRegistryAllRouteHandler)
  .openapi(getV1AsnRegistryCodeRoute, getV1AsnRegistryCodeRouteHandler)
  .openapi(getV1AsnStatusAllRoute, getV1AsnStatusAllRouteHandler)
  .openapi(getV1AsnStatusCodeRoute, getV1AsnStatusCodeRouteHandler)
  .openapi(getV1AsnNumberRoute, getV1AsnNumberRouteHandler)
  .openapi(getV1AsnNumberPrefixesRoute, getV1AsnNumberPrefixesRouteHandler)
  .openapi(postV1AssessIpRoute, postV1AssessIpRouteHandler)
  .openapi(postV1AssessIpCsvRoute, postV1AssessIpCsvRouteHandler)
  .openapi(getV1AssessIpIpAddressRoute, getV1AssessIpIpAddressRouteHandler)
  .openapi(getV1DatacenterIpIpAddressRoute, getV1DatacenterIpIpAddressRouteHandler)
  .openapi(postV1DatacenterPrefixRoute, postV1DatacenterPrefixRouteHandler)
  .openapi(getV1DatacenterDatacenterIdRoute, getV1DatacenterDatacenterIdRouteHandler)
  .openapi(
    getV1DatacenterDatacenterIdPrefixesRoute,
    getV1DatacenterDatacenterIdPrefixesRouteHandler,
  )
  .openapi(getV1DatasetIpRoute, getV1DatasetIpRouteHandler)
  .openapi(getV1DatasetIpNameRoute, getV1DatasetIpNameRouteHandler)
  .openapi(postV1DenylistPrivateRoute, postV1DenylistPrivateRouteHandler)
  .openapi(getV1DenylistPrivateAllRoute, getV1DenylistPrivateAllRouteHandler)
  .openapi(
    getV1DenylistPrivateAllResourceTypeRoute,
    getV1DenylistPrivateAllResourceTypeRouteHandler,
  )
  .openapi(getV1DenylistPrivateIpAddressRoute, getV1DenylistPrivateIpAddressRouteHandler)
  .openapi(deleteV1DenylistPrivateDenylistIdRoute, deleteV1DenylistPrivateDenylistIdRouteHandler)
  .openapi(getV1DenylistPrivateDenylistIdRoute, getV1DenylistPrivateDenylistIdRouteHandler)
  .openapi(putV1DenylistPrivateDenylistIdRoute, putV1DenylistPrivateDenylistIdRouteHandler)
  .openapi(
    deleteV1DenylistPrivateDenylistIdContentRoute,
    deleteV1DenylistPrivateDenylistIdContentRouteHandler,
  )
  .openapi(
    getV1DenylistPrivateDenylistIdContentRoute,
    getV1DenylistPrivateDenylistIdContentRouteHandler,
  )
  .openapi(
    putV1DenylistPrivateDenylistIdContentRoute,
    putV1DenylistPrivateDenylistIdContentRouteHandler,
  )
  .openapi(
    putV1DenylistPrivateDenylistIdOriginRoute,
    putV1DenylistPrivateDenylistIdOriginRouteHandler,
  )
  .openapi(getV1DenylistPublicAllRoute, getV1DenylistPublicAllRouteHandler)
  .openapi(getV1DenylistPublicAllResourceTypeRoute, getV1DenylistPublicAllResourceTypeRouteHandler)
  .openapi(getV1DenylistPublicIpAddressRoute, getV1DenylistPublicIpAddressRouteHandler)
  .openapi(getV1DenylistPublicOwnedRoute, getV1DenylistPublicOwnedRouteHandler)
  .openapi(
    getV1DenylistPublicOwnedResourceTypeRoute,
    getV1DenylistPublicOwnedResourceTypeRouteHandler,
  )
  .openapi(deleteV1DenylistPublicDenylistIdRoute, deleteV1DenylistPublicDenylistIdRouteHandler)
  .openapi(getV1DenylistPublicDenylistIdRoute, getV1DenylistPublicDenylistIdRouteHandler)
  .openapi(putV1DenylistPublicDenylistIdRoute, putV1DenylistPublicDenylistIdRouteHandler)
  .openapi(
    putV1DenylistPublicDenylistIdOriginRoute,
    putV1DenylistPublicDenylistIdOriginRouteHandler,
  )
  .openapi(getV1DenylistReportedIpRoute, getV1DenylistReportedIpRouteHandler)
  .openapi(deleteV1DenylistReportedIpAllRoute, deleteV1DenylistReportedIpAllRouteHandler)
  .openapi(
    deleteV1DenylistReportedIpIpAddressRoute,
    deleteV1DenylistReportedIpIpAddressRouteHandler,
  )
  .openapi(getV1DenylistReportedIpIpAddressRoute, getV1DenylistReportedIpIpAddressRouteHandler)
  .openapi(postV1GeoRoute, postV1GeoRouteHandler)
  .openapi(postV1GeoCsvRoute, postV1GeoCsvRouteHandler)
  .openapi(getV1GeoIpAddressRoute, getV1GeoIpAddressRouteHandler)
  .openapi(getV1LogIpIdLogchangeIdRoute, getV1LogIpIdLogchangeIdRouteHandler)
  .openapi(getV1LogIpIpAddressRoute, getV1LogIpIpAddressRouteHandler)
  .openapi(getV1OriginRoute, getV1OriginRouteHandler)
  .openapi(putV1OriginRoute, putV1OriginRouteHandler)
  .openapi(getV1OriginAddressesRoute, getV1OriginAddressesRouteHandler)
  .openapi(getV1OriginAllRoute, getV1OriginAllRouteHandler)
  .openapi(getV1OriginClientAnalysisRoute, getV1OriginClientAnalysisRouteHandler)
  .openapi(getV1OriginCookiesRoute, getV1OriginCookiesRouteHandler)
  .openapi(getV1OriginScriptsRoute, getV1OriginScriptsRouteHandler)
  .openapi(postV1OriginStatusRoute, postV1OriginStatusRouteHandler)
  .openapi(getV1OriginStatusDetailStatusIdRoute, getV1OriginStatusDetailStatusIdRouteHandler)
  .openapi(getV1OriginStatusDetailsRoute, getV1OriginStatusDetailsRouteHandler)
  .openapi(getV1OriginTrafficAnalysisRoute, getV1OriginTrafficAnalysisRouteHandler)
  .openapi(deleteV1OriginTokenRoute, deleteV1OriginTokenRouteHandler)
  .openapi(postV1OriginTokenRoute, postV1OriginTokenRouteHandler)
  .openapi(getV1OriginTokenAllRoute, getV1OriginTokenAllRouteHandler)
  .openapi(putV1OriginTokenDisableRoute, putV1OriginTokenDisableRouteHandler)
  .openapi(putV1OriginTokenEnableRoute, putV1OriginTokenEnableRouteHandler)
  .openapi(postV1OriginTokenNewRoute, postV1OriginTokenNewRouteHandler)
  .openapi(getV1SourceIpRoute, getV1SourceIpRouteHandler)
  .openapi(getV1SourceIpSourceRoute, getV1SourceIpSourceRouteHandler)
  .openapi(getV1SourceIpSourceRangeTimeRangeRoute, getV1SourceIpSourceRangeTimeRangeRouteHandler)
  .openapi(getV1TokenRoute, getV1TokenRouteHandler)
  .openapi(getV1TokenActivityRoute, getV1TokenActivityRouteHandler)
  .openapi(postV1UaRoute, postV1UaRouteHandler)
  .openapi(postV1UaCsvRoute, postV1UaCsvRouteHandler)
  .openapi(getV1UaDeviceCodeRoute, getV1UaDeviceCodeRouteHandler)
  .openapi(getV1UaFamilyCodeRoute, getV1UaFamilyCodeRouteHandler)
  .openapi(getV1UaOsCodeRoute, getV1UaOsCodeRouteHandler)
  .openapi(getV1UaTypeCodeRoute, getV1UaTypeCodeRouteHandler)
  .openapi(getV1UaVendorCodeRoute, getV1UaVendorCodeRouteHandler)
  .openapi(getV1UaUserAgentUrlencodedRoute, getV1UaUserAgentUrlencodedRouteHandler)

export default app
