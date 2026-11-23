import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20150101EsCcsInboundConnectionConnectionIdRoute,
  delete20150101EsCcsOutboundConnectionConnectionIdRoute,
  delete20150101EsDomainDomainNameRoute,
  delete20150101EsRoleRoute,
  delete20150101EsVpcEndpointsVpcEndpointIdRoute,
  delete20150101PackagesPackageIDRoute,
  get20150101DomainDomainNamePackagesRoute,
  get20150101DomainRoute,
  get20150101EsCompatibleVersionsRoute,
  get20150101EsDomainDomainNameAutoTunesRoute,
  get20150101EsDomainDomainNameConfigRoute,
  get20150101EsDomainDomainNameListVpcEndpointAccessRoute,
  get20150101EsDomainDomainNameProgressRoute,
  get20150101EsDomainDomainNameRoute,
  get20150101EsDomainDomainNameVpcEndpointsRoute,
  get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeRoute,
  get20150101EsInstanceTypesElasticsearchVersionRoute,
  get20150101EsReservedInstanceOfferingsRoute,
  get20150101EsReservedInstancesRoute,
  get20150101EsUpgradeDomainDomainNameHistoryRoute,
  get20150101EsUpgradeDomainDomainNameStatusRoute,
  get20150101EsVersionsRoute,
  get20150101EsVpcEndpointsRoute,
  get20150101PackagesPackageIDDomainsRoute,
  get20150101PackagesPackageIDHistoryRoute,
  get20150101TagsArnRoute,
  post20150101EsCcsInboundConnectionSearchRoute,
  post20150101EsCcsOutboundConnectionRoute,
  post20150101EsCcsOutboundConnectionSearchRoute,
  post20150101EsDomainDomainNameAuthorizeVpcEndpointAccessRoute,
  post20150101EsDomainDomainNameConfigRoute,
  post20150101EsDomainDomainNameRevokeVpcEndpointAccessRoute,
  post20150101EsDomainInfoRoute,
  post20150101EsDomainRoute,
  post20150101EsPurchaseReservedInstanceOfferingRoute,
  post20150101EsServiceSoftwareUpdateCancelRoute,
  post20150101EsServiceSoftwareUpdateStartRoute,
  post20150101EsUpgradeDomainRoute,
  post20150101EsVpcEndpointsDescribeRoute,
  post20150101EsVpcEndpointsRoute,
  post20150101EsVpcEndpointsUpdateRoute,
  post20150101PackagesAssociatePackageIDDomainNameRoute,
  post20150101PackagesDescribeRoute,
  post20150101PackagesDissociatePackageIDDomainNameRoute,
  post20150101PackagesRoute,
  post20150101PackagesUpdateRoute,
  post20150101TagsRemovalRoute,
  post20150101TagsRoute,
  put20150101EsCcsInboundConnectionConnectionIdAcceptRoute,
  put20150101EsCcsInboundConnectionConnectionIdRejectRoute,
} from './routes'
import {
  delete20150101EsCcsInboundConnectionConnectionIdRouteHandler,
  delete20150101EsCcsOutboundConnectionConnectionIdRouteHandler,
  delete20150101EsDomainDomainNameRouteHandler,
  delete20150101EsRoleRouteHandler,
  delete20150101EsVpcEndpointsVpcEndpointIdRouteHandler,
  delete20150101PackagesPackageIDRouteHandler,
  get20150101DomainDomainNamePackagesRouteHandler,
  get20150101DomainRouteHandler,
  get20150101EsCompatibleVersionsRouteHandler,
  get20150101EsDomainDomainNameAutoTunesRouteHandler,
  get20150101EsDomainDomainNameConfigRouteHandler,
  get20150101EsDomainDomainNameListVpcEndpointAccessRouteHandler,
  get20150101EsDomainDomainNameProgressRouteHandler,
  get20150101EsDomainDomainNameRouteHandler,
  get20150101EsDomainDomainNameVpcEndpointsRouteHandler,
  get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeRouteHandler,
  get20150101EsInstanceTypesElasticsearchVersionRouteHandler,
  get20150101EsReservedInstanceOfferingsRouteHandler,
  get20150101EsReservedInstancesRouteHandler,
  get20150101EsUpgradeDomainDomainNameHistoryRouteHandler,
  get20150101EsUpgradeDomainDomainNameStatusRouteHandler,
  get20150101EsVersionsRouteHandler,
  get20150101EsVpcEndpointsRouteHandler,
  get20150101PackagesPackageIDDomainsRouteHandler,
  get20150101PackagesPackageIDHistoryRouteHandler,
  get20150101TagsArnRouteHandler,
  post20150101EsCcsInboundConnectionSearchRouteHandler,
  post20150101EsCcsOutboundConnectionRouteHandler,
  post20150101EsCcsOutboundConnectionSearchRouteHandler,
  post20150101EsDomainDomainNameAuthorizeVpcEndpointAccessRouteHandler,
  post20150101EsDomainDomainNameConfigRouteHandler,
  post20150101EsDomainDomainNameRevokeVpcEndpointAccessRouteHandler,
  post20150101EsDomainInfoRouteHandler,
  post20150101EsDomainRouteHandler,
  post20150101EsPurchaseReservedInstanceOfferingRouteHandler,
  post20150101EsServiceSoftwareUpdateCancelRouteHandler,
  post20150101EsServiceSoftwareUpdateStartRouteHandler,
  post20150101EsUpgradeDomainRouteHandler,
  post20150101EsVpcEndpointsDescribeRouteHandler,
  post20150101EsVpcEndpointsRouteHandler,
  post20150101EsVpcEndpointsUpdateRouteHandler,
  post20150101PackagesAssociatePackageIDDomainNameRouteHandler,
  post20150101PackagesDescribeRouteHandler,
  post20150101PackagesDissociatePackageIDDomainNameRouteHandler,
  post20150101PackagesRouteHandler,
  post20150101PackagesUpdateRouteHandler,
  post20150101TagsRemovalRouteHandler,
  post20150101TagsRouteHandler,
  put20150101EsCcsInboundConnectionConnectionIdAcceptRouteHandler,
  put20150101EsCcsInboundConnectionConnectionIdRejectRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    put20150101EsCcsInboundConnectionConnectionIdAcceptRoute,
    put20150101EsCcsInboundConnectionConnectionIdAcceptRouteHandler,
  )
  .openapi(post20150101TagsRoute, post20150101TagsRouteHandler)
  .openapi(
    post20150101PackagesAssociatePackageIDDomainNameRoute,
    post20150101PackagesAssociatePackageIDDomainNameRouteHandler,
  )
  .openapi(
    post20150101EsDomainDomainNameAuthorizeVpcEndpointAccessRoute,
    post20150101EsDomainDomainNameAuthorizeVpcEndpointAccessRouteHandler,
  )
  .openapi(
    post20150101EsServiceSoftwareUpdateCancelRoute,
    post20150101EsServiceSoftwareUpdateCancelRouteHandler,
  )
  .openapi(post20150101EsDomainRoute, post20150101EsDomainRouteHandler)
  .openapi(
    post20150101EsCcsOutboundConnectionRoute,
    post20150101EsCcsOutboundConnectionRouteHandler,
  )
  .openapi(post20150101PackagesRoute, post20150101PackagesRouteHandler)
  .openapi(post20150101EsVpcEndpointsRoute, post20150101EsVpcEndpointsRouteHandler)
  .openapi(get20150101EsVpcEndpointsRoute, get20150101EsVpcEndpointsRouteHandler)
  .openapi(delete20150101EsDomainDomainNameRoute, delete20150101EsDomainDomainNameRouteHandler)
  .openapi(get20150101EsDomainDomainNameRoute, get20150101EsDomainDomainNameRouteHandler)
  .openapi(delete20150101EsRoleRoute, delete20150101EsRoleRouteHandler)
  .openapi(
    delete20150101EsCcsInboundConnectionConnectionIdRoute,
    delete20150101EsCcsInboundConnectionConnectionIdRouteHandler,
  )
  .openapi(
    delete20150101EsCcsOutboundConnectionConnectionIdRoute,
    delete20150101EsCcsOutboundConnectionConnectionIdRouteHandler,
  )
  .openapi(delete20150101PackagesPackageIDRoute, delete20150101PackagesPackageIDRouteHandler)
  .openapi(
    delete20150101EsVpcEndpointsVpcEndpointIdRoute,
    delete20150101EsVpcEndpointsVpcEndpointIdRouteHandler,
  )
  .openapi(
    get20150101EsDomainDomainNameAutoTunesRoute,
    get20150101EsDomainDomainNameAutoTunesRouteHandler,
  )
  .openapi(
    get20150101EsDomainDomainNameProgressRoute,
    get20150101EsDomainDomainNameProgressRouteHandler,
  )
  .openapi(
    get20150101EsDomainDomainNameConfigRoute,
    get20150101EsDomainDomainNameConfigRouteHandler,
  )
  .openapi(
    post20150101EsDomainDomainNameConfigRoute,
    post20150101EsDomainDomainNameConfigRouteHandler,
  )
  .openapi(post20150101EsDomainInfoRoute, post20150101EsDomainInfoRouteHandler)
  .openapi(
    get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeRoute,
    get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeRouteHandler,
  )
  .openapi(
    post20150101EsCcsInboundConnectionSearchRoute,
    post20150101EsCcsInboundConnectionSearchRouteHandler,
  )
  .openapi(
    post20150101EsCcsOutboundConnectionSearchRoute,
    post20150101EsCcsOutboundConnectionSearchRouteHandler,
  )
  .openapi(post20150101PackagesDescribeRoute, post20150101PackagesDescribeRouteHandler)
  .openapi(
    get20150101EsReservedInstanceOfferingsRoute,
    get20150101EsReservedInstanceOfferingsRouteHandler,
  )
  .openapi(get20150101EsReservedInstancesRoute, get20150101EsReservedInstancesRouteHandler)
  .openapi(post20150101EsVpcEndpointsDescribeRoute, post20150101EsVpcEndpointsDescribeRouteHandler)
  .openapi(
    post20150101PackagesDissociatePackageIDDomainNameRoute,
    post20150101PackagesDissociatePackageIDDomainNameRouteHandler,
  )
  .openapi(get20150101EsCompatibleVersionsRoute, get20150101EsCompatibleVersionsRouteHandler)
  .openapi(
    get20150101PackagesPackageIDHistoryRoute,
    get20150101PackagesPackageIDHistoryRouteHandler,
  )
  .openapi(
    get20150101EsUpgradeDomainDomainNameHistoryRoute,
    get20150101EsUpgradeDomainDomainNameHistoryRouteHandler,
  )
  .openapi(
    get20150101EsUpgradeDomainDomainNameStatusRoute,
    get20150101EsUpgradeDomainDomainNameStatusRouteHandler,
  )
  .openapi(get20150101DomainRoute, get20150101DomainRouteHandler)
  .openapi(
    get20150101PackagesPackageIDDomainsRoute,
    get20150101PackagesPackageIDDomainsRouteHandler,
  )
  .openapi(
    get20150101EsInstanceTypesElasticsearchVersionRoute,
    get20150101EsInstanceTypesElasticsearchVersionRouteHandler,
  )
  .openapi(get20150101EsVersionsRoute, get20150101EsVersionsRouteHandler)
  .openapi(
    get20150101DomainDomainNamePackagesRoute,
    get20150101DomainDomainNamePackagesRouteHandler,
  )
  .openapi(get20150101TagsArnRoute, get20150101TagsArnRouteHandler)
  .openapi(
    get20150101EsDomainDomainNameListVpcEndpointAccessRoute,
    get20150101EsDomainDomainNameListVpcEndpointAccessRouteHandler,
  )
  .openapi(
    get20150101EsDomainDomainNameVpcEndpointsRoute,
    get20150101EsDomainDomainNameVpcEndpointsRouteHandler,
  )
  .openapi(
    post20150101EsPurchaseReservedInstanceOfferingRoute,
    post20150101EsPurchaseReservedInstanceOfferingRouteHandler,
  )
  .openapi(
    put20150101EsCcsInboundConnectionConnectionIdRejectRoute,
    put20150101EsCcsInboundConnectionConnectionIdRejectRouteHandler,
  )
  .openapi(post20150101TagsRemovalRoute, post20150101TagsRemovalRouteHandler)
  .openapi(
    post20150101EsDomainDomainNameRevokeVpcEndpointAccessRoute,
    post20150101EsDomainDomainNameRevokeVpcEndpointAccessRouteHandler,
  )
  .openapi(
    post20150101EsServiceSoftwareUpdateStartRoute,
    post20150101EsServiceSoftwareUpdateStartRouteHandler,
  )
  .openapi(post20150101PackagesUpdateRoute, post20150101PackagesUpdateRouteHandler)
  .openapi(post20150101EsVpcEndpointsUpdateRoute, post20150101EsVpcEndpointsUpdateRouteHandler)
  .openapi(post20150101EsUpgradeDomainRoute, post20150101EsUpgradeDomainRouteHandler)

export default app
