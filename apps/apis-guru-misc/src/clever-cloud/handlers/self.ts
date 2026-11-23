import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const selfHandler = app
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
