import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getOrganisationsRouteHandler: RouteHandler<typeof getOrganisationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOrganisationsRouteHandler: RouteHandler<typeof postOrganisationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdRouteHandler: RouteHandler<typeof getOrganisationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdRouteHandler: RouteHandler<typeof putOrganisationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonprovidersRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonprovidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdAddonprovidersProviderIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdAddonprovidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersProviderIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdAddonprovidersProviderIdRouteHandler: RouteHandler<
  typeof putOrganisationsIdAddonprovidersProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersProviderIdFeaturesRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersProviderIdFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonprovidersProviderIdFeaturesRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonprovidersProviderIdFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersProviderIdPlansRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersProviderIdPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonprovidersProviderIdPlansRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonprovidersProviderIdPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRouteHandler: RouteHandler<
  typeof putOrganisationsIdAddonprovidersProviderIdPlansPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRouteHandler: RouteHandler<
  typeof putOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersProviderIdSsoRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersProviderIdSsoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonprovidersProviderIdTagsRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonprovidersProviderIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonprovidersProviderIdTestersRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonprovidersProviderIdTestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonsRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonsPreordersRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonsPreordersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdAddonsAddonIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdAddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdAddonsAddonIdRouteHandler: RouteHandler<
  typeof putOrganisationsIdAddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdApplicationsRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdEnvRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdInstancesRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdInstancesInstanceIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdMigrationsRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdAddonsAddonIdMigrationsRouteHandler: RouteHandler<
  typeof postOrganisationsIdAddonsAddonIdMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdSsoRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdSsoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdAddonsAddonIdTagsRouteHandler: RouteHandler<
  typeof getOrganisationsIdAddonsAddonIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdAddonsAddonIdTagsTagRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdAddonsAddonIdTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdAddonsAddonIdTagsTagRouteHandler: RouteHandler<
  typeof putOrganisationsIdAddonsAddonIdTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdApplicationsRouteHandler: RouteHandler<
  typeof postOrganisationsIdApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdAddonsRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdApplicationsAppIdAddonsRouteHandler: RouteHandler<
  typeof postOrganisationsIdApplicationsAppIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdAddonsEnvRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdAddonsEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdAddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdBranchRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdBranchesRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdBuildflavorRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdBuildflavorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdDependenciesRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdDependenciesEnvRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdDependenciesEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdDependenciesDependencyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdDependentsRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdDependentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdDeploymentsRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdEnvRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdEnvRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdEnvEnvNameRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdEnvEnvNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdEnvEnvNameRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdEnvEnvNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdExposedEnvRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdExposedEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdExposedEnvRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdExposedEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdInstancesRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdInstancesRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdApplicationsAppIdInstancesRouteHandler: RouteHandler<
  typeof postOrganisationsIdApplicationsAppIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdInstancesInstanceIdRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdTagsRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdTagsTagRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdTagsTagRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdVhostsRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdVhostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdVhostsFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler: RouteHandler<
  typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdVhostsFavouriteRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdVhostsFavouriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdApplicationsAppIdVhostsDomainRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdApplicationsAppIdVhostsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdApplicationsAppIdVhostsDomainRouteHandler: RouteHandler<
  typeof putOrganisationsIdApplicationsAppIdVhostsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdAvatarRouteHandler: RouteHandler<
  typeof putOrganisationsIdAvatarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdConsumersRouteHandler: RouteHandler<
  typeof getOrganisationsIdConsumersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdConsumersRouteHandler: RouteHandler<
  typeof postOrganisationsIdConsumersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdConsumersKeyRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdConsumersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdConsumersKeyRouteHandler: RouteHandler<
  typeof getOrganisationsIdConsumersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdConsumersKeyRouteHandler: RouteHandler<
  typeof putOrganisationsIdConsumersKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdConsumersKeySecretRouteHandler: RouteHandler<
  typeof getOrganisationsIdConsumersKeySecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdConsumptionsRouteHandler: RouteHandler<
  typeof getOrganisationsIdConsumptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdCreditsRouteHandler: RouteHandler<
  typeof getOrganisationsIdCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdDeploymentsRouteHandler: RouteHandler<
  typeof getOrganisationsIdDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdInstancesRouteHandler: RouteHandler<
  typeof getOrganisationsIdInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdMembersRouteHandler: RouteHandler<
  typeof getOrganisationsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdMembersRouteHandler: RouteHandler<
  typeof postOrganisationsIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdMembersUserIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdMembersUserIdRouteHandler: RouteHandler<
  typeof putOrganisationsIdMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentInfoRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsBillingsRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsBillingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdPaymentsBillingsRouteHandler: RouteHandler<
  typeof postOrganisationsIdPaymentsBillingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsBillingsUnpaidRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsBillingsUnpaidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdPaymentsBillingsBidRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdPaymentsBillingsBidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsBillingsBidRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsBillingsBidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdPaymentsBillingsBidRouteHandler: RouteHandler<
  typeof putOrganisationsIdPaymentsBillingsBidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsBillingsBidPdfRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsBillingsBidPdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsFullpricePriceRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsFullpricePriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsMethodsRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganisationsIdPaymentsMethodsRouteHandler: RouteHandler<
  typeof postOrganisationsIdPaymentsMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsMethodsDefaultRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsMethodsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdPaymentsMethodsDefaultRouteHandler: RouteHandler<
  typeof putOrganisationsIdPaymentsMethodsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdPaymentsMethodsMIdRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdPaymentsMethodsMIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsMonthlyinvoiceRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsMonthlyinvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRouteHandler: RouteHandler<
  typeof putOrganisationsIdPaymentsMonthlyinvoiceMaxcreditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganisationsIdPaymentsRecurringRouteHandler: RouteHandler<
  typeof deleteOrganisationsIdPaymentsRecurringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganisationsIdPaymentsRecurringRouteHandler: RouteHandler<
  typeof getOrganisationsIdPaymentsRecurringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
