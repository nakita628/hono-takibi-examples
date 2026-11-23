import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const organisationsHandler = app
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
