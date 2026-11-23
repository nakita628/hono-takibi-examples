import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteV2CustomersCustomerIdRouteHandler,
  deleteV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler,
  deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler,
  deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRouteHandler,
  deleteV2PolicyEnginePoliciesPolicyIdRouteHandler,
  getV2AccountsAccountIdBalancesAssetRouteHandler,
  getV2AccountsAccountIdBalancesRouteHandler,
  getV2AccountsAccountIdRouteHandler,
  getV2AccountsRouteHandler,
  getV2CustomersCustomerIdRouteHandler,
  getV2CustomersRequirementsRouteHandler,
  getV2CustomersRouteHandler,
  getV2DataEvmTokenBalancesNetworkAddressRouteHandler,
  getV2DataEvmTokenOwnershipNetworkAddressRouteHandler,
  getV2DataQueryGrammarRouteHandler,
  getV2DataQuerySchemaRouteHandler,
  getV2DataWebhooksSubscriptionsRouteHandler,
  getV2DataWebhooksSubscriptionsSubscriptionIdEventsRouteHandler,
  getV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler,
  getV2DepositDestinationsDepositDestinationIdRouteHandler,
  getV2DepositDestinationsRouteHandler,
  getV2DisbursementsDisbursementIdRouteHandler,
  getV2DisbursementsRouteHandler,
  getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler,
  getV2EmbeddedWalletApiEndUsersUserIdDelegationRouteHandler,
  getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRouteHandler,
  getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRouteHandler,
  getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRouteHandler,
  getV2EmbeddedWalletApiEvmBorrowProductsRouteHandler,
  getV2EndUsersLookupRouteHandler,
  getV2EndUsersRouteHandler,
  getV2EndUsersUserIdRouteHandler,
  getV2EvmAccountsAddressRouteHandler,
  getV2EvmAccountsByNameNameRouteHandler,
  getV2EvmAccountsRouteHandler,
  getV2EvmEip7702DelegationOperationsDelegationOperationIdRouteHandler,
  getV2EvmSmartAccountsAddressRouteHandler,
  getV2EvmSmartAccountsAddressSpendPermissionsListRouteHandler,
  getV2EvmSmartAccountsAddressUserOperationsUserOpHashRouteHandler,
  getV2EvmSmartAccountsByNameNameRouteHandler,
  getV2EvmSmartAccountsRouteHandler,
  getV2EvmSwapsQuoteRouteHandler,
  getV2EvmTokenBalancesNetworkAddressRouteHandler,
  getV2LendPositionsRouteHandler,
  getV2LendVaultsRouteHandler,
  getV2LendVaultsVaultIdRouteHandler,
  getV2MandatesMandateIdApprovalsApprovalIdRouteHandler,
  getV2MandatesMandateIdApprovalsRouteHandler,
  getV2MandatesMandateIdApprovalsWalletOptionsRouteHandler,
  getV2MandatesMandateIdRevocationsRevocationIdRouteHandler,
  getV2MandatesMandateIdRevocationsRouteHandler,
  getV2MandatesMandateIdRevocationsWalletOptionsRouteHandler,
  getV2MandatesMandateIdRouteHandler,
  getV2MandatesRouteHandler,
  getV2OnrampOrdersOrderIdRouteHandler,
  getV2PaymentMethodsPaymentMethodIdRouteHandler,
  getV2PaymentMethodsRouteHandler,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRouteHandler,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsRouteHandler,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRouteHandler,
  getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRouteHandler,
  getV2PaymentSessionsPaymentSessionIdCapturesRouteHandler,
  getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRouteHandler,
  getV2PaymentSessionsPaymentSessionIdRefundsRouteHandler,
  getV2PaymentSessionsPaymentSessionIdRouteHandler,
  getV2PaymentSessionsPaymentSessionIdVoidsRouteHandler,
  getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRouteHandler,
  getV2PaymentSessionsRouteHandler,
  getV2PolicyEnginePoliciesPolicyIdRouteHandler,
  getV2PolicyEnginePoliciesRouteHandler,
  getV2SolanaAccountsAddressRouteHandler,
  getV2SolanaAccountsByNameNameRouteHandler,
  getV2SolanaAccountsRouteHandler,
  getV2SolanaTokenBalancesNetworkAddressRouteHandler,
  getV2TransfersRouteHandler,
  getV2TransfersTransferIdRouteHandler,
  getV2X402DiscoveryBundlesBundleSlugRouteHandler,
  getV2X402DiscoveryBundlesRouteHandler,
  getV2X402DiscoveryMerchantRouteHandler,
  getV2X402DiscoveryResourcesRouteHandler,
  getV2X402DiscoverySearchRouteHandler,
  getV2X402SupportedRouteHandler,
  postV2AccountsRouteHandler,
  postV2CustomersRouteHandler,
  postV2DataQueryRunRouteHandler,
  postV2DataWebhooksSubscriptionsRouteHandler,
  postV2DepositDestinationsRouteHandler,
  postV2DisbursementsRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRouteHandler,
  postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRouteHandler,
  postV2EndUsersAuthValidateTokenRouteHandler,
  postV2EndUsersImportRouteHandler,
  postV2EndUsersRouteHandler,
  postV2EndUsersUserIdEvmRouteHandler,
  postV2EndUsersUserIdEvmSmartAccountRouteHandler,
  postV2EndUsersUserIdSolanaRouteHandler,
  postV2EvmAccountsAddressEip7702DelegationRouteHandler,
  postV2EvmAccountsAddressExportRouteHandler,
  postV2EvmAccountsAddressLendDepositRouteHandler,
  postV2EvmAccountsAddressLendRedeemFeesRouteHandler,
  postV2EvmAccountsAddressLendWithdrawRouteHandler,
  postV2EvmAccountsAddressSendTransactionRouteHandler,
  postV2EvmAccountsAddressSignMessageRouteHandler,
  postV2EvmAccountsAddressSignRouteHandler,
  postV2EvmAccountsAddressSignTransactionRouteHandler,
  postV2EvmAccountsAddressSignTypedDataRouteHandler,
  postV2EvmAccountsExportByNameNameRouteHandler,
  postV2EvmAccountsImportRouteHandler,
  postV2EvmAccountsRouteHandler,
  postV2EvmFaucetRouteHandler,
  postV2EvmSmartAccountsAddressLendDepositRouteHandler,
  postV2EvmSmartAccountsAddressLendRedeemFeesRouteHandler,
  postV2EvmSmartAccountsAddressLendWithdrawRouteHandler,
  postV2EvmSmartAccountsAddressSpendPermissionsRevokeRouteHandler,
  postV2EvmSmartAccountsAddressSpendPermissionsRouteHandler,
  postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRouteHandler,
  postV2EvmSmartAccountsAddressUserOperationsRouteHandler,
  postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRouteHandler,
  postV2EvmSmartAccountsRouteHandler,
  postV2EvmSwapsRouteHandler,
  postV2MandatesMandateIdApprovalsWalletRouteHandler,
  postV2MandatesMandateIdCancelRouteHandler,
  postV2MandatesMandateIdRevocationsWalletRouteHandler,
  postV2MandatesRouteHandler,
  postV2OnrampLimitsRouteHandler,
  postV2OnrampLimitsUpgradeRouteHandler,
  postV2OnrampMobileAttestationChallengesRouteHandler,
  postV2OnrampMobileAttestationRegistrationsRouteHandler,
  postV2OnrampMobileSessionsChallengesRouteHandler,
  postV2OnrampMobileSessionsRouteHandler,
  postV2OnrampOrdersRouteHandler,
  postV2OnrampSessionsRouteHandler,
  postV2OnrampVerificationsRouteHandler,
  postV2OnrampVerificationsVerificationIdSubmitRouteHandler,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRouteHandler,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRouteHandler,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRouteHandler,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsX402RouteHandler,
  postV2PaymentSessionsPaymentSessionIdCancelRouteHandler,
  postV2PaymentSessionsPaymentSessionIdCapturesRouteHandler,
  postV2PaymentSessionsPaymentSessionIdRefundsRouteHandler,
  postV2PaymentSessionsPaymentSessionIdVoidsRouteHandler,
  postV2PaymentSessionsRouteHandler,
  postV2PolicyEnginePoliciesPolicyIdPauseRouteHandler,
  postV2PolicyEnginePoliciesPolicyIdResumeRouteHandler,
  postV2PolicyEnginePoliciesRouteHandler,
  postV2PolicyEngineSimulateRouteHandler,
  postV2SolanaAccountsAddressExportRouteHandler,
  postV2SolanaAccountsAddressSignMessageRouteHandler,
  postV2SolanaAccountsAddressSignTransactionRouteHandler,
  postV2SolanaAccountsExportByNameNameRouteHandler,
  postV2SolanaAccountsImportRouteHandler,
  postV2SolanaAccountsRouteHandler,
  postV2SolanaAccountsSendTransactionRouteHandler,
  postV2SolanaFaucetRouteHandler,
  postV2TopUpLinksRouteHandler,
  postV2TransfersRouteHandler,
  postV2TransfersTransferIdExecuteRouteHandler,
  postV2TransfersTransferIdTravelRuleRouteHandler,
  postV2X402DiscoveryMcpRouteHandler,
  postV2X402SettleRouteHandler,
  postV2X402ValidateRouteHandler,
  postV2X402VerifyRouteHandler,
  putV2CustomersCustomerIdRouteHandler,
  putV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler,
  putV2EvmAccountsAddressRouteHandler,
  putV2EvmSmartAccountsAddressRouteHandler,
  putV2PolicyEnginePoliciesPolicyIdRouteHandler,
  putV2SolanaAccountsAddressRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2AccountsRoute, getV2AccountsRouteHandler)
  .openapi(postV2AccountsRoute, postV2AccountsRouteHandler)
  .openapi(getV2AccountsAccountIdRoute, getV2AccountsAccountIdRouteHandler)
  .openapi(getV2AccountsAccountIdBalancesRoute, getV2AccountsAccountIdBalancesRouteHandler)
  .openapi(
    getV2AccountsAccountIdBalancesAssetRoute,
    getV2AccountsAccountIdBalancesAssetRouteHandler,
  )
  .openapi(postV2CustomersRoute, postV2CustomersRouteHandler)
  .openapi(getV2CustomersRoute, getV2CustomersRouteHandler)
  .openapi(getV2CustomersRequirementsRoute, getV2CustomersRequirementsRouteHandler)
  .openapi(getV2CustomersCustomerIdRoute, getV2CustomersCustomerIdRouteHandler)
  .openapi(deleteV2CustomersCustomerIdRoute, deleteV2CustomersCustomerIdRouteHandler)
  .openapi(putV2CustomersCustomerIdRoute, putV2CustomersCustomerIdRouteHandler)
  .openapi(getV2DepositDestinationsRoute, getV2DepositDestinationsRouteHandler)
  .openapi(postV2DepositDestinationsRoute, postV2DepositDestinationsRouteHandler)
  .openapi(
    getV2DepositDestinationsDepositDestinationIdRoute,
    getV2DepositDestinationsDepositDestinationIdRouteHandler,
  )
  .openapi(postV2TransfersRoute, postV2TransfersRouteHandler)
  .openapi(getV2TransfersRoute, getV2TransfersRouteHandler)
  .openapi(getV2TransfersTransferIdRoute, getV2TransfersTransferIdRouteHandler)
  .openapi(postV2TransfersTransferIdExecuteRoute, postV2TransfersTransferIdExecuteRouteHandler)
  .openapi(
    postV2TransfersTransferIdTravelRuleRoute,
    postV2TransfersTransferIdTravelRuleRouteHandler,
  )
  .openapi(postV2PaymentSessionsRoute, postV2PaymentSessionsRouteHandler)
  .openapi(getV2PaymentSessionsRoute, getV2PaymentSessionsRouteHandler)
  .openapi(
    getV2PaymentSessionsPaymentSessionIdRoute,
    getV2PaymentSessionsPaymentSessionIdRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdCancelRoute,
    postV2PaymentSessionsPaymentSessionIdCancelRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRoute,
    getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRoute,
    postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdAuthorizationsX402Route,
    postV2PaymentSessionsPaymentSessionIdAuthorizationsX402RouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRoute,
    postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRoute,
    postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdAuthorizationsRoute,
    getV2PaymentSessionsPaymentSessionIdAuthorizationsRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRoute,
    getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdCapturesRoute,
    postV2PaymentSessionsPaymentSessionIdCapturesRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdCapturesRoute,
    getV2PaymentSessionsPaymentSessionIdCapturesRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRoute,
    getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdVoidsRoute,
    postV2PaymentSessionsPaymentSessionIdVoidsRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdVoidsRoute,
    getV2PaymentSessionsPaymentSessionIdVoidsRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRoute,
    getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRouteHandler,
  )
  .openapi(
    postV2PaymentSessionsPaymentSessionIdRefundsRoute,
    postV2PaymentSessionsPaymentSessionIdRefundsRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdRefundsRoute,
    getV2PaymentSessionsPaymentSessionIdRefundsRouteHandler,
  )
  .openapi(
    getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRoute,
    getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRouteHandler,
  )
  .openapi(postV2MandatesRoute, postV2MandatesRouteHandler)
  .openapi(getV2MandatesRoute, getV2MandatesRouteHandler)
  .openapi(getV2MandatesMandateIdRoute, getV2MandatesMandateIdRouteHandler)
  .openapi(postV2MandatesMandateIdCancelRoute, postV2MandatesMandateIdCancelRouteHandler)
  .openapi(getV2MandatesMandateIdRevocationsRoute, getV2MandatesMandateIdRevocationsRouteHandler)
  .openapi(
    getV2MandatesMandateIdRevocationsRevocationIdRoute,
    getV2MandatesMandateIdRevocationsRevocationIdRouteHandler,
  )
  .openapi(
    postV2MandatesMandateIdRevocationsWalletRoute,
    postV2MandatesMandateIdRevocationsWalletRouteHandler,
  )
  .openapi(
    getV2MandatesMandateIdRevocationsWalletOptionsRoute,
    getV2MandatesMandateIdRevocationsWalletOptionsRouteHandler,
  )
  .openapi(getV2MandatesMandateIdApprovalsRoute, getV2MandatesMandateIdApprovalsRouteHandler)
  .openapi(
    getV2MandatesMandateIdApprovalsApprovalIdRoute,
    getV2MandatesMandateIdApprovalsApprovalIdRouteHandler,
  )
  .openapi(
    postV2MandatesMandateIdApprovalsWalletRoute,
    postV2MandatesMandateIdApprovalsWalletRouteHandler,
  )
  .openapi(
    getV2MandatesMandateIdApprovalsWalletOptionsRoute,
    getV2MandatesMandateIdApprovalsWalletOptionsRouteHandler,
  )
  .openapi(postV2TopUpLinksRoute, postV2TopUpLinksRouteHandler)
  .openapi(postV2DisbursementsRoute, postV2DisbursementsRouteHandler)
  .openapi(getV2DisbursementsRoute, getV2DisbursementsRouteHandler)
  .openapi(getV2DisbursementsDisbursementIdRoute, getV2DisbursementsDisbursementIdRouteHandler)
  .openapi(postV2EndUsersRoute, postV2EndUsersRouteHandler)
  .openapi(getV2EndUsersRoute, getV2EndUsersRouteHandler)
  .openapi(postV2EndUsersAuthValidateTokenRoute, postV2EndUsersAuthValidateTokenRouteHandler)
  .openapi(getV2EndUsersUserIdRoute, getV2EndUsersUserIdRouteHandler)
  .openapi(getV2EndUsersLookupRoute, getV2EndUsersLookupRouteHandler)
  .openapi(postV2EndUsersUserIdEvmRoute, postV2EndUsersUserIdEvmRouteHandler)
  .openapi(
    postV2EndUsersUserIdEvmSmartAccountRoute,
    postV2EndUsersUserIdEvmSmartAccountRouteHandler,
  )
  .openapi(postV2EndUsersUserIdSolanaRoute, postV2EndUsersUserIdSolanaRouteHandler)
  .openapi(postV2EndUsersImportRoute, postV2EndUsersImportRouteHandler)
  .openapi(
    getV2EmbeddedWalletApiEvmBorrowProductsRoute,
    getV2EmbeddedWalletApiEvmBorrowProductsRouteHandler,
  )
  .openapi(
    getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRoute,
    getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRouteHandler,
  )
  .openapi(
    getV2EmbeddedWalletApiEndUsersUserIdDelegationRoute,
    getV2EmbeddedWalletApiEndUsersUserIdDelegationRouteHandler,
  )
  .openapi(
    deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRoute,
    deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRoute,
    postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
    postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler,
  )
  .openapi(
    getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
    getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler,
  )
  .openapi(
    deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute,
    deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRoute,
    postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRouteHandler,
  )
  .openapi(
    getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRoute,
    getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRouteHandler,
  )
  .openapi(
    getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
    getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRoute,
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRoute,
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRoute,
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRoute,
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRoute,
    postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRouteHandler,
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRoute,
    postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRouteHandler,
  )
  .openapi(getV2EvmAccountsRoute, getV2EvmAccountsRouteHandler)
  .openapi(postV2EvmAccountsRoute, postV2EvmAccountsRouteHandler)
  .openapi(getV2EvmAccountsAddressRoute, getV2EvmAccountsAddressRouteHandler)
  .openapi(putV2EvmAccountsAddressRoute, putV2EvmAccountsAddressRouteHandler)
  .openapi(getV2EvmAccountsByNameNameRoute, getV2EvmAccountsByNameNameRouteHandler)
  .openapi(
    postV2EvmAccountsAddressSendTransactionRoute,
    postV2EvmAccountsAddressSendTransactionRouteHandler,
  )
  .openapi(
    postV2EvmAccountsAddressSignTransactionRoute,
    postV2EvmAccountsAddressSignTransactionRouteHandler,
  )
  .openapi(postV2EvmAccountsAddressSignRoute, postV2EvmAccountsAddressSignRouteHandler)
  .openapi(
    postV2EvmAccountsAddressSignMessageRoute,
    postV2EvmAccountsAddressSignMessageRouteHandler,
  )
  .openapi(
    postV2EvmAccountsAddressSignTypedDataRoute,
    postV2EvmAccountsAddressSignTypedDataRouteHandler,
  )
  .openapi(
    postV2EvmAccountsAddressEip7702DelegationRoute,
    postV2EvmAccountsAddressEip7702DelegationRouteHandler,
  )
  .openapi(
    getV2EvmEip7702DelegationOperationsDelegationOperationIdRoute,
    getV2EvmEip7702DelegationOperationsDelegationOperationIdRouteHandler,
  )
  .openapi(getV2EvmSmartAccountsRoute, getV2EvmSmartAccountsRouteHandler)
  .openapi(postV2EvmSmartAccountsRoute, postV2EvmSmartAccountsRouteHandler)
  .openapi(getV2EvmSmartAccountsByNameNameRoute, getV2EvmSmartAccountsByNameNameRouteHandler)
  .openapi(postV2EvmAccountsImportRoute, postV2EvmAccountsImportRouteHandler)
  .openapi(postV2EvmAccountsAddressExportRoute, postV2EvmAccountsAddressExportRouteHandler)
  .openapi(postV2EvmAccountsExportByNameNameRoute, postV2EvmAccountsExportByNameNameRouteHandler)
  .openapi(getV2EvmSmartAccountsAddressRoute, getV2EvmSmartAccountsAddressRouteHandler)
  .openapi(putV2EvmSmartAccountsAddressRoute, putV2EvmSmartAccountsAddressRouteHandler)
  .openapi(
    postV2EvmSmartAccountsAddressUserOperationsRoute,
    postV2EvmSmartAccountsAddressUserOperationsRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRoute,
    postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRouteHandler,
  )
  .openapi(
    getV2EvmSmartAccountsAddressUserOperationsUserOpHashRoute,
    getV2EvmSmartAccountsAddressUserOperationsUserOpHashRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRoute,
    postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressSpendPermissionsRoute,
    postV2EvmSmartAccountsAddressSpendPermissionsRouteHandler,
  )
  .openapi(
    getV2EvmSmartAccountsAddressSpendPermissionsListRoute,
    getV2EvmSmartAccountsAddressSpendPermissionsListRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressSpendPermissionsRevokeRoute,
    postV2EvmSmartAccountsAddressSpendPermissionsRevokeRouteHandler,
  )
  .openapi(getV2LendPositionsRoute, getV2LendPositionsRouteHandler)
  .openapi(getV2LendVaultsRoute, getV2LendVaultsRouteHandler)
  .openapi(getV2LendVaultsVaultIdRoute, getV2LendVaultsVaultIdRouteHandler)
  .openapi(
    postV2EvmAccountsAddressLendRedeemFeesRoute,
    postV2EvmAccountsAddressLendRedeemFeesRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressLendRedeemFeesRoute,
    postV2EvmSmartAccountsAddressLendRedeemFeesRouteHandler,
  )
  .openapi(
    postV2EvmAccountsAddressLendDepositRoute,
    postV2EvmAccountsAddressLendDepositRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressLendDepositRoute,
    postV2EvmSmartAccountsAddressLendDepositRouteHandler,
  )
  .openapi(
    postV2EvmAccountsAddressLendWithdrawRoute,
    postV2EvmAccountsAddressLendWithdrawRouteHandler,
  )
  .openapi(
    postV2EvmSmartAccountsAddressLendWithdrawRoute,
    postV2EvmSmartAccountsAddressLendWithdrawRouteHandler,
  )
  .openapi(getV2EvmSwapsQuoteRoute, getV2EvmSwapsQuoteRouteHandler)
  .openapi(postV2EvmSwapsRoute, postV2EvmSwapsRouteHandler)
  .openapi(
    getV2EvmTokenBalancesNetworkAddressRoute,
    getV2EvmTokenBalancesNetworkAddressRouteHandler,
  )
  .openapi(postV2EvmFaucetRoute, postV2EvmFaucetRouteHandler)
  .openapi(getV2PolicyEnginePoliciesRoute, getV2PolicyEnginePoliciesRouteHandler)
  .openapi(postV2PolicyEnginePoliciesRoute, postV2PolicyEnginePoliciesRouteHandler)
  .openapi(postV2PolicyEngineSimulateRoute, postV2PolicyEngineSimulateRouteHandler)
  .openapi(getV2PolicyEnginePoliciesPolicyIdRoute, getV2PolicyEnginePoliciesPolicyIdRouteHandler)
  .openapi(
    deleteV2PolicyEnginePoliciesPolicyIdRoute,
    deleteV2PolicyEnginePoliciesPolicyIdRouteHandler,
  )
  .openapi(putV2PolicyEnginePoliciesPolicyIdRoute, putV2PolicyEnginePoliciesPolicyIdRouteHandler)
  .openapi(
    postV2PolicyEnginePoliciesPolicyIdPauseRoute,
    postV2PolicyEnginePoliciesPolicyIdPauseRouteHandler,
  )
  .openapi(
    postV2PolicyEnginePoliciesPolicyIdResumeRoute,
    postV2PolicyEnginePoliciesPolicyIdResumeRouteHandler,
  )
  .openapi(getV2SolanaAccountsRoute, getV2SolanaAccountsRouteHandler)
  .openapi(postV2SolanaAccountsRoute, postV2SolanaAccountsRouteHandler)
  .openapi(getV2SolanaAccountsAddressRoute, getV2SolanaAccountsAddressRouteHandler)
  .openapi(putV2SolanaAccountsAddressRoute, putV2SolanaAccountsAddressRouteHandler)
  .openapi(getV2SolanaAccountsByNameNameRoute, getV2SolanaAccountsByNameNameRouteHandler)
  .openapi(postV2SolanaAccountsImportRoute, postV2SolanaAccountsImportRouteHandler)
  .openapi(postV2SolanaAccountsAddressExportRoute, postV2SolanaAccountsAddressExportRouteHandler)
  .openapi(
    postV2SolanaAccountsExportByNameNameRoute,
    postV2SolanaAccountsExportByNameNameRouteHandler,
  )
  .openapi(
    postV2SolanaAccountsAddressSignTransactionRoute,
    postV2SolanaAccountsAddressSignTransactionRouteHandler,
  )
  .openapi(
    postV2SolanaAccountsAddressSignMessageRoute,
    postV2SolanaAccountsAddressSignMessageRouteHandler,
  )
  .openapi(
    postV2SolanaAccountsSendTransactionRoute,
    postV2SolanaAccountsSendTransactionRouteHandler,
  )
  .openapi(postV2SolanaFaucetRoute, postV2SolanaFaucetRouteHandler)
  .openapi(
    getV2SolanaTokenBalancesNetworkAddressRoute,
    getV2SolanaTokenBalancesNetworkAddressRouteHandler,
  )
  .openapi(postV2DataQueryRunRoute, postV2DataQueryRunRouteHandler)
  .openapi(getV2DataQueryGrammarRoute, getV2DataQueryGrammarRouteHandler)
  .openapi(getV2DataQuerySchemaRoute, getV2DataQuerySchemaRouteHandler)
  .openapi(
    getV2DataEvmTokenOwnershipNetworkAddressRoute,
    getV2DataEvmTokenOwnershipNetworkAddressRouteHandler,
  )
  .openapi(
    getV2DataEvmTokenBalancesNetworkAddressRoute,
    getV2DataEvmTokenBalancesNetworkAddressRouteHandler,
  )
  .openapi(getV2DataWebhooksSubscriptionsRoute, getV2DataWebhooksSubscriptionsRouteHandler)
  .openapi(postV2DataWebhooksSubscriptionsRoute, postV2DataWebhooksSubscriptionsRouteHandler)
  .openapi(
    getV2DataWebhooksSubscriptionsSubscriptionIdRoute,
    getV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    putV2DataWebhooksSubscriptionsSubscriptionIdRoute,
    putV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    deleteV2DataWebhooksSubscriptionsSubscriptionIdRoute,
    deleteV2DataWebhooksSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    getV2DataWebhooksSubscriptionsSubscriptionIdEventsRoute,
    getV2DataWebhooksSubscriptionsSubscriptionIdEventsRouteHandler,
  )
  .openapi(postV2X402VerifyRoute, postV2X402VerifyRouteHandler)
  .openapi(postV2X402SettleRoute, postV2X402SettleRouteHandler)
  .openapi(getV2X402SupportedRoute, getV2X402SupportedRouteHandler)
  .openapi(getV2X402DiscoveryResourcesRoute, getV2X402DiscoveryResourcesRouteHandler)
  .openapi(getV2X402DiscoveryMerchantRoute, getV2X402DiscoveryMerchantRouteHandler)
  .openapi(getV2X402DiscoverySearchRoute, getV2X402DiscoverySearchRouteHandler)
  .openapi(postV2X402DiscoveryMcpRoute, postV2X402DiscoveryMcpRouteHandler)
  .openapi(getV2X402DiscoveryBundlesRoute, getV2X402DiscoveryBundlesRouteHandler)
  .openapi(
    getV2X402DiscoveryBundlesBundleSlugRoute,
    getV2X402DiscoveryBundlesBundleSlugRouteHandler,
  )
  .openapi(postV2X402ValidateRoute, postV2X402ValidateRouteHandler)
  .openapi(postV2OnrampVerificationsRoute, postV2OnrampVerificationsRouteHandler)
  .openapi(
    postV2OnrampVerificationsVerificationIdSubmitRoute,
    postV2OnrampVerificationsVerificationIdSubmitRouteHandler,
  )
  .openapi(postV2OnrampOrdersRoute, postV2OnrampOrdersRouteHandler)
  .openapi(getV2OnrampOrdersOrderIdRoute, getV2OnrampOrdersOrderIdRouteHandler)
  .openapi(postV2OnrampSessionsRoute, postV2OnrampSessionsRouteHandler)
  .openapi(
    postV2OnrampMobileSessionsChallengesRoute,
    postV2OnrampMobileSessionsChallengesRouteHandler,
  )
  .openapi(postV2OnrampMobileSessionsRoute, postV2OnrampMobileSessionsRouteHandler)
  .openapi(
    postV2OnrampMobileAttestationChallengesRoute,
    postV2OnrampMobileAttestationChallengesRouteHandler,
  )
  .openapi(
    postV2OnrampMobileAttestationRegistrationsRoute,
    postV2OnrampMobileAttestationRegistrationsRouteHandler,
  )
  .openapi(postV2OnrampLimitsRoute, postV2OnrampLimitsRouteHandler)
  .openapi(postV2OnrampLimitsUpgradeRoute, postV2OnrampLimitsUpgradeRouteHandler)
  .openapi(getV2PaymentMethodsRoute, getV2PaymentMethodsRouteHandler)
  .openapi(getV2PaymentMethodsPaymentMethodIdRoute, getV2PaymentMethodsPaymentMethodIdRouteHandler)

export default app
