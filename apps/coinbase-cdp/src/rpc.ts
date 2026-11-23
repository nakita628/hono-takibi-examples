import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2Accounts(
  args: InferRequestType<typeof client.v2.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts.$get(args, options))
}

export async function postV2Accounts(
  args: InferRequestType<typeof client.v2.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts.$post(args, options))
}

export async function getV2AccountsAccountId(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts[':accountId'].$get(args, options))
}

export async function getV2AccountsAccountIdBalances(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.accounts[':accountId'].balances.$get(args, options))
}

export async function getV2AccountsAccountIdBalancesAsset(
  args: InferRequestType<(typeof client.v2.accounts)[':accountId']['balances'][':asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.accounts[':accountId'].balances[':asset'].$get(args, options),
  )
}

export async function getV2Customers(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.$get(args, options))
}

export async function postV2Customers(
  args: InferRequestType<typeof client.v2.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.$post(args, options))
}

export async function getV2CustomersRequirements(
  args: InferRequestType<typeof client.v2.customers.requirements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.requirements.$get(args, options))
}

export async function getV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].$get(args, options))
}

export async function putV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].$put(args, options))
}

export async function deleteV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customerId'].$delete(args, options))
}

export async function getV2DepositDestinations(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['deposit-destinations'].$get(args, options))
}

export async function postV2DepositDestinations(
  args: InferRequestType<(typeof client.v2)['deposit-destinations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['deposit-destinations'].$post(args, options))
}

export async function getV2DepositDestinationsDepositDestinationId(
  args: InferRequestType<
    (typeof client.v2)['deposit-destinations'][':depositDestinationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['deposit-destinations'][':depositDestinationId'].$get(args, options),
  )
}

export async function getV2Transfers(
  args: InferRequestType<typeof client.v2.transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.transfers.$get(args, options))
}

export async function postV2Transfers(
  args: InferRequestType<typeof client.v2.transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.transfers.$post(args, options))
}

export async function getV2TransfersTransferId(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.transfers[':transferId'].$get(args, options))
}

export async function postV2TransfersTransferIdExecute(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.transfers[':transferId'].execute.$post(args, options))
}

export async function postV2TransfersTransferIdTravelRule(
  args: InferRequestType<(typeof client.v2.transfers)[':transferId']['travel-rule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.transfers[':transferId']['travel-rule'].$post(args, options))
}

export async function getV2PaymentSessions(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-sessions'].$get(args, options))
}

export async function postV2PaymentSessions(
  args: InferRequestType<(typeof client.v2)['payment-sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-sessions'].$post(args, options))
}

export async function getV2PaymentSessionsPaymentSessionId(
  args: InferRequestType<(typeof client.v2)['payment-sessions'][':paymentSessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-sessions'][':paymentSessionId'].$get(args, options))
}

export async function postV2PaymentSessionsPaymentSessionIdCancel(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].cancel.$post(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptions(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.options.$get(
      args,
      options,
    ),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdAuthorizationsWallet(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['wallet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations.wallet.$post(args, options),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdAuthorizationsX402(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['x402']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations.x402.$post(args, options),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbase(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['coinbase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations.coinbase.$post(args, options),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdAuthorizationsMandate(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['mandate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations.mandate.$post(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdAuthorizations(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations.$get(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationId(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['authorizations'][':authorizationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].authorizations[':authorizationId'].$get(
      args,
      options,
    ),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdCaptures(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].captures.$get(args, options),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdCaptures(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].captures.$post(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdCapturesCaptureId(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['captures'][':captureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].captures[':captureId'].$get(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdVoids(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].voids.$get(args, options),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdVoids(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].voids.$post(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdVoidsVoidId(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['voids'][':voidId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].voids[':voidId'].$get(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdRefunds(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].refunds.$get(args, options),
  )
}

export async function postV2PaymentSessionsPaymentSessionIdRefunds(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].refunds.$post(args, options),
  )
}

export async function getV2PaymentSessionsPaymentSessionIdRefundsRefundId(
  args: InferRequestType<
    (typeof client.v2)['payment-sessions'][':paymentSessionId']['refunds'][':refundId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['payment-sessions'][':paymentSessionId'].refunds[':refundId'].$get(args, options),
  )
}

export async function getV2Mandates(
  args: InferRequestType<typeof client.v2.mandates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates.$get(args, options))
}

export async function postV2Mandates(
  args: InferRequestType<typeof client.v2.mandates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates.$post(args, options))
}

export async function getV2MandatesMandateId(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates[':mandateId'].$get(args, options))
}

export async function postV2MandatesMandateIdCancel(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates[':mandateId'].cancel.$post(args, options))
}

export async function getV2MandatesMandateIdRevocations(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['revocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates[':mandateId'].revocations.$get(args, options))
}

export async function getV2MandatesMandateIdRevocationsRevocationId(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations'][':revocationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.mandates[':mandateId'].revocations[':revocationId'].$get(args, options),
  )
}

export async function postV2MandatesMandateIdRevocationsWallet(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.mandates[':mandateId'].revocations.wallet.$post(args, options),
  )
}

export async function getV2MandatesMandateIdRevocationsWalletOptions(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['revocations']['wallet']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.mandates[':mandateId'].revocations.wallet.options.$get(args, options),
  )
}

export async function getV2MandatesMandateIdApprovals(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates[':mandateId'].approvals.$get(args, options))
}

export async function getV2MandatesMandateIdApprovalsApprovalId(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals'][':approvalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.mandates[':mandateId'].approvals[':approvalId'].$get(args, options),
  )
}

export async function postV2MandatesMandateIdApprovalsWallet(
  args: InferRequestType<(typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.mandates[':mandateId'].approvals.wallet.$post(args, options))
}

export async function getV2MandatesMandateIdApprovalsWalletOptions(
  args: InferRequestType<
    (typeof client.v2.mandates)[':mandateId']['approvals']['wallet']['options']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.mandates[':mandateId'].approvals.wallet.options.$get(args, options),
  )
}

export async function postV2TopUpLinks(
  args: InferRequestType<(typeof client.v2)['top-up-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['top-up-links'].$post(args, options))
}

export async function getV2Disbursements(
  args: InferRequestType<typeof client.v2.disbursements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disbursements.$get(args, options))
}

export async function postV2Disbursements(
  args: InferRequestType<typeof client.v2.disbursements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disbursements.$post(args, options))
}

export async function getV2DisbursementsDisbursementId(
  args: InferRequestType<(typeof client.v2.disbursements)[':disbursementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disbursements[':disbursementId'].$get(args, options))
}

export async function getV2EndUsers(
  args: InferRequestType<(typeof client.v2)['end-users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'].$get(args, options))
}

export async function postV2EndUsers(
  args: InferRequestType<(typeof client.v2)['end-users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'].$post(args, options))
}

export async function postV2EndUsersAuthValidateToken(
  args: InferRequestType<(typeof client.v2)['end-users']['auth']['validate-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'].auth['validate-token'].$post(args, options))
}

export async function getV2EndUsersUserId(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'][':userId'].$get(args, options))
}

export async function getV2EndUsersLookup(
  args: InferRequestType<(typeof client.v2)['end-users']['lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'].lookup.$get(args, options))
}

export async function postV2EndUsersUserIdEvm(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['evm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'][':userId'].evm.$post(args, options))
}

export async function postV2EndUsersUserIdEvmSmartAccount(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['evm-smart-account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['end-users'][':userId']['evm-smart-account'].$post(args, options),
  )
}

export async function postV2EndUsersUserIdSolana(
  args: InferRequestType<(typeof client.v2)['end-users'][':userId']['solana']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'][':userId'].solana.$post(args, options))
}

export async function postV2EndUsersImport(
  args: InferRequestType<(typeof client.v2)['end-users']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['end-users'].import.$post(args, options))
}

export async function getV2EmbeddedWalletApiEvmBorrowProducts(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api'].evm['borrow-products'].$get(args, options),
  )
}

export async function getV2EmbeddedWalletApiEvmBorrowProductsBorrowProductId(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['evm']['borrow-products'][':borrowProductId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api'].evm['borrow-products'][':borrowProductId'].$get(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSignTransaction(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign.transaction.$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSendTransaction(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['send']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm.send.transaction.$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmAddressSendAsset(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm'][':address']['send'][':asset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm[':address'].send[':asset'].$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSignMessage(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['message']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign.message.$post(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSignTypedData(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['sign']['typed-data']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm.sign['typed-data'].$post(
      args,
      options,
    ),
  )
}

export async function getV2EmbeddedWalletApiEndUsersUserIdDelegation(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$get(args, options),
  )
}

export async function deleteV2EmbeddedWalletApiEndUsersUserIdDelegation(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.$delete(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdDelegationRevoke(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['delegation']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].delegation.revoke.$post(args, options),
  )
}

export async function getV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].address[':address'].delegation.$get(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].address[':address'].delegation.$post(
      args,
      options,
    ),
  )
}

export async function deleteV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegation(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].address[':address'].delegation.$delete(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdAddressAddressDelegationRevoke(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['address'][':address']['delegation']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].address[
      ':address'
    ].delegation.revoke.$post(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmEip7702Delegation(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['eip7702']['delegation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm.eip7702.delegation.$post(
      args,
      options,
    ),
  )
}

export async function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressUserOperationsUserOpHash(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
      'user-operations'
    ][':userOpHash'].$get(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressSend(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][
      ':address'
    ].send.$post(args, options),
  )
}

export async function getV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
      'borrow-positions'
    ].$get(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositions(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
      'borrow-positions'
    ].$post(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsAdjust(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['adjust']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
      'borrow-positions'
    ].adjust.$post(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdEvmSmartAccountsAddressBorrowPositionsClose(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['evm']['smart-accounts'][':address']['borrow-positions']['close']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].evm['smart-accounts'][':address'][
      'borrow-positions'
    ].close.$post(args, options),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdSolanaSignMessage(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['message']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign.message.$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdSolanaSignTransaction(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign.transaction.$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdSolanaSignX402Payment(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['sign']['x402-payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].solana.sign['x402-payment'].$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdSolanaSendTransaction(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana']['send']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].solana.send.transaction.$post(
      args,
      options,
    ),
  )
}

export async function postV2EmbeddedWalletApiEndUsersUserIdSolanaAddressSendAsset(
  args: InferRequestType<
    (typeof client.v2)['embedded-wallet-api']['end-users'][':userId']['solana'][':address']['send'][':asset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['embedded-wallet-api']['end-users'][':userId'].solana[':address'].send[
      ':asset'
    ].$post(args, options),
  )
}

export async function getV2EvmAccounts(
  args: InferRequestType<typeof client.v2.evm.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts.$get(args, options))
}

export async function postV2EvmAccounts(
  args: InferRequestType<typeof client.v2.evm.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts.$post(args, options))
}

export async function getV2EvmAccountsAddress(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].$get(args, options))
}

export async function putV2EvmAccountsAddress(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].$put(args, options))
}

export async function getV2EvmAccountsByNameName(
  args: InferRequestType<(typeof client.v2.evm.accounts)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts['by-name'][':name'].$get(args, options))
}

export async function postV2EvmAccountsAddressSendTransaction(
  args: InferRequestType<
    (typeof client.v2.evm.accounts)[':address']['send']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm.accounts[':address'].send.transaction.$post(args, options),
  )
}

export async function postV2EvmAccountsAddressSignTransaction(
  args: InferRequestType<
    (typeof client.v2.evm.accounts)[':address']['sign']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm.accounts[':address'].sign.transaction.$post(args, options),
  )
}

export async function postV2EvmAccountsAddressSign(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].sign.$post(args, options))
}

export async function postV2EvmAccountsAddressSignMessage(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['sign']['message']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].sign.message.$post(args, options))
}

export async function postV2EvmAccountsAddressSignTypedData(
  args: InferRequestType<
    (typeof client.v2.evm.accounts)[':address']['sign']['typed-data']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm.accounts[':address'].sign['typed-data'].$post(args, options),
  )
}

export async function postV2EvmAccountsAddressEip7702Delegation(
  args: InferRequestType<
    (typeof client.v2.evm.accounts)[':address']['eip7702']['delegation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm.accounts[':address'].eip7702.delegation.$post(args, options),
  )
}

export async function getV2EvmEip7702DelegationOperationsDelegationOperationId(
  args: InferRequestType<
    (typeof client.v2.evm.eip7702)['delegation-operations'][':delegationOperationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm.eip7702['delegation-operations'][':delegationOperationId'].$get(args, options),
  )
}

export async function getV2EvmSmartAccounts(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm['smart-accounts'].$get(args, options))
}

export async function postV2EvmSmartAccounts(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm['smart-accounts'].$post(args, options))
}

export async function getV2EvmSmartAccountsByNameName(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts']['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts']['by-name'][':name'].$get(args, options),
  )
}

export async function postV2EvmAccountsImport(
  args: InferRequestType<typeof client.v2.evm.accounts.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts.import.$post(args, options))
}

export async function postV2EvmAccountsAddressExport(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].export.$post(args, options))
}

export async function postV2EvmAccountsExportByNameName(
  args: InferRequestType<(typeof client.v2.evm.accounts.export)['by-name'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts.export['by-name'][':name'].$post(args, options))
}

export async function getV2EvmSmartAccountsAddress(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm['smart-accounts'][':address'].$get(args, options))
}

export async function putV2EvmSmartAccountsAddress(
  args: InferRequestType<(typeof client.v2.evm)['smart-accounts'][':address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm['smart-accounts'][':address'].$put(args, options))
}

export async function postV2EvmSmartAccountsAddressUserOperations(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['user-operations'].$post(args, options),
  )
}

export async function postV2EvmSmartAccountsAddressUserOperationsPrepareAndSend(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations']['prepare-and-send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['user-operations']['prepare-and-send'].$post(
      args,
      options,
    ),
  )
}

export async function getV2EvmSmartAccountsAddressUserOperationsUserOpHash(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].$get(
      args,
      options,
    ),
  )
}

export async function postV2EvmSmartAccountsAddressUserOperationsUserOpHashSend(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['user-operations'][':userOpHash']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['user-operations'][':userOpHash'].send.$post(
      args,
      options,
    ),
  )
}

export async function postV2EvmSmartAccountsAddressSpendPermissions(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['spend-permissions'].$post(args, options),
  )
}

export async function getV2EvmSmartAccountsAddressSpendPermissionsList(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['spend-permissions'].list.$get(args, options),
  )
}

export async function postV2EvmSmartAccountsAddressSpendPermissionsRevoke(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['spend-permissions']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address']['spend-permissions'].revoke.$post(args, options),
  )
}

export async function getV2LendPositions(
  args: InferRequestType<typeof client.v2.lend.positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.lend.positions.$get(args, options))
}

export async function getV2LendVaults(
  args: InferRequestType<typeof client.v2.lend.vaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.lend.vaults.$get(args, options))
}

export async function getV2LendVaultsVaultId(
  args: InferRequestType<(typeof client.v2.lend.vaults)[':vaultId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.lend.vaults[':vaultId'].$get(args, options))
}

export async function postV2EvmAccountsAddressLendRedeemFees(
  args: InferRequestType<
    (typeof client.v2.evm.accounts)[':address']['lend']['redeem-fees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm.accounts[':address'].lend['redeem-fees'].$post(args, options),
  )
}

export async function postV2EvmSmartAccountsAddressLendRedeemFees(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['lend']['redeem-fees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address'].lend['redeem-fees'].$post(args, options),
  )
}

export async function postV2EvmAccountsAddressLendDeposit(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['deposit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].lend.deposit.$post(args, options))
}

export async function postV2EvmSmartAccountsAddressLendDeposit(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['lend']['deposit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address'].lend.deposit.$post(args, options),
  )
}

export async function postV2EvmAccountsAddressLendWithdraw(
  args: InferRequestType<(typeof client.v2.evm.accounts)[':address']['lend']['withdraw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.accounts[':address'].lend.withdraw.$post(args, options))
}

export async function postV2EvmSmartAccountsAddressLendWithdraw(
  args: InferRequestType<
    (typeof client.v2.evm)['smart-accounts'][':address']['lend']['withdraw']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['smart-accounts'][':address'].lend.withdraw.$post(args, options),
  )
}

export async function getV2EvmSwapsQuote(
  args: InferRequestType<typeof client.v2.evm.swaps.quote.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.swaps.quote.$get(args, options))
}

export async function postV2EvmSwaps(
  args: InferRequestType<typeof client.v2.evm.swaps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.swaps.$post(args, options))
}

export async function getV2EvmTokenBalancesNetworkAddress(
  args: InferRequestType<(typeof client.v2.evm)['token-balances'][':network'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.evm['token-balances'][':network'][':address'].$get(args, options),
  )
}

export async function postV2EvmFaucet(
  args: InferRequestType<typeof client.v2.evm.faucet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.evm.faucet.$post(args, options))
}

export async function getV2PolicyEnginePolicies(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['policy-engine'].policies.$get(args, options))
}

export async function postV2PolicyEnginePolicies(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['policy-engine'].policies.$post(args, options))
}

export async function postV2PolicyEngineSimulate(
  args: InferRequestType<(typeof client.v2)['policy-engine']['simulate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['policy-engine'].simulate.$post(args, options))
}

export async function getV2PolicyEnginePoliciesPolicyId(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['policy-engine'].policies[':policyId'].$get(args, options))
}

export async function putV2PolicyEnginePoliciesPolicyId(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['policy-engine'].policies[':policyId'].$put(args, options))
}

export async function deleteV2PolicyEnginePoliciesPolicyId(
  args: InferRequestType<(typeof client.v2)['policy-engine']['policies'][':policyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['policy-engine'].policies[':policyId'].$delete(args, options),
  )
}

export async function postV2PolicyEnginePoliciesPolicyIdPause(
  args: InferRequestType<
    (typeof client.v2)['policy-engine']['policies'][':policyId']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['policy-engine'].policies[':policyId'].pause.$post(args, options),
  )
}

export async function postV2PolicyEnginePoliciesPolicyIdResume(
  args: InferRequestType<
    (typeof client.v2)['policy-engine']['policies'][':policyId']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['policy-engine'].policies[':policyId'].resume.$post(args, options),
  )
}

export async function getV2SolanaAccounts(
  args: InferRequestType<typeof client.v2.solana.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts.$get(args, options))
}

export async function postV2SolanaAccounts(
  args: InferRequestType<typeof client.v2.solana.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts.$post(args, options))
}

export async function getV2SolanaAccountsAddress(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts[':address'].$get(args, options))
}

export async function putV2SolanaAccountsAddress(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts[':address'].$put(args, options))
}

export async function getV2SolanaAccountsByNameName(
  args: InferRequestType<(typeof client.v2.solana.accounts)['by-name'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts['by-name'][':name'].$get(args, options))
}

export async function postV2SolanaAccountsImport(
  args: InferRequestType<typeof client.v2.solana.accounts.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts.import.$post(args, options))
}

export async function postV2SolanaAccountsAddressExport(
  args: InferRequestType<(typeof client.v2.solana.accounts)[':address']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts[':address'].export.$post(args, options))
}

export async function postV2SolanaAccountsExportByNameName(
  args: InferRequestType<(typeof client.v2.solana.accounts.export)['by-name'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.solana.accounts.export['by-name'][':name'].$post(args, options),
  )
}

export async function postV2SolanaAccountsAddressSignTransaction(
  args: InferRequestType<
    (typeof client.v2.solana.accounts)[':address']['sign']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.solana.accounts[':address'].sign.transaction.$post(args, options),
  )
}

export async function postV2SolanaAccountsAddressSignMessage(
  args: InferRequestType<
    (typeof client.v2.solana.accounts)[':address']['sign']['message']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.solana.accounts[':address'].sign.message.$post(args, options),
  )
}

export async function postV2SolanaAccountsSendTransaction(
  args: InferRequestType<typeof client.v2.solana.accounts.send.transaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.accounts.send.transaction.$post(args, options))
}

export async function postV2SolanaFaucet(
  args: InferRequestType<typeof client.v2.solana.faucet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.solana.faucet.$post(args, options))
}

export async function getV2SolanaTokenBalancesNetworkAddress(
  args: InferRequestType<
    (typeof client.v2.solana)['token-balances'][':network'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.solana['token-balances'][':network'][':address'].$get(args, options),
  )
}

export async function postV2DataQueryRun(
  args: InferRequestType<typeof client.v2.data.query.run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.data.query.run.$post(args, options))
}

export async function getV2DataQueryGrammar(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.data.query.grammar.$get(undefined, options))
}

export async function getV2DataQuerySchema(
  args: InferRequestType<typeof client.v2.data.query.schema.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.data.query.schema.$get(args, options))
}

export async function getV2DataEvmTokenOwnershipNetworkAddress(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-ownership'][':network'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.data.evm['token-ownership'][':network'][':address'].$get(args, options),
  )
}

export async function getV2DataEvmTokenBalancesNetworkAddress(
  args: InferRequestType<
    (typeof client.v2.data.evm)['token-balances'][':network'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.data.evm['token-balances'][':network'][':address'].$get(args, options),
  )
}

export async function getV2DataWebhooksSubscriptions(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.data.webhooks.subscriptions.$get(args, options))
}

export async function postV2DataWebhooksSubscriptions(
  args: InferRequestType<typeof client.v2.data.webhooks.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.data.webhooks.subscriptions.$post(args, options))
}

export async function getV2DataWebhooksSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.data.webhooks.subscriptions[':subscriptionId'].$get(args, options),
  )
}

export async function putV2DataWebhooksSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.data.webhooks.subscriptions[':subscriptionId'].$put(args, options),
  )
}

export async function deleteV2DataWebhooksSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.data.webhooks.subscriptions[':subscriptionId'].$delete(args, options),
  )
}

export async function getV2DataWebhooksSubscriptionsSubscriptionIdEvents(
  args: InferRequestType<
    (typeof client.v2.data.webhooks.subscriptions)[':subscriptionId']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.data.webhooks.subscriptions[':subscriptionId'].events.$get(args, options),
  )
}

export async function postV2X402Verify(
  args: InferRequestType<typeof client.v2.x402.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.verify.$post(args, options))
}

export async function postV2X402Settle(
  args: InferRequestType<typeof client.v2.x402.settle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.settle.$post(args, options))
}

export async function getV2X402Supported(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.x402.supported.$get(undefined, options))
}

export async function getV2X402DiscoveryResources(
  args: InferRequestType<typeof client.v2.x402.discovery.resources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.discovery.resources.$get(args, options))
}

export async function getV2X402DiscoveryMerchant(
  args: InferRequestType<typeof client.v2.x402.discovery.merchant.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.discovery.merchant.$get(args, options))
}

export async function getV2X402DiscoverySearch(
  args: InferRequestType<typeof client.v2.x402.discovery.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.discovery.search.$get(args, options))
}

export async function postV2X402DiscoveryMcp(
  args: InferRequestType<typeof client.v2.x402.discovery.mcp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.discovery.mcp.$post(args, options))
}

export async function getV2X402DiscoveryBundles(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.x402.discovery.bundles.$get(undefined, options))
}

export async function getV2X402DiscoveryBundlesBundleSlug(
  args: InferRequestType<(typeof client.v2.x402.discovery.bundles)[':bundleSlug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.discovery.bundles[':bundleSlug'].$get(args, options))
}

export async function postV2X402Validate(
  args: InferRequestType<typeof client.v2.x402.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.x402.validate.$post(args, options))
}

export async function postV2OnrampVerifications(
  args: InferRequestType<typeof client.v2.onramp.verifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.verifications.$post(args, options))
}

export async function postV2OnrampVerificationsVerificationIdSubmit(
  args: InferRequestType<
    (typeof client.v2.onramp.verifications)[':verificationId']['submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.onramp.verifications[':verificationId'].submit.$post(args, options),
  )
}

export async function postV2OnrampOrders(
  args: InferRequestType<typeof client.v2.onramp.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.orders.$post(args, options))
}

export async function getV2OnrampOrdersOrderId(
  args: InferRequestType<(typeof client.v2.onramp.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.orders[':orderId'].$get(args, options))
}

export async function postV2OnrampSessions(
  args: InferRequestType<typeof client.v2.onramp.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.sessions.$post(args, options))
}

export async function postV2OnrampMobileSessionsChallenges(
  args: InferRequestType<typeof client.v2.onramp.mobile.sessions.challenges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.mobile.sessions.challenges.$post(args, options))
}

export async function postV2OnrampMobileSessions(
  args: InferRequestType<typeof client.v2.onramp.mobile.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.mobile.sessions.$post(args, options))
}

export async function postV2OnrampMobileAttestationChallenges(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2.onramp.mobile.attestation.challenges.$post(undefined, options),
  )
}

export async function postV2OnrampMobileAttestationRegistrations(
  args: InferRequestType<typeof client.v2.onramp.mobile.attestation.registrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.mobile.attestation.registrations.$post(args, options))
}

export async function postV2OnrampLimits(
  args: InferRequestType<typeof client.v2.onramp.limits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.limits.$post(args, options))
}

export async function postV2OnrampLimitsUpgrade(
  args: InferRequestType<typeof client.v2.onramp.limits.upgrade.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.onramp.limits.upgrade.$post(args, options))
}

export async function getV2PaymentMethods(
  args: InferRequestType<(typeof client.v2)['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-methods'].$get(args, options))
}

export async function getV2PaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.v2)['payment-methods'][':paymentMethodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['payment-methods'][':paymentMethodId'].$get(args, options))
}
