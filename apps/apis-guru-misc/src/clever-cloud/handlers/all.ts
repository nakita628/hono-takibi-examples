import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGithubLinkRoute,
  deleteLogsAppIdDrainsIdOrUrlRoute,
  deleteNotificationsEmailhooksOwnerIdIdRoute,
  deleteNotificationsWebhooksOwnerIdIdRoute,
  deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRoute,
  deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute,
  deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute,
  deleteOrganisationsIdAddonprovidersProviderIdRoute,
  deleteOrganisationsIdAddonsAddonIdRoute,
  deleteOrganisationsIdAddonsAddonIdTagsTagRoute,
  deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRoute,
  deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute,
  deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRoute,
  deleteOrganisationsIdApplicationsAppIdEnvEnvNameRoute,
  deleteOrganisationsIdApplicationsAppIdInstancesRoute,
  deleteOrganisationsIdApplicationsAppIdRoute,
  deleteOrganisationsIdApplicationsAppIdTagsTagRoute,
  deleteOrganisationsIdApplicationsAppIdVhostsDomainRoute,
  deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRoute,
  deleteOrganisationsIdConsumersKeyRoute,
  deleteOrganisationsIdMembersUserIdRoute,
  deleteOrganisationsIdPaymentsBillingsBidRoute,
  deleteOrganisationsIdPaymentsMethodsMIdRoute,
  deleteOrganisationsIdPaymentsRecurringRoute,
  deleteOrganisationsIdRoute,
  deleteSelfAddonsAddonIdRoute,
  deleteSelfAddonsAddonIdTagsTagRoute,
  deleteSelfApplicationsAppIdAddonsAddonIdRoute,
  deleteSelfApplicationsAppIdDependenciesDependencyIdRoute,
  deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesRoute,
  deleteSelfApplicationsAppIdEnvEnvNameRoute,
  deleteSelfApplicationsAppIdInstancesRoute,
  deleteSelfApplicationsAppIdRoute,
  deleteSelfApplicationsAppIdTagsTagRoute,
  deleteSelfApplicationsAppIdVhostsDomainRoute,
  deleteSelfApplicationsAppIdVhostsFavouriteRoute,
  deleteSelfConsumersKeyRoute,
  deleteSelfEmailsEmailRoute,
  deleteSelfKeysKeyRoute,
  deleteSelfMfaKindRoute,
  deleteSelfPaymentsBillingsBidRoute,
  deleteSelfPaymentsMethodsMIdRoute,
  deleteSelfPaymentsRecurringRoute,
  deleteSelfRoute,
  deleteSelfTokensRoute,
  deleteSelfTokensTokenRoute,
  deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute,
  deleteV3LogsAppIdDrainsIdOrUrlRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute,
  getApplicationAppIdEnvironmentRoute,
  getEventsEventSocketRoute,
  getGithubApplicationsRoute,
  getGithubCallbackRoute,
  getGithubEmailsRoute,
  getGithubKeysRoute,
  getGithubLinkRoute,
  getGithubLoginRoute,
  getGithubRoute,
  getGithubSignupRoute,
  getGithubUsernameRoute,
  getLogsAppIdDrainsIdOrUrlRoute,
  getLogsAppIdDrainsRoute,
  getLogsAppIdRoute,
  getLogsAppIdSseRoute,
  getLogsDrainsRoute,
  getLogsLogsChunkedAppIdRoute,
  getLogsLogsSocketAppIdRoute,
  getLogsSocketAppIdRoute,
  getNewsfeedsBlogRoute,
  getNewsfeedsEngineeringRoute,
  getNotificationsEmailhooksOwnerIdRoute,
  getNotificationsInfoEventsRoute,
  getNotificationsInfoWebhookformatsRoute,
  getNotificationsWebhooksOwnerIdRoute,
  getOauthAuthorizeRoute,
  getOauthRightsRoute,
  getOpenapiRoute,
  getOpenapiType2Route,
  getOrganisationsIdAddonprovidersProviderIdFeaturesRoute,
  getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute,
  getOrganisationsIdAddonprovidersProviderIdPlansRoute,
  getOrganisationsIdAddonprovidersProviderIdRoute,
  getOrganisationsIdAddonprovidersProviderIdSsoRoute,
  getOrganisationsIdAddonprovidersProviderIdTagsRoute,
  getOrganisationsIdAddonprovidersRoute,
  getOrganisationsIdAddonsAddonIdApplicationsRoute,
  getOrganisationsIdAddonsAddonIdEnvRoute,
  getOrganisationsIdAddonsAddonIdInstancesInstanceIdRoute,
  getOrganisationsIdAddonsAddonIdInstancesRoute,
  getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRoute,
  getOrganisationsIdAddonsAddonIdMigrationsRoute,
  getOrganisationsIdAddonsAddonIdRoute,
  getOrganisationsIdAddonsAddonIdSsoRoute,
  getOrganisationsIdAddonsAddonIdTagsRoute,
  getOrganisationsIdAddonsRoute,
  getOrganisationsIdApplicationsAppIdAddonsEnvRoute,
  getOrganisationsIdApplicationsAppIdAddonsRoute,
  getOrganisationsIdApplicationsAppIdBranchesRoute,
  getOrganisationsIdApplicationsAppIdDependenciesEnvRoute,
  getOrganisationsIdApplicationsAppIdDependenciesRoute,
  getOrganisationsIdApplicationsAppIdDependentsRoute,
  getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRoute,
  getOrganisationsIdApplicationsAppIdDeploymentsRoute,
  getOrganisationsIdApplicationsAppIdEnvRoute,
  getOrganisationsIdApplicationsAppIdExposedEnvRoute,
  getOrganisationsIdApplicationsAppIdInstancesInstanceIdRoute,
  getOrganisationsIdApplicationsAppIdInstancesRoute,
  getOrganisationsIdApplicationsAppIdRoute,
  getOrganisationsIdApplicationsAppIdTagsRoute,
  getOrganisationsIdApplicationsAppIdVhostsFavouriteRoute,
  getOrganisationsIdApplicationsAppIdVhostsRoute,
  getOrganisationsIdApplicationsRoute,
  getOrganisationsIdConsumersKeyRoute,
  getOrganisationsIdConsumersKeySecretRoute,
  getOrganisationsIdConsumersRoute,
  getOrganisationsIdConsumptionsRoute,
  getOrganisationsIdCreditsRoute,
  getOrganisationsIdDeploymentsRoute,
  getOrganisationsIdInstancesRoute,
  getOrganisationsIdMembersRoute,
  getOrganisationsIdPaymentInfoRoute,
  getOrganisationsIdPaymentsBillingsBidPdfRoute,
  getOrganisationsIdPaymentsBillingsBidRoute,
  getOrganisationsIdPaymentsBillingsRoute,
  getOrganisationsIdPaymentsBillingsUnpaidRoute,
  getOrganisationsIdPaymentsFullpricePriceRoute,
  getOrganisationsIdPaymentsMethodsDefaultRoute,
  getOrganisationsIdPaymentsMethodsRoute,
  getOrganisationsIdPaymentsMonthlyinvoiceRoute,
  getOrganisationsIdPaymentsRecurringRoute,
  getOrganisationsIdRoute,
  getOrganisationsRoute,
  getPasswordForgottenKeyRoute,
  getPasswordForgottenRoute,
  getPaymentsAssetsPayButtonTokenButtonPngRoute,
  getPaymentsCouponsNameRoute,
  getPaymentsProvidersRoute,
  getPaymentsTokensStripeRoute,
  getProductsAddonprovidersProviderIdRoute,
  getProductsAddonprovidersProviderIdVersionsRoute,
  getProductsAddonprovidersRoute,
  getProductsCountriesRoute,
  getProductsCountrycodesRoute,
  getProductsInstancesRoute,
  getProductsInstancesTypeVersionRoute,
  getProductsMfaKindsRoute,
  getProductsPackagesRoute,
  getProductsPricesRoute,
  getProductsZonesRoute,
  getSelfAddonsAddonIdApplicationsRoute,
  getSelfAddonsAddonIdEnvRoute,
  getSelfAddonsAddonIdRoute,
  getSelfAddonsAddonIdSsoRoute,
  getSelfAddonsAddonIdTagsRoute,
  getSelfAddonsRoute,
  getSelfApplicationsAppIdAddonsEnvRoute,
  getSelfApplicationsAppIdAddonsRoute,
  getSelfApplicationsAppIdBranchesRoute,
  getSelfApplicationsAppIdDependenciesEnvRoute,
  getSelfApplicationsAppIdDependenciesRoute,
  getSelfApplicationsAppIdDependentsRoute,
  getSelfApplicationsAppIdDeploymentsDeploymentIdRoute,
  getSelfApplicationsAppIdDeploymentsRoute,
  getSelfApplicationsAppIdEnvRoute,
  getSelfApplicationsAppIdExposedEnvRoute,
  getSelfApplicationsAppIdInstancesInstanceIdRoute,
  getSelfApplicationsAppIdInstancesRoute,
  getSelfApplicationsAppIdRoute,
  getSelfApplicationsAppIdTagsRoute,
  getSelfApplicationsAppIdVhostsFavouriteRoute,
  getSelfApplicationsAppIdVhostsRoute,
  getSelfApplicationsRoute,
  getSelfCliTokensRoute,
  getSelfConfirmationEmailRoute,
  getSelfConsumersKeyRoute,
  getSelfConsumersKeySecretRoute,
  getSelfConsumersRoute,
  getSelfConsumptionsRoute,
  getSelfCreditsRoute,
  getSelfEmailsRoute,
  getSelfIdRoute,
  getSelfInstancesRoute,
  getSelfKeysRoute,
  getSelfMfaKindBackupcodesRoute,
  getSelfPaymentInfoRoute,
  getSelfPaymentsBillingsBidPdfRoute,
  getSelfPaymentsBillingsBidRoute,
  getSelfPaymentsBillingsRoute,
  getSelfPaymentsFullpricePriceRoute,
  getSelfPaymentsMethodsDefaultRoute,
  getSelfPaymentsMethodsRoute,
  getSelfPaymentsMonthlyinvoiceRoute,
  getSelfPaymentsRecurringRoute,
  getSelfPaymentsTokensStripeRoute,
  getSelfRoute,
  getSelfTokensRoute,
  getSelfValidateEmailRoute,
  getSummaryRoute,
  getUsersIdApplicationsRoute,
  getUsersIdRoute,
  getUsersUserIdGitInfoRoute,
  getV3LogsAppIdDrainsIdOrUrlRoute,
  getV3LogsAppIdDrainsRoute,
  getV3LogsAppIdLogsChunkedRoute,
  getV3LogsAppIdLogsSocketRoute,
  getV3LogsAppIdRoute,
  getV4AddonProvidersAddonMatomoAddonsMatomoIdRoute,
  getV4AddonProvidersAddonMatomoTokenValidateRoute,
  getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute,
  getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute,
  getVendorAppsAddonIdLogscollectorRoute,
  getVendorAppsAddonIdRoute,
  getVendorAppsRoute,
  postAuthorizeRoute,
  postGithubRedeployRoute,
  postGithubSignupRoute,
  postLogsAppIdDrainsRoute,
  postNotificationsEmailhooksOwnerIdRoute,
  postNotificationsWebhooksOwnerIdRoute,
  postOauthAccessTokenQueryRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeRoute,
  postOauthRequestTokenQueryRoute,
  postOauthRequestTokenRoute,
  postOrganisationsIdAddonprovidersProviderIdFeaturesRoute,
  postOrganisationsIdAddonprovidersProviderIdPlansRoute,
  postOrganisationsIdAddonprovidersProviderIdTestersRoute,
  postOrganisationsIdAddonprovidersRoute,
  postOrganisationsIdAddonsAddonIdMigrationsRoute,
  postOrganisationsIdAddonsPreordersRoute,
  postOrganisationsIdAddonsRoute,
  postOrganisationsIdApplicationsAppIdAddonsRoute,
  postOrganisationsIdApplicationsAppIdInstancesRoute,
  postOrganisationsIdApplicationsRoute,
  postOrganisationsIdConsumersRoute,
  postOrganisationsIdMembersRoute,
  postOrganisationsIdPaymentsBillingsRoute,
  postOrganisationsIdPaymentsMethodsRoute,
  postOrganisationsRoute,
  postPasswordForgottenKeyRoute,
  postPasswordForgottenRoute,
  postPaymentsBidEndStripeRoute,
  postSelfAddonsPreordersRoute,
  postSelfAddonsRoute,
  postSelfApplicationsAppIdAddonsRoute,
  postSelfApplicationsAppIdInstancesRoute,
  postSelfApplicationsRoute,
  postSelfConsumersRoute,
  postSelfMfaKindConfirmationRoute,
  postSelfMfaKindRoute,
  postSelfPaymentsBillingsRoute,
  postSelfPaymentsMethodsRoute,
  postUsersRoute,
  postV2ProvidersAddonMatomoResourcesRoute,
  postV3LogsAppIdDrainsRoute,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRoute,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute,
  postVendorAddonsRoute,
  postVendorAppsAddonIdConsumptionsRoute,
  putApplicationAppIdEnvironmentRoute,
  putLogsDrainsDrainIdRoute,
  putNotificationsEmailhooksOwnerIdIdRoute,
  putNotificationsWebhooksOwnerIdIdRoute,
  putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute,
  putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute,
  putOrganisationsIdAddonprovidersProviderIdRoute,
  putOrganisationsIdAddonsAddonIdRoute,
  putOrganisationsIdAddonsAddonIdTagsTagRoute,
  putOrganisationsIdApplicationsAppIdBranchRoute,
  putOrganisationsIdApplicationsAppIdBuildflavorRoute,
  putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute,
  putOrganisationsIdApplicationsAppIdEnvEnvNameRoute,
  putOrganisationsIdApplicationsAppIdEnvRoute,
  putOrganisationsIdApplicationsAppIdExposedEnvRoute,
  putOrganisationsIdApplicationsAppIdRoute,
  putOrganisationsIdApplicationsAppIdTagsTagRoute,
  putOrganisationsIdApplicationsAppIdVhostsDomainRoute,
  putOrganisationsIdApplicationsAppIdVhostsFavouriteRoute,
  putOrganisationsIdAvatarRoute,
  putOrganisationsIdConsumersKeyRoute,
  putOrganisationsIdMembersUserIdRoute,
  putOrganisationsIdPaymentsBillingsBidRoute,
  putOrganisationsIdPaymentsMethodsDefaultRoute,
  putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRoute,
  putOrganisationsIdRoute,
  putSelfAddonsAddonIdPlanRoute,
  putSelfAddonsAddonIdRoute,
  putSelfAddonsAddonIdTagsTagRoute,
  putSelfApplicationsAppIdBranchRoute,
  putSelfApplicationsAppIdBuildflavorRoute,
  putSelfApplicationsAppIdDependenciesDependencyIdRoute,
  putSelfApplicationsAppIdEnvEnvNameRoute,
  putSelfApplicationsAppIdEnvRoute,
  putSelfApplicationsAppIdExposedEnvRoute,
  putSelfApplicationsAppIdRoute,
  putSelfApplicationsAppIdTagsTagRoute,
  putSelfApplicationsAppIdVhostsDomainRoute,
  putSelfApplicationsAppIdVhostsFavouriteRoute,
  putSelfAvatarRoute,
  putSelfChangePasswordRoute,
  putSelfConsumersKeyRoute,
  putSelfEmailsEmailRoute,
  putSelfKeysKeyRoute,
  putSelfMfaKindRoute,
  putSelfPaymentsBillingsBidRoute,
  putSelfPaymentsMethodsDefaultRoute,
  putSelfPaymentsMonthlyinvoiceMaxcreditRoute,
  putSelfRoute,
  putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute,
  putVendorAppsAddonIdMigrationCallbackRoute,
  putVendorAppsAddonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allHandler = app
  .openapi(getOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationAppIdEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationAppIdEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventSocketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGithubLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGithubRedeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGithubSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGithubUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsSocketAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogsDrainsDrainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLogsChunkedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsLogsSocketAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsAppIdSseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsfeedsBlogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNewsfeedsEngineeringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsEmailhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsEmailhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsEmailhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsEmailhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsInfoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsInfoWebhookformatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsWebhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsWebhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsWebhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsWebhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAccessTokenQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRequestTokenQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthRightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOpenapiType2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdAddonprovidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdAddonprovidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersProviderIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonprovidersProviderIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersProviderIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonprovidersProviderIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersProviderIdSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonprovidersProviderIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonprovidersProviderIdTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonsPreordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdAddonsAddonIdMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdAddonsAddonIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdAddonsAddonIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdAddonsAddonIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdApplicationsAppIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdAddonsEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdBuildflavorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdDependenciesEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdDependentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdEnvEnvNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdEnvEnvNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdExposedEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdExposedEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdApplicationsAppIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdVhostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdApplicationsAppIdVhostsFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdVhostsFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdApplicationsAppIdVhostsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdApplicationsAppIdVhostsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdConsumersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdConsumersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdConsumersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdConsumersKeySecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdConsumptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsBillingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdPaymentsBillingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsBillingsUnpaidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdPaymentsBillingsBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsBillingsBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdPaymentsBillingsBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsBillingsBidPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsFullpricePriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsIdPaymentsMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsMethodsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdPaymentsMethodsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdPaymentsMethodsMIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsMonthlyinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsIdPaymentsRecurringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsIdPaymentsRecurringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPasswordForgottenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasswordForgottenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPasswordForgottenKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPasswordForgottenKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsAssetsPayButtonTokenButtonPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsCouponsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsTokensStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsBidEndStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsAddonprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsAddonprovidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsAddonprovidersProviderIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsCountrycodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsInstancesTypeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsMfaKindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfAddonsPreordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfAddonsAddonIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfAddonsAddonIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfAddonsAddonIdPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfAddonsAddonIdSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfAddonsAddonIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfAddonsAddonIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfAddonsAddonIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfApplicationsAppIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdAddonsEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdAddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdBuildflavorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdDependenciesEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdDependenciesDependencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdDependenciesDependencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdDependentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdEnvEnvNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdEnvEnvNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdExposedEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdExposedEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfApplicationsAppIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdVhostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdVhostsFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfApplicationsAppIdVhostsFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdVhostsFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfApplicationsAppIdVhostsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfApplicationsAppIdVhostsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfCliTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfConfirmationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfConsumersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfConsumersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfConsumersKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfConsumersKeySecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfConsumptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfMfaKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfMfaKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfMfaKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfMfaKindBackupcodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfMfaKindConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsBillingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfPaymentsBillingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfPaymentsBillingsBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsBillingsBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfPaymentsBillingsBidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsBillingsBidPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsFullpricePriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfPaymentsMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsMethodsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfPaymentsMethodsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfPaymentsMethodsMIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsMonthlyinvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSelfPaymentsMonthlyinvoiceMaxcreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfPaymentsRecurringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsRecurringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfPaymentsTokensStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfValidateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdGitInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProvidersAddonMatomoResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3LogsAppIdDrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3LogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdDrainsIdOrUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdLogsChunkedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LogsAppIdLogsSocketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersAddonMatomoAddonsMatomoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersAddonMatomoTokenValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVendorAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorAppsAddonIdLogscollectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorAppsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVendorAppsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVendorAppsAddonIdConsumptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVendorAppsAddonIdMigrationCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
