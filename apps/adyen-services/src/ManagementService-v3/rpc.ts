import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCompanies(
  args: InferRequestType<typeof client.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.$get(args, options))
}

export async function getCompaniesCompanyId(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].$get(args, options))
}

export async function getCompaniesCompanyIdAndroidApps(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].androidApps.$get(args, options))
}

export async function postCompaniesCompanyIdAndroidApps(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].androidApps.$post(args, options))
}

export async function getCompaniesCompanyIdAndroidAppsId(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].androidApps[':id'].$get(args, options))
}

export async function patchCompaniesCompanyIdAndroidAppsId(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].androidApps[':id'].$patch(args, options),
  )
}

export async function getCompaniesCompanyIdAndroidCertificates(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].androidCertificates.$get(args, options))
}

export async function postCompaniesCompanyIdAndroidCertificates(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].androidCertificates.$post(args, options),
  )
}

export async function getCompaniesCompanyIdApiCredentials(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].apiCredentials.$get(args, options))
}

export async function postCompaniesCompanyIdApiCredentials(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].apiCredentials.$post(args, options))
}

export async function getCompaniesCompanyIdApiCredentialsApiCredentialId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].$get(args, options),
  )
}

export async function patchCompaniesCompanyIdApiCredentialsApiCredentialId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].$patch(args, options),
  )
}

export async function getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$post(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
      ':originId'
    ].$get(args, options),
  )
}

export async function deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
      ':originId'
    ].$delete(args, options),
  )
}

export async function postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].generateApiKey.$post(
      args,
      options,
    ),
  )
}

export async function postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].apiCredentials[':apiCredentialId'].generateClientKey.$post(
      args,
      options,
    ),
  )
}

export async function getCompaniesCompanyIdBillingEntities(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].billingEntities.$get(args, options))
}

export async function getCompaniesCompanyIdMerchants(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].merchants.$get(args, options))
}

export async function getCompaniesCompanyIdShippingLocations(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].shippingLocations.$get(args, options))
}

export async function postCompaniesCompanyIdShippingLocations(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].shippingLocations.$post(args, options))
}

export async function getCompaniesCompanyIdTerminalActions(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalActions.$get(args, options))
}

export async function getCompaniesCompanyIdTerminalActionsActionId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalActions[':actionId'].$get(args, options),
  )
}

export async function getCompaniesCompanyIdTerminalLogos(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalLogos.$get(args, options))
}

export async function patchCompaniesCompanyIdTerminalLogos(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalLogos.$patch(args, options))
}

export async function getCompaniesCompanyIdTerminalModels(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalModels.$get(args, options))
}

export async function getCompaniesCompanyIdTerminalOrders(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalOrders.$get(args, options))
}

export async function postCompaniesCompanyIdTerminalOrders(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalOrders.$post(args, options))
}

export async function getCompaniesCompanyIdTerminalOrdersOrderId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalOrders[':orderId'].$get(args, options),
  )
}

export async function patchCompaniesCompanyIdTerminalOrdersOrderId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalOrders[':orderId'].$patch(args, options),
  )
}

export async function postCompaniesCompanyIdTerminalOrdersOrderIdCancel(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalOrders[':orderId'].cancel.$post(args, options),
  )
}

export async function getCompaniesCompanyIdTerminalProducts(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalProducts.$get(args, options))
}

export async function getCompaniesCompanyIdTerminalSettings(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalSettings.$get(args, options))
}

export async function patchCompaniesCompanyIdTerminalSettings(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalSettings.$patch(args, options))
}

export async function getCompaniesCompanyIdUsers(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].users.$get(args, options))
}

export async function postCompaniesCompanyIdUsers(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].users.$post(args, options))
}

export async function getCompaniesCompanyIdUsersUserId(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].users[':userId'].$get(args, options))
}

export async function patchCompaniesCompanyIdUsersUserId(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].users[':userId'].$patch(args, options))
}

export async function getCompaniesCompanyIdWebhooks(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].webhooks.$get(args, options))
}

export async function postCompaniesCompanyIdWebhooks(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].webhooks.$post(args, options))
}

export async function getCompaniesCompanyIdWebhooksWebhookId(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].webhooks[':webhookId'].$get(args, options),
  )
}

export async function deleteCompaniesCompanyIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].webhooks[':webhookId'].$delete(args, options),
  )
}

export async function patchCompaniesCompanyIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].webhooks[':webhookId'].$patch(args, options),
  )
}

export async function postCompaniesCompanyIdWebhooksWebhookIdGenerateHmac(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].webhooks[':webhookId'].generateHmac.$post(args, options),
  )
}

export async function postCompaniesCompanyIdWebhooksWebhookIdTest(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].webhooks[':webhookId'].test.$post(args, options),
  )
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getMeAllowedOrigins(options?: ClientRequestOptions) {
  return await parseResponse(client.me.allowedOrigins.$get(undefined, options))
}

export async function postMeAllowedOrigins(
  args: InferRequestType<typeof client.me.allowedOrigins.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.allowedOrigins.$post(args, options))
}

export async function getMeAllowedOriginsOriginId(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.allowedOrigins[':originId'].$get(args, options))
}

export async function deleteMeAllowedOriginsOriginId(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.allowedOrigins[':originId'].$delete(args, options))
}

export async function postMeGenerateClientKey(options?: ClientRequestOptions) {
  return await parseResponse(client.me.generateClientKey.$post(undefined, options))
}

export async function getMerchants(
  args: InferRequestType<typeof client.merchants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants.$get(args, options))
}

export async function postMerchants(
  args: InferRequestType<typeof client.merchants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants.$post(args, options))
}

export async function getMerchantsMerchantId(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].$get(args, options))
}

export async function postMerchantsMerchantIdActivate(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].activate.$post(args, options))
}

export async function getMerchantsMerchantIdApiCredentials(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].apiCredentials.$get(args, options))
}

export async function postMerchantsMerchantIdApiCredentials(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].apiCredentials.$post(args, options))
}

export async function getMerchantsMerchantIdApiCredentialsApiCredentialId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$get(args, options),
  )
}

export async function patchMerchantsMerchantIdApiCredentialsApiCredentialId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$patch(args, options),
  )
}

export async function getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
      args,
      options,
    ),
  )
}

export async function postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$post(
      args,
      options,
    ),
  )
}

export async function getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
      ':originId'
    ].$get(args, options),
  )
}

export async function deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
      ':originId'
    ].$delete(args, options),
  )
}

export async function postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].generateApiKey.$post(
      args,
      options,
    ),
  )
}

export async function postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].generateClientKey.$post(
      args,
      options,
    ),
  )
}

export async function getMerchantsMerchantIdBillingEntities(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].billingEntities.$get(args, options))
}

export async function getMerchantsMerchantIdPaymentMethodSettings(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentMethodSettings.$get(args, options),
  )
}

export async function postMerchantsMerchantIdPaymentMethodSettings(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentMethodSettings.$post(args, options),
  )
}

export async function getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$get(args, options),
  )
}

export async function patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$patch(args, options),
  )
}

export async function postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentMethodSettings[
      ':paymentMethodId'
    ].addApplePayDomains.$post(args, options),
  )
}

export async function getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentMethodSettings[
      ':paymentMethodId'
    ].getApplePayDomains.$get(args, options),
  )
}

export async function getMerchantsMerchantIdPayoutSettings(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].payoutSettings.$get(args, options))
}

export async function postMerchantsMerchantIdPayoutSettings(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].payoutSettings.$post(args, options))
}

export async function getMerchantsMerchantIdPayoutSettingsPayoutSettingsId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$get(args, options),
  )
}

export async function deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$delete(args, options),
  )
}

export async function patchMerchantsMerchantIdPayoutSettingsPayoutSettingsId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$patch(args, options),
  )
}

export async function getMerchantsMerchantIdShippingLocations(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].shippingLocations.$get(args, options))
}

export async function postMerchantsMerchantIdShippingLocations(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].shippingLocations.$post(args, options))
}

export async function getMerchantsMerchantIdSplitConfigurations(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations.$get(args, options),
  )
}

export async function postMerchantsMerchantIdSplitConfigurations(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations.$post(args, options),
  )
}

export async function getMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$get(
      args,
      options,
    ),
  )
}

export async function postMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
      ':ruleId'
    ].$delete(args, options),
  )
}

export async function patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
      ':ruleId'
    ].$patch(args, options),
  )
}

export async function patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
      ':ruleId'
    ].splitLogic[':splitLogicId'].$patch(args, options),
  )
}

export async function getMerchantsMerchantIdStores(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].stores.$get(args, options))
}

export async function postMerchantsMerchantIdStores(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].stores.$post(args, options))
}

export async function getMerchantsMerchantIdStoresReferenceTerminalLogos(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':reference'].terminalLogos.$get(args, options),
  )
}

export async function patchMerchantsMerchantIdStoresReferenceTerminalLogos(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':reference'].terminalLogos.$patch(args, options),
  )
}

export async function getMerchantsMerchantIdStoresReferenceTerminalSettings(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':reference'].terminalSettings.$get(args, options),
  )
}

export async function patchMerchantsMerchantIdStoresReferenceTerminalSettings(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':reference'].terminalSettings.$patch(args, options),
  )
}

export async function getMerchantsMerchantIdStoresStoreId(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].stores[':storeId'].$get(args, options))
}

export async function patchMerchantsMerchantIdStoresStoreId(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':storeId'].$patch(args, options),
  )
}

export async function getMerchantsMerchantIdTerminalLogos(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalLogos.$get(args, options))
}

export async function patchMerchantsMerchantIdTerminalLogos(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalLogos.$patch(args, options))
}

export async function getMerchantsMerchantIdTerminalModels(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalModels.$get(args, options))
}

export async function getMerchantsMerchantIdTerminalOrders(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalOrders.$get(args, options))
}

export async function postMerchantsMerchantIdTerminalOrders(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalOrders.$post(args, options))
}

export async function getMerchantsMerchantIdTerminalOrdersOrderId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalOrders[':orderId'].$get(args, options),
  )
}

export async function patchMerchantsMerchantIdTerminalOrdersOrderId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalOrders[':orderId'].$patch(args, options),
  )
}

export async function postMerchantsMerchantIdTerminalOrdersOrderIdCancel(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalOrders[':orderId'].cancel.$post(args, options),
  )
}

export async function getMerchantsMerchantIdTerminalProducts(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalProducts.$get(args, options))
}

export async function getMerchantsMerchantIdTerminalSettings(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalSettings.$get(args, options))
}

export async function patchMerchantsMerchantIdTerminalSettings(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalSettings.$patch(args, options))
}

export async function getMerchantsMerchantIdUsers(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].users.$get(args, options))
}

export async function postMerchantsMerchantIdUsers(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].users.$post(args, options))
}

export async function getMerchantsMerchantIdUsersUserId(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].users[':userId'].$get(args, options))
}

export async function patchMerchantsMerchantIdUsersUserId(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].users[':userId'].$patch(args, options))
}

export async function getMerchantsMerchantIdWebhooks(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].webhooks.$get(args, options))
}

export async function postMerchantsMerchantIdWebhooks(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].webhooks.$post(args, options))
}

export async function getMerchantsMerchantIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].webhooks[':webhookId'].$get(args, options),
  )
}

export async function deleteMerchantsMerchantIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].webhooks[':webhookId'].$delete(args, options),
  )
}

export async function patchMerchantsMerchantIdWebhooksWebhookId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].webhooks[':webhookId'].$patch(args, options),
  )
}

export async function postMerchantsMerchantIdWebhooksWebhookIdGenerateHmac(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].webhooks[':webhookId'].generateHmac.$post(args, options),
  )
}

export async function postMerchantsMerchantIdWebhooksWebhookIdTest(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].webhooks[':webhookId'].test.$post(args, options),
  )
}

export async function getStores(
  args: InferRequestType<typeof client.stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores.$get(args, options))
}

export async function postStores(
  args: InferRequestType<typeof client.stores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores.$post(args, options))
}

export async function getStoresStoreId(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].$get(args, options))
}

export async function patchStoresStoreId(
  args: InferRequestType<(typeof client.stores)[':storeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].$patch(args, options))
}

export async function getStoresStoreIdTerminalLogos(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].terminalLogos.$get(args, options))
}

export async function patchStoresStoreIdTerminalLogos(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].terminalLogos.$patch(args, options))
}

export async function getStoresStoreIdTerminalSettings(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].terminalSettings.$get(args, options))
}

export async function patchStoresStoreIdTerminalSettings(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].terminalSettings.$patch(args, options))
}

export async function getTerminals(
  args: InferRequestType<typeof client.terminals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals.$get(args, options))
}

export async function postTerminalsScheduleActions(
  args: InferRequestType<typeof client.terminals.scheduleActions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals.scheduleActions.$post(args, options))
}

export async function postTerminalsTerminalIdReassign(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['reassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals[':terminalId'].reassign.$post(args, options))
}

export async function getTerminalsTerminalIdTerminalLogos(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals[':terminalId'].terminalLogos.$get(args, options))
}

export async function patchTerminalsTerminalIdTerminalLogos(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals[':terminalId'].terminalLogos.$patch(args, options))
}

export async function getTerminalsTerminalIdTerminalSettings(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals[':terminalId'].terminalSettings.$get(args, options))
}

export async function patchTerminalsTerminalIdTerminalSettings(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terminals[':terminalId'].terminalSettings.$patch(args, options))
}

export async function postCompaniesCompanyIdCampaignManagement(
  args: InferRequestType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].campaignManagement.$post(args, options))
}

export async function getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].campaignManagement.accountHolders[':accountHolderId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteCompaniesCompanyIdCampaignManagementDonationCampaignId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].campaignManagement[':donationCampaignId'].$delete(args, options),
  )
}

export async function patchCompaniesCompanyIdCampaignManagementDonationCampaignId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].campaignManagement[':donationCampaignId'].$patch(args, options),
  )
}

export async function postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].campaignManagement[':donationCampaignId'].status[
      ':status'
    ].$post(args, options),
  )
}

export async function getCompaniesCompanyIdClientCertificates(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].clientCertificates.$get(args, options))
}

export async function postCompaniesCompanyIdClientCertificates(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].clientCertificates.$post(args, options))
}

export async function postCompaniesCompanyIdNonprofits(
  args: InferRequestType<(typeof client.companies)[':companyId']['nonprofits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].nonprofits.$post(args, options))
}

export async function getCompaniesCompanyIdTerminalThemes(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalThemes.$get(args, options))
}

export async function postCompaniesCompanyIdTerminalThemes(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':companyId'].terminalThemes.$post(args, options))
}

export async function postCompaniesCompanyIdTerminalThemesUnapply(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes.unapply.$post(args, options),
  )
}

export async function getCompaniesCompanyIdTerminalThemesId(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].$get(args, options),
  )
}

export async function deleteCompaniesCompanyIdTerminalThemesId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].$delete(args, options),
  )
}

export async function patchCompaniesCompanyIdTerminalThemesId(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].$patch(args, options),
  )
}

export async function postCompaniesCompanyIdTerminalThemesIdApply(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].apply.$post(args, options),
  )
}

export async function postCompaniesCompanyIdTerminalThemesIdAssets(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].assets.$post(args, options),
  )
}

export async function deleteCompaniesCompanyIdTerminalThemesIdAssets(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].assets.$delete(args, options),
  )
}

export async function postCompaniesCompanyIdTerminalThemesIdAssetsReplace(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.companies[':companyId'].terminalThemes[':id'].assets.replace.$post(args, options),
  )
}

export async function getMerchantsMerchantIdTerminalThemes(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalThemes.$get(args, options))
}

export async function postMerchantsMerchantIdTerminalThemes(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].terminalThemes.$post(args, options))
}

export async function postMerchantsMerchantIdTerminalThemesUnapply(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes.unapply.$post(args, options),
  )
}

export async function getMerchantsMerchantIdTerminalThemesId(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].$get(args, options),
  )
}

export async function deleteMerchantsMerchantIdTerminalThemesId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].$delete(args, options),
  )
}

export async function patchMerchantsMerchantIdTerminalThemesId(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].$patch(args, options),
  )
}

export async function postMerchantsMerchantIdTerminalThemesIdApply(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].apply.$post(args, options),
  )
}

export async function postMerchantsMerchantIdTerminalThemesIdAssets(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].assets.$post(args, options),
  )
}

export async function deleteMerchantsMerchantIdTerminalThemesIdAssets(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].assets.$delete(args, options),
  )
}

export async function postMerchantsMerchantIdTerminalThemesIdAssetsReplace(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].terminalThemes[':id'].assets.replace.$post(args, options),
  )
}

export async function postStoresStoreIdTerminalThemesUnapply(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stores[':storeId'].terminalThemes.unapply.$post(args, options))
}

export async function postStoresStoreIdTerminalThemesIdApply(
  args: InferRequestType<
    (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stores[':storeId'].terminalThemes[':id'].apply.$post(args, options),
  )
}

export async function postTerminalsTerminalIdTerminalThemesUnapply(
  args: InferRequestType<
    (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.terminals[':terminalId'].terminalThemes.unapply.$post(args, options),
  )
}

export async function postTerminalsTerminalIdTerminalThemesIdApply(
  args: InferRequestType<
    (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.terminals[':terminalId'].terminalThemes[':id'].apply.$post(args, options),
  )
}
