import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  postAssociateDomainRoute,
  postAssociateWebsiteAuthorizationProviderRoute,
  postAssociateWebsiteCertificateAuthorityRoute,
  postCreateFleetRoute,
  postDeleteFleetRoute,
  postDescribeAuditStreamConfigurationRoute,
  postDescribeCompanyNetworkConfigurationRoute,
  postDescribeDevicePolicyConfigurationRoute,
  postDescribeDeviceRoute,
  postDescribeDomainRoute,
  postDescribeFleetMetadataRoute,
  postDescribeIdentityProviderConfigurationRoute,
  postDescribeWebsiteCertificateAuthorityRoute,
  postDisassociateDomainRoute,
  postDisassociateWebsiteAuthorizationProviderRoute,
  postDisassociateWebsiteCertificateAuthorityRoute,
  postListDevicesRoute,
  postListDomainsRoute,
  postListFleetsRoute,
  postListWebsiteAuthorizationProvidersRoute,
  postListWebsiteCertificateAuthoritiesRoute,
  postRestoreDomainAccessRoute,
  postRevokeDomainAccessRoute,
  postSignOutUserRoute,
  postTagsResourceArnRoute,
  postUpdateAuditStreamConfigurationRoute,
  postUpdateCompanyNetworkConfigurationRoute,
  postUpdateDevicePolicyConfigurationRoute,
  postUpdateDomainMetadataRoute,
  postUpdateFleetMetadataRoute,
  postUpdateIdentityProviderConfigurationRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  postAssociateDomainRouteHandler,
  postAssociateWebsiteAuthorizationProviderRouteHandler,
  postAssociateWebsiteCertificateAuthorityRouteHandler,
  postCreateFleetRouteHandler,
  postDeleteFleetRouteHandler,
  postDescribeAuditStreamConfigurationRouteHandler,
  postDescribeCompanyNetworkConfigurationRouteHandler,
  postDescribeDevicePolicyConfigurationRouteHandler,
  postDescribeDeviceRouteHandler,
  postDescribeDomainRouteHandler,
  postDescribeFleetMetadataRouteHandler,
  postDescribeIdentityProviderConfigurationRouteHandler,
  postDescribeWebsiteCertificateAuthorityRouteHandler,
  postDisassociateDomainRouteHandler,
  postDisassociateWebsiteAuthorizationProviderRouteHandler,
  postDisassociateWebsiteCertificateAuthorityRouteHandler,
  postListDevicesRouteHandler,
  postListDomainsRouteHandler,
  postListFleetsRouteHandler,
  postListWebsiteAuthorizationProvidersRouteHandler,
  postListWebsiteCertificateAuthoritiesRouteHandler,
  postRestoreDomainAccessRouteHandler,
  postRevokeDomainAccessRouteHandler,
  postSignOutUserRouteHandler,
  postTagsResourceArnRouteHandler,
  postUpdateAuditStreamConfigurationRouteHandler,
  postUpdateCompanyNetworkConfigurationRouteHandler,
  postUpdateDevicePolicyConfigurationRouteHandler,
  postUpdateDomainMetadataRouteHandler,
  postUpdateFleetMetadataRouteHandler,
  postUpdateIdentityProviderConfigurationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAssociateDomainRoute, postAssociateDomainRouteHandler)
  .openapi(
    postAssociateWebsiteAuthorizationProviderRoute,
    postAssociateWebsiteAuthorizationProviderRouteHandler,
  )
  .openapi(
    postAssociateWebsiteCertificateAuthorityRoute,
    postAssociateWebsiteCertificateAuthorityRouteHandler,
  )
  .openapi(postCreateFleetRoute, postCreateFleetRouteHandler)
  .openapi(postDeleteFleetRoute, postDeleteFleetRouteHandler)
  .openapi(
    postDescribeAuditStreamConfigurationRoute,
    postDescribeAuditStreamConfigurationRouteHandler,
  )
  .openapi(
    postDescribeCompanyNetworkConfigurationRoute,
    postDescribeCompanyNetworkConfigurationRouteHandler,
  )
  .openapi(postDescribeDeviceRoute, postDescribeDeviceRouteHandler)
  .openapi(
    postDescribeDevicePolicyConfigurationRoute,
    postDescribeDevicePolicyConfigurationRouteHandler,
  )
  .openapi(postDescribeDomainRoute, postDescribeDomainRouteHandler)
  .openapi(postDescribeFleetMetadataRoute, postDescribeFleetMetadataRouteHandler)
  .openapi(
    postDescribeIdentityProviderConfigurationRoute,
    postDescribeIdentityProviderConfigurationRouteHandler,
  )
  .openapi(
    postDescribeWebsiteCertificateAuthorityRoute,
    postDescribeWebsiteCertificateAuthorityRouteHandler,
  )
  .openapi(postDisassociateDomainRoute, postDisassociateDomainRouteHandler)
  .openapi(
    postDisassociateWebsiteAuthorizationProviderRoute,
    postDisassociateWebsiteAuthorizationProviderRouteHandler,
  )
  .openapi(
    postDisassociateWebsiteCertificateAuthorityRoute,
    postDisassociateWebsiteCertificateAuthorityRouteHandler,
  )
  .openapi(postListDevicesRoute, postListDevicesRouteHandler)
  .openapi(postListDomainsRoute, postListDomainsRouteHandler)
  .openapi(postListFleetsRoute, postListFleetsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postListWebsiteAuthorizationProvidersRoute,
    postListWebsiteAuthorizationProvidersRouteHandler,
  )
  .openapi(
    postListWebsiteCertificateAuthoritiesRoute,
    postListWebsiteCertificateAuthoritiesRouteHandler,
  )
  .openapi(postRestoreDomainAccessRoute, postRestoreDomainAccessRouteHandler)
  .openapi(postRevokeDomainAccessRoute, postRevokeDomainAccessRouteHandler)
  .openapi(postSignOutUserRoute, postSignOutUserRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateAuditStreamConfigurationRoute, postUpdateAuditStreamConfigurationRouteHandler)
  .openapi(
    postUpdateCompanyNetworkConfigurationRoute,
    postUpdateCompanyNetworkConfigurationRouteHandler,
  )
  .openapi(
    postUpdateDevicePolicyConfigurationRoute,
    postUpdateDevicePolicyConfigurationRouteHandler,
  )
  .openapi(postUpdateDomainMetadataRoute, postUpdateDomainMetadataRouteHandler)
  .openapi(postUpdateFleetMetadataRoute, postUpdateFleetMetadataRouteHandler)
  .openapi(
    postUpdateIdentityProviderConfigurationRoute,
    postUpdateIdentityProviderConfigurationRouteHandler,
  )

export default app
