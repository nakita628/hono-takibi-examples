import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthTokenRoute,
  deleteBanksCategoriesIdCategoryRoute,
  deleteCategoriesKeywordsIdKeywordRoute,
  deleteClientsIdClientLogoRoute,
  deleteClientsIdClientRoute,
  deleteConnectionsIdConnectionSourcesIdSourceRoute,
  deleteConnectorsIdConnectorLogosIdLogoRoute,
  deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  deleteUsersIdUserCategoriesFullIdFullRoute,
  deleteUsersIdUserConfigRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
  deleteUsersIdUserConnectionsIdConnectionAccountsRoute,
  deleteUsersIdUserConnectionsIdConnectionRoute,
  deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
  deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
  deleteUsersIdUserConnectionsRoute,
  deleteUsersIdUserRoute,
  deleteUsersIdUserTransactionsclustersIdTransactionsclusterRoute,
  deleteWebhooksAuthIdAuthRoute,
  deleteWebhooksAuthRoute,
  deleteWebhooksIdWebhookAddToDataKeyRoute,
  deleteWebhooksIdWebhookAddToDataRoute,
  deleteWebhooksIdWebhookRoute,
  deleteWebhooksRoute,
  getAccountTypesIdAccountTypeRoute,
  getAccountTypesRoute,
  getAuthTokenCodeRoute,
  getBanksIdBankRoute,
  getBanksIdConnectorConnectionsRoute,
  getBanksIdConnectorLogosMainRoute,
  getBanksIdConnectorLogosRoute,
  getBanksIdConnectorLogosThumbnailRoute,
  getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getBanksIdConnectorSourcesIdSourceRoute,
  getBanksIdConnectorSourcesRoute,
  getBanksRoute,
  getCategoriesRoute,
  getCertificateTypeRoute,
  getClientsIdClientRoute,
  getClientsRoute,
  getConfigLogsRoute,
  getConfigRoute,
  getConnectionsIdConnectionLogsRoute,
  getConnectionsIdConnectionSourcesRoute,
  getConnectionsRoute,
  getConnectorsIdConnectorLogosMainRoute,
  getConnectorsIdConnectorLogosRoute,
  getConnectorsIdConnectorLogosThumbnailRoute,
  getConnectorsIdConnectorRoute,
  getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getConnectorsIdConnectorSourcesIdSourceRoute,
  getConnectorsIdConnectorSourcesRoute,
  getConnectorsRoute,
  getIncidentsRoute,
  getInvoicingRoute,
  getLogsRoute,
  getMonitoringRoute,
  getProvidersIdConnectorConnectionsRoute,
  getProvidersIdConnectorLogosMainRoute,
  getProvidersIdConnectorLogosRoute,
  getProvidersIdConnectorLogosThumbnailRoute,
  getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getProvidersIdConnectorSourcesIdSourceRoute,
  getProvidersIdConnectorSourcesRoute,
  getProvidersIdProviderRoute,
  getProvidersRoute,
  getPsd2RegistrationsIdPsd2registrationLogsRoute,
  getPsd2RegistrationsIdPsd2RegistrationRoute,
  getPsd2RegistrationsRoute,
  getPublickeyRoute,
  getUsersIdUserAccountsIdAccountCategoriesRoute,
  getUsersIdUserAccountsIdAccountTransactionsclustersRoute,
  getUsersIdUserAccountTypesIdAccountTypeRoute,
  getUsersIdUserAccountTypesRoute,
  getUsersIdUserAlertsRoute,
  getUsersIdUserCategoriesFullRoute,
  getUsersIdUserCategoriesRoute,
  getUsersIdUserConfigRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
  getUsersIdUserConnectionsIdConnectionAccountsRoute,
  getUsersIdUserConnectionsIdConnectionInformationsRoute,
  getUsersIdUserConnectionsIdConnectionLogsRoute,
  getUsersIdUserConnectionsIdConnectionSourcesRoute,
  getUsersIdUserConnectionsIdConnectionTransactionsclustersRoute,
  getUsersIdUserConnectionsRoute,
  getUsersIdUserForecastRoute,
  getUsersIdUserLogsRoute,
  getUsersIdUserProfilesIdProfileRoute,
  getUsersIdUserProfilesMainRoute,
  getUsersIdUserProfilesRoute,
  getUsersIdUserRoute,
  getUsersIdUserTransactionsclustersRoute,
  getUsersRoute,
  getWebauthRoute,
  getWebhooksAuthRoute,
  getWebhooksIdWebhookAddToDataKeyRoute,
  getWebhooksIdWebhookAddToDataRoute,
  getWebhooksIdWebhookLogsRoute,
  getWebhooksRoute,
  postAdminJwtRoute,
  postAuthInitRoute,
  postAuthJwtRoute,
  postAuthRenewRoute,
  postAuthTokenAccessRoute,
  postAuthTokenRoute,
  postBanksCategoriesIdCategoryRoute,
  postBanksCategoriesRoute,
  postCategoriesKeywordsRoute,
  postCategorizeRoute,
  postClientsIdClientLogoRoute,
  postClientsRoute,
  postConfigRoute,
  postConnectionsIdConnectionSourcesIdSourceRoute,
  postConnectorsIdConnectorLogosRoute,
  postConnectorsRoute,
  postTestSyncRoute,
  postTestWebhooksRoute,
  postUsersIdUserAccountsIdAccountTransactionsclustersRoute,
  postUsersIdUserCategoriesFullRoute,
  postUsersIdUserConfigRoute,
  postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
  postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
  postUsersIdUserConnectionsIdConnectionAccountsRoute,
  postUsersIdUserConnectionsIdConnectionRoute,
  postUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
  postUsersIdUserConnectionsIdConnectionTransactionsclustersRoute,
  postUsersIdUserConnectionsRoute,
  postUsersIdUserTokenRoute,
  postUsersIdUserTransactionsclustersRoute,
  postWebhooksAuthIdAuthRoute,
  postWebhooksAuthRoute,
  postWebhooksIdWebhookAddToDataKeyRoute,
  postWebhooksIdWebhookAddToDataRoute,
  postWebhooksIdWebhookRoute,
  postWebhooksRoute,
  putClientsIdClientRoute,
  putConnectionsIdConnectionSourcesIdSourceRoute,
  putConnectorsIdConnectorLogosIdLogoRoute,
  putConnectorsIdConnectorLogosRoute,
  putConnectorsIdConnectorRoute,
  putConnectorsIdConnectorSourcesIdSourceRoute,
  putConnectorsIdConnectorSourcesRoute,
  putConnectorsRoute,
  putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  putUsersIdUserCategoriesFullIdFullRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRoute,
  putUsersIdUserConnectionsIdConnectionAccountsRoute,
  putUsersIdUserConnectionsIdConnectionRoute,
  putUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
  putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
  putUsersIdUserTransactionsclustersIdTransactionsclusterRoute,
  putWebhooksAuthIdAuthRoute,
  putWebhooksIdWebhookRoute,
} from './routes'
import {
  deleteAuthTokenRouteHandler,
  deleteBanksCategoriesIdCategoryRouteHandler,
  deleteCategoriesKeywordsIdKeywordRouteHandler,
  deleteClientsIdClientLogoRouteHandler,
  deleteClientsIdClientRouteHandler,
  deleteConnectionsIdConnectionSourcesIdSourceRouteHandler,
  deleteConnectorsIdConnectorLogosIdLogoRouteHandler,
  deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  deleteUsersIdUserCategoriesFullIdFullRouteHandler,
  deleteUsersIdUserConfigRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRouteHandler,
  deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRouteHandler,
  deleteUsersIdUserConnectionsRouteHandler,
  deleteUsersIdUserRouteHandler,
  deleteUsersIdUserTransactionsclustersIdTransactionsclusterRouteHandler,
  deleteWebhooksAuthIdAuthRouteHandler,
  deleteWebhooksAuthRouteHandler,
  deleteWebhooksIdWebhookAddToDataKeyRouteHandler,
  deleteWebhooksIdWebhookAddToDataRouteHandler,
  deleteWebhooksIdWebhookRouteHandler,
  deleteWebhooksRouteHandler,
  getAccountTypesIdAccountTypeRouteHandler,
  getAccountTypesRouteHandler,
  getAuthTokenCodeRouteHandler,
  getBanksIdBankRouteHandler,
  getBanksIdConnectorConnectionsRouteHandler,
  getBanksIdConnectorLogosMainRouteHandler,
  getBanksIdConnectorLogosRouteHandler,
  getBanksIdConnectorLogosThumbnailRouteHandler,
  getBanksIdConnectorSourcesIdConnectorSourceFieldsRouteHandler,
  getBanksIdConnectorSourcesIdSourceRouteHandler,
  getBanksIdConnectorSourcesRouteHandler,
  getBanksRouteHandler,
  getCategoriesRouteHandler,
  getCertificateTypeRouteHandler,
  getClientsIdClientRouteHandler,
  getClientsRouteHandler,
  getConfigLogsRouteHandler,
  getConfigRouteHandler,
  getConnectionsIdConnectionLogsRouteHandler,
  getConnectionsIdConnectionSourcesRouteHandler,
  getConnectionsRouteHandler,
  getConnectorsIdConnectorLogosMainRouteHandler,
  getConnectorsIdConnectorLogosRouteHandler,
  getConnectorsIdConnectorLogosThumbnailRouteHandler,
  getConnectorsIdConnectorRouteHandler,
  getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRouteHandler,
  getConnectorsIdConnectorSourcesIdSourceRouteHandler,
  getConnectorsIdConnectorSourcesRouteHandler,
  getConnectorsRouteHandler,
  getIncidentsRouteHandler,
  getInvoicingRouteHandler,
  getLogsRouteHandler,
  getMonitoringRouteHandler,
  getProvidersIdConnectorConnectionsRouteHandler,
  getProvidersIdConnectorLogosMainRouteHandler,
  getProvidersIdConnectorLogosRouteHandler,
  getProvidersIdConnectorLogosThumbnailRouteHandler,
  getProvidersIdConnectorSourcesIdConnectorSourceFieldsRouteHandler,
  getProvidersIdConnectorSourcesIdSourceRouteHandler,
  getProvidersIdConnectorSourcesRouteHandler,
  getProvidersIdProviderRouteHandler,
  getProvidersRouteHandler,
  getPsd2RegistrationsIdPsd2registrationLogsRouteHandler,
  getPsd2RegistrationsIdPsd2RegistrationRouteHandler,
  getPsd2RegistrationsRouteHandler,
  getPublickeyRouteHandler,
  getUsersIdUserAccountsIdAccountCategoriesRouteHandler,
  getUsersIdUserAccountsIdAccountTransactionsclustersRouteHandler,
  getUsersIdUserAccountTypesIdAccountTypeRouteHandler,
  getUsersIdUserAccountTypesRouteHandler,
  getUsersIdUserAlertsRouteHandler,
  getUsersIdUserCategoriesFullRouteHandler,
  getUsersIdUserCategoriesRouteHandler,
  getUsersIdUserConfigRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRouteHandler,
  getUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  getUsersIdUserConnectionsIdConnectionInformationsRouteHandler,
  getUsersIdUserConnectionsIdConnectionLogsRouteHandler,
  getUsersIdUserConnectionsIdConnectionSourcesRouteHandler,
  getUsersIdUserConnectionsIdConnectionTransactionsclustersRouteHandler,
  getUsersIdUserConnectionsRouteHandler,
  getUsersIdUserForecastRouteHandler,
  getUsersIdUserLogsRouteHandler,
  getUsersIdUserProfilesIdProfileRouteHandler,
  getUsersIdUserProfilesMainRouteHandler,
  getUsersIdUserProfilesRouteHandler,
  getUsersIdUserRouteHandler,
  getUsersIdUserTransactionsclustersRouteHandler,
  getUsersRouteHandler,
  getWebauthRouteHandler,
  getWebhooksAuthRouteHandler,
  getWebhooksIdWebhookAddToDataKeyRouteHandler,
  getWebhooksIdWebhookAddToDataRouteHandler,
  getWebhooksIdWebhookLogsRouteHandler,
  getWebhooksRouteHandler,
  postAdminJwtRouteHandler,
  postAuthInitRouteHandler,
  postAuthJwtRouteHandler,
  postAuthRenewRouteHandler,
  postAuthTokenAccessRouteHandler,
  postAuthTokenRouteHandler,
  postBanksCategoriesIdCategoryRouteHandler,
  postBanksCategoriesRouteHandler,
  postCategoriesKeywordsRouteHandler,
  postCategorizeRouteHandler,
  postClientsIdClientLogoRouteHandler,
  postClientsRouteHandler,
  postConfigRouteHandler,
  postConnectionsIdConnectionSourcesIdSourceRouteHandler,
  postConnectorsIdConnectorLogosRouteHandler,
  postConnectorsRouteHandler,
  postTestSyncRouteHandler,
  postTestWebhooksRouteHandler,
  postUsersIdUserAccountsIdAccountTransactionsclustersRouteHandler,
  postUsersIdUserCategoriesFullRouteHandler,
  postUsersIdUserConfigRouteHandler,
  postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRouteHandler,
  postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRouteHandler,
  postUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  postUsersIdUserConnectionsIdConnectionRouteHandler,
  postUsersIdUserConnectionsIdConnectionSourcesIdSourceRouteHandler,
  postUsersIdUserConnectionsIdConnectionTransactionsclustersRouteHandler,
  postUsersIdUserConnectionsRouteHandler,
  postUsersIdUserTokenRouteHandler,
  postUsersIdUserTransactionsclustersRouteHandler,
  postWebhooksAuthIdAuthRouteHandler,
  postWebhooksAuthRouteHandler,
  postWebhooksIdWebhookAddToDataKeyRouteHandler,
  postWebhooksIdWebhookAddToDataRouteHandler,
  postWebhooksIdWebhookRouteHandler,
  postWebhooksRouteHandler,
  putClientsIdClientRouteHandler,
  putConnectionsIdConnectionSourcesIdSourceRouteHandler,
  putConnectorsIdConnectorLogosIdLogoRouteHandler,
  putConnectorsIdConnectorLogosRouteHandler,
  putConnectorsIdConnectorRouteHandler,
  putConnectorsIdConnectorSourcesIdSourceRouteHandler,
  putConnectorsIdConnectorSourcesRouteHandler,
  putConnectorsRouteHandler,
  putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  putUsersIdUserCategoriesFullIdFullRouteHandler,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountRouteHandler,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRouteHandler,
  putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRouteHandler,
  putUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  putUsersIdUserConnectionsIdConnectionRouteHandler,
  putUsersIdUserConnectionsIdConnectionSourcesIdSourceRouteHandler,
  putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRouteHandler,
  putUsersIdUserTransactionsclustersIdTransactionsclusterRouteHandler,
  putWebhooksAuthIdAuthRouteHandler,
  putWebhooksIdWebhookRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountTypesRoute, getAccountTypesRouteHandler)
  .openapi(getAccountTypesIdAccountTypeRoute, getAccountTypesIdAccountTypeRouteHandler)
  .openapi(postAdminJwtRoute, postAdminJwtRouteHandler)
  .openapi(postAuthInitRoute, postAuthInitRouteHandler)
  .openapi(postAuthJwtRoute, postAuthJwtRouteHandler)
  .openapi(postAuthRenewRoute, postAuthRenewRouteHandler)
  .openapi(deleteAuthTokenRoute, deleteAuthTokenRouteHandler)
  .openapi(postAuthTokenRoute, postAuthTokenRouteHandler)
  .openapi(postAuthTokenAccessRoute, postAuthTokenAccessRouteHandler)
  .openapi(getAuthTokenCodeRoute, getAuthTokenCodeRouteHandler)
  .openapi(getBanksRoute, getBanksRouteHandler)
  .openapi(postBanksCategoriesRoute, postBanksCategoriesRouteHandler)
  .openapi(deleteBanksCategoriesIdCategoryRoute, deleteBanksCategoriesIdCategoryRouteHandler)
  .openapi(postBanksCategoriesIdCategoryRoute, postBanksCategoriesIdCategoryRouteHandler)
  .openapi(getBanksIdBankRoute, getBanksIdBankRouteHandler)
  .openapi(getBanksIdConnectorConnectionsRoute, getBanksIdConnectorConnectionsRouteHandler)
  .openapi(getBanksIdConnectorLogosRoute, getBanksIdConnectorLogosRouteHandler)
  .openapi(getBanksIdConnectorLogosMainRoute, getBanksIdConnectorLogosMainRouteHandler)
  .openapi(getBanksIdConnectorLogosThumbnailRoute, getBanksIdConnectorLogosThumbnailRouteHandler)
  .openapi(getBanksIdConnectorSourcesRoute, getBanksIdConnectorSourcesRouteHandler)
  .openapi(
    getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute,
    getBanksIdConnectorSourcesIdConnectorSourceFieldsRouteHandler,
  )
  .openapi(getBanksIdConnectorSourcesIdSourceRoute, getBanksIdConnectorSourcesIdSourceRouteHandler)
  .openapi(getCategoriesRoute, getCategoriesRouteHandler)
  .openapi(postCategoriesKeywordsRoute, postCategoriesKeywordsRouteHandler)
  .openapi(deleteCategoriesKeywordsIdKeywordRoute, deleteCategoriesKeywordsIdKeywordRouteHandler)
  .openapi(postCategorizeRoute, postCategorizeRouteHandler)
  .openapi(getCertificateTypeRoute, getCertificateTypeRouteHandler)
  .openapi(getClientsRoute, getClientsRouteHandler)
  .openapi(postClientsRoute, postClientsRouteHandler)
  .openapi(deleteClientsIdClientRoute, deleteClientsIdClientRouteHandler)
  .openapi(getClientsIdClientRoute, getClientsIdClientRouteHandler)
  .openapi(putClientsIdClientRoute, putClientsIdClientRouteHandler)
  .openapi(deleteClientsIdClientLogoRoute, deleteClientsIdClientLogoRouteHandler)
  .openapi(postClientsIdClientLogoRoute, postClientsIdClientLogoRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(postConfigRoute, postConfigRouteHandler)
  .openapi(getConfigLogsRoute, getConfigLogsRouteHandler)
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(getConnectionsIdConnectionLogsRoute, getConnectionsIdConnectionLogsRouteHandler)
  .openapi(getConnectionsIdConnectionSourcesRoute, getConnectionsIdConnectionSourcesRouteHandler)
  .openapi(
    deleteConnectionsIdConnectionSourcesIdSourceRoute,
    deleteConnectionsIdConnectionSourcesIdSourceRouteHandler,
  )
  .openapi(
    postConnectionsIdConnectionSourcesIdSourceRoute,
    postConnectionsIdConnectionSourcesIdSourceRouteHandler,
  )
  .openapi(
    putConnectionsIdConnectionSourcesIdSourceRoute,
    putConnectionsIdConnectionSourcesIdSourceRouteHandler,
  )
  .openapi(getConnectorsRoute, getConnectorsRouteHandler)
  .openapi(postConnectorsRoute, postConnectorsRouteHandler)
  .openapi(putConnectorsRoute, putConnectorsRouteHandler)
  .openapi(getConnectorsIdConnectorRoute, getConnectorsIdConnectorRouteHandler)
  .openapi(putConnectorsIdConnectorRoute, putConnectorsIdConnectorRouteHandler)
  .openapi(getConnectorsIdConnectorLogosRoute, getConnectorsIdConnectorLogosRouteHandler)
  .openapi(postConnectorsIdConnectorLogosRoute, postConnectorsIdConnectorLogosRouteHandler)
  .openapi(putConnectorsIdConnectorLogosRoute, putConnectorsIdConnectorLogosRouteHandler)
  .openapi(getConnectorsIdConnectorLogosMainRoute, getConnectorsIdConnectorLogosMainRouteHandler)
  .openapi(
    getConnectorsIdConnectorLogosThumbnailRoute,
    getConnectorsIdConnectorLogosThumbnailRouteHandler,
  )
  .openapi(
    deleteConnectorsIdConnectorLogosIdLogoRoute,
    deleteConnectorsIdConnectorLogosIdLogoRouteHandler,
  )
  .openapi(
    putConnectorsIdConnectorLogosIdLogoRoute,
    putConnectorsIdConnectorLogosIdLogoRouteHandler,
  )
  .openapi(getConnectorsIdConnectorSourcesRoute, getConnectorsIdConnectorSourcesRouteHandler)
  .openapi(putConnectorsIdConnectorSourcesRoute, putConnectorsIdConnectorSourcesRouteHandler)
  .openapi(
    getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute,
    getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRouteHandler,
  )
  .openapi(
    getConnectorsIdConnectorSourcesIdSourceRoute,
    getConnectorsIdConnectorSourcesIdSourceRouteHandler,
  )
  .openapi(
    putConnectorsIdConnectorSourcesIdSourceRoute,
    putConnectorsIdConnectorSourcesIdSourceRouteHandler,
  )
  .openapi(getIncidentsRoute, getIncidentsRouteHandler)
  .openapi(getInvoicingRoute, getInvoicingRouteHandler)
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(getMonitoringRoute, getMonitoringRouteHandler)
  .openapi(getProvidersRoute, getProvidersRouteHandler)
  .openapi(getProvidersIdConnectorConnectionsRoute, getProvidersIdConnectorConnectionsRouteHandler)
  .openapi(getProvidersIdConnectorLogosRoute, getProvidersIdConnectorLogosRouteHandler)
  .openapi(getProvidersIdConnectorLogosMainRoute, getProvidersIdConnectorLogosMainRouteHandler)
  .openapi(
    getProvidersIdConnectorLogosThumbnailRoute,
    getProvidersIdConnectorLogosThumbnailRouteHandler,
  )
  .openapi(getProvidersIdConnectorSourcesRoute, getProvidersIdConnectorSourcesRouteHandler)
  .openapi(
    getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute,
    getProvidersIdConnectorSourcesIdConnectorSourceFieldsRouteHandler,
  )
  .openapi(
    getProvidersIdConnectorSourcesIdSourceRoute,
    getProvidersIdConnectorSourcesIdSourceRouteHandler,
  )
  .openapi(getProvidersIdProviderRoute, getProvidersIdProviderRouteHandler)
  .openapi(getPsd2RegistrationsRoute, getPsd2RegistrationsRouteHandler)
  .openapi(
    getPsd2RegistrationsIdPsd2RegistrationRoute,
    getPsd2RegistrationsIdPsd2RegistrationRouteHandler,
  )
  .openapi(
    getPsd2RegistrationsIdPsd2registrationLogsRoute,
    getPsd2RegistrationsIdPsd2registrationLogsRouteHandler,
  )
  .openapi(getPublickeyRoute, getPublickeyRouteHandler)
  .openapi(postTestSyncRoute, postTestSyncRouteHandler)
  .openapi(postTestWebhooksRoute, postTestWebhooksRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(deleteUsersIdUserRoute, deleteUsersIdUserRouteHandler)
  .openapi(getUsersIdUserRoute, getUsersIdUserRouteHandler)
  .openapi(getUsersIdUserAccountTypesRoute, getUsersIdUserAccountTypesRouteHandler)
  .openapi(
    getUsersIdUserAccountTypesIdAccountTypeRoute,
    getUsersIdUserAccountTypesIdAccountTypeRouteHandler,
  )
  .openapi(
    getUsersIdUserAccountsIdAccountCategoriesRoute,
    getUsersIdUserAccountsIdAccountCategoriesRouteHandler,
  )
  .openapi(
    getUsersIdUserAccountsIdAccountTransactionsclustersRoute,
    getUsersIdUserAccountsIdAccountTransactionsclustersRouteHandler,
  )
  .openapi(
    postUsersIdUserAccountsIdAccountTransactionsclustersRoute,
    postUsersIdUserAccountsIdAccountTransactionsclustersRouteHandler,
  )
  .openapi(
    deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(
    putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(getUsersIdUserAlertsRoute, getUsersIdUserAlertsRouteHandler)
  .openapi(getUsersIdUserCategoriesRoute, getUsersIdUserCategoriesRouteHandler)
  .openapi(getUsersIdUserCategoriesFullRoute, getUsersIdUserCategoriesFullRouteHandler)
  .openapi(postUsersIdUserCategoriesFullRoute, postUsersIdUserCategoriesFullRouteHandler)
  .openapi(
    deleteUsersIdUserCategoriesFullIdFullRoute,
    deleteUsersIdUserCategoriesFullIdFullRouteHandler,
  )
  .openapi(putUsersIdUserCategoriesFullIdFullRoute, putUsersIdUserCategoriesFullIdFullRouteHandler)
  .openapi(deleteUsersIdUserConfigRoute, deleteUsersIdUserConfigRouteHandler)
  .openapi(getUsersIdUserConfigRoute, getUsersIdUserConfigRouteHandler)
  .openapi(postUsersIdUserConfigRoute, postUsersIdUserConfigRouteHandler)
  .openapi(deleteUsersIdUserConnectionsRoute, deleteUsersIdUserConnectionsRouteHandler)
  .openapi(getUsersIdUserConnectionsRoute, getUsersIdUserConnectionsRouteHandler)
  .openapi(postUsersIdUserConnectionsRoute, postUsersIdUserConnectionsRouteHandler)
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionRoute,
    deleteUsersIdUserConnectionsIdConnectionRouteHandler,
  )
  .openapi(
    postUsersIdUserConnectionsIdConnectionRoute,
    postUsersIdUserConnectionsIdConnectionRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionRoute,
    putUsersIdUserConnectionsIdConnectionRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsRoute,
    deleteUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsRoute,
    getUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  )
  .openapi(
    postUsersIdUserConnectionsIdConnectionAccountsRoute,
    postUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsRoute,
    putUsersIdUserConnectionsIdConnectionAccountsRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute,
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountRoute,
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategoriesRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRouteHandler,
  )
  .openapi(
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRoute,
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRoute,
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRoute,
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRouteHandler,
  )
  .openapi(
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRoute,
    postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRoute,
    putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionInformationsRoute,
    getUsersIdUserConnectionsIdConnectionInformationsRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionLogsRoute,
    getUsersIdUserConnectionsIdConnectionLogsRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionSourcesRoute,
    getUsersIdUserConnectionsIdConnectionSourcesRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
    deleteUsersIdUserConnectionsIdConnectionSourcesIdSourceRouteHandler,
  )
  .openapi(
    postUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
    postUsersIdUserConnectionsIdConnectionSourcesIdSourceRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionSourcesIdSourceRoute,
    putUsersIdUserConnectionsIdConnectionSourcesIdSourceRouteHandler,
  )
  .openapi(
    getUsersIdUserConnectionsIdConnectionTransactionsclustersRoute,
    getUsersIdUserConnectionsIdConnectionTransactionsclustersRouteHandler,
  )
  .openapi(
    postUsersIdUserConnectionsIdConnectionTransactionsclustersRoute,
    postUsersIdUserConnectionsIdConnectionTransactionsclustersRouteHandler,
  )
  .openapi(
    deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
    deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(
    putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRoute,
    putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(getUsersIdUserForecastRoute, getUsersIdUserForecastRouteHandler)
  .openapi(getUsersIdUserLogsRoute, getUsersIdUserLogsRouteHandler)
  .openapi(getUsersIdUserProfilesRoute, getUsersIdUserProfilesRouteHandler)
  .openapi(getUsersIdUserProfilesMainRoute, getUsersIdUserProfilesMainRouteHandler)
  .openapi(getUsersIdUserProfilesIdProfileRoute, getUsersIdUserProfilesIdProfileRouteHandler)
  .openapi(postUsersIdUserTokenRoute, postUsersIdUserTokenRouteHandler)
  .openapi(getUsersIdUserTransactionsclustersRoute, getUsersIdUserTransactionsclustersRouteHandler)
  .openapi(
    postUsersIdUserTransactionsclustersRoute,
    postUsersIdUserTransactionsclustersRouteHandler,
  )
  .openapi(
    deleteUsersIdUserTransactionsclustersIdTransactionsclusterRoute,
    deleteUsersIdUserTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(
    putUsersIdUserTransactionsclustersIdTransactionsclusterRoute,
    putUsersIdUserTransactionsclustersIdTransactionsclusterRouteHandler,
  )
  .openapi(getWebauthRoute, getWebauthRouteHandler)
  .openapi(deleteWebhooksRoute, deleteWebhooksRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(deleteWebhooksAuthRoute, deleteWebhooksAuthRouteHandler)
  .openapi(getWebhooksAuthRoute, getWebhooksAuthRouteHandler)
  .openapi(postWebhooksAuthRoute, postWebhooksAuthRouteHandler)
  .openapi(deleteWebhooksAuthIdAuthRoute, deleteWebhooksAuthIdAuthRouteHandler)
  .openapi(postWebhooksAuthIdAuthRoute, postWebhooksAuthIdAuthRouteHandler)
  .openapi(putWebhooksAuthIdAuthRoute, putWebhooksAuthIdAuthRouteHandler)
  .openapi(deleteWebhooksIdWebhookRoute, deleteWebhooksIdWebhookRouteHandler)
  .openapi(postWebhooksIdWebhookRoute, postWebhooksIdWebhookRouteHandler)
  .openapi(putWebhooksIdWebhookRoute, putWebhooksIdWebhookRouteHandler)
  .openapi(deleteWebhooksIdWebhookAddToDataRoute, deleteWebhooksIdWebhookAddToDataRouteHandler)
  .openapi(getWebhooksIdWebhookAddToDataRoute, getWebhooksIdWebhookAddToDataRouteHandler)
  .openapi(postWebhooksIdWebhookAddToDataRoute, postWebhooksIdWebhookAddToDataRouteHandler)
  .openapi(
    deleteWebhooksIdWebhookAddToDataKeyRoute,
    deleteWebhooksIdWebhookAddToDataKeyRouteHandler,
  )
  .openapi(getWebhooksIdWebhookAddToDataKeyRoute, getWebhooksIdWebhookAddToDataKeyRouteHandler)
  .openapi(postWebhooksIdWebhookAddToDataKeyRoute, postWebhooksIdWebhookAddToDataKeyRouteHandler)
  .openapi(getWebhooksIdWebhookLogsRoute, getWebhooksIdWebhookLogsRouteHandler)

export default app
