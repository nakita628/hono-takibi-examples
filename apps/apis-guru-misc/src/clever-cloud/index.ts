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
} from './routes'
import {
  deleteGithubLinkRouteHandler,
  deleteLogsAppIdDrainsIdOrUrlRouteHandler,
  deleteNotificationsEmailhooksOwnerIdIdRouteHandler,
  deleteNotificationsWebhooksOwnerIdIdRouteHandler,
  deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRouteHandler,
  deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRouteHandler,
  deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler,
  deleteOrganisationsIdAddonprovidersProviderIdRouteHandler,
  deleteOrganisationsIdAddonsAddonIdRouteHandler,
  deleteOrganisationsIdAddonsAddonIdTagsTagRouteHandler,
  deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRouteHandler,
  deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRouteHandler,
  deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRouteHandler,
  deleteOrganisationsIdApplicationsAppIdEnvEnvNameRouteHandler,
  deleteOrganisationsIdApplicationsAppIdInstancesRouteHandler,
  deleteOrganisationsIdApplicationsAppIdRouteHandler,
  deleteOrganisationsIdApplicationsAppIdTagsTagRouteHandler,
  deleteOrganisationsIdApplicationsAppIdVhostsDomainRouteHandler,
  deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler,
  deleteOrganisationsIdConsumersKeyRouteHandler,
  deleteOrganisationsIdMembersUserIdRouteHandler,
  deleteOrganisationsIdPaymentsBillingsBidRouteHandler,
  deleteOrganisationsIdPaymentsMethodsMIdRouteHandler,
  deleteOrganisationsIdPaymentsRecurringRouteHandler,
  deleteOrganisationsIdRouteHandler,
  deleteSelfAddonsAddonIdRouteHandler,
  deleteSelfAddonsAddonIdTagsTagRouteHandler,
  deleteSelfApplicationsAppIdAddonsAddonIdRouteHandler,
  deleteSelfApplicationsAppIdDependenciesDependencyIdRouteHandler,
  deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesRouteHandler,
  deleteSelfApplicationsAppIdEnvEnvNameRouteHandler,
  deleteSelfApplicationsAppIdInstancesRouteHandler,
  deleteSelfApplicationsAppIdRouteHandler,
  deleteSelfApplicationsAppIdTagsTagRouteHandler,
  deleteSelfApplicationsAppIdVhostsDomainRouteHandler,
  deleteSelfApplicationsAppIdVhostsFavouriteRouteHandler,
  deleteSelfConsumersKeyRouteHandler,
  deleteSelfEmailsEmailRouteHandler,
  deleteSelfKeysKeyRouteHandler,
  deleteSelfMfaKindRouteHandler,
  deleteSelfPaymentsBillingsBidRouteHandler,
  deleteSelfPaymentsMethodsMIdRouteHandler,
  deleteSelfPaymentsRecurringRouteHandler,
  deleteSelfRouteHandler,
  deleteSelfTokensRouteHandler,
  deleteSelfTokensTokenRouteHandler,
  deleteV2ProvidersAddonMatomoResourcesMatomoIdRouteHandler,
  deleteV3LogsAppIdDrainsIdOrUrlRouteHandler,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRouteHandler,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRouteHandler,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRouteHandler,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRouteHandler,
  getApplicationAppIdEnvironmentRouteHandler,
  getEventsEventSocketRouteHandler,
  getGithubApplicationsRouteHandler,
  getGithubCallbackRouteHandler,
  getGithubEmailsRouteHandler,
  getGithubKeysRouteHandler,
  getGithubLinkRouteHandler,
  getGithubLoginRouteHandler,
  getGithubRouteHandler,
  getGithubSignupRouteHandler,
  getGithubUsernameRouteHandler,
  getLogsAppIdDrainsIdOrUrlRouteHandler,
  getLogsAppIdDrainsRouteHandler,
  getLogsAppIdRouteHandler,
  getLogsAppIdSseRouteHandler,
  getLogsDrainsRouteHandler,
  getLogsLogsChunkedAppIdRouteHandler,
  getLogsLogsSocketAppIdRouteHandler,
  getLogsSocketAppIdRouteHandler,
  getNewsfeedsBlogRouteHandler,
  getNewsfeedsEngineeringRouteHandler,
  getNotificationsEmailhooksOwnerIdRouteHandler,
  getNotificationsInfoEventsRouteHandler,
  getNotificationsInfoWebhookformatsRouteHandler,
  getNotificationsWebhooksOwnerIdRouteHandler,
  getOauthAuthorizeRouteHandler,
  getOauthRightsRouteHandler,
  getOpenapiRouteHandler,
  getOpenapiType2RouteHandler,
  getOrganisationsIdAddonprovidersProviderIdFeaturesRouteHandler,
  getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler,
  getOrganisationsIdAddonprovidersProviderIdPlansRouteHandler,
  getOrganisationsIdAddonprovidersProviderIdRouteHandler,
  getOrganisationsIdAddonprovidersProviderIdSsoRouteHandler,
  getOrganisationsIdAddonprovidersProviderIdTagsRouteHandler,
  getOrganisationsIdAddonprovidersRouteHandler,
  getOrganisationsIdAddonsAddonIdApplicationsRouteHandler,
  getOrganisationsIdAddonsAddonIdEnvRouteHandler,
  getOrganisationsIdAddonsAddonIdInstancesInstanceIdRouteHandler,
  getOrganisationsIdAddonsAddonIdInstancesRouteHandler,
  getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRouteHandler,
  getOrganisationsIdAddonsAddonIdMigrationsRouteHandler,
  getOrganisationsIdAddonsAddonIdRouteHandler,
  getOrganisationsIdAddonsAddonIdSsoRouteHandler,
  getOrganisationsIdAddonsAddonIdTagsRouteHandler,
  getOrganisationsIdAddonsRouteHandler,
  getOrganisationsIdApplicationsAppIdAddonsEnvRouteHandler,
  getOrganisationsIdApplicationsAppIdAddonsRouteHandler,
  getOrganisationsIdApplicationsAppIdBranchesRouteHandler,
  getOrganisationsIdApplicationsAppIdDependenciesEnvRouteHandler,
  getOrganisationsIdApplicationsAppIdDependenciesRouteHandler,
  getOrganisationsIdApplicationsAppIdDependentsRouteHandler,
  getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRouteHandler,
  getOrganisationsIdApplicationsAppIdDeploymentsRouteHandler,
  getOrganisationsIdApplicationsAppIdEnvRouteHandler,
  getOrganisationsIdApplicationsAppIdExposedEnvRouteHandler,
  getOrganisationsIdApplicationsAppIdInstancesInstanceIdRouteHandler,
  getOrganisationsIdApplicationsAppIdInstancesRouteHandler,
  getOrganisationsIdApplicationsAppIdRouteHandler,
  getOrganisationsIdApplicationsAppIdTagsRouteHandler,
  getOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler,
  getOrganisationsIdApplicationsAppIdVhostsRouteHandler,
  getOrganisationsIdApplicationsRouteHandler,
  getOrganisationsIdConsumersKeyRouteHandler,
  getOrganisationsIdConsumersKeySecretRouteHandler,
  getOrganisationsIdConsumersRouteHandler,
  getOrganisationsIdConsumptionsRouteHandler,
  getOrganisationsIdCreditsRouteHandler,
  getOrganisationsIdDeploymentsRouteHandler,
  getOrganisationsIdInstancesRouteHandler,
  getOrganisationsIdMembersRouteHandler,
  getOrganisationsIdPaymentInfoRouteHandler,
  getOrganisationsIdPaymentsBillingsBidPdfRouteHandler,
  getOrganisationsIdPaymentsBillingsBidRouteHandler,
  getOrganisationsIdPaymentsBillingsRouteHandler,
  getOrganisationsIdPaymentsBillingsUnpaidRouteHandler,
  getOrganisationsIdPaymentsFullpricePriceRouteHandler,
  getOrganisationsIdPaymentsMethodsDefaultRouteHandler,
  getOrganisationsIdPaymentsMethodsRouteHandler,
  getOrganisationsIdPaymentsMonthlyinvoiceRouteHandler,
  getOrganisationsIdPaymentsRecurringRouteHandler,
  getOrganisationsIdRouteHandler,
  getOrganisationsRouteHandler,
  getPasswordForgottenKeyRouteHandler,
  getPasswordForgottenRouteHandler,
  getPaymentsAssetsPayButtonTokenButtonPngRouteHandler,
  getPaymentsCouponsNameRouteHandler,
  getPaymentsProvidersRouteHandler,
  getPaymentsTokensStripeRouteHandler,
  getProductsAddonprovidersProviderIdRouteHandler,
  getProductsAddonprovidersProviderIdVersionsRouteHandler,
  getProductsAddonprovidersRouteHandler,
  getProductsCountriesRouteHandler,
  getProductsCountrycodesRouteHandler,
  getProductsInstancesRouteHandler,
  getProductsInstancesTypeVersionRouteHandler,
  getProductsMfaKindsRouteHandler,
  getProductsPackagesRouteHandler,
  getProductsPricesRouteHandler,
  getProductsZonesRouteHandler,
  getSelfAddonsAddonIdApplicationsRouteHandler,
  getSelfAddonsAddonIdEnvRouteHandler,
  getSelfAddonsAddonIdRouteHandler,
  getSelfAddonsAddonIdSsoRouteHandler,
  getSelfAddonsAddonIdTagsRouteHandler,
  getSelfAddonsRouteHandler,
  getSelfApplicationsAppIdAddonsEnvRouteHandler,
  getSelfApplicationsAppIdAddonsRouteHandler,
  getSelfApplicationsAppIdBranchesRouteHandler,
  getSelfApplicationsAppIdDependenciesEnvRouteHandler,
  getSelfApplicationsAppIdDependenciesRouteHandler,
  getSelfApplicationsAppIdDependentsRouteHandler,
  getSelfApplicationsAppIdDeploymentsDeploymentIdRouteHandler,
  getSelfApplicationsAppIdDeploymentsRouteHandler,
  getSelfApplicationsAppIdEnvRouteHandler,
  getSelfApplicationsAppIdExposedEnvRouteHandler,
  getSelfApplicationsAppIdInstancesInstanceIdRouteHandler,
  getSelfApplicationsAppIdInstancesRouteHandler,
  getSelfApplicationsAppIdRouteHandler,
  getSelfApplicationsAppIdTagsRouteHandler,
  getSelfApplicationsAppIdVhostsFavouriteRouteHandler,
  getSelfApplicationsAppIdVhostsRouteHandler,
  getSelfApplicationsRouteHandler,
  getSelfCliTokensRouteHandler,
  getSelfConfirmationEmailRouteHandler,
  getSelfConsumersKeyRouteHandler,
  getSelfConsumersKeySecretRouteHandler,
  getSelfConsumersRouteHandler,
  getSelfConsumptionsRouteHandler,
  getSelfCreditsRouteHandler,
  getSelfEmailsRouteHandler,
  getSelfIdRouteHandler,
  getSelfInstancesRouteHandler,
  getSelfKeysRouteHandler,
  getSelfMfaKindBackupcodesRouteHandler,
  getSelfPaymentInfoRouteHandler,
  getSelfPaymentsBillingsBidPdfRouteHandler,
  getSelfPaymentsBillingsBidRouteHandler,
  getSelfPaymentsBillingsRouteHandler,
  getSelfPaymentsFullpricePriceRouteHandler,
  getSelfPaymentsMethodsDefaultRouteHandler,
  getSelfPaymentsMethodsRouteHandler,
  getSelfPaymentsMonthlyinvoiceRouteHandler,
  getSelfPaymentsRecurringRouteHandler,
  getSelfPaymentsTokensStripeRouteHandler,
  getSelfRouteHandler,
  getSelfTokensRouteHandler,
  getSelfValidateEmailRouteHandler,
  getSummaryRouteHandler,
  getUsersIdApplicationsRouteHandler,
  getUsersIdRouteHandler,
  getUsersUserIdGitInfoRouteHandler,
  getV3LogsAppIdDrainsIdOrUrlRouteHandler,
  getV3LogsAppIdDrainsRouteHandler,
  getV3LogsAppIdLogsChunkedRouteHandler,
  getV3LogsAppIdLogsSocketRouteHandler,
  getV3LogsAppIdRouteHandler,
  getV4AddonProvidersAddonMatomoAddonsMatomoIdRouteHandler,
  getV4AddonProvidersAddonMatomoTokenValidateRouteHandler,
  getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRouteHandler,
  getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRouteHandler,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRouteHandler,
  getVendorAppsAddonIdLogscollectorRouteHandler,
  getVendorAppsAddonIdRouteHandler,
  getVendorAppsRouteHandler,
  postAuthorizeRouteHandler,
  postGithubRedeployRouteHandler,
  postGithubSignupRouteHandler,
  postLogsAppIdDrainsRouteHandler,
  postNotificationsEmailhooksOwnerIdRouteHandler,
  postNotificationsWebhooksOwnerIdRouteHandler,
  postOauthAccessTokenQueryRouteHandler,
  postOauthAccessTokenRouteHandler,
  postOauthAuthorizeRouteHandler,
  postOauthRequestTokenQueryRouteHandler,
  postOauthRequestTokenRouteHandler,
  postOrganisationsIdAddonprovidersProviderIdFeaturesRouteHandler,
  postOrganisationsIdAddonprovidersProviderIdPlansRouteHandler,
  postOrganisationsIdAddonprovidersProviderIdTestersRouteHandler,
  postOrganisationsIdAddonprovidersRouteHandler,
  postOrganisationsIdAddonsAddonIdMigrationsRouteHandler,
  postOrganisationsIdAddonsPreordersRouteHandler,
  postOrganisationsIdAddonsRouteHandler,
  postOrganisationsIdApplicationsAppIdAddonsRouteHandler,
  postOrganisationsIdApplicationsAppIdInstancesRouteHandler,
  postOrganisationsIdApplicationsRouteHandler,
  postOrganisationsIdConsumersRouteHandler,
  postOrganisationsIdMembersRouteHandler,
  postOrganisationsIdPaymentsBillingsRouteHandler,
  postOrganisationsIdPaymentsMethodsRouteHandler,
  postOrganisationsRouteHandler,
  postPasswordForgottenKeyRouteHandler,
  postPasswordForgottenRouteHandler,
  postPaymentsBidEndStripeRouteHandler,
  postSelfAddonsPreordersRouteHandler,
  postSelfAddonsRouteHandler,
  postSelfApplicationsAppIdAddonsRouteHandler,
  postSelfApplicationsAppIdInstancesRouteHandler,
  postSelfApplicationsRouteHandler,
  postSelfConsumersRouteHandler,
  postSelfMfaKindConfirmationRouteHandler,
  postSelfMfaKindRouteHandler,
  postSelfPaymentsBillingsRouteHandler,
  postSelfPaymentsMethodsRouteHandler,
  postUsersRouteHandler,
  postV2ProvidersAddonMatomoResourcesRouteHandler,
  postV3LogsAppIdDrainsRouteHandler,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRouteHandler,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRouteHandler,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRouteHandler,
  postVendorAddonsRouteHandler,
  postVendorAppsAddonIdConsumptionsRouteHandler,
  putApplicationAppIdEnvironmentRouteHandler,
  putLogsDrainsDrainIdRouteHandler,
  putNotificationsEmailhooksOwnerIdIdRouteHandler,
  putNotificationsWebhooksOwnerIdIdRouteHandler,
  putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRouteHandler,
  putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler,
  putOrganisationsIdAddonprovidersProviderIdRouteHandler,
  putOrganisationsIdAddonsAddonIdRouteHandler,
  putOrganisationsIdAddonsAddonIdTagsTagRouteHandler,
  putOrganisationsIdApplicationsAppIdBranchRouteHandler,
  putOrganisationsIdApplicationsAppIdBuildflavorRouteHandler,
  putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRouteHandler,
  putOrganisationsIdApplicationsAppIdEnvEnvNameRouteHandler,
  putOrganisationsIdApplicationsAppIdEnvRouteHandler,
  putOrganisationsIdApplicationsAppIdExposedEnvRouteHandler,
  putOrganisationsIdApplicationsAppIdRouteHandler,
  putOrganisationsIdApplicationsAppIdTagsTagRouteHandler,
  putOrganisationsIdApplicationsAppIdVhostsDomainRouteHandler,
  putOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler,
  putOrganisationsIdAvatarRouteHandler,
  putOrganisationsIdConsumersKeyRouteHandler,
  putOrganisationsIdMembersUserIdRouteHandler,
  putOrganisationsIdPaymentsBillingsBidRouteHandler,
  putOrganisationsIdPaymentsMethodsDefaultRouteHandler,
  putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRouteHandler,
  putOrganisationsIdRouteHandler,
  putSelfAddonsAddonIdPlanRouteHandler,
  putSelfAddonsAddonIdRouteHandler,
  putSelfAddonsAddonIdTagsTagRouteHandler,
  putSelfApplicationsAppIdBranchRouteHandler,
  putSelfApplicationsAppIdBuildflavorRouteHandler,
  putSelfApplicationsAppIdDependenciesDependencyIdRouteHandler,
  putSelfApplicationsAppIdEnvEnvNameRouteHandler,
  putSelfApplicationsAppIdEnvRouteHandler,
  putSelfApplicationsAppIdExposedEnvRouteHandler,
  putSelfApplicationsAppIdRouteHandler,
  putSelfApplicationsAppIdTagsTagRouteHandler,
  putSelfApplicationsAppIdVhostsDomainRouteHandler,
  putSelfApplicationsAppIdVhostsFavouriteRouteHandler,
  putSelfAvatarRouteHandler,
  putSelfChangePasswordRouteHandler,
  putSelfConsumersKeyRouteHandler,
  putSelfEmailsEmailRouteHandler,
  putSelfKeysKeyRouteHandler,
  putSelfMfaKindRouteHandler,
  putSelfPaymentsBillingsBidRouteHandler,
  putSelfPaymentsMethodsDefaultRouteHandler,
  putSelfPaymentsMonthlyinvoiceMaxcreditRouteHandler,
  putSelfRouteHandler,
  putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRouteHandler,
  putVendorAppsAddonIdMigrationCallbackRouteHandler,
  putVendorAppsAddonIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getOpenapiRoute, getOpenapiRouteHandler)
  .openapi(getApplicationAppIdEnvironmentRoute, getApplicationAppIdEnvironmentRouteHandler)
  .openapi(putApplicationAppIdEnvironmentRoute, putApplicationAppIdEnvironmentRouteHandler)
  .openapi(postAuthorizeRoute, postAuthorizeRouteHandler)
  .openapi(getEventsEventSocketRoute, getEventsEventSocketRouteHandler)
  .openapi(getGithubRoute, getGithubRouteHandler)
  .openapi(getGithubApplicationsRoute, getGithubApplicationsRouteHandler)
  .openapi(getGithubCallbackRoute, getGithubCallbackRouteHandler)
  .openapi(getGithubEmailsRoute, getGithubEmailsRouteHandler)
  .openapi(getGithubKeysRoute, getGithubKeysRouteHandler)
  .openapi(deleteGithubLinkRoute, deleteGithubLinkRouteHandler)
  .openapi(getGithubLinkRoute, getGithubLinkRouteHandler)
  .openapi(getGithubLoginRoute, getGithubLoginRouteHandler)
  .openapi(postGithubRedeployRoute, postGithubRedeployRouteHandler)
  .openapi(getGithubSignupRoute, getGithubSignupRouteHandler)
  .openapi(postGithubSignupRoute, postGithubSignupRouteHandler)
  .openapi(getGithubUsernameRoute, getGithubUsernameRouteHandler)
  .openapi(getLogsSocketAppIdRoute, getLogsSocketAppIdRouteHandler)
  .openapi(getLogsDrainsRoute, getLogsDrainsRouteHandler)
  .openapi(putLogsDrainsDrainIdRoute, putLogsDrainsDrainIdRouteHandler)
  .openapi(getLogsLogsChunkedAppIdRoute, getLogsLogsChunkedAppIdRouteHandler)
  .openapi(getLogsLogsSocketAppIdRoute, getLogsLogsSocketAppIdRouteHandler)
  .openapi(getLogsAppIdRoute, getLogsAppIdRouteHandler)
  .openapi(getLogsAppIdDrainsRoute, getLogsAppIdDrainsRouteHandler)
  .openapi(postLogsAppIdDrainsRoute, postLogsAppIdDrainsRouteHandler)
  .openapi(deleteLogsAppIdDrainsIdOrUrlRoute, deleteLogsAppIdDrainsIdOrUrlRouteHandler)
  .openapi(getLogsAppIdDrainsIdOrUrlRoute, getLogsAppIdDrainsIdOrUrlRouteHandler)
  .openapi(getLogsAppIdSseRoute, getLogsAppIdSseRouteHandler)
  .openapi(getNewsfeedsBlogRoute, getNewsfeedsBlogRouteHandler)
  .openapi(getNewsfeedsEngineeringRoute, getNewsfeedsEngineeringRouteHandler)
  .openapi(getNotificationsEmailhooksOwnerIdRoute, getNotificationsEmailhooksOwnerIdRouteHandler)
  .openapi(postNotificationsEmailhooksOwnerIdRoute, postNotificationsEmailhooksOwnerIdRouteHandler)
  .openapi(
    deleteNotificationsEmailhooksOwnerIdIdRoute,
    deleteNotificationsEmailhooksOwnerIdIdRouteHandler,
  )
  .openapi(
    putNotificationsEmailhooksOwnerIdIdRoute,
    putNotificationsEmailhooksOwnerIdIdRouteHandler,
  )
  .openapi(getNotificationsInfoEventsRoute, getNotificationsInfoEventsRouteHandler)
  .openapi(getNotificationsInfoWebhookformatsRoute, getNotificationsInfoWebhookformatsRouteHandler)
  .openapi(getNotificationsWebhooksOwnerIdRoute, getNotificationsWebhooksOwnerIdRouteHandler)
  .openapi(postNotificationsWebhooksOwnerIdRoute, postNotificationsWebhooksOwnerIdRouteHandler)
  .openapi(
    deleteNotificationsWebhooksOwnerIdIdRoute,
    deleteNotificationsWebhooksOwnerIdIdRouteHandler,
  )
  .openapi(putNotificationsWebhooksOwnerIdIdRoute, putNotificationsWebhooksOwnerIdIdRouteHandler)
  .openapi(postOauthAccessTokenRoute, postOauthAccessTokenRouteHandler)
  .openapi(postOauthAccessTokenQueryRoute, postOauthAccessTokenQueryRouteHandler)
  .openapi(getOauthAuthorizeRoute, getOauthAuthorizeRouteHandler)
  .openapi(postOauthAuthorizeRoute, postOauthAuthorizeRouteHandler)
  .openapi(postOauthRequestTokenRoute, postOauthRequestTokenRouteHandler)
  .openapi(postOauthRequestTokenQueryRoute, postOauthRequestTokenQueryRouteHandler)
  .openapi(getOauthRightsRoute, getOauthRightsRouteHandler)
  .openapi(getOpenapiType2Route, getOpenapiType2RouteHandler)
  .openapi(getOrganisationsRoute, getOrganisationsRouteHandler)
  .openapi(postOrganisationsRoute, postOrganisationsRouteHandler)
  .openapi(deleteOrganisationsIdRoute, deleteOrganisationsIdRouteHandler)
  .openapi(getOrganisationsIdRoute, getOrganisationsIdRouteHandler)
  .openapi(putOrganisationsIdRoute, putOrganisationsIdRouteHandler)
  .openapi(getOrganisationsIdAddonprovidersRoute, getOrganisationsIdAddonprovidersRouteHandler)
  .openapi(postOrganisationsIdAddonprovidersRoute, postOrganisationsIdAddonprovidersRouteHandler)
  .openapi(
    deleteOrganisationsIdAddonprovidersProviderIdRoute,
    deleteOrganisationsIdAddonprovidersProviderIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonprovidersProviderIdRoute,
    getOrganisationsIdAddonprovidersProviderIdRouteHandler,
  )
  .openapi(
    putOrganisationsIdAddonprovidersProviderIdRoute,
    putOrganisationsIdAddonprovidersProviderIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonprovidersProviderIdFeaturesRoute,
    getOrganisationsIdAddonprovidersProviderIdFeaturesRouteHandler,
  )
  .openapi(
    postOrganisationsIdAddonprovidersProviderIdFeaturesRoute,
    postOrganisationsIdAddonprovidersProviderIdFeaturesRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRoute,
    deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonprovidersProviderIdPlansRoute,
    getOrganisationsIdAddonprovidersProviderIdPlansRouteHandler,
  )
  .openapi(
    postOrganisationsIdAddonprovidersProviderIdPlansRoute,
    postOrganisationsIdAddonprovidersProviderIdPlansRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute,
    deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute,
    getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler,
  )
  .openapi(
    putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute,
    putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute,
    deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRouteHandler,
  )
  .openapi(
    putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute,
    putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonprovidersProviderIdSsoRoute,
    getOrganisationsIdAddonprovidersProviderIdSsoRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonprovidersProviderIdTagsRoute,
    getOrganisationsIdAddonprovidersProviderIdTagsRouteHandler,
  )
  .openapi(
    postOrganisationsIdAddonprovidersProviderIdTestersRoute,
    postOrganisationsIdAddonprovidersProviderIdTestersRouteHandler,
  )
  .openapi(getOrganisationsIdAddonsRoute, getOrganisationsIdAddonsRouteHandler)
  .openapi(postOrganisationsIdAddonsRoute, postOrganisationsIdAddonsRouteHandler)
  .openapi(postOrganisationsIdAddonsPreordersRoute, postOrganisationsIdAddonsPreordersRouteHandler)
  .openapi(deleteOrganisationsIdAddonsAddonIdRoute, deleteOrganisationsIdAddonsAddonIdRouteHandler)
  .openapi(getOrganisationsIdAddonsAddonIdRoute, getOrganisationsIdAddonsAddonIdRouteHandler)
  .openapi(putOrganisationsIdAddonsAddonIdRoute, putOrganisationsIdAddonsAddonIdRouteHandler)
  .openapi(
    getOrganisationsIdAddonsAddonIdApplicationsRoute,
    getOrganisationsIdAddonsAddonIdApplicationsRouteHandler,
  )
  .openapi(getOrganisationsIdAddonsAddonIdEnvRoute, getOrganisationsIdAddonsAddonIdEnvRouteHandler)
  .openapi(
    getOrganisationsIdAddonsAddonIdInstancesRoute,
    getOrganisationsIdAddonsAddonIdInstancesRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonsAddonIdInstancesInstanceIdRoute,
    getOrganisationsIdAddonsAddonIdInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonsAddonIdMigrationsRoute,
    getOrganisationsIdAddonsAddonIdMigrationsRouteHandler,
  )
  .openapi(
    postOrganisationsIdAddonsAddonIdMigrationsRoute,
    postOrganisationsIdAddonsAddonIdMigrationsRouteHandler,
  )
  .openapi(
    getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRoute,
    getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRouteHandler,
  )
  .openapi(getOrganisationsIdAddonsAddonIdSsoRoute, getOrganisationsIdAddonsAddonIdSsoRouteHandler)
  .openapi(
    getOrganisationsIdAddonsAddonIdTagsRoute,
    getOrganisationsIdAddonsAddonIdTagsRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdAddonsAddonIdTagsTagRoute,
    deleteOrganisationsIdAddonsAddonIdTagsTagRouteHandler,
  )
  .openapi(
    putOrganisationsIdAddonsAddonIdTagsTagRoute,
    putOrganisationsIdAddonsAddonIdTagsTagRouteHandler,
  )
  .openapi(getOrganisationsIdApplicationsRoute, getOrganisationsIdApplicationsRouteHandler)
  .openapi(postOrganisationsIdApplicationsRoute, postOrganisationsIdApplicationsRouteHandler)
  .openapi(
    deleteOrganisationsIdApplicationsAppIdRoute,
    deleteOrganisationsIdApplicationsAppIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdRoute,
    getOrganisationsIdApplicationsAppIdRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdRoute,
    putOrganisationsIdApplicationsAppIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdAddonsRoute,
    getOrganisationsIdApplicationsAppIdAddonsRouteHandler,
  )
  .openapi(
    postOrganisationsIdApplicationsAppIdAddonsRoute,
    postOrganisationsIdApplicationsAppIdAddonsRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdAddonsEnvRoute,
    getOrganisationsIdApplicationsAppIdAddonsEnvRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRoute,
    deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdBranchRoute,
    putOrganisationsIdApplicationsAppIdBranchRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdBranchesRoute,
    getOrganisationsIdApplicationsAppIdBranchesRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdBuildflavorRoute,
    putOrganisationsIdApplicationsAppIdBuildflavorRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdDependenciesRoute,
    getOrganisationsIdApplicationsAppIdDependenciesRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdDependenciesEnvRoute,
    getOrganisationsIdApplicationsAppIdDependenciesEnvRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute,
    deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute,
    putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdDependentsRoute,
    getOrganisationsIdApplicationsAppIdDependentsRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdDeploymentsRoute,
    getOrganisationsIdApplicationsAppIdDeploymentsRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRoute,
    getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRoute,
    deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdEnvRoute,
    getOrganisationsIdApplicationsAppIdEnvRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdEnvRoute,
    putOrganisationsIdApplicationsAppIdEnvRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdEnvEnvNameRoute,
    deleteOrganisationsIdApplicationsAppIdEnvEnvNameRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdEnvEnvNameRoute,
    putOrganisationsIdApplicationsAppIdEnvEnvNameRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdExposedEnvRoute,
    getOrganisationsIdApplicationsAppIdExposedEnvRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdExposedEnvRoute,
    putOrganisationsIdApplicationsAppIdExposedEnvRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdInstancesRoute,
    deleteOrganisationsIdApplicationsAppIdInstancesRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdInstancesRoute,
    getOrganisationsIdApplicationsAppIdInstancesRouteHandler,
  )
  .openapi(
    postOrganisationsIdApplicationsAppIdInstancesRoute,
    postOrganisationsIdApplicationsAppIdInstancesRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdInstancesInstanceIdRoute,
    getOrganisationsIdApplicationsAppIdInstancesInstanceIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdTagsRoute,
    getOrganisationsIdApplicationsAppIdTagsRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdTagsTagRoute,
    deleteOrganisationsIdApplicationsAppIdTagsTagRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdTagsTagRoute,
    putOrganisationsIdApplicationsAppIdTagsTagRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdVhostsRoute,
    getOrganisationsIdApplicationsAppIdVhostsRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRoute,
    deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler,
  )
  .openapi(
    getOrganisationsIdApplicationsAppIdVhostsFavouriteRoute,
    getOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdVhostsFavouriteRoute,
    putOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdApplicationsAppIdVhostsDomainRoute,
    deleteOrganisationsIdApplicationsAppIdVhostsDomainRouteHandler,
  )
  .openapi(
    putOrganisationsIdApplicationsAppIdVhostsDomainRoute,
    putOrganisationsIdApplicationsAppIdVhostsDomainRouteHandler,
  )
  .openapi(putOrganisationsIdAvatarRoute, putOrganisationsIdAvatarRouteHandler)
  .openapi(getOrganisationsIdConsumersRoute, getOrganisationsIdConsumersRouteHandler)
  .openapi(postOrganisationsIdConsumersRoute, postOrganisationsIdConsumersRouteHandler)
  .openapi(deleteOrganisationsIdConsumersKeyRoute, deleteOrganisationsIdConsumersKeyRouteHandler)
  .openapi(getOrganisationsIdConsumersKeyRoute, getOrganisationsIdConsumersKeyRouteHandler)
  .openapi(putOrganisationsIdConsumersKeyRoute, putOrganisationsIdConsumersKeyRouteHandler)
  .openapi(
    getOrganisationsIdConsumersKeySecretRoute,
    getOrganisationsIdConsumersKeySecretRouteHandler,
  )
  .openapi(getOrganisationsIdConsumptionsRoute, getOrganisationsIdConsumptionsRouteHandler)
  .openapi(getOrganisationsIdCreditsRoute, getOrganisationsIdCreditsRouteHandler)
  .openapi(getOrganisationsIdDeploymentsRoute, getOrganisationsIdDeploymentsRouteHandler)
  .openapi(getOrganisationsIdInstancesRoute, getOrganisationsIdInstancesRouteHandler)
  .openapi(getOrganisationsIdMembersRoute, getOrganisationsIdMembersRouteHandler)
  .openapi(postOrganisationsIdMembersRoute, postOrganisationsIdMembersRouteHandler)
  .openapi(deleteOrganisationsIdMembersUserIdRoute, deleteOrganisationsIdMembersUserIdRouteHandler)
  .openapi(putOrganisationsIdMembersUserIdRoute, putOrganisationsIdMembersUserIdRouteHandler)
  .openapi(getOrganisationsIdPaymentInfoRoute, getOrganisationsIdPaymentInfoRouteHandler)
  .openapi(getOrganisationsIdPaymentsBillingsRoute, getOrganisationsIdPaymentsBillingsRouteHandler)
  .openapi(
    postOrganisationsIdPaymentsBillingsRoute,
    postOrganisationsIdPaymentsBillingsRouteHandler,
  )
  .openapi(
    getOrganisationsIdPaymentsBillingsUnpaidRoute,
    getOrganisationsIdPaymentsBillingsUnpaidRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdPaymentsBillingsBidRoute,
    deleteOrganisationsIdPaymentsBillingsBidRouteHandler,
  )
  .openapi(
    getOrganisationsIdPaymentsBillingsBidRoute,
    getOrganisationsIdPaymentsBillingsBidRouteHandler,
  )
  .openapi(
    putOrganisationsIdPaymentsBillingsBidRoute,
    putOrganisationsIdPaymentsBillingsBidRouteHandler,
  )
  .openapi(
    getOrganisationsIdPaymentsBillingsBidPdfRoute,
    getOrganisationsIdPaymentsBillingsBidPdfRouteHandler,
  )
  .openapi(
    getOrganisationsIdPaymentsFullpricePriceRoute,
    getOrganisationsIdPaymentsFullpricePriceRouteHandler,
  )
  .openapi(getOrganisationsIdPaymentsMethodsRoute, getOrganisationsIdPaymentsMethodsRouteHandler)
  .openapi(postOrganisationsIdPaymentsMethodsRoute, postOrganisationsIdPaymentsMethodsRouteHandler)
  .openapi(
    getOrganisationsIdPaymentsMethodsDefaultRoute,
    getOrganisationsIdPaymentsMethodsDefaultRouteHandler,
  )
  .openapi(
    putOrganisationsIdPaymentsMethodsDefaultRoute,
    putOrganisationsIdPaymentsMethodsDefaultRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdPaymentsMethodsMIdRoute,
    deleteOrganisationsIdPaymentsMethodsMIdRouteHandler,
  )
  .openapi(
    getOrganisationsIdPaymentsMonthlyinvoiceRoute,
    getOrganisationsIdPaymentsMonthlyinvoiceRouteHandler,
  )
  .openapi(
    putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRoute,
    putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRouteHandler,
  )
  .openapi(
    deleteOrganisationsIdPaymentsRecurringRoute,
    deleteOrganisationsIdPaymentsRecurringRouteHandler,
  )
  .openapi(
    getOrganisationsIdPaymentsRecurringRoute,
    getOrganisationsIdPaymentsRecurringRouteHandler,
  )
  .openapi(getPasswordForgottenRoute, getPasswordForgottenRouteHandler)
  .openapi(postPasswordForgottenRoute, postPasswordForgottenRouteHandler)
  .openapi(getPasswordForgottenKeyRoute, getPasswordForgottenKeyRouteHandler)
  .openapi(postPasswordForgottenKeyRoute, postPasswordForgottenKeyRouteHandler)
  .openapi(
    getPaymentsAssetsPayButtonTokenButtonPngRoute,
    getPaymentsAssetsPayButtonTokenButtonPngRouteHandler,
  )
  .openapi(getPaymentsCouponsNameRoute, getPaymentsCouponsNameRouteHandler)
  .openapi(getPaymentsProvidersRoute, getPaymentsProvidersRouteHandler)
  .openapi(getPaymentsTokensStripeRoute, getPaymentsTokensStripeRouteHandler)
  .openapi(postPaymentsBidEndStripeRoute, postPaymentsBidEndStripeRouteHandler)
  .openapi(getProductsAddonprovidersRoute, getProductsAddonprovidersRouteHandler)
  .openapi(
    getProductsAddonprovidersProviderIdRoute,
    getProductsAddonprovidersProviderIdRouteHandler,
  )
  .openapi(
    getProductsAddonprovidersProviderIdVersionsRoute,
    getProductsAddonprovidersProviderIdVersionsRouteHandler,
  )
  .openapi(getProductsCountriesRoute, getProductsCountriesRouteHandler)
  .openapi(getProductsCountrycodesRoute, getProductsCountrycodesRouteHandler)
  .openapi(getProductsInstancesRoute, getProductsInstancesRouteHandler)
  .openapi(getProductsInstancesTypeVersionRoute, getProductsInstancesTypeVersionRouteHandler)
  .openapi(getProductsMfaKindsRoute, getProductsMfaKindsRouteHandler)
  .openapi(getProductsPackagesRoute, getProductsPackagesRouteHandler)
  .openapi(getProductsPricesRoute, getProductsPricesRouteHandler)
  .openapi(getProductsZonesRoute, getProductsZonesRouteHandler)
  .openapi(deleteSelfRoute, deleteSelfRouteHandler)
  .openapi(getSelfRoute, getSelfRouteHandler)
  .openapi(putSelfRoute, putSelfRouteHandler)
  .openapi(getSelfAddonsRoute, getSelfAddonsRouteHandler)
  .openapi(postSelfAddonsRoute, postSelfAddonsRouteHandler)
  .openapi(postSelfAddonsPreordersRoute, postSelfAddonsPreordersRouteHandler)
  .openapi(deleteSelfAddonsAddonIdRoute, deleteSelfAddonsAddonIdRouteHandler)
  .openapi(getSelfAddonsAddonIdRoute, getSelfAddonsAddonIdRouteHandler)
  .openapi(putSelfAddonsAddonIdRoute, putSelfAddonsAddonIdRouteHandler)
  .openapi(getSelfAddonsAddonIdApplicationsRoute, getSelfAddonsAddonIdApplicationsRouteHandler)
  .openapi(getSelfAddonsAddonIdEnvRoute, getSelfAddonsAddonIdEnvRouteHandler)
  .openapi(putSelfAddonsAddonIdPlanRoute, putSelfAddonsAddonIdPlanRouteHandler)
  .openapi(getSelfAddonsAddonIdSsoRoute, getSelfAddonsAddonIdSsoRouteHandler)
  .openapi(getSelfAddonsAddonIdTagsRoute, getSelfAddonsAddonIdTagsRouteHandler)
  .openapi(deleteSelfAddonsAddonIdTagsTagRoute, deleteSelfAddonsAddonIdTagsTagRouteHandler)
  .openapi(putSelfAddonsAddonIdTagsTagRoute, putSelfAddonsAddonIdTagsTagRouteHandler)
  .openapi(getSelfApplicationsRoute, getSelfApplicationsRouteHandler)
  .openapi(postSelfApplicationsRoute, postSelfApplicationsRouteHandler)
  .openapi(deleteSelfApplicationsAppIdRoute, deleteSelfApplicationsAppIdRouteHandler)
  .openapi(getSelfApplicationsAppIdRoute, getSelfApplicationsAppIdRouteHandler)
  .openapi(putSelfApplicationsAppIdRoute, putSelfApplicationsAppIdRouteHandler)
  .openapi(getSelfApplicationsAppIdAddonsRoute, getSelfApplicationsAppIdAddonsRouteHandler)
  .openapi(postSelfApplicationsAppIdAddonsRoute, postSelfApplicationsAppIdAddonsRouteHandler)
  .openapi(getSelfApplicationsAppIdAddonsEnvRoute, getSelfApplicationsAppIdAddonsEnvRouteHandler)
  .openapi(
    deleteSelfApplicationsAppIdAddonsAddonIdRoute,
    deleteSelfApplicationsAppIdAddonsAddonIdRouteHandler,
  )
  .openapi(putSelfApplicationsAppIdBranchRoute, putSelfApplicationsAppIdBranchRouteHandler)
  .openapi(getSelfApplicationsAppIdBranchesRoute, getSelfApplicationsAppIdBranchesRouteHandler)
  .openapi(
    putSelfApplicationsAppIdBuildflavorRoute,
    putSelfApplicationsAppIdBuildflavorRouteHandler,
  )
  .openapi(
    getSelfApplicationsAppIdDependenciesRoute,
    getSelfApplicationsAppIdDependenciesRouteHandler,
  )
  .openapi(
    getSelfApplicationsAppIdDependenciesEnvRoute,
    getSelfApplicationsAppIdDependenciesEnvRouteHandler,
  )
  .openapi(
    deleteSelfApplicationsAppIdDependenciesDependencyIdRoute,
    deleteSelfApplicationsAppIdDependenciesDependencyIdRouteHandler,
  )
  .openapi(
    putSelfApplicationsAppIdDependenciesDependencyIdRoute,
    putSelfApplicationsAppIdDependenciesDependencyIdRouteHandler,
  )
  .openapi(getSelfApplicationsAppIdDependentsRoute, getSelfApplicationsAppIdDependentsRouteHandler)
  .openapi(
    getSelfApplicationsAppIdDeploymentsRoute,
    getSelfApplicationsAppIdDeploymentsRouteHandler,
  )
  .openapi(
    getSelfApplicationsAppIdDeploymentsDeploymentIdRoute,
    getSelfApplicationsAppIdDeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesRoute,
    deleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesRouteHandler,
  )
  .openapi(getSelfApplicationsAppIdEnvRoute, getSelfApplicationsAppIdEnvRouteHandler)
  .openapi(putSelfApplicationsAppIdEnvRoute, putSelfApplicationsAppIdEnvRouteHandler)
  .openapi(
    deleteSelfApplicationsAppIdEnvEnvNameRoute,
    deleteSelfApplicationsAppIdEnvEnvNameRouteHandler,
  )
  .openapi(putSelfApplicationsAppIdEnvEnvNameRoute, putSelfApplicationsAppIdEnvEnvNameRouteHandler)
  .openapi(getSelfApplicationsAppIdExposedEnvRoute, getSelfApplicationsAppIdExposedEnvRouteHandler)
  .openapi(putSelfApplicationsAppIdExposedEnvRoute, putSelfApplicationsAppIdExposedEnvRouteHandler)
  .openapi(
    deleteSelfApplicationsAppIdInstancesRoute,
    deleteSelfApplicationsAppIdInstancesRouteHandler,
  )
  .openapi(getSelfApplicationsAppIdInstancesRoute, getSelfApplicationsAppIdInstancesRouteHandler)
  .openapi(postSelfApplicationsAppIdInstancesRoute, postSelfApplicationsAppIdInstancesRouteHandler)
  .openapi(
    getSelfApplicationsAppIdInstancesInstanceIdRoute,
    getSelfApplicationsAppIdInstancesInstanceIdRouteHandler,
  )
  .openapi(getSelfApplicationsAppIdTagsRoute, getSelfApplicationsAppIdTagsRouteHandler)
  .openapi(deleteSelfApplicationsAppIdTagsTagRoute, deleteSelfApplicationsAppIdTagsTagRouteHandler)
  .openapi(putSelfApplicationsAppIdTagsTagRoute, putSelfApplicationsAppIdTagsTagRouteHandler)
  .openapi(getSelfApplicationsAppIdVhostsRoute, getSelfApplicationsAppIdVhostsRouteHandler)
  .openapi(
    deleteSelfApplicationsAppIdVhostsFavouriteRoute,
    deleteSelfApplicationsAppIdVhostsFavouriteRouteHandler,
  )
  .openapi(
    getSelfApplicationsAppIdVhostsFavouriteRoute,
    getSelfApplicationsAppIdVhostsFavouriteRouteHandler,
  )
  .openapi(
    putSelfApplicationsAppIdVhostsFavouriteRoute,
    putSelfApplicationsAppIdVhostsFavouriteRouteHandler,
  )
  .openapi(
    deleteSelfApplicationsAppIdVhostsDomainRoute,
    deleteSelfApplicationsAppIdVhostsDomainRouteHandler,
  )
  .openapi(
    putSelfApplicationsAppIdVhostsDomainRoute,
    putSelfApplicationsAppIdVhostsDomainRouteHandler,
  )
  .openapi(putSelfAvatarRoute, putSelfAvatarRouteHandler)
  .openapi(putSelfChangePasswordRoute, putSelfChangePasswordRouteHandler)
  .openapi(getSelfCliTokensRoute, getSelfCliTokensRouteHandler)
  .openapi(getSelfConfirmationEmailRoute, getSelfConfirmationEmailRouteHandler)
  .openapi(getSelfConsumersRoute, getSelfConsumersRouteHandler)
  .openapi(postSelfConsumersRoute, postSelfConsumersRouteHandler)
  .openapi(deleteSelfConsumersKeyRoute, deleteSelfConsumersKeyRouteHandler)
  .openapi(getSelfConsumersKeyRoute, getSelfConsumersKeyRouteHandler)
  .openapi(putSelfConsumersKeyRoute, putSelfConsumersKeyRouteHandler)
  .openapi(getSelfConsumersKeySecretRoute, getSelfConsumersKeySecretRouteHandler)
  .openapi(getSelfConsumptionsRoute, getSelfConsumptionsRouteHandler)
  .openapi(getSelfCreditsRoute, getSelfCreditsRouteHandler)
  .openapi(getSelfEmailsRoute, getSelfEmailsRouteHandler)
  .openapi(deleteSelfEmailsEmailRoute, deleteSelfEmailsEmailRouteHandler)
  .openapi(putSelfEmailsEmailRoute, putSelfEmailsEmailRouteHandler)
  .openapi(getSelfIdRoute, getSelfIdRouteHandler)
  .openapi(getSelfInstancesRoute, getSelfInstancesRouteHandler)
  .openapi(getSelfKeysRoute, getSelfKeysRouteHandler)
  .openapi(deleteSelfKeysKeyRoute, deleteSelfKeysKeyRouteHandler)
  .openapi(putSelfKeysKeyRoute, putSelfKeysKeyRouteHandler)
  .openapi(deleteSelfMfaKindRoute, deleteSelfMfaKindRouteHandler)
  .openapi(postSelfMfaKindRoute, postSelfMfaKindRouteHandler)
  .openapi(putSelfMfaKindRoute, putSelfMfaKindRouteHandler)
  .openapi(getSelfMfaKindBackupcodesRoute, getSelfMfaKindBackupcodesRouteHandler)
  .openapi(postSelfMfaKindConfirmationRoute, postSelfMfaKindConfirmationRouteHandler)
  .openapi(getSelfPaymentInfoRoute, getSelfPaymentInfoRouteHandler)
  .openapi(getSelfPaymentsBillingsRoute, getSelfPaymentsBillingsRouteHandler)
  .openapi(postSelfPaymentsBillingsRoute, postSelfPaymentsBillingsRouteHandler)
  .openapi(deleteSelfPaymentsBillingsBidRoute, deleteSelfPaymentsBillingsBidRouteHandler)
  .openapi(getSelfPaymentsBillingsBidRoute, getSelfPaymentsBillingsBidRouteHandler)
  .openapi(putSelfPaymentsBillingsBidRoute, putSelfPaymentsBillingsBidRouteHandler)
  .openapi(getSelfPaymentsBillingsBidPdfRoute, getSelfPaymentsBillingsBidPdfRouteHandler)
  .openapi(getSelfPaymentsFullpricePriceRoute, getSelfPaymentsFullpricePriceRouteHandler)
  .openapi(getSelfPaymentsMethodsRoute, getSelfPaymentsMethodsRouteHandler)
  .openapi(postSelfPaymentsMethodsRoute, postSelfPaymentsMethodsRouteHandler)
  .openapi(getSelfPaymentsMethodsDefaultRoute, getSelfPaymentsMethodsDefaultRouteHandler)
  .openapi(putSelfPaymentsMethodsDefaultRoute, putSelfPaymentsMethodsDefaultRouteHandler)
  .openapi(deleteSelfPaymentsMethodsMIdRoute, deleteSelfPaymentsMethodsMIdRouteHandler)
  .openapi(getSelfPaymentsMonthlyinvoiceRoute, getSelfPaymentsMonthlyinvoiceRouteHandler)
  .openapi(
    putSelfPaymentsMonthlyinvoiceMaxcreditRoute,
    putSelfPaymentsMonthlyinvoiceMaxcreditRouteHandler,
  )
  .openapi(deleteSelfPaymentsRecurringRoute, deleteSelfPaymentsRecurringRouteHandler)
  .openapi(getSelfPaymentsRecurringRoute, getSelfPaymentsRecurringRouteHandler)
  .openapi(getSelfPaymentsTokensStripeRoute, getSelfPaymentsTokensStripeRouteHandler)
  .openapi(deleteSelfTokensRoute, deleteSelfTokensRouteHandler)
  .openapi(getSelfTokensRoute, getSelfTokensRouteHandler)
  .openapi(deleteSelfTokensTokenRoute, deleteSelfTokensTokenRouteHandler)
  .openapi(getSelfValidateEmailRoute, getSelfValidateEmailRouteHandler)
  .openapi(getSummaryRoute, getSummaryRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(getUsersIdApplicationsRoute, getUsersIdApplicationsRouteHandler)
  .openapi(getUsersUserIdGitInfoRoute, getUsersUserIdGitInfoRouteHandler)
  .openapi(
    postV2ProvidersAddonMatomoResourcesRoute,
    postV2ProvidersAddonMatomoResourcesRouteHandler,
  )
  .openapi(
    deleteV2ProvidersAddonMatomoResourcesMatomoIdRoute,
    deleteV2ProvidersAddonMatomoResourcesMatomoIdRouteHandler,
  )
  .openapi(getV3LogsAppIdRoute, getV3LogsAppIdRouteHandler)
  .openapi(getV3LogsAppIdDrainsRoute, getV3LogsAppIdDrainsRouteHandler)
  .openapi(postV3LogsAppIdDrainsRoute, postV3LogsAppIdDrainsRouteHandler)
  .openapi(deleteV3LogsAppIdDrainsIdOrUrlRoute, deleteV3LogsAppIdDrainsIdOrUrlRouteHandler)
  .openapi(getV3LogsAppIdDrainsIdOrUrlRoute, getV3LogsAppIdDrainsIdOrUrlRouteHandler)
  .openapi(getV3LogsAppIdLogsChunkedRoute, getV3LogsAppIdLogsChunkedRouteHandler)
  .openapi(getV3LogsAppIdLogsSocketRoute, getV3LogsAppIdLogsSocketRouteHandler)
  .openapi(
    getV4AddonProvidersAddonMatomoAddonsMatomoIdRoute,
    getV4AddonProvidersAddonMatomoAddonsMatomoIdRouteHandler,
  )
  .openapi(
    getV4AddonProvidersAddonMatomoTokenValidateRoute,
    getV4AddonProvidersAddonMatomoTokenValidateRouteHandler,
  )
  .openapi(
    getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRoute,
    getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRouteHandler,
  )
  .openapi(
    getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute,
    getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRouteHandler,
  )
  .openapi(
    putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute,
    putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRouteHandler,
  )
  .openapi(
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute,
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRouteHandler,
  )
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute,
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRouteHandler,
  )
  .openapi(
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRoute,
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRouteHandler,
  )
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRoute,
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRouteHandler,
  )
  .openapi(
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute,
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRouteHandler,
  )
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRouteHandler,
  )
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRouteHandler,
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRoute,
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRouteHandler,
  )
  .openapi(postVendorAddonsRoute, postVendorAddonsRouteHandler)
  .openapi(getVendorAppsAddonIdLogscollectorRoute, getVendorAppsAddonIdLogscollectorRouteHandler)
  .openapi(getVendorAppsRoute, getVendorAppsRouteHandler)
  .openapi(getVendorAppsAddonIdRoute, getVendorAppsAddonIdRouteHandler)
  .openapi(putVendorAppsAddonIdRoute, putVendorAppsAddonIdRouteHandler)
  .openapi(postVendorAppsAddonIdConsumptionsRoute, postVendorAppsAddonIdConsumptionsRouteHandler)
  .openapi(
    putVendorAppsAddonIdMigrationCallbackRoute,
    putVendorAppsAddonIdMigrationCallbackRouteHandler,
  )

export default app
