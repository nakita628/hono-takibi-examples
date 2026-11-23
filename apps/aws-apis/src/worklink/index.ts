import { OpenAPIHono } from '@hono/zod-openapi'
import {
  associateDomainHandler,
  associateWebsiteAuthorizationProviderHandler,
  associateWebsiteCertificateAuthorityHandler,
  createFleetHandler,
  deleteFleetHandler,
  describeAuditStreamConfigurationHandler,
  describeCompanyNetworkConfigurationHandler,
  describeDeviceHandler,
  describeDevicePolicyConfigurationHandler,
  describeDomainHandler,
  describeFleetMetadataHandler,
  describeIdentityProviderConfigurationHandler,
  describeWebsiteCertificateAuthorityHandler,
  disassociateDomainHandler,
  disassociateWebsiteAuthorizationProviderHandler,
  disassociateWebsiteCertificateAuthorityHandler,
  listDevicesHandler,
  listDomainsHandler,
  listFleetsHandler,
  listWebsiteAuthorizationProvidersHandler,
  listWebsiteCertificateAuthoritiesHandler,
  restoreDomainAccessHandler,
  revokeDomainAccessHandler,
  signOutUserHandler,
  tagsHandler,
  updateAuditStreamConfigurationHandler,
  updateCompanyNetworkConfigurationHandler,
  updateDevicePolicyConfigurationHandler,
  updateDomainMetadataHandler,
  updateFleetMetadataHandler,
  updateIdentityProviderConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', associateDomainHandler)
  .route('/', associateWebsiteAuthorizationProviderHandler)
  .route('/', associateWebsiteCertificateAuthorityHandler)
  .route('/', createFleetHandler)
  .route('/', deleteFleetHandler)
  .route('/', describeAuditStreamConfigurationHandler)
  .route('/', describeCompanyNetworkConfigurationHandler)
  .route('/', describeDeviceHandler)
  .route('/', describeDevicePolicyConfigurationHandler)
  .route('/', describeDomainHandler)
  .route('/', describeFleetMetadataHandler)
  .route('/', describeIdentityProviderConfigurationHandler)
  .route('/', describeWebsiteCertificateAuthorityHandler)
  .route('/', disassociateDomainHandler)
  .route('/', disassociateWebsiteAuthorizationProviderHandler)
  .route('/', disassociateWebsiteCertificateAuthorityHandler)
  .route('/', listDevicesHandler)
  .route('/', listDomainsHandler)
  .route('/', listFleetsHandler)
  .route('/', tagsHandler)
  .route('/', listWebsiteAuthorizationProvidersHandler)
  .route('/', listWebsiteCertificateAuthoritiesHandler)
  .route('/', restoreDomainAccessHandler)
  .route('/', revokeDomainAccessHandler)
  .route('/', signOutUserHandler)
  .route('/', updateAuditStreamConfigurationHandler)
  .route('/', updateCompanyNetworkConfigurationHandler)
  .route('/', updateDevicePolicyConfigurationHandler)
  .route('/', updateDomainMetadataHandler)
  .route('/', updateFleetMetadataHandler)
  .route('/', updateIdentityProviderConfigurationHandler)

export default app
