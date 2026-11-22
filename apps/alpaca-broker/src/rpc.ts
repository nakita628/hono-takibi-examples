import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1betaAccountsAccountIdFundingWallet(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.$get(args, options),
  )
}

export async function postV1betaAccountsAccountIdFundingWallet(
  args: InferRequestType<(typeof client.v1beta.accounts)[':account_id']['funding_wallet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.$post(args, options),
  )
}

export async function getV1betaAccountsAccountIdFundingWalletFundingDetails(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['funding_details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.funding_details.$get(args, options),
  )
}

export async function getV1betaAccountsAccountIdFundingWalletRecipientBank(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$get(args, options),
  )
}

export async function postV1betaAccountsAccountIdFundingWalletRecipientBank(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$post(args, options),
  )
}

export async function deleteV1betaAccountsAccountIdFundingWalletRecipientBank(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['recipient_bank']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.recipient_bank.$delete(args, options),
  )
}

export async function getV1betaAccountsAccountIdFundingWalletTransfers(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.transfers.$get(args, options),
  )
}

export async function getV1betaAccountsAccountIdFundingWalletTransfersTransferId(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['transfers'][':transfer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.transfers[':transfer_id'].$get(
      args,
      options,
    ),
  )
}

export async function postV1betaAccountsAccountIdFundingWalletWithdrawal(
  args: InferRequestType<
    (typeof client.v1beta.accounts)[':account_id']['funding_wallet']['withdrawal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.accounts[':account_id'].funding_wallet.withdrawal.$post(args, options),
  )
}

export async function postV1betaAccountsFundingWallet(
  args: InferRequestType<typeof client.v1beta.accounts.funding_wallet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.accounts.funding_wallet.$post(args, options))
}

export async function postV1betaDemoBankingFunding(
  args: InferRequestType<typeof client.v1beta.demo.banking.funding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.demo.banking.funding.$post(args, options))
}

export async function getV1beta1Acats(
  args: InferRequestType<typeof client.v1beta1.acats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.acats.$get(args, options))
}

export async function getV1beta1AcatsAccountId(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.acats[':account_id'].$get(args, options))
}

export async function postV1beta1AcatsAccountId(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.acats[':account_id'].$post(args, options))
}

export async function getV1beta1AcatsAccountIdAcatsId(
  args: InferRequestType<(typeof client.v1beta1.acats)[':account_id'][':acats_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.acats[':account_id'][':acats_id'].$get(args, options))
}

export async function getV1beta1AcatsAccountIdAcatsIdAssets(
  args: InferRequestType<
    (typeof client.v1beta1.acats)[':account_id'][':acats_id']['assets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.acats[':account_id'][':acats_id'].assets.$get(args, options),
  )
}

export async function getV1beta1AcatsContrabrokers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1beta1.acats.contrabrokers.$get(undefined, options))
}

export async function getV1beta1LogosSymbol(
  args: InferRequestType<(typeof client.v1beta1.logos)[':symbol']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.logos[':symbol'].$get(args, options))
}

export async function getV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$get(args, options))
}

export async function postV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$post(args, options))
}

export async function getV1AccountsAccountId(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].$get(args, options))
}

export async function patchV1AccountsAccountId(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].$patch(args, options))
}

export async function getV1AccountsAccountIdAchRelationships(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].ach_relationships.$get(args, options),
  )
}

export async function postV1AccountsAccountIdAchRelationships(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['ach_relationships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].ach_relationships.$post(args, options),
  )
}

export async function deleteV1AccountsAccountIdAchRelationshipsAchRelationshipId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['ach_relationships'][':ach_relationship_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].ach_relationships[':ach_relationship_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1AccountsAccountIdActionsClose(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['actions']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].actions.close.$post(args, options))
}

export async function getV1AccountsAccountIdCip(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].cip.$get(args, options))
}

export async function postV1AccountsAccountIdCip(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['cip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].cip.$post(args, options))
}

export async function getV1AccountsAccountIdDocuments(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].documents.$get(args, options))
}

export async function getV1AccountsAccountIdDocumentsDocumentIdDownload(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents'][':document_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].documents[':document_id'].download.$get(args, options),
  )
}

export async function postV1AccountsAccountIdDocumentsUpload(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].documents.upload.$post(args, options),
  )
}

export async function getV1AccountsAccountIdDocumentsW8benDocumentIdDownload(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['documents']['w8ben'][':document_id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].documents.w8ben[':document_id'].download.$get(args, options),
  )
}

export async function patchV1AccountsAccountIdOnfidoSdk(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['onfido']['sdk']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].onfido.sdk.$patch(args, options))
}

export async function getV1AccountsAccountIdOnfidoSdkTokens(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['onfido']['sdk']['tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].onfido.sdk.tokens.$get(args, options),
  )
}

export async function postV1AccountsAccountIdOptionsApproval(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['options']['approval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].options.approval.$post(args, options),
  )
}

export async function getV1AccountsAccountIdRecipientBanks(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].recipient_banks.$get(args, options))
}

export async function postV1AccountsAccountIdRecipientBanks(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['recipient_banks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].recipient_banks.$post(args, options))
}

export async function deleteV1AccountsAccountIdRecipientBanksBankId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['recipient_banks'][':bank_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].recipient_banks[':bank_id'].$delete(args, options),
  )
}

export async function postV1AccountsAccountIdTokenizationCallbackMint(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['mint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization.callback.mint.$post(args, options),
  )
}

export async function postV1AccountsAccountIdTokenizationCallbackRedeem(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['callback']['redeem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization.callback.redeem.$post(args, options),
  )
}

export async function postV1AccountsAccountIdTokenizationMint(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['mint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization.mint.$post(args, options),
  )
}

export async function getV1AccountsAccountIdTokenizationRequests(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization.requests.$get(args, options),
  )
}

export async function getV1AccountsAccountIdTokenizationRequestsTokenizationRequestId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests'][':tokenization_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization.requests[':tokenization_request_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AccountsAccountIdTokenizationRequestsByClientRequestId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_client_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization['requests:by_client_request_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AccountsAccountIdTokenizationRequestsByIssuerRequestId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['tokenization']['requests:by_issuer_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].tokenization['requests:by_issuer_request_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1AccountsAccountIdTransfers(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].transfers.$get(args, options))
}

export async function postV1AccountsAccountIdTransfers(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].transfers.$post(args, options))
}

export async function deleteV1AccountsAccountIdTransfersTransferId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['transfers'][':transfer_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].transfers[':transfer_id'].$delete(args, options),
  )
}

export async function getV1AccountsAccountIdWallets(
  args: InferRequestType<(typeof client.v1.accounts)[':account_id']['wallets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account_id'].wallets.$get(args, options))
}

export async function getV1AccountsAccountIdWalletsTransfers(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.transfers.$get(args, options),
  )
}

export async function postV1AccountsAccountIdWalletsTransfers(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.transfers.$post(args, options),
  )
}

export async function getV1AccountsAccountIdWalletsTransfersTransferId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['transfers'][':transfer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.transfers[':transfer_id'].$get(args, options),
  )
}

export async function getV1AccountsAccountIdWalletsWhitelists(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.whitelists.$get(args, options),
  )
}

export async function postV1AccountsAccountIdWalletsWhitelists(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.whitelists.$post(args, options),
  )
}

export async function deleteV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.whitelists[':whitelisted_address_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1AccountsAccountIdWalletsWhitelistsWhitelistedAddressIdTravelRuleInfo(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account_id']['wallets']['whitelists'][':whitelisted_address_id']['travel-rule-info']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account_id'].wallets.whitelists[':whitelisted_address_id'][
      'travel-rule-info'
    ].$patch(args, options),
  )
}

export async function getV1AccountsActivities(
  args: InferRequestType<typeof client.v1.accounts.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.activities.$get(args, options))
}

export async function getV1AccountsActivitiesActivityType(
  args: InferRequestType<(typeof client.v1.accounts.activities)[':activity_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.activities[':activity_type'].$get(args, options))
}

export async function getV1AccountsIraExcessContributions(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.accounts.ira_excess_contributions.$get(undefined, options))
}

export async function getV1AccountsOptionsApprovals(
  args: InferRequestType<typeof client.v1.accounts.options.approvals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.options.approvals.$get(args, options))
}

export async function getV1AccountsPositions(
  args: InferRequestType<typeof client.v1.accounts.positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.positions.$get(args, options))
}

export async function postV1Agreements(
  args: InferRequestType<typeof client.v1.agreements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.agreements.$post(args, options))
}

export async function getV1Assets(
  args: InferRequestType<typeof client.v1.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.$get(args, options))
}

export async function getV1AssetsSymbolOrAssetId(
  args: InferRequestType<(typeof client.v1.assets)[':symbol_or_asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets[':symbol_or_asset_id'].$get(args, options))
}

export async function getV1AssetsEntryRequirements(
  args: InferRequestType<(typeof client.v1.assets)['entry-requirements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets['entry-requirements'].$get(args, options))
}

export async function getV1AssetsFixedIncomeUsCorporates(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_corporates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.fixed_income.us_corporates.$get(args, options))
}

export async function getV1AssetsFixedIncomeUsTreasuries(
  args: InferRequestType<typeof client.v1.assets.fixed_income.us_treasuries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.assets.fixed_income.us_treasuries.$get(args, options))
}

export async function getV1Calendar(
  args: InferRequestType<typeof client.v1.calendar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.calendar.$get(args, options))
}

export async function getV1CashInterestAprTiers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.cash_interest.apr_tiers.$get(undefined, options))
}

export async function getV1Clock(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.clock.$get(undefined, options))
}

export async function getV1CorporateActionsAnnouncements(
  args: InferRequestType<typeof client.v1.corporate_actions.announcements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.corporate_actions.announcements.$get(args, options))
}

export async function getV1CorporateActionsAnnouncementsId(
  args: InferRequestType<(typeof client.v1.corporate_actions.announcements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.corporate_actions.announcements[':id'].$get(args, options))
}

export async function getV1CountryInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['country-info'].$get(undefined, options))
}

export async function getV1EventsAccountsStatus(
  args: InferRequestType<typeof client.v1.events.accounts.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.accounts.status.$get(args, options))
}

export async function getV1EventsJournalsStatus(
  args: InferRequestType<typeof client.v1.events.journals.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.journals.status.$get(args, options))
}

export async function getV1EventsNta(
  args: InferRequestType<typeof client.v1.events.nta.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.nta.$get(args, options))
}

export async function getV1EventsTransfersStatus(
  args: InferRequestType<typeof client.v1.events.transfers.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.transfers.status.$get(args, options))
}

export async function getV1FpslAnalyticsAccountIdLoans(
  args: InferRequestType<(typeof client.v1.fpsl.analytics)[':account_id']['loans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fpsl.analytics[':account_id'].loans.$get(args, options))
}

export async function getV1FpslLoans(
  args: InferRequestType<typeof client.v1.fpsl.loans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.fpsl.loans.$get(args, options))
}

export async function getV1FpslTiers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.fpsl.tiers.$get(undefined, options))
}

export async function getV1InstantFunding(
  args: InferRequestType<typeof client.v1.instant_funding.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding.$get(args, options))
}

export async function postV1InstantFunding(
  args: InferRequestType<typeof client.v1.instant_funding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding.$post(args, options))
}

export async function getV1InstantFundingInstantFundingId(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding[':instant_funding_id'].$get(args, options))
}

export async function deleteV1InstantFundingInstantFundingId(
  args: InferRequestType<(typeof client.v1.instant_funding)[':instant_funding_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.instant_funding[':instant_funding_id'].$delete(args, options),
  )
}

export async function getV1InstantFundingLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.instant_funding.limits.$get(undefined, options))
}

export async function getV1InstantFundingLimitsAccounts(
  args: InferRequestType<typeof client.v1.instant_funding.limits.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding.limits.accounts.$get(args, options))
}

export async function getV1InstantFundingReports(
  args: InferRequestType<typeof client.v1.instant_funding.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding.reports.$get(args, options))
}

export async function getV1InstantFundingSettlements(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding.settlements.$get(args, options))
}

export async function postV1InstantFundingSettlements(
  args: InferRequestType<typeof client.v1.instant_funding.settlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.instant_funding.settlements.$post(args, options))
}

export async function getV1InstantFundingSettlementsSettlementId(
  args: InferRequestType<(typeof client.v1.instant_funding.settlements)[':settlement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.instant_funding.settlements[':settlement_id'].$get(args, options),
  )
}

export async function getV1Ipos(
  args: InferRequestType<typeof client.v1.ipos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ipos.$get(args, options))
}

export async function getV1IposOfferingReference(
  args: InferRequestType<(typeof client.v1.ipos)[':offering_reference']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ipos[':offering_reference'].$get(args, options))
}

export async function getV1JitSettlements(
  args: InferRequestType<typeof client.v1.jit.settlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jit.settlements.$get(args, options))
}

export async function postV1JitSettlements(
  args: InferRequestType<typeof client.v1.jit.settlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jit.settlements.$post(args, options))
}

export async function getV1JitSettlementsSettlementId(
  args: InferRequestType<(typeof client.v1.jit.settlements)[':settlement_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jit.settlements[':settlement_id'].$get(args, options))
}

export async function getV1Journals(
  args: InferRequestType<typeof client.v1.journals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.journals.$get(args, options))
}

export async function postV1Journals(
  args: InferRequestType<typeof client.v1.journals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.journals.$post(args, options))
}

export async function getV1JournalsJournalId(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.journals[':journal_id'].$get(args, options))
}

export async function deleteV1JournalsJournalId(
  args: InferRequestType<(typeof client.v1.journals)[':journal_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.journals[':journal_id'].$delete(args, options))
}

export async function postV1JournalsBatch(
  args: InferRequestType<typeof client.v1.journals.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.journals.batch.$post(args, options))
}

export async function postV1JournalsReverseBatch(
  args: InferRequestType<typeof client.v1.journals.reverse_batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.journals.reverse_batch.$post(args, options))
}

export async function postV1OauthAuthorize(
  args: InferRequestType<typeof client.v1.oauth.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.authorize.$post(args, options))
}

export async function getV1OauthClientsClientId(
  args: InferRequestType<(typeof client.v1.oauth.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.clients[':client_id'].$get(args, options))
}

export async function postV1OauthToken(
  args: InferRequestType<typeof client.v1.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.oauth.token.$post(args, options))
}

export async function getV1OptionsContracts(
  args: InferRequestType<typeof client.v1.options.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.options.contracts.$get(args, options))
}

export async function getV1OptionsContractsSymbolOrId(
  args: InferRequestType<(typeof client.v1.options.contracts)[':symbol_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.options.contracts[':symbol_or_id'].$get(args, options))
}

export async function getV1RebalancingPortfolios(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.portfolios.$get(args, options))
}

export async function postV1RebalancingPortfolios(
  args: InferRequestType<typeof client.v1.rebalancing.portfolios.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.portfolios.$post(args, options))
}

export async function getV1RebalancingPortfoliosPortfolioId(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.portfolios[':portfolio_id'].$get(args, options))
}

export async function deleteV1RebalancingPortfoliosPortfolioId(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.rebalancing.portfolios[':portfolio_id'].$delete(args, options),
  )
}

export async function patchV1RebalancingPortfoliosPortfolioId(
  args: InferRequestType<(typeof client.v1.rebalancing.portfolios)[':portfolio_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.rebalancing.portfolios[':portfolio_id'].$patch(args, options),
  )
}

export async function getV1RebalancingRuns(
  args: InferRequestType<typeof client.v1.rebalancing.runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.runs.$get(args, options))
}

export async function postV1RebalancingRuns(
  args: InferRequestType<typeof client.v1.rebalancing.runs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.runs.$post(args, options))
}

export async function getV1RebalancingRunsRunId(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.runs[':run_id'].$get(args, options))
}

export async function deleteV1RebalancingRunsRunId(
  args: InferRequestType<(typeof client.v1.rebalancing.runs)[':run_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.runs[':run_id'].$delete(args, options))
}

export async function getV1RebalancingSubscriptions(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.subscriptions.$get(args, options))
}

export async function postV1RebalancingSubscriptions(
  args: InferRequestType<typeof client.v1.rebalancing.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rebalancing.subscriptions.$post(args, options))
}

export async function getV1RebalancingSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.rebalancing.subscriptions[':subscription_id'].$get(args, options),
  )
}

export async function deleteV1RebalancingSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.v1.rebalancing.subscriptions)[':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.rebalancing.subscriptions[':subscription_id'].$delete(args, options),
  )
}

export async function getV1ReportingEodAggregatePositions(
  args: InferRequestType<typeof client.v1.reporting.eod.aggregate_positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.eod.aggregate_positions.$get(args, options))
}

export async function getV1ReportingEodCashInterest(
  args: InferRequestType<typeof client.v1.reporting.eod.cash_interest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.eod.cash_interest.$get(args, options))
}

export async function getV1ReportingEodPositions(
  args: InferRequestType<typeof client.v1.reporting.eod.positions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.eod.positions.$get(args, options))
}

export async function postV1TestingIncomingWires(
  args: InferRequestType<typeof client.v1.testing.incoming_wires.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.testing.incoming_wires.$post(args, options))
}

export async function getV1TradingAccountsAccountIdAccount(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.trading.accounts[':account_id'].account.$get(args, options))
}

export async function patchV1TradingAccountsAccountIdAccountConfigurations(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['configurations']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].account.configurations.$patch(args, options),
  )
}

export async function getV1TradingAccountsAccountIdAccountPortfolioHistory(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['account']['portfolio']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].account.portfolio.history.$get(args, options),
  )
}

export async function getV1TradingAccountsAccountIdLimits(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.trading.accounts[':account_id'].limits.$get(args, options))
}

export async function getV1TradingAccountsAccountIdOrders(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.trading.accounts[':account_id'].orders.$get(args, options))
}

export async function postV1TradingAccountsAccountIdOrders(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.trading.accounts[':account_id'].orders.$post(args, options))
}

export async function deleteV1TradingAccountsAccountIdOrders(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['orders']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].orders.$delete(args, options),
  )
}

export async function getV1TradingAccountsAccountIdOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].orders[':order_id'].$get(args, options),
  )
}

export async function deleteV1TradingAccountsAccountIdOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].orders[':order_id'].$delete(args, options),
  )
}

export async function patchV1TradingAccountsAccountIdOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders'][':order_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].orders[':order_id'].$patch(args, options),
  )
}

export async function postV1TradingAccountsAccountIdOrdersEstimation(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders']['estimation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].orders.estimation.$post(args, options),
  )
}

export async function getV1TradingAccountsAccountIdOrdersByClientOrderId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['orders:by_client_order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id']['orders:by_client_order_id'].$get(args, options),
  )
}

export async function getV1TradingAccountsAccountIdPositions(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['positions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].positions.$get(args, options),
  )
}

export async function deleteV1TradingAccountsAccountIdPositions(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].positions.$delete(args, options),
  )
}

export async function getV1TradingAccountsAccountIdPositionsSymbolOrAssetId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$get(args, options),
  )
}

export async function deleteV1TradingAccountsAccountIdPositionsSymbolOrAssetId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_asset_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].positions[':symbol_or_asset_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1TradingAccountsAccountIdPositionsSymbolOrContractIdDoNotExercise(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['do-not-exercise']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].positions[':symbol_or_contract_id'][
      'do-not-exercise'
    ].$post(args, options),
  )
}

export async function postV1TradingAccountsAccountIdPositionsSymbolOrContractIdExercise(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['positions'][':symbol_or_contract_id']['exercise']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].positions[':symbol_or_contract_id'].exercise.$post(
      args,
      options,
    ),
  )
}

export async function getV1TradingAccountsAccountIdWatchlists(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists.$get(args, options),
  )
}

export async function postV1TradingAccountsAccountIdWatchlists(
  args: InferRequestType<(typeof client.v1.trading.accounts)[':account_id']['watchlists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists.$post(args, options),
  )
}

export async function getV1TradingAccountsAccountIdWatchlistsWatchlistId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$get(args, options),
  )
}

export async function putV1TradingAccountsAccountIdWatchlistsWatchlistId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$put(args, options),
  )
}

export async function postV1TradingAccountsAccountIdWatchlistsWatchlistId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$post(args, options),
  )
}

export async function deleteV1TradingAccountsAccountIdWatchlistsWatchlistId(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'].$delete(args, options),
  )
}

export async function deleteV1TradingAccountsAccountIdWatchlistsWatchlistIdSymbol(
  args: InferRequestType<
    (typeof client.v1.trading.accounts)[':account_id']['watchlists'][':watchlist_id'][':symbol']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.trading.accounts[':account_id'].watchlists[':watchlist_id'][':symbol'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1TransfersJitLedgerIdBalances(
  args: InferRequestType<(typeof client.v1.transfers.jit)[':ledger_id']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers.jit[':ledger_id'].balances.$get(args, options))
}

export async function getV1TransfersJitLedgers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.transfers.jit.ledgers.$get(undefined, options))
}

export async function getV1TransfersJitLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.transfers.jit.limits.$get(undefined, options))
}

export async function getV1TransfersJitReports(
  args: InferRequestType<typeof client.v1.transfers.jit.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers.jit.reports.$get(args, options))
}

export async function getV1WalletsFeesEstimate(
  args: InferRequestType<typeof client.v1.wallets.fees.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.wallets.fees.estimate.$get(args, options))
}

export async function getV1WalletsTravelRuleVasps(
  args: InferRequestType<(typeof client.v1.wallets)['travel-rule']['vasps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.wallets['travel-rule'].vasps.$get(args, options))
}

export async function getV2beta1AccountsAccountIdEventsActivitiesEventId(
  args: InferRequestType<
    (typeof client.v2beta1.accounts)[':account_id']['events']['activities'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2beta1.accounts[':account_id'].events.activities[':event_id'].$get(args, options),
  )
}

export async function getV2beta1EventsActivities(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2beta1.events.activities.$get(args, options))
}

export async function getV2CalendarMarket(
  args: InferRequestType<(typeof client.v2.calendar)[':market']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.calendar[':market'].$get(args, options))
}

export async function getV2Clock(
  args: InferRequestType<typeof client.v2.clock.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.clock.$get(args, options))
}

export async function getV2EventsAdminActions(
  args: InferRequestType<(typeof client.v2.events)['admin-actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events['admin-actions'].$get(args, options))
}

export async function getV2EventsFundingStatus(
  args: InferRequestType<typeof client.v2.events.funding.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events.funding.status.$get(args, options))
}

export async function getV2EventsIpos(
  args: InferRequestType<typeof client.v2.events.ipos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events.ipos.$get(args, options))
}

export async function getV2EventsJournalsStatus(
  args: InferRequestType<typeof client.v2.events.journals.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events.journals.status.$get(args, options))
}

export async function getV2EventsRebalancer(
  args: InferRequestType<typeof client.v2.events.rebalancer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events.rebalancer.$get(args, options))
}

export async function getV2EventsSystem(
  args: InferRequestType<typeof client.v2.events.system.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events.system.$get(args, options))
}

export async function getV2EventsTrades(
  args: InferRequestType<typeof client.v2.events.trades.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.events.trades.$get(args, options))
}
