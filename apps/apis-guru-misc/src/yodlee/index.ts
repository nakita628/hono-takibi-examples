import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  deleteAuthApiKeyKeyRoute,
  deleteAuthTokenRoute,
  deleteCobrandConfigNotificationsEventsEventNameRoute,
  deleteConfigsNotificationsEventsEventNameRoute,
  deleteDocumentsDocumentIdRoute,
  deleteProviderAccountsProviderAccountIdRoute,
  deleteTransactionsCategoriesCategoryIdRoute,
  deleteTransactionsCategoriesRulesRuleIdRoute,
  deleteUserUnregisterRoute,
  getAccountsAccountIdRoute,
  getAccountsHistoricalBalancesRoute,
  getAccountsRoute,
  getAuthApiKeyRoute,
  getCobrandConfigNotificationsEventsRoute,
  getCobrandPublicKeyRoute,
  getConfigsNotificationsEventsRoute,
  getConfigsPublicKeyRoute,
  getDataExtractsEventsRoute,
  getDataExtractsUserDataRoute,
  getDerivedHoldingSummaryRoute,
  getDerivedNetworthRoute,
  getDerivedTransactionSummaryRoute,
  getDocumentsDocumentIdRoute,
  getDocumentsRoute,
  getHoldingsAssetClassificationListRoute,
  getHoldingsHoldingTypeListRoute,
  getHoldingsRoute,
  getHoldingsSecuritiesRoute,
  getProviderAccountsProfileRoute,
  getProviderAccountsProviderAccountIdRoute,
  getProviderAccountsRoute,
  getProvidersCountRoute,
  getProvidersProviderIdRoute,
  getProvidersRoute,
  getStatementsRoute,
  getTransactionsCategoriesRoute,
  getTransactionsCategoriesRulesRoute,
  getTransactionsCategoriesTxnRulesRoute,
  getTransactionsCountRoute,
  getTransactionsRoute,
  getUserAccessTokensRoute,
  getUserRoute,
  getVerificationRoute,
  postAccountsEvaluateAddressRoute,
  postAccountsRoute,
  postAuthApiKeyRoute,
  postAuthTokenRoute,
  postCobrandConfigNotificationsEventsEventNameRoute,
  postCobrandLoginRoute,
  postCobrandLogoutRoute,
  postConfigsNotificationsEventsEventNameRoute,
  postTransactionsCategoriesRoute,
  postTransactionsCategoriesRulesRoute,
  postTransactionsCategoriesRulesRuleIdRoute,
  postUserLogoutRoute,
  postUserRegisterRoute,
  postUserSamlLoginRoute,
  postVerificationRoute,
  postVerifyAccountProviderAccountIdRoute,
  putAccountsAccountIdRoute,
  putCobrandConfigNotificationsEventsEventNameRoute,
  putConfigsNotificationsEventsEventNameRoute,
  putProviderAccountsProviderAccountIdPreferencesRoute,
  putProviderAccountsRoute,
  putTransactionsCategoriesRoute,
  putTransactionsCategoriesRulesRuleIdRoute,
  putTransactionsTransactionIdRoute,
  putUserRoute,
  putVerificationRoute,
} from './routes'
import {
  deleteAccountsAccountIdRouteHandler,
  deleteAuthApiKeyKeyRouteHandler,
  deleteAuthTokenRouteHandler,
  deleteCobrandConfigNotificationsEventsEventNameRouteHandler,
  deleteConfigsNotificationsEventsEventNameRouteHandler,
  deleteDocumentsDocumentIdRouteHandler,
  deleteProviderAccountsProviderAccountIdRouteHandler,
  deleteTransactionsCategoriesCategoryIdRouteHandler,
  deleteTransactionsCategoriesRulesRuleIdRouteHandler,
  deleteUserUnregisterRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsHistoricalBalancesRouteHandler,
  getAccountsRouteHandler,
  getAuthApiKeyRouteHandler,
  getCobrandConfigNotificationsEventsRouteHandler,
  getCobrandPublicKeyRouteHandler,
  getConfigsNotificationsEventsRouteHandler,
  getConfigsPublicKeyRouteHandler,
  getDataExtractsEventsRouteHandler,
  getDataExtractsUserDataRouteHandler,
  getDerivedHoldingSummaryRouteHandler,
  getDerivedNetworthRouteHandler,
  getDerivedTransactionSummaryRouteHandler,
  getDocumentsDocumentIdRouteHandler,
  getDocumentsRouteHandler,
  getHoldingsAssetClassificationListRouteHandler,
  getHoldingsHoldingTypeListRouteHandler,
  getHoldingsRouteHandler,
  getHoldingsSecuritiesRouteHandler,
  getProviderAccountsProfileRouteHandler,
  getProviderAccountsProviderAccountIdRouteHandler,
  getProviderAccountsRouteHandler,
  getProvidersCountRouteHandler,
  getProvidersProviderIdRouteHandler,
  getProvidersRouteHandler,
  getStatementsRouteHandler,
  getTransactionsCategoriesRouteHandler,
  getTransactionsCategoriesRulesRouteHandler,
  getTransactionsCategoriesTxnRulesRouteHandler,
  getTransactionsCountRouteHandler,
  getTransactionsRouteHandler,
  getUserAccessTokensRouteHandler,
  getUserRouteHandler,
  getVerificationRouteHandler,
  postAccountsEvaluateAddressRouteHandler,
  postAccountsRouteHandler,
  postAuthApiKeyRouteHandler,
  postAuthTokenRouteHandler,
  postCobrandConfigNotificationsEventsEventNameRouteHandler,
  postCobrandLoginRouteHandler,
  postCobrandLogoutRouteHandler,
  postConfigsNotificationsEventsEventNameRouteHandler,
  postTransactionsCategoriesRouteHandler,
  postTransactionsCategoriesRulesRouteHandler,
  postTransactionsCategoriesRulesRuleIdRouteHandler,
  postUserLogoutRouteHandler,
  postUserRegisterRouteHandler,
  postUserSamlLoginRouteHandler,
  postVerificationRouteHandler,
  postVerifyAccountProviderAccountIdRouteHandler,
  putAccountsAccountIdRouteHandler,
  putCobrandConfigNotificationsEventsEventNameRouteHandler,
  putConfigsNotificationsEventsEventNameRouteHandler,
  putProviderAccountsProviderAccountIdPreferencesRouteHandler,
  putProviderAccountsRouteHandler,
  putTransactionsCategoriesRouteHandler,
  putTransactionsCategoriesRulesRuleIdRouteHandler,
  putTransactionsTransactionIdRouteHandler,
  putUserRouteHandler,
  putVerificationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(postAccountsEvaluateAddressRoute, postAccountsEvaluateAddressRouteHandler)
  .openapi(getAccountsHistoricalBalancesRoute, getAccountsHistoricalBalancesRouteHandler)
  .openapi(deleteAccountsAccountIdRoute, deleteAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(putAccountsAccountIdRoute, putAccountsAccountIdRouteHandler)
  .openapi(getAuthApiKeyRoute, getAuthApiKeyRouteHandler)
  .openapi(postAuthApiKeyRoute, postAuthApiKeyRouteHandler)
  .openapi(deleteAuthApiKeyKeyRoute, deleteAuthApiKeyKeyRouteHandler)
  .openapi(deleteAuthTokenRoute, deleteAuthTokenRouteHandler)
  .openapi(postAuthTokenRoute, postAuthTokenRouteHandler)
  .openapi(
    getCobrandConfigNotificationsEventsRoute,
    getCobrandConfigNotificationsEventsRouteHandler,
  )
  .openapi(
    deleteCobrandConfigNotificationsEventsEventNameRoute,
    deleteCobrandConfigNotificationsEventsEventNameRouteHandler,
  )
  .openapi(
    postCobrandConfigNotificationsEventsEventNameRoute,
    postCobrandConfigNotificationsEventsEventNameRouteHandler,
  )
  .openapi(
    putCobrandConfigNotificationsEventsEventNameRoute,
    putCobrandConfigNotificationsEventsEventNameRouteHandler,
  )
  .openapi(postCobrandLoginRoute, postCobrandLoginRouteHandler)
  .openapi(postCobrandLogoutRoute, postCobrandLogoutRouteHandler)
  .openapi(getCobrandPublicKeyRoute, getCobrandPublicKeyRouteHandler)
  .openapi(getConfigsNotificationsEventsRoute, getConfigsNotificationsEventsRouteHandler)
  .openapi(
    deleteConfigsNotificationsEventsEventNameRoute,
    deleteConfigsNotificationsEventsEventNameRouteHandler,
  )
  .openapi(
    postConfigsNotificationsEventsEventNameRoute,
    postConfigsNotificationsEventsEventNameRouteHandler,
  )
  .openapi(
    putConfigsNotificationsEventsEventNameRoute,
    putConfigsNotificationsEventsEventNameRouteHandler,
  )
  .openapi(getConfigsPublicKeyRoute, getConfigsPublicKeyRouteHandler)
  .openapi(getDataExtractsEventsRoute, getDataExtractsEventsRouteHandler)
  .openapi(getDataExtractsUserDataRoute, getDataExtractsUserDataRouteHandler)
  .openapi(getDerivedHoldingSummaryRoute, getDerivedHoldingSummaryRouteHandler)
  .openapi(getDerivedNetworthRoute, getDerivedNetworthRouteHandler)
  .openapi(getDerivedTransactionSummaryRoute, getDerivedTransactionSummaryRouteHandler)
  .openapi(getDocumentsRoute, getDocumentsRouteHandler)
  .openapi(deleteDocumentsDocumentIdRoute, deleteDocumentsDocumentIdRouteHandler)
  .openapi(getDocumentsDocumentIdRoute, getDocumentsDocumentIdRouteHandler)
  .openapi(getHoldingsRoute, getHoldingsRouteHandler)
  .openapi(getHoldingsAssetClassificationListRoute, getHoldingsAssetClassificationListRouteHandler)
  .openapi(getHoldingsHoldingTypeListRoute, getHoldingsHoldingTypeListRouteHandler)
  .openapi(getHoldingsSecuritiesRoute, getHoldingsSecuritiesRouteHandler)
  .openapi(getProviderAccountsRoute, getProviderAccountsRouteHandler)
  .openapi(putProviderAccountsRoute, putProviderAccountsRouteHandler)
  .openapi(getProviderAccountsProfileRoute, getProviderAccountsProfileRouteHandler)
  .openapi(
    deleteProviderAccountsProviderAccountIdRoute,
    deleteProviderAccountsProviderAccountIdRouteHandler,
  )
  .openapi(
    getProviderAccountsProviderAccountIdRoute,
    getProviderAccountsProviderAccountIdRouteHandler,
  )
  .openapi(
    putProviderAccountsProviderAccountIdPreferencesRoute,
    putProviderAccountsProviderAccountIdPreferencesRouteHandler,
  )
  .openapi(getProvidersRoute, getProvidersRouteHandler)
  .openapi(getProvidersCountRoute, getProvidersCountRouteHandler)
  .openapi(getProvidersProviderIdRoute, getProvidersProviderIdRouteHandler)
  .openapi(getStatementsRoute, getStatementsRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(getTransactionsCategoriesRoute, getTransactionsCategoriesRouteHandler)
  .openapi(postTransactionsCategoriesRoute, postTransactionsCategoriesRouteHandler)
  .openapi(putTransactionsCategoriesRoute, putTransactionsCategoriesRouteHandler)
  .openapi(getTransactionsCategoriesRulesRoute, getTransactionsCategoriesRulesRouteHandler)
  .openapi(postTransactionsCategoriesRulesRoute, postTransactionsCategoriesRulesRouteHandler)
  .openapi(
    deleteTransactionsCategoriesRulesRuleIdRoute,
    deleteTransactionsCategoriesRulesRuleIdRouteHandler,
  )
  .openapi(
    postTransactionsCategoriesRulesRuleIdRoute,
    postTransactionsCategoriesRulesRuleIdRouteHandler,
  )
  .openapi(
    putTransactionsCategoriesRulesRuleIdRoute,
    putTransactionsCategoriesRulesRuleIdRouteHandler,
  )
  .openapi(getTransactionsCategoriesTxnRulesRoute, getTransactionsCategoriesTxnRulesRouteHandler)
  .openapi(
    deleteTransactionsCategoriesCategoryIdRoute,
    deleteTransactionsCategoriesCategoryIdRouteHandler,
  )
  .openapi(getTransactionsCountRoute, getTransactionsCountRouteHandler)
  .openapi(putTransactionsTransactionIdRoute, putTransactionsTransactionIdRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(putUserRoute, putUserRouteHandler)
  .openapi(getUserAccessTokensRoute, getUserAccessTokensRouteHandler)
  .openapi(postUserLogoutRoute, postUserLogoutRouteHandler)
  .openapi(postUserRegisterRoute, postUserRegisterRouteHandler)
  .openapi(postUserSamlLoginRoute, postUserSamlLoginRouteHandler)
  .openapi(deleteUserUnregisterRoute, deleteUserUnregisterRouteHandler)
  .openapi(getVerificationRoute, getVerificationRouteHandler)
  .openapi(postVerificationRoute, postVerificationRouteHandler)
  .openapi(putVerificationRoute, putVerificationRouteHandler)
  .openapi(postVerifyAccountProviderAccountIdRoute, postVerifyAccountProviderAccountIdRouteHandler)

export default app
