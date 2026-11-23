import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttachmentsAttachmentIdRoute,
  deleteConnectPeersConnectPeerIdRoute,
  deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRoute,
  deleteCoreNetworksCoreNetworkIdRoute,
  deleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRoute,
  deleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdRoute,
  deleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnRoute,
  deleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdRoute,
  deleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdRoute,
  deleteGlobalNetworksGlobalNetworkIdLinksLinkIdRoute,
  deleteGlobalNetworksGlobalNetworkIdRoute,
  deleteGlobalNetworksGlobalNetworkIdSitesSiteIdRoute,
  deleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnRoute,
  deleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnRoute,
  deletePeeringsPeeringIdRoute,
  deleteResourcePolicyResourceArnRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAttachmentsRoute,
  getConnectAttachmentsAttachmentIdRoute,
  getConnectPeersConnectPeerIdRoute,
  getConnectPeersRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute,
  getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRoute,
  getCoreNetworksCoreNetworkIdRoute,
  getCoreNetworksRoute,
  getGlobalNetworksGlobalNetworkIdConnectionsRoute,
  getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRoute,
  getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRoute,
  getGlobalNetworksGlobalNetworkIdDevicesRoute,
  getGlobalNetworksGlobalNetworkIdLinkAssociationsRoute,
  getGlobalNetworksGlobalNetworkIdLinksRoute,
  getGlobalNetworksGlobalNetworkIdNetworkResourceCountRoute,
  getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsRoute,
  getGlobalNetworksGlobalNetworkIdNetworkResourcesRoute,
  getGlobalNetworksGlobalNetworkIdNetworkTelemetryRoute,
  getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdRoute,
  getGlobalNetworksGlobalNetworkIdSitesRoute,
  getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRoute,
  getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRoute,
  getGlobalNetworksRoute,
  getOrganizationsServiceAccessRoute,
  getPeeringsRoute,
  getResourcePolicyResourceArnRoute,
  getSiteToSiteVpnAttachmentsAttachmentIdRoute,
  getTagsResourceArnRoute,
  getTransitGatewayPeeringsPeeringIdRoute,
  getTransitGatewayRouteTableAttachmentsAttachmentIdRoute,
  getVpcAttachmentsAttachmentIdRoute,
  patchCoreNetworksCoreNetworkIdRoute,
  patchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRoute,
  patchGlobalNetworksGlobalNetworkIdDevicesDeviceIdRoute,
  patchGlobalNetworksGlobalNetworkIdLinksLinkIdRoute,
  patchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataRoute,
  patchGlobalNetworksGlobalNetworkIdRoute,
  patchGlobalNetworksGlobalNetworkIdSitesSiteIdRoute,
  patchVpcAttachmentsAttachmentIdRoute,
  postAttachmentsAttachmentIdAcceptRoute,
  postAttachmentsAttachmentIdRejectRoute,
  postConnectAttachmentsRoute,
  postConnectPeersRoute,
  postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRoute,
  postCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute,
  postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRoute,
  postCoreNetworksRoute,
  postGlobalNetworksGlobalNetworkIdConnectionsRoute,
  postGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRoute,
  postGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRoute,
  postGlobalNetworksGlobalNetworkIdDevicesRoute,
  postGlobalNetworksGlobalNetworkIdLinkAssociationsRoute,
  postGlobalNetworksGlobalNetworkIdLinksRoute,
  postGlobalNetworksGlobalNetworkIdNetworkRoutesRoute,
  postGlobalNetworksGlobalNetworkIdRouteAnalysesRoute,
  postGlobalNetworksGlobalNetworkIdSitesRoute,
  postGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRoute,
  postGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRoute,
  postGlobalNetworksRoute,
  postOrganizationsServiceAccessRoute,
  postResourcePolicyResourceArnRoute,
  postSiteToSiteVpnAttachmentsRoute,
  postTagsResourceArnRoute,
  postTransitGatewayPeeringsRoute,
  postTransitGatewayRouteTableAttachmentsRoute,
  postVpcAttachmentsRoute,
} from './routes'
import {
  deleteAttachmentsAttachmentIdRouteHandler,
  deleteConnectPeersConnectPeerIdRouteHandler,
  deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRouteHandler,
  deleteCoreNetworksCoreNetworkIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdLinksLinkIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdSitesSiteIdRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnRouteHandler,
  deleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnRouteHandler,
  deletePeeringsPeeringIdRouteHandler,
  deleteResourcePolicyResourceArnRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAttachmentsRouteHandler,
  getConnectAttachmentsAttachmentIdRouteHandler,
  getConnectPeersConnectPeerIdRouteHandler,
  getConnectPeersRouteHandler,
  getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRouteHandler,
  getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRouteHandler,
  getCoreNetworksCoreNetworkIdCoreNetworkPolicyRouteHandler,
  getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRouteHandler,
  getCoreNetworksCoreNetworkIdRouteHandler,
  getCoreNetworksRouteHandler,
  getGlobalNetworksGlobalNetworkIdConnectionsRouteHandler,
  getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRouteHandler,
  getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRouteHandler,
  getGlobalNetworksGlobalNetworkIdDevicesRouteHandler,
  getGlobalNetworksGlobalNetworkIdLinkAssociationsRouteHandler,
  getGlobalNetworksGlobalNetworkIdLinksRouteHandler,
  getGlobalNetworksGlobalNetworkIdNetworkResourceCountRouteHandler,
  getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsRouteHandler,
  getGlobalNetworksGlobalNetworkIdNetworkResourcesRouteHandler,
  getGlobalNetworksGlobalNetworkIdNetworkTelemetryRouteHandler,
  getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdRouteHandler,
  getGlobalNetworksGlobalNetworkIdSitesRouteHandler,
  getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRouteHandler,
  getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRouteHandler,
  getGlobalNetworksRouteHandler,
  getOrganizationsServiceAccessRouteHandler,
  getPeeringsRouteHandler,
  getResourcePolicyResourceArnRouteHandler,
  getSiteToSiteVpnAttachmentsAttachmentIdRouteHandler,
  getTagsResourceArnRouteHandler,
  getTransitGatewayPeeringsPeeringIdRouteHandler,
  getTransitGatewayRouteTableAttachmentsAttachmentIdRouteHandler,
  getVpcAttachmentsAttachmentIdRouteHandler,
  patchCoreNetworksCoreNetworkIdRouteHandler,
  patchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRouteHandler,
  patchGlobalNetworksGlobalNetworkIdDevicesDeviceIdRouteHandler,
  patchGlobalNetworksGlobalNetworkIdLinksLinkIdRouteHandler,
  patchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataRouteHandler,
  patchGlobalNetworksGlobalNetworkIdRouteHandler,
  patchGlobalNetworksGlobalNetworkIdSitesSiteIdRouteHandler,
  patchVpcAttachmentsAttachmentIdRouteHandler,
  postAttachmentsAttachmentIdAcceptRouteHandler,
  postAttachmentsAttachmentIdRejectRouteHandler,
  postConnectAttachmentsRouteHandler,
  postConnectPeersRouteHandler,
  postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRouteHandler,
  postCoreNetworksCoreNetworkIdCoreNetworkPolicyRouteHandler,
  postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRouteHandler,
  postCoreNetworksRouteHandler,
  postGlobalNetworksGlobalNetworkIdConnectionsRouteHandler,
  postGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRouteHandler,
  postGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRouteHandler,
  postGlobalNetworksGlobalNetworkIdDevicesRouteHandler,
  postGlobalNetworksGlobalNetworkIdLinkAssociationsRouteHandler,
  postGlobalNetworksGlobalNetworkIdLinksRouteHandler,
  postGlobalNetworksGlobalNetworkIdNetworkRoutesRouteHandler,
  postGlobalNetworksGlobalNetworkIdRouteAnalysesRouteHandler,
  postGlobalNetworksGlobalNetworkIdSitesRouteHandler,
  postGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRouteHandler,
  postGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRouteHandler,
  postGlobalNetworksRouteHandler,
  postOrganizationsServiceAccessRouteHandler,
  postResourcePolicyResourceArnRouteHandler,
  postSiteToSiteVpnAttachmentsRouteHandler,
  postTagsResourceArnRouteHandler,
  postTransitGatewayPeeringsRouteHandler,
  postTransitGatewayRouteTableAttachmentsRouteHandler,
  postVpcAttachmentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAttachmentsAttachmentIdAcceptRoute, postAttachmentsAttachmentIdAcceptRouteHandler)
  .openapi(
    postGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRoute,
    postGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRoute,
    getGlobalNetworksGlobalNetworkIdConnectPeerAssociationsRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRoute,
    postGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRoute,
    getGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdLinkAssociationsRoute,
    postGlobalNetworksGlobalNetworkIdLinkAssociationsRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdLinkAssociationsRoute,
    getGlobalNetworksGlobalNetworkIdLinkAssociationsRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRoute,
    postGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRoute,
    getGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsRouteHandler,
  )
  .openapi(postConnectAttachmentsRoute, postConnectAttachmentsRouteHandler)
  .openapi(postConnectPeersRoute, postConnectPeersRouteHandler)
  .openapi(getConnectPeersRoute, getConnectPeersRouteHandler)
  .openapi(
    postGlobalNetworksGlobalNetworkIdConnectionsRoute,
    postGlobalNetworksGlobalNetworkIdConnectionsRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdConnectionsRoute,
    getGlobalNetworksGlobalNetworkIdConnectionsRouteHandler,
  )
  .openapi(postCoreNetworksRoute, postCoreNetworksRouteHandler)
  .openapi(getCoreNetworksRoute, getCoreNetworksRouteHandler)
  .openapi(
    postGlobalNetworksGlobalNetworkIdDevicesRoute,
    postGlobalNetworksGlobalNetworkIdDevicesRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdDevicesRoute,
    getGlobalNetworksGlobalNetworkIdDevicesRouteHandler,
  )
  .openapi(postGlobalNetworksRoute, postGlobalNetworksRouteHandler)
  .openapi(getGlobalNetworksRoute, getGlobalNetworksRouteHandler)
  .openapi(
    postGlobalNetworksGlobalNetworkIdLinksRoute,
    postGlobalNetworksGlobalNetworkIdLinksRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdLinksRoute,
    getGlobalNetworksGlobalNetworkIdLinksRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdSitesRoute,
    postGlobalNetworksGlobalNetworkIdSitesRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdSitesRoute,
    getGlobalNetworksGlobalNetworkIdSitesRouteHandler,
  )
  .openapi(postSiteToSiteVpnAttachmentsRoute, postSiteToSiteVpnAttachmentsRouteHandler)
  .openapi(postTransitGatewayPeeringsRoute, postTransitGatewayPeeringsRouteHandler)
  .openapi(
    postTransitGatewayRouteTableAttachmentsRoute,
    postTransitGatewayRouteTableAttachmentsRouteHandler,
  )
  .openapi(postVpcAttachmentsRoute, postVpcAttachmentsRouteHandler)
  .openapi(deleteAttachmentsAttachmentIdRoute, deleteAttachmentsAttachmentIdRouteHandler)
  .openapi(deleteConnectPeersConnectPeerIdRoute, deleteConnectPeersConnectPeerIdRouteHandler)
  .openapi(getConnectPeersConnectPeerIdRoute, getConnectPeersConnectPeerIdRouteHandler)
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRoute,
    deleteGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(
    patchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRoute,
    patchGlobalNetworksGlobalNetworkIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(deleteCoreNetworksCoreNetworkIdRoute, deleteCoreNetworksCoreNetworkIdRouteHandler)
  .openapi(getCoreNetworksCoreNetworkIdRoute, getCoreNetworksCoreNetworkIdRouteHandler)
  .openapi(patchCoreNetworksCoreNetworkIdRoute, patchCoreNetworksCoreNetworkIdRouteHandler)
  .openapi(
    deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRoute,
    deleteCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdRoute,
    deleteGlobalNetworksGlobalNetworkIdDevicesDeviceIdRouteHandler,
  )
  .openapi(
    patchGlobalNetworksGlobalNetworkIdDevicesDeviceIdRoute,
    patchGlobalNetworksGlobalNetworkIdDevicesDeviceIdRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdRoute,
    deleteGlobalNetworksGlobalNetworkIdRouteHandler,
  )
  .openapi(patchGlobalNetworksGlobalNetworkIdRoute, patchGlobalNetworksGlobalNetworkIdRouteHandler)
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdLinksLinkIdRoute,
    deleteGlobalNetworksGlobalNetworkIdLinksLinkIdRouteHandler,
  )
  .openapi(
    patchGlobalNetworksGlobalNetworkIdLinksLinkIdRoute,
    patchGlobalNetworksGlobalNetworkIdLinksLinkIdRouteHandler,
  )
  .openapi(deletePeeringsPeeringIdRoute, deletePeeringsPeeringIdRouteHandler)
  .openapi(deleteResourcePolicyResourceArnRoute, deleteResourcePolicyResourceArnRouteHandler)
  .openapi(getResourcePolicyResourceArnRoute, getResourcePolicyResourceArnRouteHandler)
  .openapi(postResourcePolicyResourceArnRoute, postResourcePolicyResourceArnRouteHandler)
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdSitesSiteIdRoute,
    deleteGlobalNetworksGlobalNetworkIdSitesSiteIdRouteHandler,
  )
  .openapi(
    patchGlobalNetworksGlobalNetworkIdSitesSiteIdRoute,
    patchGlobalNetworksGlobalNetworkIdSitesSiteIdRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnRoute,
    deleteGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsTransitGatewayArnRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdRoute,
    deleteGlobalNetworksGlobalNetworkIdConnectPeerAssociationsConnectPeerIdRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnRoute,
    deleteGlobalNetworksGlobalNetworkIdCustomerGatewayAssociationsCustomerGatewayArnRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdRoute,
    deleteGlobalNetworksGlobalNetworkIdLinkAssociationsDeviceIdLinkIdRouteHandler,
  )
  .openapi(
    deleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnRoute,
    deleteGlobalNetworksGlobalNetworkIdTransitGatewayConnectPeerAssociationsTransitGatewayConnectPeerArnRouteHandler,
  )
  .openapi(
    postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRoute,
    postCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdExecuteRouteHandler,
  )
  .openapi(getConnectAttachmentsAttachmentIdRoute, getConnectAttachmentsAttachmentIdRouteHandler)
  .openapi(
    getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRoute,
    getCoreNetworksCoreNetworkIdCoreNetworkChangeEventsPolicyVersionIdRouteHandler,
  )
  .openapi(
    getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRoute,
    getCoreNetworksCoreNetworkIdCoreNetworkChangeSetsPolicyVersionIdRouteHandler,
  )
  .openapi(
    getCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute,
    getCoreNetworksCoreNetworkIdCoreNetworkPolicyRouteHandler,
  )
  .openapi(
    postCoreNetworksCoreNetworkIdCoreNetworkPolicyRoute,
    postCoreNetworksCoreNetworkIdCoreNetworkPolicyRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdNetworkResourceCountRoute,
    getGlobalNetworksGlobalNetworkIdNetworkResourceCountRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsRoute,
    getGlobalNetworksGlobalNetworkIdNetworkResourceRelationshipsRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdNetworkResourcesRoute,
    getGlobalNetworksGlobalNetworkIdNetworkResourcesRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdNetworkRoutesRoute,
    postGlobalNetworksGlobalNetworkIdNetworkRoutesRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdNetworkTelemetryRoute,
    getGlobalNetworksGlobalNetworkIdNetworkTelemetryRouteHandler,
  )
  .openapi(
    getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdRoute,
    getGlobalNetworksGlobalNetworkIdRouteAnalysesRouteAnalysisIdRouteHandler,
  )
  .openapi(
    getSiteToSiteVpnAttachmentsAttachmentIdRoute,
    getSiteToSiteVpnAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(getTransitGatewayPeeringsPeeringIdRoute, getTransitGatewayPeeringsPeeringIdRouteHandler)
  .openapi(
    getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRoute,
    getGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRoute,
    postGlobalNetworksGlobalNetworkIdTransitGatewayRegistrationsRouteHandler,
  )
  .openapi(
    getTransitGatewayRouteTableAttachmentsAttachmentIdRoute,
    getTransitGatewayRouteTableAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(getVpcAttachmentsAttachmentIdRoute, getVpcAttachmentsAttachmentIdRouteHandler)
  .openapi(patchVpcAttachmentsAttachmentIdRoute, patchVpcAttachmentsAttachmentIdRouteHandler)
  .openapi(getAttachmentsRoute, getAttachmentsRouteHandler)
  .openapi(
    getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRoute,
    getCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsRouteHandler,
  )
  .openapi(getOrganizationsServiceAccessRoute, getOrganizationsServiceAccessRouteHandler)
  .openapi(postOrganizationsServiceAccessRoute, postOrganizationsServiceAccessRouteHandler)
  .openapi(getPeeringsRoute, getPeeringsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postAttachmentsAttachmentIdRejectRoute, postAttachmentsAttachmentIdRejectRouteHandler)
  .openapi(
    postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRoute,
    postCoreNetworksCoreNetworkIdCoreNetworkPolicyVersionsPolicyVersionIdRestoreRouteHandler,
  )
  .openapi(
    postGlobalNetworksGlobalNetworkIdRouteAnalysesRoute,
    postGlobalNetworksGlobalNetworkIdRouteAnalysesRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(
    patchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataRoute,
    patchGlobalNetworksGlobalNetworkIdNetworkResourcesResourceArnMetadataRouteHandler,
  )

export default app
