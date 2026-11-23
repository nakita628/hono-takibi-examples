import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function postAccountsEvaluateAddress(
  args: InferRequestType<typeof client.accounts.evaluateAddress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.evaluateAddress.$post(args, options))
}

export async function getAccountsHistoricalBalances(
  args: InferRequestType<typeof client.accounts.historicalBalances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.historicalBalances.$get(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$get(args, options))
}

export async function putAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$put(args, options))
}

export async function deleteAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].$delete(args, options))
}

export async function getAuthApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.apiKey.$get(undefined, options))
}

export async function postAuthApiKey(
  args: InferRequestType<typeof client.auth.apiKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.apiKey.$post(args, options))
}

export async function deleteAuthApiKeyKey(
  args: InferRequestType<(typeof client.auth.apiKey)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.apiKey[':key'].$delete(args, options))
}

export async function postAuthToken(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.$post(undefined, options))
}

export async function deleteAuthToken(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.$delete(undefined, options))
}

export async function getCobrandConfigNotificationsEvents(
  args: InferRequestType<typeof client.cobrand.config.notifications.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cobrand.config.notifications.events.$get(args, options))
}

export async function putCobrandConfigNotificationsEventsEventName(
  args: InferRequestType<(typeof client.cobrand.config.notifications.events)[':eventName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cobrand.config.notifications.events[':eventName'].$put(args, options),
  )
}

export async function postCobrandConfigNotificationsEventsEventName(
  args: InferRequestType<
    (typeof client.cobrand.config.notifications.events)[':eventName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cobrand.config.notifications.events[':eventName'].$post(args, options),
  )
}

export async function deleteCobrandConfigNotificationsEventsEventName(
  args: InferRequestType<
    (typeof client.cobrand.config.notifications.events)[':eventName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cobrand.config.notifications.events[':eventName'].$delete(args, options),
  )
}

export async function postCobrandLogin(
  args: InferRequestType<typeof client.cobrand.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cobrand.login.$post(args, options))
}

export async function postCobrandLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.cobrand.logout.$post(undefined, options))
}

export async function getCobrandPublicKey(options?: ClientRequestOptions) {
  return await parseResponse(client.cobrand.publicKey.$get(undefined, options))
}

export async function getConfigsNotificationsEvents(
  args: InferRequestType<typeof client.configs.notifications.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.notifications.events.$get(args, options))
}

export async function putConfigsNotificationsEventsEventName(
  args: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.notifications.events[':eventName'].$put(args, options))
}

export async function postConfigsNotificationsEventsEventName(
  args: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.notifications.events[':eventName'].$post(args, options))
}

export async function deleteConfigsNotificationsEventsEventName(
  args: InferRequestType<(typeof client.configs.notifications.events)[':eventName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.configs.notifications.events[':eventName'].$delete(args, options),
  )
}

export async function getConfigsPublicKey(options?: ClientRequestOptions) {
  return await parseResponse(client.configs.publicKey.$get(undefined, options))
}

export async function getDataExtractsEvents(
  args: InferRequestType<typeof client.dataExtracts.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataExtracts.events.$get(args, options))
}

export async function getDataExtractsUserData(
  args: InferRequestType<typeof client.dataExtracts.userData.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dataExtracts.userData.$get(args, options))
}

export async function getDerivedHoldingSummary(
  args: InferRequestType<typeof client.derived.holdingSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.derived.holdingSummary.$get(args, options))
}

export async function getDerivedNetworth(
  args: InferRequestType<typeof client.derived.networth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.derived.networth.$get(args, options))
}

export async function getDerivedTransactionSummary(
  args: InferRequestType<typeof client.derived.transactionSummary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.derived.transactionSummary.$get(args, options))
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function getDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$get(args, options))
}

export async function deleteDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$delete(args, options))
}

export async function getHoldings(
  args: InferRequestType<typeof client.holdings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.holdings.$get(args, options))
}

export async function getHoldingsAssetClassificationList(options?: ClientRequestOptions) {
  return await parseResponse(client.holdings.assetClassificationList.$get(undefined, options))
}

export async function getHoldingsHoldingTypeList(options?: ClientRequestOptions) {
  return await parseResponse(client.holdings.holdingTypeList.$get(undefined, options))
}

export async function getHoldingsSecurities(
  args: InferRequestType<typeof client.holdings.securities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.holdings.securities.$get(args, options))
}

export async function getProviderAccounts(
  args: InferRequestType<typeof client.providerAccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providerAccounts.$get(args, options))
}

export async function putProviderAccounts(
  args: InferRequestType<typeof client.providerAccounts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providerAccounts.$put(args, options))
}

export async function getProviderAccountsProfile(
  args: InferRequestType<typeof client.providerAccounts.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providerAccounts.profile.$get(args, options))
}

export async function getProviderAccountsProviderAccountId(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providerAccounts[':providerAccountId'].$get(args, options))
}

export async function deleteProviderAccountsProviderAccountId(
  args: InferRequestType<(typeof client.providerAccounts)[':providerAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providerAccounts[':providerAccountId'].$delete(args, options))
}

export async function putProviderAccountsProviderAccountIdPreferences(
  args: InferRequestType<
    (typeof client.providerAccounts)[':providerAccountId']['preferences']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providerAccounts[':providerAccountId'].preferences.$put(args, options),
  )
}

export async function getProviders(
  args: InferRequestType<typeof client.providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.$get(args, options))
}

export async function getProvidersCount(
  args: InferRequestType<typeof client.providers.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.count.$get(args, options))
}

export async function getProvidersProviderId(
  args: InferRequestType<(typeof client.providers)[':providerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].$get(args, options))
}

export async function getStatements(
  args: InferRequestType<typeof client.statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statements.$get(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function getTransactionsCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.transactions.categories.$get(undefined, options))
}

export async function putTransactionsCategories(
  args: InferRequestType<typeof client.transactions.categories.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories.$put(args, options))
}

export async function postTransactionsCategories(
  args: InferRequestType<typeof client.transactions.categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories.$post(args, options))
}

export async function getTransactionsCategoriesRules(options?: ClientRequestOptions) {
  return await parseResponse(client.transactions.categories.rules.$get(undefined, options))
}

export async function postTransactionsCategoriesRules(
  args: InferRequestType<typeof client.transactions.categories.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories.rules.$post(args, options))
}

export async function putTransactionsCategoriesRulesRuleId(
  args: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories.rules[':ruleId'].$put(args, options))
}

export async function postTransactionsCategoriesRulesRuleId(
  args: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories.rules[':ruleId'].$post(args, options))
}

export async function deleteTransactionsCategoriesRulesRuleId(
  args: InferRequestType<(typeof client.transactions.categories.rules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories.rules[':ruleId'].$delete(args, options))
}

export async function getTransactionsCategoriesTxnRules(options?: ClientRequestOptions) {
  return await parseResponse(client.transactions.categories.txnRules.$get(undefined, options))
}

export async function deleteTransactionsCategoriesCategoryId(
  args: InferRequestType<(typeof client.transactions.categories)[':categoryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.categories[':categoryId'].$delete(args, options))
}

export async function getTransactionsCount(
  args: InferRequestType<typeof client.transactions.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.count.$get(args, options))
}

export async function putTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transactionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transactionId'].$put(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function getUserAccessTokens(
  args: InferRequestType<typeof client.user.accessTokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.accessTokens.$get(args, options))
}

export async function postUserLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.user.logout.$post(undefined, options))
}

export async function postUserRegister(
  args: InferRequestType<typeof client.user.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.register.$post(args, options))
}

export async function postUserSamlLogin(
  args: InferRequestType<typeof client.user.samlLogin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.samlLogin.$post(args, options))
}

export async function deleteUserUnregister(options?: ClientRequestOptions) {
  return await parseResponse(client.user.unregister.$delete(undefined, options))
}

export async function getVerification(
  args: InferRequestType<typeof client.verification.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verification.$get(args, options))
}

export async function putVerification(
  args: InferRequestType<typeof client.verification.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verification.$put(args, options))
}

export async function postVerification(
  args: InferRequestType<typeof client.verification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verification.$post(args, options))
}

export async function postVerifyAccountProviderAccountId(
  args: InferRequestType<(typeof client.verifyAccount)[':providerAccountId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifyAccount[':providerAccountId'].$post(args, options))
}
