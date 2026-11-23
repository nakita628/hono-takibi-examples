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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AllowlistPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AllowlistPrivateAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPrivateAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AllowlistPrivateAllowlistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPrivateAllowlistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPrivateAllowlistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPrivateAllowlistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicOwnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicOwnedResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AllowlistPublicAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AllowlistPublicAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPublicAllowlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AllowlistPublicAllowlistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AsnPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnRegistryAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnRegistryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnStatusAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AsnNumberPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssessIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssessIpCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssessIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatacenterIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatacenterPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatacenterDatacenterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatacenterDatacenterIdPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatasetIpNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DenylistPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistPrivateDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPrivateDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistPrivateDenylistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPrivateDenylistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPrivateDenylistIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPrivateDenylistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicAllResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicOwnedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicOwnedResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistPublicDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistPublicDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPublicDenylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1DenylistPublicDenylistIdOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistReportedIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistReportedIpAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DenylistReportedIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DenylistReportedIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GeoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GeoCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GeoIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogIpIdLogchangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LogIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginClientAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OriginStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginStatusDetailStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginStatusDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginTrafficAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OriginTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OriginTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OriginTokenAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OriginTokenDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OriginTokenEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OriginTokenNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceIpSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourceIpSourceRangeTimeRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokenActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UaCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaDeviceCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaFamilyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaOsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaTypeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaVendorCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UaUserAgentUrlencodedRoute, (c) => {
    throw new Error('Not implemented')
  })
