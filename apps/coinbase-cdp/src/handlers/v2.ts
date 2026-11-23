import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2CustomersCustomerIdRoute,
  deleteV2DataWebhooksSubscriptionsSubscriptionIdRoute,
  deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
  deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRoute,
  deleteV2PolicyEnginePoliciesPolicyIdRoute,
  getV2AccountsAccountIdBalancesAssetRoute,
  getV2AccountsAccountIdBalancesRoute,
  getV2AccountsAccountIdRoute,
  getV2AccountsRoute,
  getV2CustomersCustomerIdRoute,
  getV2CustomersRequirementsRoute,
  getV2CustomersRoute,
  getV2DataEvmTokenBalancesNetworkAddressRoute,
  getV2DataEvmTokenOwnershipNetworkAddressRoute,
  getV2DataQueryGrammarRoute,
  getV2DataQuerySchemaRoute,
  getV2DataWebhooksSubscriptionsRoute,
  getV2DataWebhooksSubscriptionsSubscriptionIdEventsRoute,
  getV2DataWebhooksSubscriptionsSubscriptionIdRoute,
  getV2DepositDestinationsDepositDestinationIdRoute,
  getV2DepositDestinationsRoute,
  getV2DisbursementsDisbursementIdRoute,
  getV2DisbursementsRoute,
  getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
  getV2EmbeddedWalletApiEndUsersUserIdDelegationRoute,
  getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
  getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRoute,
  getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRoute,
  getV2EmbeddedWalletApiEvmBorrowProductsRoute,
  getV2EndUsersLookupRoute,
  getV2EndUsersRoute,
  getV2EndUsersUserIdRoute,
  getV2EvmAccountsAddressRoute,
  getV2EvmAccountsByNameNameRoute,
  getV2EvmAccountsRoute,
  getV2EvmEip7702DelegationOperationsDelegationOperationIdRoute,
  getV2EvmSmartAccountsAddressRoute,
  getV2EvmSmartAccountsAddressSpendPermissionsListRoute,
  getV2EvmSmartAccountsAddressUserOperationsUserOpHashRoute,
  getV2EvmSmartAccountsByNameNameRoute,
  getV2EvmSmartAccountsRoute,
  getV2EvmSwapsQuoteRoute,
  getV2EvmTokenBalancesNetworkAddressRoute,
  getV2LendPositionsRoute,
  getV2LendVaultsRoute,
  getV2LendVaultsVaultIdRoute,
  getV2MandatesMandateIdApprovalsApprovalIdRoute,
  getV2MandatesMandateIdApprovalsRoute,
  getV2MandatesMandateIdApprovalsWalletOptionsRoute,
  getV2MandatesMandateIdRevocationsRevocationIdRoute,
  getV2MandatesMandateIdRevocationsRoute,
  getV2MandatesMandateIdRevocationsWalletOptionsRoute,
  getV2MandatesMandateIdRoute,
  getV2MandatesRoute,
  getV2OnrampOrdersOrderIdRoute,
  getV2PaymentMethodsPaymentMethodIdRoute,
  getV2PaymentMethodsRoute,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRoute,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsRoute,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRoute,
  getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRoute,
  getV2PaymentSessionsPaymentSessionIdCapturesRoute,
  getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRoute,
  getV2PaymentSessionsPaymentSessionIdRefundsRoute,
  getV2PaymentSessionsPaymentSessionIdRoute,
  getV2PaymentSessionsPaymentSessionIdVoidsRoute,
  getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRoute,
  getV2PaymentSessionsRoute,
  getV2PolicyEnginePoliciesPolicyIdRoute,
  getV2PolicyEnginePoliciesRoute,
  getV2SolanaAccountsAddressRoute,
  getV2SolanaAccountsByNameNameRoute,
  getV2SolanaAccountsRoute,
  getV2SolanaTokenBalancesNetworkAddressRoute,
  getV2TransfersRoute,
  getV2TransfersTransferIdRoute,
  getV2X402DiscoveryBundlesBundleSlugRoute,
  getV2X402DiscoveryBundlesRoute,
  getV2X402DiscoveryMerchantRoute,
  getV2X402DiscoveryResourcesRoute,
  getV2X402DiscoverySearchRoute,
  getV2X402SupportedRoute,
  postV2AccountsRoute,
  postV2CustomersRoute,
  postV2DataQueryRunRoute,
  postV2DataWebhooksSubscriptionsRoute,
  postV2DepositDestinationsRoute,
  postV2DisbursementsRoute,
  postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRoute,
  postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
  postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRoute,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRoute,
  postV2EndUsersAuthValidateTokenRoute,
  postV2EndUsersImportRoute,
  postV2EndUsersRoute,
  postV2EndUsersUserIdEvmRoute,
  postV2EndUsersUserIdEvmSmartAccountRoute,
  postV2EndUsersUserIdSolanaRoute,
  postV2EvmAccountsAddressEip7702DelegationRoute,
  postV2EvmAccountsAddressExportRoute,
  postV2EvmAccountsAddressLendDepositRoute,
  postV2EvmAccountsAddressLendRedeemFeesRoute,
  postV2EvmAccountsAddressLendWithdrawRoute,
  postV2EvmAccountsAddressSendTransactionRoute,
  postV2EvmAccountsAddressSignMessageRoute,
  postV2EvmAccountsAddressSignRoute,
  postV2EvmAccountsAddressSignTransactionRoute,
  postV2EvmAccountsAddressSignTypedDataRoute,
  postV2EvmAccountsExportByNameNameRoute,
  postV2EvmAccountsImportRoute,
  postV2EvmAccountsRoute,
  postV2EvmFaucetRoute,
  postV2EvmSmartAccountsAddressLendDepositRoute,
  postV2EvmSmartAccountsAddressLendRedeemFeesRoute,
  postV2EvmSmartAccountsAddressLendWithdrawRoute,
  postV2EvmSmartAccountsAddressSpendPermissionsRevokeRoute,
  postV2EvmSmartAccountsAddressSpendPermissionsRoute,
  postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRoute,
  postV2EvmSmartAccountsAddressUserOperationsRoute,
  postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRoute,
  postV2EvmSmartAccountsRoute,
  postV2EvmSwapsRoute,
  postV2MandatesMandateIdApprovalsWalletRoute,
  postV2MandatesMandateIdCancelRoute,
  postV2MandatesMandateIdRevocationsWalletRoute,
  postV2MandatesRoute,
  postV2OnrampLimitsRoute,
  postV2OnrampLimitsUpgradeRoute,
  postV2OnrampMobileAttestationChallengesRoute,
  postV2OnrampMobileAttestationRegistrationsRoute,
  postV2OnrampMobileSessionsChallengesRoute,
  postV2OnrampMobileSessionsRoute,
  postV2OnrampOrdersRoute,
  postV2OnrampSessionsRoute,
  postV2OnrampVerificationsRoute,
  postV2OnrampVerificationsVerificationIdSubmitRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsX402Route,
  postV2PaymentSessionsPaymentSessionIdCancelRoute,
  postV2PaymentSessionsPaymentSessionIdCapturesRoute,
  postV2PaymentSessionsPaymentSessionIdRefundsRoute,
  postV2PaymentSessionsPaymentSessionIdVoidsRoute,
  postV2PaymentSessionsRoute,
  postV2PolicyEnginePoliciesPolicyIdPauseRoute,
  postV2PolicyEnginePoliciesPolicyIdResumeRoute,
  postV2PolicyEnginePoliciesRoute,
  postV2PolicyEngineSimulateRoute,
  postV2SolanaAccountsAddressExportRoute,
  postV2SolanaAccountsAddressSignMessageRoute,
  postV2SolanaAccountsAddressSignTransactionRoute,
  postV2SolanaAccountsExportByNameNameRoute,
  postV2SolanaAccountsImportRoute,
  postV2SolanaAccountsRoute,
  postV2SolanaAccountsSendTransactionRoute,
  postV2SolanaFaucetRoute,
  postV2TopUpLinksRoute,
  postV2TransfersRoute,
  postV2TransfersTransferIdExecuteRoute,
  postV2TransfersTransferIdTravelRuleRoute,
  postV2X402DiscoveryMcpRoute,
  postV2X402SettleRoute,
  postV2X402ValidateRoute,
  postV2X402VerifyRoute,
  putV2CustomersCustomerIdRoute,
  putV2DataWebhooksSubscriptionsSubscriptionIdRoute,
  putV2EvmAccountsAddressRoute,
  putV2EvmSmartAccountsAddressRoute,
  putV2PolicyEnginePoliciesPolicyIdRoute,
  putV2SolanaAccountsAddressRoute,
} from '../routes'

export const getV2AccountsRouteHandler: RouteHandler<typeof getV2AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AccountsRouteHandler: RouteHandler<typeof postV2AccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountsAccountIdRouteHandler: RouteHandler<
  typeof getV2AccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountsAccountIdBalancesRouteHandler: RouteHandler<
  typeof getV2AccountsAccountIdBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2AccountsAccountIdBalancesAssetRouteHandler: RouteHandler<
  typeof getV2AccountsAccountIdBalancesAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CustomersRouteHandler: RouteHandler<typeof postV2CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersRouteHandler: RouteHandler<typeof getV2CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersRequirementsRouteHandler: RouteHandler<
  typeof getV2CustomersRequirementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof getV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2CustomersCustomerIdRouteHandler: RouteHandler<
  typeof putV2CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DepositDestinationsRouteHandler: RouteHandler<
  typeof getV2DepositDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DepositDestinationsRouteHandler: RouteHandler<
  typeof postV2DepositDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DepositDestinationsDepositDestinationIdRouteHandler: RouteHandler<
  typeof getV2DepositDestinationsDepositDestinationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TransfersRouteHandler: RouteHandler<typeof postV2TransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TransfersRouteHandler: RouteHandler<typeof getV2TransfersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TransfersTransferIdRouteHandler: RouteHandler<
  typeof getV2TransfersTransferIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TransfersTransferIdExecuteRouteHandler: RouteHandler<
  typeof postV2TransfersTransferIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TransfersTransferIdTravelRuleRouteHandler: RouteHandler<
  typeof postV2TransfersTransferIdTravelRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdCancelRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdAuthorizationsX402RouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdAuthorizationsX402Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdAuthorizationsRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdCapturesRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdCapturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdCapturesRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdCapturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdVoidsRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdVoidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdVoidsRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdVoidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentSessionsPaymentSessionIdRefundsRouteHandler: RouteHandler<
  typeof postV2PaymentSessionsPaymentSessionIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdRefundsRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRouteHandler: RouteHandler<
  typeof getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MandatesRouteHandler: RouteHandler<typeof postV2MandatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesRouteHandler: RouteHandler<typeof getV2MandatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MandatesMandateIdCancelRouteHandler: RouteHandler<
  typeof postV2MandatesMandateIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdRevocationsRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdRevocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdRevocationsRevocationIdRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdRevocationsRevocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MandatesMandateIdRevocationsWalletRouteHandler: RouteHandler<
  typeof postV2MandatesMandateIdRevocationsWalletRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdRevocationsWalletOptionsRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdRevocationsWalletOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdApprovalsRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdApprovalsApprovalIdRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdApprovalsApprovalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2MandatesMandateIdApprovalsWalletRouteHandler: RouteHandler<
  typeof postV2MandatesMandateIdApprovalsWalletRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2MandatesMandateIdApprovalsWalletOptionsRouteHandler: RouteHandler<
  typeof getV2MandatesMandateIdApprovalsWalletOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TopUpLinksRouteHandler: RouteHandler<typeof postV2TopUpLinksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2DisbursementsRouteHandler: RouteHandler<
  typeof postV2DisbursementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DisbursementsRouteHandler: RouteHandler<typeof getV2DisbursementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2DisbursementsDisbursementIdRouteHandler: RouteHandler<
  typeof getV2DisbursementsDisbursementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EndUsersRouteHandler: RouteHandler<typeof postV2EndUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EndUsersRouteHandler: RouteHandler<typeof getV2EndUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EndUsersAuthValidateTokenRouteHandler: RouteHandler<
  typeof postV2EndUsersAuthValidateTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EndUsersUserIdRouteHandler: RouteHandler<
  typeof getV2EndUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EndUsersLookupRouteHandler: RouteHandler<
  typeof getV2EndUsersLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EndUsersUserIdEvmRouteHandler: RouteHandler<
  typeof postV2EndUsersUserIdEvmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EndUsersUserIdEvmSmartAccountRouteHandler: RouteHandler<
  typeof postV2EndUsersUserIdEvmSmartAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EndUsersUserIdSolanaRouteHandler: RouteHandler<
  typeof postV2EndUsersUserIdSolanaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EndUsersImportRouteHandler: RouteHandler<
  typeof postV2EndUsersImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmbeddedWalletApiEvmBorrowProductsRouteHandler: RouteHandler<
  typeof getV2EmbeddedWalletApiEvmBorrowProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRouteHandler: RouteHandler<
  typeof getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmbeddedWalletApiEndUsersUserIdDelegationRouteHandler: RouteHandler<
  typeof getV2EmbeddedWalletApiEndUsersUserIdDelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRouteHandler: RouteHandler<
  typeof deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler: RouteHandler<
  typeof getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler: RouteHandler<
  typeof deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRouteHandler: RouteHandler<
  typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRouteHandler: RouteHandler<
  typeof getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRouteHandler: RouteHandler<
  typeof postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmAccountsRouteHandler: RouteHandler<typeof getV2EvmAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsRouteHandler: RouteHandler<typeof postV2EvmAccountsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2EvmAccountsAddressRouteHandler: RouteHandler<
  typeof getV2EvmAccountsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2EvmAccountsAddressRouteHandler: RouteHandler<
  typeof putV2EvmAccountsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmAccountsByNameNameRouteHandler: RouteHandler<
  typeof getV2EvmAccountsByNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressSendTransactionRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressSendTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressSignTransactionRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressSignTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressSignRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressSignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressSignMessageRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressSignMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressSignTypedDataRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressSignTypedDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressEip7702DelegationRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressEip7702DelegationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmEip7702DelegationOperationsDelegationOperationIdRouteHandler: RouteHandler<
  typeof getV2EvmEip7702DelegationOperationsDelegationOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmSmartAccountsRouteHandler: RouteHandler<
  typeof getV2EvmSmartAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmSmartAccountsByNameNameRouteHandler: RouteHandler<
  typeof getV2EvmSmartAccountsByNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsImportRouteHandler: RouteHandler<
  typeof postV2EvmAccountsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressExportRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsExportByNameNameRouteHandler: RouteHandler<
  typeof postV2EvmAccountsExportByNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmSmartAccountsAddressRouteHandler: RouteHandler<
  typeof getV2EvmSmartAccountsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2EvmSmartAccountsAddressRouteHandler: RouteHandler<
  typeof putV2EvmSmartAccountsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressUserOperationsRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressUserOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmSmartAccountsAddressUserOperationsUserOpHashRouteHandler: RouteHandler<
  typeof getV2EvmSmartAccountsAddressUserOperationsUserOpHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressSpendPermissionsRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressSpendPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmSmartAccountsAddressSpendPermissionsListRouteHandler: RouteHandler<
  typeof getV2EvmSmartAccountsAddressSpendPermissionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressSpendPermissionsRevokeRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressSpendPermissionsRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LendPositionsRouteHandler: RouteHandler<typeof getV2LendPositionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2LendVaultsRouteHandler: RouteHandler<typeof getV2LendVaultsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LendVaultsVaultIdRouteHandler: RouteHandler<
  typeof getV2LendVaultsVaultIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressLendRedeemFeesRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressLendRedeemFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressLendRedeemFeesRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressLendRedeemFeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressLendDepositRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressLendDepositRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressLendDepositRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressLendDepositRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmAccountsAddressLendWithdrawRouteHandler: RouteHandler<
  typeof postV2EvmAccountsAddressLendWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmSmartAccountsAddressLendWithdrawRouteHandler: RouteHandler<
  typeof postV2EvmSmartAccountsAddressLendWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmSwapsQuoteRouteHandler: RouteHandler<typeof getV2EvmSwapsQuoteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2EvmSwapsRouteHandler: RouteHandler<typeof postV2EvmSwapsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2EvmTokenBalancesNetworkAddressRouteHandler: RouteHandler<
  typeof getV2EvmTokenBalancesNetworkAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EvmFaucetRouteHandler: RouteHandler<typeof postV2EvmFaucetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PolicyEnginePoliciesRouteHandler: RouteHandler<
  typeof getV2PolicyEnginePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PolicyEnginePoliciesRouteHandler: RouteHandler<
  typeof postV2PolicyEnginePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PolicyEngineSimulateRouteHandler: RouteHandler<
  typeof postV2PolicyEngineSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PolicyEnginePoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getV2PolicyEnginePoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2PolicyEnginePoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deleteV2PolicyEnginePoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2PolicyEnginePoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putV2PolicyEnginePoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PolicyEnginePoliciesPolicyIdPauseRouteHandler: RouteHandler<
  typeof postV2PolicyEnginePoliciesPolicyIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PolicyEnginePoliciesPolicyIdResumeRouteHandler: RouteHandler<
  typeof postV2PolicyEnginePoliciesPolicyIdResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SolanaAccountsRouteHandler: RouteHandler<
  typeof getV2SolanaAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SolanaAccountsAddressRouteHandler: RouteHandler<
  typeof getV2SolanaAccountsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2SolanaAccountsAddressRouteHandler: RouteHandler<
  typeof putV2SolanaAccountsAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SolanaAccountsByNameNameRouteHandler: RouteHandler<
  typeof getV2SolanaAccountsByNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsImportRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsAddressExportRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsAddressExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsExportByNameNameRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsExportByNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsAddressSignTransactionRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsAddressSignTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsAddressSignMessageRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsAddressSignMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaAccountsSendTransactionRouteHandler: RouteHandler<
  typeof postV2SolanaAccountsSendTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SolanaFaucetRouteHandler: RouteHandler<typeof postV2SolanaFaucetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2SolanaTokenBalancesNetworkAddressRouteHandler: RouteHandler<
  typeof getV2SolanaTokenBalancesNetworkAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DataQueryRunRouteHandler: RouteHandler<typeof postV2DataQueryRunRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2DataQueryGrammarRouteHandler: RouteHandler<
  typeof getV2DataQueryGrammarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DataQuerySchemaRouteHandler: RouteHandler<
  typeof getV2DataQuerySchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DataEvmTokenOwnershipNetworkAddressRouteHandler: RouteHandler<
  typeof getV2DataEvmTokenOwnershipNetworkAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DataEvmTokenBalancesNetworkAddressRouteHandler: RouteHandler<
  typeof getV2DataEvmTokenBalancesNetworkAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DataWebhooksSubscriptionsRouteHandler: RouteHandler<
  typeof getV2DataWebhooksSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DataWebhooksSubscriptionsRouteHandler: RouteHandler<
  typeof postV2DataWebhooksSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getV2DataWebhooksSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof putV2DataWebhooksSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteV2DataWebhooksSubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DataWebhooksSubscriptionsSubscriptionIdEventsRouteHandler: RouteHandler<
  typeof getV2DataWebhooksSubscriptionsSubscriptionIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2X402VerifyRouteHandler: RouteHandler<typeof postV2X402VerifyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2X402SettleRouteHandler: RouteHandler<typeof postV2X402SettleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2X402SupportedRouteHandler: RouteHandler<typeof getV2X402SupportedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2X402DiscoveryResourcesRouteHandler: RouteHandler<
  typeof getV2X402DiscoveryResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2X402DiscoveryMerchantRouteHandler: RouteHandler<
  typeof getV2X402DiscoveryMerchantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2X402DiscoverySearchRouteHandler: RouteHandler<
  typeof getV2X402DiscoverySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2X402DiscoveryMcpRouteHandler: RouteHandler<
  typeof postV2X402DiscoveryMcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2X402DiscoveryBundlesRouteHandler: RouteHandler<
  typeof getV2X402DiscoveryBundlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2X402DiscoveryBundlesBundleSlugRouteHandler: RouteHandler<
  typeof getV2X402DiscoveryBundlesBundleSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2X402ValidateRouteHandler: RouteHandler<typeof postV2X402ValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2OnrampVerificationsRouteHandler: RouteHandler<
  typeof postV2OnrampVerificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampVerificationsVerificationIdSubmitRouteHandler: RouteHandler<
  typeof postV2OnrampVerificationsVerificationIdSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampOrdersRouteHandler: RouteHandler<typeof postV2OnrampOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2OnrampOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV2OnrampOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampSessionsRouteHandler: RouteHandler<
  typeof postV2OnrampSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampMobileSessionsChallengesRouteHandler: RouteHandler<
  typeof postV2OnrampMobileSessionsChallengesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampMobileSessionsRouteHandler: RouteHandler<
  typeof postV2OnrampMobileSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampMobileAttestationChallengesRouteHandler: RouteHandler<
  typeof postV2OnrampMobileAttestationChallengesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampMobileAttestationRegistrationsRouteHandler: RouteHandler<
  typeof postV2OnrampMobileAttestationRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2OnrampLimitsRouteHandler: RouteHandler<typeof postV2OnrampLimitsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2OnrampLimitsUpgradeRouteHandler: RouteHandler<
  typeof postV2OnrampLimitsUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentMethodsRouteHandler: RouteHandler<
  typeof getV2PaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof getV2PaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
