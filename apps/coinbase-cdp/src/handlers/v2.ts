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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountsAccountIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountsAccountIdBalancesAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DepositDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DepositDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DepositDestinationsDepositDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TransfersTransferIdExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TransfersTransferIdTravelRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsX402Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdVoidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdVoidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesMandateIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRevocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRevocationsRevocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesMandateIdRevocationsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRevocationsWalletOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdApprovalsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesMandateIdApprovalsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdApprovalsWalletOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopUpLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DisbursementsDisbursementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EndUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersAuthValidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EndUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EndUsersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersUserIdEvmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersUserIdEvmSmartAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersUserIdSolanaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EndUsersImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEvmBorrowProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEndUsersUserIdDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmbeddedWalletApiEndUsersUserIdDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdDelegationRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702DelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHashRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjustRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsCloseRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402PaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EvmAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmAccountsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressSignTypedDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressEip7702DelegationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmEip7702DelegationOperationsDelegationOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsExportByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EvmSmartAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressUserOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressUserOperationsPrepareAndSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsAddressUserOperationsUserOpHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressUserOperationsUserOpHashSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressSpendPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSmartAccountsAddressSpendPermissionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressSpendPermissionsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LendPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LendVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LendVaultsVaultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressLendRedeemFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressLendRedeemFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressLendDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressLendDepositRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmAccountsAddressLendWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSmartAccountsAddressLendWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmSwapsQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmSwapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EvmTokenBalancesNetworkAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EvmFaucetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PolicyEnginePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEnginePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEngineSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PolicyEnginePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PolicyEnginePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2PolicyEnginePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEnginePoliciesPolicyIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PolicyEnginePoliciesPolicyIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SolanaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SolanaAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2SolanaAccountsAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SolanaAccountsByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsAddressExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsExportByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsAddressSignTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsAddressSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaAccountsSendTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SolanaFaucetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SolanaTokenBalancesNetworkAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DataQueryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataQueryGrammarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataQuerySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataEvmTokenOwnershipNetworkAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataEvmTokenBalancesNetworkAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DataWebhooksSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataWebhooksSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2DataWebhooksSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DataWebhooksSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DataWebhooksSubscriptionsSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402VerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402SettleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402SupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryMerchantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoverySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402DiscoveryMcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2X402DiscoveryBundlesBundleSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2X402ValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampVerificationsVerificationIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OnrampOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileSessionsChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileAttestationChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampMobileAttestationRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnrampLimitsUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
