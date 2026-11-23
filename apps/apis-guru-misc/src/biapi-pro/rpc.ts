import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountTypes(
  args: InferRequestType<typeof client.account_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_types.$get(args, options))
}

export async function getAccountTypesIdAccountType(
  args: InferRequestType<(typeof client.account_types)[':id_account_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account_types[':id_account_type'].$get(args, options))
}

export async function postAdminJwt(
  args: InferRequestType<typeof client.admin.jwt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.jwt.$post(args, options))
}

export async function postAuthInit(
  args: InferRequestType<typeof client.auth.init.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.init.$post(args, options))
}

export async function postAuthJwt(
  args: InferRequestType<typeof client.auth.jwt.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.jwt.$post(args, options))
}

export async function postAuthRenew(
  args: InferRequestType<typeof client.auth.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.renew.$post(args, options))
}

export async function postAuthToken(
  args: InferRequestType<typeof client.auth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.$post(args, options))
}

export async function deleteAuthToken(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.$delete(undefined, options))
}

export async function postAuthTokenAccess(
  args: InferRequestType<typeof client.auth.token.access.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.access.$post(args, options))
}

export async function getAuthTokenCode(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.token.code.$get(undefined, options))
}

export async function getBanks(
  args: InferRequestType<typeof client.banks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks.$get(args, options))
}

export async function postBanksCategories(
  args: InferRequestType<typeof client.banks.categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks.categories.$post(args, options))
}

export async function postBanksCategoriesIdCategory(
  args: InferRequestType<(typeof client.banks.categories)[':id_category']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks.categories[':id_category'].$post(args, options))
}

export async function deleteBanksCategoriesIdCategory(
  args: InferRequestType<(typeof client.banks.categories)[':id_category']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks.categories[':id_category'].$delete(args, options))
}

export async function getBanksIdBank(
  args: InferRequestType<(typeof client.banks)[':id_bank']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks[':id_bank'].$get(args, options))
}

export async function getBanksIdConnectorConnections(
  args: InferRequestType<(typeof client.banks)[':id_connector']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks[':id_connector'].connections.$get(args, options))
}

export async function getBanksIdConnectorLogos(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks[':id_connector'].logos.$get(args, options))
}

export async function getBanksIdConnectorLogosMain(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks[':id_connector'].logos.main.$get(args, options))
}

export async function getBanksIdConnectorLogosThumbnail(
  args: InferRequestType<(typeof client.banks)[':id_connector']['logos']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks[':id_connector'].logos.thumbnail.$get(args, options))
}

export async function getBanksIdConnectorSources(
  args: InferRequestType<(typeof client.banks)[':id_connector']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.banks[':id_connector'].sources.$get(args, options))
}

export async function getBanksIdConnectorSourcesIdConnectorSourceFields(
  args: InferRequestType<
    (typeof client.banks)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.banks[':id_connector'].sources[':id_connector_source'].fields.$get(args, options),
  )
}

export async function getBanksIdConnectorSourcesIdSource(
  args: InferRequestType<(typeof client.banks)[':id_connector']['sources'][':id_source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.banks[':id_connector'].sources[':id_source'].$get(args, options),
  )
}

export async function getCategories(
  args: InferRequestType<typeof client.categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.$get(args, options))
}

export async function postCategoriesKeywords(
  args: InferRequestType<typeof client.categories.keywords.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.keywords.$post(args, options))
}

export async function deleteCategoriesKeywordsIdKeyword(
  args: InferRequestType<(typeof client.categories.keywords)[':id_keyword']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categories.keywords[':id_keyword'].$delete(args, options))
}

export async function postCategorize(
  args: InferRequestType<typeof client.categorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categorize.$post(args, options))
}

export async function getCertificateType(
  args: InferRequestType<(typeof client.certificate)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificate[':type'].$get(args, options))
}

export async function getClients(
  args: InferRequestType<typeof client.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.$get(args, options))
}

export async function postClients(
  args: InferRequestType<typeof client.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients.$post(args, options))
}

export async function getClientsIdClient(
  args: InferRequestType<(typeof client.clients)[':id_client']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id_client'].$get(args, options))
}

export async function putClientsIdClient(
  args: InferRequestType<(typeof client.clients)[':id_client']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id_client'].$put(args, options))
}

export async function deleteClientsIdClient(
  args: InferRequestType<(typeof client.clients)[':id_client']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id_client'].$delete(args, options))
}

export async function postClientsIdClientLogo(
  args: InferRequestType<(typeof client.clients)[':id_client']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id_client'].logo.$post(args, options))
}

export async function deleteClientsIdClientLogo(
  args: InferRequestType<(typeof client.clients)[':id_client']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clients[':id_client'].logo.$delete(args, options))
}

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function postConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$post(undefined, options))
}

export async function getConfigLogs(
  args: InferRequestType<typeof client.config.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.logs.$get(args, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function getConnectionsIdConnectionLogs(
  args: InferRequestType<(typeof client.connections)[':id_connection']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id_connection'].logs.$get(args, options))
}

export async function getConnectionsIdConnectionSources(
  args: InferRequestType<(typeof client.connections)[':id_connection']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':id_connection'].sources.$get(args, options))
}

export async function putConnectionsIdConnectionSourcesIdSource(
  args: InferRequestType<
    (typeof client.connections)[':id_connection']['sources'][':id_source']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':id_connection'].sources[':id_source'].$put(args, options),
  )
}

export async function postConnectionsIdConnectionSourcesIdSource(
  args: InferRequestType<
    (typeof client.connections)[':id_connection']['sources'][':id_source']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':id_connection'].sources[':id_source'].$post(args, options),
  )
}

export async function deleteConnectionsIdConnectionSourcesIdSource(
  args: InferRequestType<
    (typeof client.connections)[':id_connection']['sources'][':id_source']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':id_connection'].sources[':id_source'].$delete(args, options),
  )
}

export async function getConnectors(
  args: InferRequestType<typeof client.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors.$get(args, options))
}

export async function putConnectors(
  args: InferRequestType<typeof client.connectors.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors.$put(args, options))
}

export async function postConnectors(
  args: InferRequestType<typeof client.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors.$post(args, options))
}

export async function getConnectorsIdConnector(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].$get(args, options))
}

export async function putConnectorsIdConnector(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].$put(args, options))
}

export async function getConnectorsIdConnectorLogos(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].logos.$get(args, options))
}

export async function putConnectorsIdConnectorLogos(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].logos.$put(args, options))
}

export async function postConnectorsIdConnectorLogos(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].logos.$post(args, options))
}

export async function getConnectorsIdConnectorLogosMain(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].logos.main.$get(args, options))
}

export async function getConnectorsIdConnectorLogosThumbnail(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].logos.thumbnail.$get(args, options))
}

export async function putConnectorsIdConnectorLogosIdLogo(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['logos'][':id_logo']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connectors[':id_connector'].logos[':id_logo'].$put(args, options),
  )
}

export async function deleteConnectorsIdConnectorLogosIdLogo(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['logos'][':id_logo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connectors[':id_connector'].logos[':id_logo'].$delete(args, options),
  )
}

export async function getConnectorsIdConnectorSources(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].sources.$get(args, options))
}

export async function putConnectorsIdConnectorSources(
  args: InferRequestType<(typeof client.connectors)[':id_connector']['sources']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connectors[':id_connector'].sources.$put(args, options))
}

export async function getConnectorsIdConnectorSourcesIdConnectorSourceFields(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connectors[':id_connector'].sources[':id_connector_source'].fields.$get(args, options),
  )
}

export async function getConnectorsIdConnectorSourcesIdSource(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connectors[':id_connector'].sources[':id_source'].$get(args, options),
  )
}

export async function putConnectorsIdConnectorSourcesIdSource(
  args: InferRequestType<
    (typeof client.connectors)[':id_connector']['sources'][':id_source']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connectors[':id_connector'].sources[':id_source'].$put(args, options),
  )
}

export async function getIncidents(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.$get(args, options))
}

export async function getInvoicing(
  args: InferRequestType<typeof client.invoicing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoicing.$get(args, options))
}

export async function getLogs(
  args: InferRequestType<typeof client.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs.$get(args, options))
}

export async function getMonitoring(
  args: InferRequestType<typeof client.monitoring.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitoring.$get(args, options))
}

export async function getProviders(
  args: InferRequestType<typeof client.providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.$get(args, options))
}

export async function getProvidersIdConnectorConnections(
  args: InferRequestType<(typeof client.providers)[':id_connector']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':id_connector'].connections.$get(args, options))
}

export async function getProvidersIdConnectorLogos(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':id_connector'].logos.$get(args, options))
}

export async function getProvidersIdConnectorLogosMain(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':id_connector'].logos.main.$get(args, options))
}

export async function getProvidersIdConnectorLogosThumbnail(
  args: InferRequestType<(typeof client.providers)[':id_connector']['logos']['thumbnail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':id_connector'].logos.thumbnail.$get(args, options))
}

export async function getProvidersIdConnectorSources(
  args: InferRequestType<(typeof client.providers)[':id_connector']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':id_connector'].sources.$get(args, options))
}

export async function getProvidersIdConnectorSourcesIdConnectorSourceFields(
  args: InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_connector_source']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':id_connector'].sources[':id_connector_source'].fields.$get(args, options),
  )
}

export async function getProvidersIdConnectorSourcesIdSource(
  args: InferRequestType<
    (typeof client.providers)[':id_connector']['sources'][':id_source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':id_connector'].sources[':id_source'].$get(args, options),
  )
}

export async function getProvidersIdProvider(
  args: InferRequestType<(typeof client.providers)[':id_provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':id_provider'].$get(args, options))
}

export async function getPsd2Registrations(
  args: InferRequestType<(typeof client)['psd2-registrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['psd2-registrations'].$get(args, options))
}

export async function getPsd2RegistrationsIdPsd2Registration(
  args: InferRequestType<(typeof client)['psd2-registrations'][':id_psd2-registration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['psd2-registrations'][':id_psd2-registration'].$get(args, options),
  )
}

export async function getPsd2RegistrationsIdPsd2registrationLogs(
  args: InferRequestType<
    (typeof client)['psd2-registrations'][':id_psd2registration']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['psd2-registrations'][':id_psd2registration'].logs.$get(args, options),
  )
}

export async function getPublickey(options?: ClientRequestOptions) {
  return await parseResponse(client.publickey.$get(undefined, options))
}

export async function postTestSync(options?: ClientRequestOptions) {
  return await parseResponse(client.test.sync.$post(undefined, options))
}

export async function postTestWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.test.webhooks.$post(undefined, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function getUsersIdUser(
  args: InferRequestType<(typeof client.users)[':id_user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].$get(args, options))
}

export async function deleteUsersIdUser(
  args: InferRequestType<(typeof client.users)[':id_user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].$delete(args, options))
}

export async function getUsersIdUserAccountTypes(
  args: InferRequestType<(typeof client.users)[':id_user']['account_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].account_types.$get(args, options))
}

export async function getUsersIdUserAccountTypesIdAccountType(
  args: InferRequestType<
    (typeof client.users)[':id_user']['account_types'][':id_account_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].account_types[':id_account_type'].$get(args, options),
  )
}

export async function getUsersIdUserAccountsIdAccountCategories(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].accounts[':id_account'].categories.$get(args, options),
  )
}

export async function getUsersIdUserAccountsIdAccountTransactionsclusters(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].accounts[':id_account'].transactionsclusters.$get(args, options),
  )
}

export async function postUsersIdUserAccountsIdAccountTransactionsclusters(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].accounts[':id_account'].transactionsclusters.$post(args, options),
  )
}

export async function putUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].accounts[':id_account'].transactionsclusters[
      ':id_transactionscluster'
    ].$put(args, options),
  )
}

export async function deleteUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].accounts[':id_account'].transactionsclusters[
      ':id_transactionscluster'
    ].$delete(args, options),
  )
}

export async function getUsersIdUserAlerts(
  args: InferRequestType<(typeof client.users)[':id_user']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].alerts.$get(args, options))
}

export async function getUsersIdUserCategories(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].categories.$get(args, options))
}

export async function getUsersIdUserCategoriesFull(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].categories.full.$get(args, options))
}

export async function postUsersIdUserCategoriesFull(
  args: InferRequestType<(typeof client.users)[':id_user']['categories']['full']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].categories.full.$post(args, options))
}

export async function putUsersIdUserCategoriesFullIdFull(
  args: InferRequestType<
    (typeof client.users)[':id_user']['categories']['full'][':id_full']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].categories.full[':id_full'].$put(args, options),
  )
}

export async function deleteUsersIdUserCategoriesFullIdFull(
  args: InferRequestType<
    (typeof client.users)[':id_user']['categories']['full'][':id_full']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].categories.full[':id_full'].$delete(args, options),
  )
}

export async function getUsersIdUserConfig(
  args: InferRequestType<(typeof client.users)[':id_user']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].config.$get(args, options))
}

export async function postUsersIdUserConfig(
  args: InferRequestType<(typeof client.users)[':id_user']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].config.$post(args, options))
}

export async function deleteUsersIdUserConfig(
  args: InferRequestType<(typeof client.users)[':id_user']['config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].config.$delete(args, options))
}

export async function getUsersIdUserConnections(
  args: InferRequestType<(typeof client.users)[':id_user']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].connections.$get(args, options))
}

export async function postUsersIdUserConnections(
  args: InferRequestType<(typeof client.users)[':id_user']['connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].connections.$post(args, options))
}

export async function deleteUsersIdUserConnections(
  args: InferRequestType<(typeof client.users)[':id_user']['connections']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].connections.$delete(args, options))
}

export async function putUsersIdUserConnectionsIdConnection(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].$put(args, options),
  )
}

export async function postUsersIdUserConnectionsIdConnection(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].$post(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnection(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].$delete(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccounts(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts.$get(args, options),
  )
}

export async function putUsersIdUserConnectionsIdConnectionAccounts(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts.$put(args, options),
  )
}

export async function postUsersIdUserConnectionsIdConnectionAccounts(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts.$post(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionAccounts(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts.$delete(args, options),
  )
}

export async function putUsersIdUserConnectionsIdConnectionAccountsIdAccount(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].$put(
      args,
      options,
    ),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionAccountsIdAccount(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].$delete(
      args,
      options,
    ),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountCategories(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].categories.$get(
      args,
      options,
    ),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountDelta(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['delta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].delta.$get(
      args,
      options,
    ),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].sources.$get(
      args,
      options,
    ),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactions.$get(args, options),
  )
}

export async function postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactions.$post(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactions.$delete(args, options),
  )
}

export async function putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransaction(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
      ':id_transaction'
    ].$put(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
      ':id_transaction'
    ].informations.$get(args, options),
  )
}

export async function putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
      ':id_transaction'
    ].informations.$put(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
      ':id_transaction'
    ].informations.$delete(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
      ':id_transaction'
    ].informations[':id_information'].$get(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformation(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactions'][':id_transaction']['informations'][':id_information']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[':id_account'].transactions[
      ':id_transaction'
    ].informations[':id_information'].$delete(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactionsclusters.$get(args, options),
  )
}

export async function postUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactionsclusters.$post(args, options),
  )
}

export async function putUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactionsclusters[':id_transactionscluster'].$put(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['accounts'][':id_account']['transactionsclusters'][':id_transactionscluster']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].accounts[
      ':id_account'
    ].transactionsclusters[':id_transactionscluster'].$delete(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionInformations(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['informations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].informations.$get(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionLogs(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].logs.$get(args, options),
  )
}

export async function getUsersIdUserConnectionsIdConnectionSources(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].sources.$get(args, options),
  )
}

export async function putUsersIdUserConnectionsIdConnectionSourcesIdSource(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$put(
      args,
      options,
    ),
  )
}

export async function postUsersIdUserConnectionsIdConnectionSourcesIdSource(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$post(
      args,
      options,
    ),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionSourcesIdSource(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['sources'][':id_source']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].sources[':id_source'].$delete(
      args,
      options,
    ),
  )
}

export async function getUsersIdUserConnectionsIdConnectionTransactionsclusters(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].transactionsclusters.$get(args, options),
  )
}

export async function postUsersIdUserConnectionsIdConnectionTransactionsclusters(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].transactionsclusters.$post(
      args,
      options,
    ),
  )
}

export async function putUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].transactionsclusters[
      ':id_transactionscluster'
    ].$put(args, options),
  )
}

export async function deleteUsersIdUserConnectionsIdConnectionTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['connections'][':id_connection']['transactionsclusters'][':id_transactionscluster']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].connections[':id_connection'].transactionsclusters[
      ':id_transactionscluster'
    ].$delete(args, options),
  )
}

export async function getUsersIdUserForecast(
  args: InferRequestType<(typeof client.users)[':id_user']['forecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].forecast.$get(args, options))
}

export async function getUsersIdUserLogs(
  args: InferRequestType<(typeof client.users)[':id_user']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].logs.$get(args, options))
}

export async function getUsersIdUserProfiles(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].profiles.$get(args, options))
}

export async function getUsersIdUserProfilesMain(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].profiles.main.$get(args, options))
}

export async function getUsersIdUserProfilesIdProfile(
  args: InferRequestType<(typeof client.users)[':id_user']['profiles'][':id_profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].profiles[':id_profile'].$get(args, options))
}

export async function postUsersIdUserToken(
  args: InferRequestType<(typeof client.users)[':id_user']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].token.$post(args, options))
}

export async function getUsersIdUserTransactionsclusters(
  args: InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].transactionsclusters.$get(args, options))
}

export async function postUsersIdUserTransactionsclusters(
  args: InferRequestType<(typeof client.users)[':id_user']['transactionsclusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id_user'].transactionsclusters.$post(args, options))
}

export async function putUsersIdUserTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].transactionsclusters[':id_transactionscluster'].$put(args, options),
  )
}

export async function deleteUsersIdUserTransactionsclustersIdTransactionscluster(
  args: InferRequestType<
    (typeof client.users)[':id_user']['transactionsclusters'][':id_transactionscluster']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id_user'].transactionsclusters[':id_transactionscluster'].$delete(args, options),
  )
}

export async function getWebauth(
  args: InferRequestType<typeof client.webauth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webauth.$get(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function deleteWebhooks(
  args: InferRequestType<typeof client.webhooks.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$delete(args, options))
}

export async function getWebhooksAuth(
  args: InferRequestType<typeof client.webhooks.auth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.auth.$get(args, options))
}

export async function postWebhooksAuth(
  args: InferRequestType<typeof client.webhooks.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.auth.$post(args, options))
}

export async function deleteWebhooksAuth(
  args: InferRequestType<typeof client.webhooks.auth.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.auth.$delete(args, options))
}

export async function putWebhooksAuthIdAuth(
  args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.auth[':id_auth'].$put(args, options))
}

export async function postWebhooksAuthIdAuth(
  args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.auth[':id_auth'].$post(args, options))
}

export async function deleteWebhooksAuthIdAuth(
  args: InferRequestType<(typeof client.webhooks.auth)[':id_auth']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.auth[':id_auth'].$delete(args, options))
}

export async function putWebhooksIdWebhook(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].$put(args, options))
}

export async function postWebhooksIdWebhook(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].$post(args, options))
}

export async function deleteWebhooksIdWebhook(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].$delete(args, options))
}

export async function getWebhooksIdWebhookAddToData(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].add_to_data.$get(args, options))
}

export async function postWebhooksIdWebhookAddToData(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].add_to_data.$post(args, options))
}

export async function deleteWebhooksIdWebhookAddToData(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].add_to_data.$delete(args, options))
}

export async function getWebhooksIdWebhookAddToDataKey(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].add_to_data[':key'].$get(args, options))
}

export async function postWebhooksIdWebhookAddToDataKey(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':id_webhook'].add_to_data[':key'].$post(args, options),
  )
}

export async function deleteWebhooksIdWebhookAddToDataKey(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['add_to_data'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':id_webhook'].add_to_data[':key'].$delete(args, options),
  )
}

export async function getWebhooksIdWebhookLogs(
  args: InferRequestType<(typeof client.webhooks)[':id_webhook']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id_webhook'].logs.$get(args, options))
}
