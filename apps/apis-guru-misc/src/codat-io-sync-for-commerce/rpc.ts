import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getClientsClientIdConfigUiAccountsPlatformPlatformKey(
  args: InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clients[':clientId'].config.ui.accounts.platform[':platformKey'].$get(args, options),
  )
}

export async function postCompaniesCompanyIdSyncCommerceLatest(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].sync.commerce.latest.$post(args, options),
  )
}

export async function getConfigCompaniesCompanyIdSyncCommerce(
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.config.companies[':companyId'].sync.commerce.$get(args, options),
  )
}

export async function postConfigCompaniesCompanyIdSyncCommerce(
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.config.companies[':companyId'].sync.commerce.$post(args, options),
  )
}

export async function getConfigIntegrations(
  args: InferRequestType<typeof client.config.integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.integrations.$get(args, options))
}

export async function getConfigIntegrationsPlatformKeyBranding(
  args: InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.config.integrations[':platformKey'].branding.$get(args, options),
  )
}

export async function getConfigSyncCommerceCommerceKeyAccountingKeyStart(
  args: InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.config.sync.commerce[':commerceKey'][':accountingKey'].start.$get(args, options),
  )
}

export async function getMetaCompanies(
  args: InferRequestType<typeof client.meta.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meta.companies.$get(args, options))
}

export async function postMetaCompaniesSync(
  args: InferRequestType<typeof client.meta.companies.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meta.companies.sync.$post(args, options))
}

export async function getMetaCompaniesCompanyIdConnections(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meta.companies[':companyId'].connections.$get(args, options))
}

export async function postMetaCompaniesCompanyIdConnections(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meta.companies[':companyId'].connections.$post(args, options))
}

export async function patchMetaCompaniesCompanyIdConnectionsConnectionId(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta.companies[':companyId'].connections[':connectionId'].$patch(args, options),
  )
}

export async function postMetaCompaniesCompanyIdSyncCommerceHistoric(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta.companies[':companyId'].sync.commerce.historic.$post(args, options),
  )
}

export async function getMetaCompaniesCompanyIdSyncCommerceStatus(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.meta.companies[':companyId'].sync.commerce.status.$get(args, options),
  )
}

export async function patchSyncCommerceConfigUiAccountsPlatformCommerceKey(
  args: InferRequestType<
    (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sync.commerce.config.ui.accounts.platform[':commerceKey'].$patch(args, options),
  )
}

export async function getSyncCommerceConfigUiText(options?: ClientRequestOptions) {
  return await parseResponse(client.sync.commerce.config.ui.text.$get(undefined, options))
}

export async function patchSyncCommerceConfigUiText(
  args: InferRequestType<typeof client.sync.commerce.config.ui.text.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync.commerce.config.ui.text.$patch(args, options))
}
