import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UsersUserIdRoute,
  deleteV3PayeesPayeeIdRoute,
  deleteV3PayoutsPayoutIdRoute,
  deleteV3PayoutsPayoutIdScheduleRoute,
  deleteV3SourceAccountsSourceAccountIdRoute,
  deleteV4PayeesPayeeIdRoute,
  getV1DeltasFundingsRoute,
  getV1DeltasPaymentsRoute,
  getV1FundingsFundingIdRoute,
  getV1PaymentauditFundingsRoute,
  getV1PaymentauditPayoutStatisticsRoute,
  getV1PaymentChannelRulesRoute,
  getV1PayorLinksRoute,
  getV1PayorsPayorIdBrandingRoute,
  getV1PayorsPayorIdRoute,
  getV1SupportedCountriesRoute,
  getV1WebhooksRoute,
  getV1WebhooksWebhookIdRoute,
  getV2CurrenciesRoute,
  getV2FundingAccountsFundingAccountIdRoute,
  getV2FundingAccountsRoute,
  getV2PayorsPayorIdRoute,
  getV2SourceAccountsRoute,
  getV2SourceAccountsSourceAccountIdRoute,
  getV2SupportedCountriesRoute,
  getV2UsersRoute,
  getV2UsersSelfRoute,
  getV2UsersUserIdRoute,
  getV3PayeesBatchBatchIdRoute,
  getV3PayeesDeltasRoute,
  getV3PayeesPayeeIdRoute,
  getV3PayeesPayorsPayorIdInvitationStatusRoute,
  getV3PayeesRoute,
  getV3PaymentauditPaymentsPaymentIdRoute,
  getV3PaymentauditPaymentsRoute,
  getV3PaymentauditPayoutsPayoutIdRoute,
  getV3PaymentauditPayoutsRoute,
  getV3PaymentauditTransactionsRoute,
  getV3PayoutsPayoutIdPaymentsRoute,
  getV3PayoutsPayoutIdRoute,
  getV3SourceAccountsRoute,
  getV3SourceAccountsSourceAccountIdRoute,
  getV4PayeesBatchBatchIdRoute,
  getV4PayeesDeltasRoute,
  getV4PayeesPayeeIdRoute,
  getV4PayeesPayorsPayorIdInvitationStatusRoute,
  getV4PayeesRoute,
  getV4PaymentauditFundingsRoute,
  getV4PaymentauditPaymentsPaymentIdRoute,
  getV4PaymentauditPaymentsRoute,
  getV4PaymentauditPayoutsPayoutIdRoute,
  getV4PaymentauditPayoutsRoute,
  getV4PaymentauditPayoutStatisticsRoute,
  getV4PaymentauditTransactionsRoute,
  getV4PaymentsDeltasRoute,
  postV1AuthenticateRoute,
  postV1LogoutRoute,
  postV1PasswordResetRoute,
  postV1PaymentsPaymentIdWithdrawRoute,
  postV1PayorLinksRoute,
  postV1PayorsPayorIdApplicationsApplicationIdKeysRoute,
  postV1PayorsPayorIdApplicationsRoute,
  postV1PayorsPayorIdBrandingLogosRoute,
  postV1PayorsPayorIdReminderEmailsUpdateRoute,
  postV1SourceAccountsSourceAccountIdNotificationsRoute,
  postV1ValidateRoute,
  postV1WebhooksRoute,
  postV1WebhooksWebhookIdPingRoute,
  postV1WebhooksWebhookIdRoute,
  postV2FundingAccountsRoute,
  postV2SourceAccountsSourceAccountIdFundingRequestRoute,
  postV2SourceAccountsSourceAccountIdTransfersRoute,
  postV2UsersInviteRoute,
  postV2UsersRegistrationSmsRoute,
  postV2UsersSelfMfaUnregisterRoute,
  postV2UsersSelfPasswordRoute,
  postV2UsersSelfPasswordValidateRoute,
  postV2UsersSelfUserDetailsUpdateRoute,
  postV2UsersUserIdDisableRoute,
  postV2UsersUserIdEnableRoute,
  postV2UsersUserIdMfaUnregisterRoute,
  postV2UsersUserIdRoleUpdateRoute,
  postV2UsersUserIdTokensRoute,
  postV2UsersUserIdUnlockRoute,
  postV2UsersUserIdUserDetailsUpdateRoute,
  postV3PayeesPayeeIdInviteRoute,
  postV3PayeesPayeeIdPayeeDetailsUpdateRoute,
  postV3PayeesPayeeIdRemoteIdUpdateRoute,
  postV3PayeesRoute,
  postV3PayoutsPayoutIdQuoteRoute,
  postV3PayoutsPayoutIdRoute,
  postV3PayoutsPayoutIdScheduleRoute,
  postV3PayoutsRoute,
  postV3SourceAccountsSourceAccountIdFundingRequestRoute,
  postV3SourceAccountsSourceAccountIdNotificationsRoute,
  postV3SourceAccountsSourceAccountIdTransfersRoute,
  postV4PayeesPayeeIdInviteRoute,
  postV4PayeesPayeeIdPayeeDetailsUpdateRoute,
  postV4PayeesPayeeIdRemoteIdUpdateRoute,
  postV4PayeesRoute,
} from './routes'
import {
  deleteV2UsersUserIdRouteHandler,
  deleteV3PayeesPayeeIdRouteHandler,
  deleteV3PayoutsPayoutIdRouteHandler,
  deleteV3PayoutsPayoutIdScheduleRouteHandler,
  deleteV3SourceAccountsSourceAccountIdRouteHandler,
  deleteV4PayeesPayeeIdRouteHandler,
  getV1DeltasFundingsRouteHandler,
  getV1DeltasPaymentsRouteHandler,
  getV1FundingsFundingIdRouteHandler,
  getV1PaymentauditFundingsRouteHandler,
  getV1PaymentauditPayoutStatisticsRouteHandler,
  getV1PaymentChannelRulesRouteHandler,
  getV1PayorLinksRouteHandler,
  getV1PayorsPayorIdBrandingRouteHandler,
  getV1PayorsPayorIdRouteHandler,
  getV1SupportedCountriesRouteHandler,
  getV1WebhooksRouteHandler,
  getV1WebhooksWebhookIdRouteHandler,
  getV2CurrenciesRouteHandler,
  getV2FundingAccountsFundingAccountIdRouteHandler,
  getV2FundingAccountsRouteHandler,
  getV2PayorsPayorIdRouteHandler,
  getV2SourceAccountsRouteHandler,
  getV2SourceAccountsSourceAccountIdRouteHandler,
  getV2SupportedCountriesRouteHandler,
  getV2UsersRouteHandler,
  getV2UsersSelfRouteHandler,
  getV2UsersUserIdRouteHandler,
  getV3PayeesBatchBatchIdRouteHandler,
  getV3PayeesDeltasRouteHandler,
  getV3PayeesPayeeIdRouteHandler,
  getV3PayeesPayorsPayorIdInvitationStatusRouteHandler,
  getV3PayeesRouteHandler,
  getV3PaymentauditPaymentsPaymentIdRouteHandler,
  getV3PaymentauditPaymentsRouteHandler,
  getV3PaymentauditPayoutsPayoutIdRouteHandler,
  getV3PaymentauditPayoutsRouteHandler,
  getV3PaymentauditTransactionsRouteHandler,
  getV3PayoutsPayoutIdPaymentsRouteHandler,
  getV3PayoutsPayoutIdRouteHandler,
  getV3SourceAccountsRouteHandler,
  getV3SourceAccountsSourceAccountIdRouteHandler,
  getV4PayeesBatchBatchIdRouteHandler,
  getV4PayeesDeltasRouteHandler,
  getV4PayeesPayeeIdRouteHandler,
  getV4PayeesPayorsPayorIdInvitationStatusRouteHandler,
  getV4PayeesRouteHandler,
  getV4PaymentauditFundingsRouteHandler,
  getV4PaymentauditPaymentsPaymentIdRouteHandler,
  getV4PaymentauditPaymentsRouteHandler,
  getV4PaymentauditPayoutsPayoutIdRouteHandler,
  getV4PaymentauditPayoutsRouteHandler,
  getV4PaymentauditPayoutStatisticsRouteHandler,
  getV4PaymentauditTransactionsRouteHandler,
  getV4PaymentsDeltasRouteHandler,
  postV1AuthenticateRouteHandler,
  postV1LogoutRouteHandler,
  postV1PasswordResetRouteHandler,
  postV1PaymentsPaymentIdWithdrawRouteHandler,
  postV1PayorLinksRouteHandler,
  postV1PayorsPayorIdApplicationsApplicationIdKeysRouteHandler,
  postV1PayorsPayorIdApplicationsRouteHandler,
  postV1PayorsPayorIdBrandingLogosRouteHandler,
  postV1PayorsPayorIdReminderEmailsUpdateRouteHandler,
  postV1SourceAccountsSourceAccountIdNotificationsRouteHandler,
  postV1ValidateRouteHandler,
  postV1WebhooksRouteHandler,
  postV1WebhooksWebhookIdPingRouteHandler,
  postV1WebhooksWebhookIdRouteHandler,
  postV2FundingAccountsRouteHandler,
  postV2SourceAccountsSourceAccountIdFundingRequestRouteHandler,
  postV2SourceAccountsSourceAccountIdTransfersRouteHandler,
  postV2UsersInviteRouteHandler,
  postV2UsersRegistrationSmsRouteHandler,
  postV2UsersSelfMfaUnregisterRouteHandler,
  postV2UsersSelfPasswordRouteHandler,
  postV2UsersSelfPasswordValidateRouteHandler,
  postV2UsersSelfUserDetailsUpdateRouteHandler,
  postV2UsersUserIdDisableRouteHandler,
  postV2UsersUserIdEnableRouteHandler,
  postV2UsersUserIdMfaUnregisterRouteHandler,
  postV2UsersUserIdRoleUpdateRouteHandler,
  postV2UsersUserIdTokensRouteHandler,
  postV2UsersUserIdUnlockRouteHandler,
  postV2UsersUserIdUserDetailsUpdateRouteHandler,
  postV3PayeesPayeeIdInviteRouteHandler,
  postV3PayeesPayeeIdPayeeDetailsUpdateRouteHandler,
  postV3PayeesPayeeIdRemoteIdUpdateRouteHandler,
  postV3PayeesRouteHandler,
  postV3PayoutsPayoutIdQuoteRouteHandler,
  postV3PayoutsPayoutIdRouteHandler,
  postV3PayoutsPayoutIdScheduleRouteHandler,
  postV3PayoutsRouteHandler,
  postV3SourceAccountsSourceAccountIdFundingRequestRouteHandler,
  postV3SourceAccountsSourceAccountIdNotificationsRouteHandler,
  postV3SourceAccountsSourceAccountIdTransfersRouteHandler,
  postV4PayeesPayeeIdInviteRouteHandler,
  postV4PayeesPayeeIdPayeeDetailsUpdateRouteHandler,
  postV4PayeesPayeeIdRemoteIdUpdateRouteHandler,
  postV4PayeesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AuthenticateRoute, postV1AuthenticateRouteHandler)
  .openapi(getV1DeltasFundingsRoute, getV1DeltasFundingsRouteHandler)
  .openapi(getV1DeltasPaymentsRoute, getV1DeltasPaymentsRouteHandler)
  .openapi(getV1FundingsFundingIdRoute, getV1FundingsFundingIdRouteHandler)
  .openapi(postV1LogoutRoute, postV1LogoutRouteHandler)
  .openapi(postV1PasswordResetRoute, postV1PasswordResetRouteHandler)
  .openapi(getV1PaymentChannelRulesRoute, getV1PaymentChannelRulesRouteHandler)
  .openapi(getV1PaymentauditFundingsRoute, getV1PaymentauditFundingsRouteHandler)
  .openapi(getV1PaymentauditPayoutStatisticsRoute, getV1PaymentauditPayoutStatisticsRouteHandler)
  .openapi(postV1PaymentsPaymentIdWithdrawRoute, postV1PaymentsPaymentIdWithdrawRouteHandler)
  .openapi(getV1PayorLinksRoute, getV1PayorLinksRouteHandler)
  .openapi(postV1PayorLinksRoute, postV1PayorLinksRouteHandler)
  .openapi(getV1PayorsPayorIdRoute, getV1PayorsPayorIdRouteHandler)
  .openapi(postV1PayorsPayorIdApplicationsRoute, postV1PayorsPayorIdApplicationsRouteHandler)
  .openapi(
    postV1PayorsPayorIdApplicationsApplicationIdKeysRoute,
    postV1PayorsPayorIdApplicationsApplicationIdKeysRouteHandler,
  )
  .openapi(getV1PayorsPayorIdBrandingRoute, getV1PayorsPayorIdBrandingRouteHandler)
  .openapi(postV1PayorsPayorIdBrandingLogosRoute, postV1PayorsPayorIdBrandingLogosRouteHandler)
  .openapi(
    postV1PayorsPayorIdReminderEmailsUpdateRoute,
    postV1PayorsPayorIdReminderEmailsUpdateRouteHandler,
  )
  .openapi(
    postV1SourceAccountsSourceAccountIdNotificationsRoute,
    postV1SourceAccountsSourceAccountIdNotificationsRouteHandler,
  )
  .openapi(getV1SupportedCountriesRoute, getV1SupportedCountriesRouteHandler)
  .openapi(postV1ValidateRoute, postV1ValidateRouteHandler)
  .openapi(getV1WebhooksRoute, getV1WebhooksRouteHandler)
  .openapi(postV1WebhooksRoute, postV1WebhooksRouteHandler)
  .openapi(getV1WebhooksWebhookIdRoute, getV1WebhooksWebhookIdRouteHandler)
  .openapi(postV1WebhooksWebhookIdRoute, postV1WebhooksWebhookIdRouteHandler)
  .openapi(postV1WebhooksWebhookIdPingRoute, postV1WebhooksWebhookIdPingRouteHandler)
  .openapi(getV2CurrenciesRoute, getV2CurrenciesRouteHandler)
  .openapi(getV2FundingAccountsRoute, getV2FundingAccountsRouteHandler)
  .openapi(postV2FundingAccountsRoute, postV2FundingAccountsRouteHandler)
  .openapi(
    getV2FundingAccountsFundingAccountIdRoute,
    getV2FundingAccountsFundingAccountIdRouteHandler,
  )
  .openapi(getV2PayorsPayorIdRoute, getV2PayorsPayorIdRouteHandler)
  .openapi(getV2SourceAccountsRoute, getV2SourceAccountsRouteHandler)
  .openapi(getV2SourceAccountsSourceAccountIdRoute, getV2SourceAccountsSourceAccountIdRouteHandler)
  .openapi(
    postV2SourceAccountsSourceAccountIdFundingRequestRoute,
    postV2SourceAccountsSourceAccountIdFundingRequestRouteHandler,
  )
  .openapi(
    postV2SourceAccountsSourceAccountIdTransfersRoute,
    postV2SourceAccountsSourceAccountIdTransfersRouteHandler,
  )
  .openapi(getV2SupportedCountriesRoute, getV2SupportedCountriesRouteHandler)
  .openapi(getV2UsersRoute, getV2UsersRouteHandler)
  .openapi(postV2UsersInviteRoute, postV2UsersInviteRouteHandler)
  .openapi(postV2UsersRegistrationSmsRoute, postV2UsersRegistrationSmsRouteHandler)
  .openapi(getV2UsersSelfRoute, getV2UsersSelfRouteHandler)
  .openapi(postV2UsersSelfMfaUnregisterRoute, postV2UsersSelfMfaUnregisterRouteHandler)
  .openapi(postV2UsersSelfPasswordRoute, postV2UsersSelfPasswordRouteHandler)
  .openapi(postV2UsersSelfPasswordValidateRoute, postV2UsersSelfPasswordValidateRouteHandler)
  .openapi(postV2UsersSelfUserDetailsUpdateRoute, postV2UsersSelfUserDetailsUpdateRouteHandler)
  .openapi(deleteV2UsersUserIdRoute, deleteV2UsersUserIdRouteHandler)
  .openapi(getV2UsersUserIdRoute, getV2UsersUserIdRouteHandler)
  .openapi(postV2UsersUserIdDisableRoute, postV2UsersUserIdDisableRouteHandler)
  .openapi(postV2UsersUserIdEnableRoute, postV2UsersUserIdEnableRouteHandler)
  .openapi(postV2UsersUserIdMfaUnregisterRoute, postV2UsersUserIdMfaUnregisterRouteHandler)
  .openapi(postV2UsersUserIdRoleUpdateRoute, postV2UsersUserIdRoleUpdateRouteHandler)
  .openapi(postV2UsersUserIdTokensRoute, postV2UsersUserIdTokensRouteHandler)
  .openapi(postV2UsersUserIdUnlockRoute, postV2UsersUserIdUnlockRouteHandler)
  .openapi(postV2UsersUserIdUserDetailsUpdateRoute, postV2UsersUserIdUserDetailsUpdateRouteHandler)
  .openapi(getV3PayeesRoute, getV3PayeesRouteHandler)
  .openapi(postV3PayeesRoute, postV3PayeesRouteHandler)
  .openapi(getV3PayeesBatchBatchIdRoute, getV3PayeesBatchBatchIdRouteHandler)
  .openapi(getV3PayeesDeltasRoute, getV3PayeesDeltasRouteHandler)
  .openapi(
    getV3PayeesPayorsPayorIdInvitationStatusRoute,
    getV3PayeesPayorsPayorIdInvitationStatusRouteHandler,
  )
  .openapi(deleteV3PayeesPayeeIdRoute, deleteV3PayeesPayeeIdRouteHandler)
  .openapi(getV3PayeesPayeeIdRoute, getV3PayeesPayeeIdRouteHandler)
  .openapi(postV3PayeesPayeeIdInviteRoute, postV3PayeesPayeeIdInviteRouteHandler)
  .openapi(
    postV3PayeesPayeeIdPayeeDetailsUpdateRoute,
    postV3PayeesPayeeIdPayeeDetailsUpdateRouteHandler,
  )
  .openapi(postV3PayeesPayeeIdRemoteIdUpdateRoute, postV3PayeesPayeeIdRemoteIdUpdateRouteHandler)
  .openapi(getV3PaymentauditPaymentsRoute, getV3PaymentauditPaymentsRouteHandler)
  .openapi(getV3PaymentauditPaymentsPaymentIdRoute, getV3PaymentauditPaymentsPaymentIdRouteHandler)
  .openapi(getV3PaymentauditPayoutsRoute, getV3PaymentauditPayoutsRouteHandler)
  .openapi(getV3PaymentauditPayoutsPayoutIdRoute, getV3PaymentauditPayoutsPayoutIdRouteHandler)
  .openapi(getV3PaymentauditTransactionsRoute, getV3PaymentauditTransactionsRouteHandler)
  .openapi(postV3PayoutsRoute, postV3PayoutsRouteHandler)
  .openapi(deleteV3PayoutsPayoutIdRoute, deleteV3PayoutsPayoutIdRouteHandler)
  .openapi(getV3PayoutsPayoutIdRoute, getV3PayoutsPayoutIdRouteHandler)
  .openapi(postV3PayoutsPayoutIdRoute, postV3PayoutsPayoutIdRouteHandler)
  .openapi(getV3PayoutsPayoutIdPaymentsRoute, getV3PayoutsPayoutIdPaymentsRouteHandler)
  .openapi(postV3PayoutsPayoutIdQuoteRoute, postV3PayoutsPayoutIdQuoteRouteHandler)
  .openapi(deleteV3PayoutsPayoutIdScheduleRoute, deleteV3PayoutsPayoutIdScheduleRouteHandler)
  .openapi(postV3PayoutsPayoutIdScheduleRoute, postV3PayoutsPayoutIdScheduleRouteHandler)
  .openapi(getV3SourceAccountsRoute, getV3SourceAccountsRouteHandler)
  .openapi(
    deleteV3SourceAccountsSourceAccountIdRoute,
    deleteV3SourceAccountsSourceAccountIdRouteHandler,
  )
  .openapi(getV3SourceAccountsSourceAccountIdRoute, getV3SourceAccountsSourceAccountIdRouteHandler)
  .openapi(
    postV3SourceAccountsSourceAccountIdFundingRequestRoute,
    postV3SourceAccountsSourceAccountIdFundingRequestRouteHandler,
  )
  .openapi(
    postV3SourceAccountsSourceAccountIdNotificationsRoute,
    postV3SourceAccountsSourceAccountIdNotificationsRouteHandler,
  )
  .openapi(
    postV3SourceAccountsSourceAccountIdTransfersRoute,
    postV3SourceAccountsSourceAccountIdTransfersRouteHandler,
  )
  .openapi(getV4PayeesRoute, getV4PayeesRouteHandler)
  .openapi(postV4PayeesRoute, postV4PayeesRouteHandler)
  .openapi(getV4PayeesBatchBatchIdRoute, getV4PayeesBatchBatchIdRouteHandler)
  .openapi(getV4PayeesDeltasRoute, getV4PayeesDeltasRouteHandler)
  .openapi(
    getV4PayeesPayorsPayorIdInvitationStatusRoute,
    getV4PayeesPayorsPayorIdInvitationStatusRouteHandler,
  )
  .openapi(deleteV4PayeesPayeeIdRoute, deleteV4PayeesPayeeIdRouteHandler)
  .openapi(getV4PayeesPayeeIdRoute, getV4PayeesPayeeIdRouteHandler)
  .openapi(postV4PayeesPayeeIdInviteRoute, postV4PayeesPayeeIdInviteRouteHandler)
  .openapi(
    postV4PayeesPayeeIdPayeeDetailsUpdateRoute,
    postV4PayeesPayeeIdPayeeDetailsUpdateRouteHandler,
  )
  .openapi(postV4PayeesPayeeIdRemoteIdUpdateRoute, postV4PayeesPayeeIdRemoteIdUpdateRouteHandler)
  .openapi(getV4PaymentauditFundingsRoute, getV4PaymentauditFundingsRouteHandler)
  .openapi(getV4PaymentauditPaymentsRoute, getV4PaymentauditPaymentsRouteHandler)
  .openapi(getV4PaymentauditPaymentsPaymentIdRoute, getV4PaymentauditPaymentsPaymentIdRouteHandler)
  .openapi(getV4PaymentauditPayoutStatisticsRoute, getV4PaymentauditPayoutStatisticsRouteHandler)
  .openapi(getV4PaymentauditPayoutsRoute, getV4PaymentauditPayoutsRouteHandler)
  .openapi(getV4PaymentauditPayoutsPayoutIdRoute, getV4PaymentauditPayoutsPayoutIdRouteHandler)
  .openapi(getV4PaymentauditTransactionsRoute, getV4PaymentauditTransactionsRouteHandler)
  .openapi(getV4PaymentsDeltasRoute, getV4PaymentsDeltasRouteHandler)

export default app
