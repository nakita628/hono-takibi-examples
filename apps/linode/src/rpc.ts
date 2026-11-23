import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiVersionAccount(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.$get(args, options))
}

export async function putApiVersionAccount(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.$put(args, options))
}

export async function getApiVersionAccountAgreements(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.agreements.$get(args, options))
}

export async function postApiVersionAccountAgreements(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['agreements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.agreements.$post(args, options))
}

export async function getApiVersionAccountAvailability(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.availability.$get(args, options))
}

export async function getApiVersionAccountAvailabilityRegionId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['availability'][':regionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.availability[':regionId'].$get(args, options),
  )
}

export async function getApiVersionAccountBetas(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.betas.$get(args, options))
}

export async function postApiVersionAccountBetas(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.betas.$post(args, options))
}

export async function getApiVersionAccountBetasBetaId(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['betas'][':betaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.betas[':betaId'].$get(args, options))
}

export async function postApiVersionAccountCancel(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.cancel.$post(args, options))
}

export async function getApiVersionAccountChildAccounts(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['child-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['child-accounts'].$get(args, options))
}

export async function getApiVersionAccountChildAccountsEuuId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['child-accounts'][':euuId'].$get(args, options),
  )
}

export async function postApiVersionAccountChildAccountsEuuIdToken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['child-accounts'][':euuId']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['child-accounts'][':euuId'].token.$post(args, options),
  )
}

export async function postApiVersionAccountCreditCard(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['credit-card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['credit-card'].$post(args, options))
}

export async function getApiVersionAccountEntityTransfers(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['entity-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['entity-transfers'].$get(args, options))
}

export async function postApiVersionAccountEntityTransfers(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['entity-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['entity-transfers'].$post(args, options))
}

export async function getApiVersionAccountEntityTransfersToken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['entity-transfers'][':token'].$get(args, options),
  )
}

export async function deleteApiVersionAccountEntityTransfersToken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['entity-transfers'][':token'].$delete(args, options),
  )
}

export async function postApiVersionAccountEntityTransfersTokenAccept(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['entity-transfers'][':token']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['entity-transfers'][':token'].accept.$post(args, options),
  )
}

export async function getApiVersionAccountEvents(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.events.$get(args, options))
}

export async function getApiVersionAccountEventsEventId(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['events'][':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.events[':eventId'].$get(args, options))
}

export async function postApiVersionAccountEventsEventIdSeen(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['events'][':eventId']['seen']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.events[':eventId'].seen.$post(args, options),
  )
}

export async function getApiVersionAccountInvoices(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.invoices.$get(args, options))
}

export async function getApiVersionAccountInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.invoices[':invoiceId'].$get(args, options),
  )
}

export async function getApiVersionAccountInvoicesInvoiceIdItems(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['invoices'][':invoiceId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.invoices[':invoiceId'].items.$get(args, options),
  )
}

export async function getApiVersionAccountLogins(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.logins.$get(args, options))
}

export async function getApiVersionAccountLoginsLoginId(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['logins'][':loginId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.logins[':loginId'].$get(args, options))
}

export async function getApiVersionAccountMaintenance(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['maintenance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.maintenance.$get(args, options))
}

export async function getApiVersionAccountNotifications(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.notifications.$get(args, options))
}

export async function getApiVersionAccountOauthClients(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['oauth-clients'].$get(args, options))
}

export async function postApiVersionAccountOauthClients(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['oauth-clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['oauth-clients'].$post(args, options))
}

export async function getApiVersionAccountOauthClientsClientId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['oauth-clients'][':clientId'].$get(args, options),
  )
}

export async function putApiVersionAccountOauthClientsClientId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['oauth-clients'][':clientId'].$put(args, options),
  )
}

export async function deleteApiVersionAccountOauthClientsClientId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['oauth-clients'][':clientId'].$delete(args, options),
  )
}

export async function postApiVersionAccountOauthClientsClientIdResetSecret(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['reset-secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['oauth-clients'][':clientId']['reset-secret'].$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionAccountOauthClientsClientIdThumbnail(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['oauth-clients'][':clientId'].thumbnail.$get(args, options),
  )
}

export async function putApiVersionAccountOauthClientsClientIdThumbnail(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['oauth-clients'][':clientId']['thumbnail']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['oauth-clients'][':clientId'].thumbnail.$put(args, options),
  )
}

export async function getApiVersionAccountPaymentMethods(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['payment-methods'].$get(args, options))
}

export async function postApiVersionAccountPaymentMethods(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payment-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['payment-methods'].$post(args, options))
}

export async function getApiVersionAccountPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['payment-methods'][':paymentMethodId'].$get(args, options),
  )
}

export async function deleteApiVersionAccountPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['payment-methods'][':paymentMethodId'].$delete(args, options),
  )
}

export async function postApiVersionAccountPaymentMethodsPaymentMethodIdMakeDefault(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payment-methods'][':paymentMethodId']['make-default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['payment-methods'][':paymentMethodId']['make-default'].$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionAccountPayments(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.payments.$get(args, options))
}

export async function postApiVersionAccountPayments(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.payments.$post(args, options))
}

export async function postApiVersionAccountPaymentsPaypal(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['payments']['paypal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.payments.paypal.$post(args, options))
}

export async function postApiVersionAccountPaymentsPaypalExecute(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payments']['paypal']['execute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.payments.paypal.execute.$post(args, options),
  )
}

export async function getApiVersionAccountPaymentsPaymentId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['payments'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.payments[':paymentId'].$get(args, options),
  )
}

export async function postApiVersionAccountPromoCodes(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['promo-codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['promo-codes'].$post(args, options))
}

export async function getApiVersionAccountServiceTransfers(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['service-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account['service-transfers'].$get(args, options))
}

export async function postApiVersionAccountServiceTransfers(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['service-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['service-transfers'].$post(args, options),
  )
}

export async function getApiVersionAccountServiceTransfersToken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['service-transfers'][':token'].$get(args, options),
  )
}

export async function deleteApiVersionAccountServiceTransfersToken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['service-transfers'][':token']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['service-transfers'][':token'].$delete(args, options),
  )
}

export async function postApiVersionAccountServiceTransfersTokenAccept(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['service-transfers'][':token']['accept']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account['service-transfers'][':token'].accept.$post(args, options),
  )
}

export async function getApiVersionAccountSettings(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.settings.$get(args, options))
}

export async function putApiVersionAccountSettings(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.settings.$put(args, options))
}

export async function postApiVersionAccountSettingsManagedEnable(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['settings']['managed-enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.settings['managed-enable'].$post(args, options),
  )
}

export async function getApiVersionAccountTransfer(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.transfer.$get(args, options))
}

export async function getApiVersionAccountUsers(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.users.$get(args, options))
}

export async function postApiVersionAccountUsers(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.users.$post(args, options))
}

export async function getApiVersionAccountUsersUsername(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.users[':username'].$get(args, options))
}

export async function putApiVersionAccountUsersUsername(
  args: InferRequestType<(typeof client)[':apiVersion']['account']['users'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].account.users[':username'].$put(args, options))
}

export async function deleteApiVersionAccountUsersUsername(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['users'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.users[':username'].$delete(args, options),
  )
}

export async function getApiVersionAccountUsersUsernameGrants(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.users[':username'].grants.$get(args, options),
  )
}

export async function putApiVersionAccountUsersUsernameGrants(
  args: InferRequestType<
    (typeof client)[':apiVersion']['account']['users'][':username']['grants']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].account.users[':username'].grants.$put(args, options),
  )
}

export async function getApiVersionBetas(
  args: InferRequestType<(typeof client)[':apiVersion']['betas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].betas.$get(args, options))
}

export async function getApiVersionBetasBetaId(
  args: InferRequestType<(typeof client)[':apiVersion']['betas'][':betaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].betas[':betaId'].$get(args, options))
}

export async function getApiVersionDatabasesEngines(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['engines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.engines.$get(args, options))
}

export async function getApiVersionDatabasesEnginesEngineId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['engines'][':engineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.engines[':engineId'].$get(args, options),
  )
}

export async function getApiVersionDatabasesInstances(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.instances.$get(args, options))
}

export async function getApiVersionDatabasesMysqlConfig(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.mysql.config.$get(args, options))
}

export async function getApiVersionDatabasesMysqlInstances(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['mysql']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.mysql.instances.$get(args, options))
}

export async function postApiVersionDatabasesMysqlInstances(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.mysql.instances.$post(args, options))
}

export async function getApiVersionDatabasesMysqlInstancesInstanceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].$get(args, options),
  )
}

export async function putApiVersionDatabasesMysqlInstancesInstanceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].$put(args, options),
  )
}

export async function deleteApiVersionDatabasesMysqlInstancesInstanceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].$delete(args, options),
  )
}

export async function getApiVersionDatabasesMysqlInstancesInstanceIdCredentials(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].credentials.$get(args, options),
  )
}

export async function postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsReset(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['credentials']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].credentials.reset.$post(
      args,
      options,
    ),
  )
}

export async function postApiVersionDatabasesMysqlInstancesInstanceIdPatch(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].patch.$post(args, options),
  )
}

export async function postApiVersionDatabasesMysqlInstancesInstanceIdResume(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].resume.$post(args, options),
  )
}

export async function getApiVersionDatabasesMysqlInstancesInstanceIdSsl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].ssl.$get(args, options),
  )
}

export async function postApiVersionDatabasesMysqlInstancesInstanceIdSuspend(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['mysql']['instances'][':instanceId']['suspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.mysql.instances[':instanceId'].suspend.$post(args, options),
  )
}

export async function getApiVersionDatabasesPostgresqlConfig(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.postgresql.config.$get(args, options))
}

export async function getApiVersionDatabasesPostgresqlInstances(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances.$get(args, options),
  )
}

export async function postApiVersionDatabasesPostgresqlInstances(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances.$post(args, options),
  )
}

export async function getApiVersionDatabasesPostgresqlInstancesInstanceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].$get(args, options),
  )
}

export async function putApiVersionDatabasesPostgresqlInstancesInstanceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].$put(args, options),
  )
}

export async function deleteApiVersionDatabasesPostgresqlInstancesInstanceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].$delete(args, options),
  )
}

export async function getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentials(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].credentials.$get(
      args,
      options,
    ),
  )
}

export async function postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsReset(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['credentials']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].credentials.reset.$post(
      args,
      options,
    ),
  )
}

export async function postApiVersionDatabasesPostgresqlInstancesInstanceIdPatch(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].patch.$post(args, options),
  )
}

export async function postApiVersionDatabasesPostgresqlInstancesInstanceIdResume(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].resume.$post(args, options),
  )
}

export async function getApiVersionDatabasesPostgresqlInstancesInstanceIdSsl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].ssl.$get(args, options),
  )
}

export async function postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspend(
  args: InferRequestType<
    (typeof client)[':apiVersion']['databases']['postgresql']['instances'][':instanceId']['suspend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].databases.postgresql.instances[':instanceId'].suspend.$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionDatabasesTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.types.$get(args, options))
}

export async function getApiVersionDatabasesTypesTypeId(
  args: InferRequestType<(typeof client)[':apiVersion']['databases']['types'][':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].databases.types[':typeId'].$get(args, options))
}

export async function getApiVersionDomains(
  args: InferRequestType<(typeof client)[':apiVersion']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains.$get(args, options))
}

export async function postApiVersionDomains(
  args: InferRequestType<(typeof client)[':apiVersion']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains.$post(args, options))
}

export async function postApiVersionDomainsImport(
  args: InferRequestType<(typeof client)[':apiVersion']['domains']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains.import.$post(args, options))
}

export async function getApiVersionDomainsDomainId(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains[':domainId'].$get(args, options))
}

export async function putApiVersionDomainsDomainId(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains[':domainId'].$put(args, options))
}

export async function deleteApiVersionDomainsDomainId(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains[':domainId'].$delete(args, options))
}

export async function postApiVersionDomainsDomainIdClone(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains[':domainId'].clone.$post(args, options))
}

export async function getApiVersionDomainsDomainIdRecords(
  args: InferRequestType<(typeof client)[':apiVersion']['domains'][':domainId']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].domains[':domainId'].records.$get(args, options))
}

export async function postApiVersionDomainsDomainIdRecords(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].domains[':domainId'].records.$post(args, options),
  )
}

export async function getApiVersionDomainsDomainIdRecordsRecordId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].domains[':domainId'].records[':recordId'].$get(args, options),
  )
}

export async function putApiVersionDomainsDomainIdRecordsRecordId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].domains[':domainId'].records[':recordId'].$put(args, options),
  )
}

export async function deleteApiVersionDomainsDomainIdRecordsRecordId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['records'][':recordId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].domains[':domainId'].records[':recordId'].$delete(args, options),
  )
}

export async function getApiVersionDomainsDomainIdZoneFile(
  args: InferRequestType<
    (typeof client)[':apiVersion']['domains'][':domainId']['zone-file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].domains[':domainId']['zone-file'].$get(args, options),
  )
}

export async function getApiVersionImages(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.$get(args, options))
}

export async function postApiVersionImages(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.$post(args, options))
}

export async function getApiVersionImagesSharegroups(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.sharegroups.$get(args, options))
}

export async function postApiVersionImagesSharegroups(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.sharegroups.$post(args, options))
}

export async function getApiVersionImagesSharegroupsTokens(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.sharegroups.tokens.$get(args, options))
}

export async function postApiVersionImagesSharegroupsTokens(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.sharegroups.tokens.$post(args, options))
}

export async function getApiVersionImagesSharegroupsTokensTokenUuid(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$get(args, options),
  )
}

export async function putApiVersionImagesSharegroupsTokensTokenUuid(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$put(args, options),
  )
}

export async function deleteApiVersionImagesSharegroupsTokensTokenUuid(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].$delete(args, options),
  )
}

export async function getApiVersionImagesSharegroupsTokensTokenUuidSharegroup(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].sharegroup.$get(args, options),
  )
}

export async function getApiVersionImagesSharegroupsTokensTokenUuidSharegroupImages(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups']['tokens'][':tokenUuid']['sharegroup']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups.tokens[':tokenUuid'].sharegroup.images.$get(
      args,
      options,
    ),
  )
}

export async function getApiVersionImagesSharegroupsSharegroupId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].$get(args, options),
  )
}

export async function putApiVersionImagesSharegroupsSharegroupId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].$put(args, options),
  )
}

export async function deleteApiVersionImagesSharegroupsSharegroupId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].$delete(args, options),
  )
}

export async function getApiVersionImagesSharegroupsSharegroupIdImages(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].images.$get(args, options),
  )
}

export async function postApiVersionImagesSharegroupsSharegroupIdImages(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].images.$post(args, options),
  )
}

export async function putApiVersionImagesSharegroupsSharegroupIdImagesImageId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].images[':imageId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiVersionImagesSharegroupsSharegroupIdImagesImageId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['images'][':imageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].images[':imageId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiVersionImagesSharegroupsSharegroupIdMembers(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].members.$get(args, options),
  )
}

export async function postApiVersionImagesSharegroupsSharegroupIdMembers(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].members.$post(args, options),
  )
}

export async function getApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$get(
      args,
      options,
    ),
  )
}

export async function putApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiVersionImagesSharegroupsSharegroupIdMembersTokenUuid(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images']['sharegroups'][':sharegroupId']['members'][':tokenUuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images.sharegroups[':sharegroupId'].members[':tokenUuid'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiVersionImagesUpload(
  args: InferRequestType<(typeof client)[':apiVersion']['images']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images.upload.$post(args, options))
}

export async function getApiVersionImagesImageId(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images[':imageId'].$get(args, options))
}

export async function putApiVersionImagesImageId(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images[':imageId'].$put(args, options))
}

export async function deleteApiVersionImagesImageId(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images[':imageId'].$delete(args, options))
}

export async function postApiVersionImagesImageIdRegions(
  args: InferRequestType<(typeof client)[':apiVersion']['images'][':imageId']['regions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].images[':imageId'].regions.$post(args, options))
}

export async function getApiVersionImagesImageIdSharegroups(
  args: InferRequestType<
    (typeof client)[':apiVersion']['images'][':imageId']['sharegroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].images[':imageId'].sharegroups.$get(args, options),
  )
}

export async function getApiVersionLinodeInstances(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.instances.$get(args, options))
}

export async function postApiVersionLinodeInstances(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.instances.$post(args, options))
}

export async function getApiVersionLinodeInstancesLinodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].$put(args, options),
  )
}

export async function deleteApiVersionLinodeInstancesLinodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].$delete(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdBackups(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].backups.$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdBackups(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].backups.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdBackupsCancel(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].backups.cancel.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdBackupsEnable(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].backups.enable.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdBackupsBackupId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].backups[':backupId'].$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['backups'][':backupId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].backups[':backupId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdBoot(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['boot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].boot.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdClone(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].clone.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdConfigs(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs.$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdConfigs(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdConfigsConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdConfigsConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$put(args, options),
  )
}

export async function deleteApiVersionLinodeInstancesLinodeIdConfigsConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].$delete(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfaces(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces.$get(
      args,
      options,
    ),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfaces(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces.$post(
      args,
      options,
    ),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesOrder(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces']['order']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces.order.$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
      ':interfaceId'
    ].$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
      ':interfaceId'
    ].$put(args, options),
  )
}

export async function deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['configs'][':configId']['interfaces'][':interfaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].configs[':configId'].interfaces[
      ':interfaceId'
    ].$delete(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdDisks(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks.$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdDisks(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdDisksDiskId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdDisksDiskId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$put(args, options),
  )
}

export async function deleteApiVersionLinodeInstancesLinodeIdDisksDiskId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].$delete(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdDisksDiskIdClone(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].clone.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdDisksDiskIdPassword(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].password.$post(
      args,
      options,
    ),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdDisksDiskIdResize(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['disks'][':diskId']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].disks[':diskId'].resize.$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdFirewalls(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].firewalls.$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdFirewalls(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].firewalls.$put(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdFirewallsApply(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['firewalls']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].firewalls.apply.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdInterfaces(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces.$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdInterfaces(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdInterfacesHistory(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces.history.$get(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdInterfacesSettings(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces.settings.$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdInterfacesSettings(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces.settings.$put(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$get(
      args,
      options,
    ),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiVersionLinodeInstancesLinodeIdInterfacesInterfaceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdInterfacesInterfaceIdFirewalls(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['interfaces'][':interfaceId']['firewalls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].interfaces[':interfaceId'].firewalls.$get(
      args,
      options,
    ),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdIps(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].ips.$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdIps(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].ips.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdIpsAddress(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$get(args, options),
  )
}

export async function putApiVersionLinodeInstancesLinodeIdIpsAddress(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$put(args, options),
  )
}

export async function deleteApiVersionLinodeInstancesLinodeIdIpsAddress(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['ips'][':address']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].ips[':address'].$delete(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdMigrate(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['migrate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].migrate.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdMutate(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['mutate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].mutate.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdNodebalancers(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['nodebalancers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].nodebalancers.$get(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdPassword(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].password.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdReboot(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['reboot']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].reboot.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdRebuild(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rebuild']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].rebuild.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdRescue(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['rescue']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].rescue.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdResize(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].resize.$post(args, options),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdShutdown(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['shutdown']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].shutdown.$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdStats(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].stats.$get(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdStatsYearMonth(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].stats[':year'][':month'].$get(
      args,
      options,
    ),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdTransfer(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].transfer.$get(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdTransferYearMonth(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].transfer[':year'][':month'].$get(
      args,
      options,
    ),
  )
}

export async function postApiVersionLinodeInstancesLinodeIdUpgradeInterfaces(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['upgrade-interfaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId']['upgrade-interfaces'].$post(args, options),
  )
}

export async function getApiVersionLinodeInstancesLinodeIdVolumes(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['instances'][':linodeId']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.instances[':linodeId'].volumes.$get(args, options),
  )
}

export async function getApiVersionLinodeKernels(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.kernels.$get(args, options))
}

export async function getApiVersionLinodeKernelsKernelId(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['kernels'][':kernelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.kernels[':kernelId'].$get(args, options))
}

export async function getApiVersionLinodeStackscripts(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.stackscripts.$get(args, options))
}

export async function postApiVersionLinodeStackscripts(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['stackscripts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.stackscripts.$post(args, options))
}

export async function getApiVersionLinodeStackscriptsStackscriptId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.stackscripts[':stackscriptId'].$get(args, options),
  )
}

export async function putApiVersionLinodeStackscriptsStackscriptId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.stackscripts[':stackscriptId'].$put(args, options),
  )
}

export async function deleteApiVersionLinodeStackscriptsStackscriptId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['linode']['stackscripts'][':stackscriptId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].linode.stackscripts[':stackscriptId'].$delete(args, options),
  )
}

export async function getApiVersionLinodeTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.types.$get(args, options))
}

export async function getApiVersionLinodeTypesTypeId(
  args: InferRequestType<(typeof client)[':apiVersion']['linode']['types'][':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].linode.types[':typeId'].$get(args, options))
}

export async function getApiVersionLkeClusters(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.clusters.$get(args, options))
}

export async function postApiVersionLkeClusters(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.clusters.$post(args, options))
}

export async function getApiVersionLkeClustersClusterId(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.clusters[':clusterId'].$get(args, options))
}

export async function putApiVersionLkeClustersClusterId(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.clusters[':clusterId'].$put(args, options))
}

export async function deleteApiVersionLkeClustersClusterId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].$delete(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdApiEndpoints(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['api-endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId']['api-endpoints'].$get(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdControlPlaneAcl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$get(args, options),
  )
}

export async function putApiVersionLkeClustersClusterIdControlPlaneAcl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$put(args, options),
  )
}

export async function deleteApiVersionLkeClustersClusterIdControlPlaneAcl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['control_plane_acl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].control_plane_acl.$delete(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdDashboard(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['dashboard']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].dashboard.$get(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdKubeconfig(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].kubeconfig.$get(args, options),
  )
}

export async function deleteApiVersionLkeClustersClusterIdKubeconfig(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['kubeconfig']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].kubeconfig.$delete(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdNodesNodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].$get(args, options),
  )
}

export async function deleteApiVersionLkeClustersClusterIdNodesNodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].$delete(args, options),
  )
}

export async function postApiVersionLkeClustersClusterIdNodesNodeIdRecycle(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['nodes'][':nodeId']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].nodes[':nodeId'].recycle.$post(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdPools(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].pools.$get(args, options),
  )
}

export async function postApiVersionLkeClustersClusterIdPools(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].pools.$post(args, options),
  )
}

export async function getApiVersionLkeClustersClusterIdPoolsPoolId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$get(args, options),
  )
}

export async function putApiVersionLkeClustersClusterIdPoolsPoolId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$put(args, options),
  )
}

export async function deleteApiVersionLkeClustersClusterIdPoolsPoolId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].$delete(args, options),
  )
}

export async function postApiVersionLkeClustersClusterIdPoolsPoolIdRecycle(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['pools'][':poolId']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].pools[':poolId'].recycle.$post(args, options),
  )
}

export async function postApiVersionLkeClustersClusterIdRecycle(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].recycle.$post(args, options),
  )
}

export async function postApiVersionLkeClustersClusterIdRegenerate(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['regenerate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].regenerate.$post(args, options),
  )
}

export async function deleteApiVersionLkeClustersClusterIdServicetoken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['clusters'][':clusterId']['servicetoken']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.clusters[':clusterId'].servicetoken.$delete(args, options),
  )
}

export async function getApiVersionLkeTiersTierVersions(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.tiers[':tier'].versions.$get(args, options))
}

export async function getApiVersionLkeTiersTierVersionsVersion(
  args: InferRequestType<
    (typeof client)[':apiVersion']['lke']['tiers'][':tier']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].lke.tiers[':tier'].versions[':version'].$get(args, options),
  )
}

export async function getApiVersionLkeTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.types.$get(args, options))
}

export async function getApiVersionLkeVersions(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.versions.$get(args, options))
}

export async function getApiVersionLkeVersionsVersion(
  args: InferRequestType<(typeof client)[':apiVersion']['lke']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].lke.versions[':version'].$get(args, options))
}

export async function getApiVersionLongviewClients(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].longview.clients.$get(args, options))
}

export async function postApiVersionLongviewClients(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].longview.clients.$post(args, options))
}

export async function getApiVersionLongviewClientsClientId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].longview.clients[':clientId'].$get(args, options),
  )
}

export async function putApiVersionLongviewClientsClientId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].longview.clients[':clientId'].$put(args, options),
  )
}

export async function deleteApiVersionLongviewClientsClientId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['clients'][':clientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].longview.clients[':clientId'].$delete(args, options),
  )
}

export async function getApiVersionLongviewPlan(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].longview.plan.$get(args, options))
}

export async function putApiVersionLongviewPlan(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['plan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].longview.plan.$put(args, options))
}

export async function getApiVersionLongviewSubscriptions(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].longview.subscriptions.$get(args, options))
}

export async function getApiVersionLongviewSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['longview']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].longview.subscriptions[':subscriptionId'].$get(args, options),
  )
}

export async function getApiVersionLongviewTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['longview']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].longview.types.$get(args, options))
}

export async function getApiVersionMaintenancePolicies(
  args: InferRequestType<(typeof client)[':apiVersion']['maintenance']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].maintenance.policies.$get(args, options))
}

export async function getApiVersionManagedContacts(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.contacts.$get(args, options))
}

export async function postApiVersionManagedContacts(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.contacts.$post(args, options))
}

export async function getApiVersionManagedContactsContactId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.contacts[':contactId'].$get(args, options),
  )
}

export async function putApiVersionManagedContactsContactId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.contacts[':contactId'].$put(args, options),
  )
}

export async function deleteApiVersionManagedContactsContactId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['contacts'][':contactId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.contacts[':contactId'].$delete(args, options),
  )
}

export async function getApiVersionManagedCredentials(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.credentials.$get(args, options))
}

export async function postApiVersionManagedCredentials(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.credentials.$post(args, options))
}

export async function getApiVersionManagedCredentialsSshkey(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials']['sshkey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.credentials.sshkey.$get(args, options))
}

export async function getApiVersionManagedCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.credentials[':credentialId'].$get(args, options),
  )
}

export async function putApiVersionManagedCredentialsCredentialId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.credentials[':credentialId'].$put(args, options),
  )
}

export async function postApiVersionManagedCredentialsCredentialIdRevoke(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.credentials[':credentialId'].revoke.$post(args, options),
  )
}

export async function postApiVersionManagedCredentialsCredentialIdUpdate(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['credentials'][':credentialId']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.credentials[':credentialId'].update.$post(args, options),
  )
}

export async function getApiVersionManagedIssues(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.issues.$get(args, options))
}

export async function getApiVersionManagedIssuesIssueId(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['issues'][':issueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.issues[':issueId'].$get(args, options))
}

export async function getApiVersionManagedLinodeSettings(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['linode-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed['linode-settings'].$get(args, options))
}

export async function getApiVersionManagedLinodeSettingsLinodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed['linode-settings'][':linodeId'].$get(args, options),
  )
}

export async function putApiVersionManagedLinodeSettingsLinodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['linode-settings'][':linodeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed['linode-settings'][':linodeId'].$put(args, options),
  )
}

export async function getApiVersionManagedServices(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.services.$get(args, options))
}

export async function postApiVersionManagedServices(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.services.$post(args, options))
}

export async function getApiVersionManagedServicesServiceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.services[':serviceId'].$get(args, options),
  )
}

export async function putApiVersionManagedServicesServiceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.services[':serviceId'].$put(args, options),
  )
}

export async function deleteApiVersionManagedServicesServiceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.services[':serviceId'].$delete(args, options),
  )
}

export async function postApiVersionManagedServicesServiceIdDisable(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.services[':serviceId'].disable.$post(args, options),
  )
}

export async function postApiVersionManagedServicesServiceIdEnable(
  args: InferRequestType<
    (typeof client)[':apiVersion']['managed']['services'][':serviceId']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].managed.services[':serviceId'].enable.$post(args, options),
  )
}

export async function getApiVersionManagedStats(
  args: InferRequestType<(typeof client)[':apiVersion']['managed']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].managed.stats.$get(args, options))
}

export async function getApiVersionMonitorAlertChannels(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].monitor['alert-channels'].$get(args, options))
}

export async function getApiVersionMonitorAlertDefinitions(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['alert-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].monitor['alert-definitions'].$get(args, options))
}

export async function getApiVersionMonitorDashboards(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].monitor.dashboards.$get(args, options))
}

export async function getApiVersionMonitorDashboardsDashboardId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['dashboards'][':dashboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.dashboards[':dashboardId'].$get(args, options),
  )
}

export async function getApiVersionMonitorServices(
  args: InferRequestType<(typeof client)[':apiVersion']['monitor']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].monitor.services.$get(args, options))
}

export async function getApiVersionMonitorServicesServiceType(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType'].$get(args, options),
  )
}

export async function getApiVersionMonitorServicesServiceTypeAlertDefinitions(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'].$get(args, options),
  )
}

export async function postApiVersionMonitorServicesServiceTypeAlertDefinitions(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'].$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][':alertId'].$get(
      args,
      options,
    ),
  )
}

export async function putApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][':alertId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiVersionMonitorServicesServiceTypeAlertDefinitionsAlertId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['alert-definitions'][':alertId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType']['alert-definitions'][':alertId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiVersionMonitorServicesServiceTypeDashboards(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['dashboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType'].dashboards.$get(args, options),
  )
}

export async function getApiVersionMonitorServicesServiceTypeMetricDefinitions(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metric-definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType']['metric-definitions'].$get(
      args,
      options,
    ),
  )
}

export async function postApiVersionMonitorServicesServiceTypeMetrics(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['metrics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType'].metrics.$post(args, options),
  )
}

export async function postApiVersionMonitorServicesServiceTypeToken(
  args: InferRequestType<
    (typeof client)[':apiVersion']['monitor']['services'][':serviceType']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].monitor.services[':serviceType'].token.$post(args, options),
  )
}

export async function getApiVersionNetworkTransferPrices(
  args: InferRequestType<(typeof client)[':apiVersion']['network-transfer']['prices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['network-transfer'].prices.$get(args, options))
}

export async function getApiVersionNetworkingFirewalls(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.firewalls.$get(args, options))
}

export async function postApiVersionNetworkingFirewalls(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['firewalls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.firewalls.$post(args, options))
}

export async function getApiVersionNetworkingFirewallsSettings(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls.settings.$get(args, options),
  )
}

export async function putApiVersionNetworkingFirewallsSettings(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls.settings.$put(args, options),
  )
}

export async function getApiVersionNetworkingFirewallsTemplates(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls.templates.$get(args, options),
  )
}

export async function getApiVersionNetworkingFirewallsTemplatesSlug(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls']['templates'][':slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls.templates[':slug'].$get(args, options),
  )
}

export async function getApiVersionNetworkingFirewallsFirewallId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].$get(args, options),
  )
}

export async function putApiVersionNetworkingFirewallsFirewallId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].$put(args, options),
  )
}

export async function deleteApiVersionNetworkingFirewallsFirewallId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].$delete(args, options),
  )
}

export async function getApiVersionNetworkingFirewallsFirewallIdDevices(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].devices.$get(args, options),
  )
}

export async function postApiVersionNetworkingFirewallsFirewallIdDevices(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].devices.$post(args, options),
  )
}

export async function getApiVersionNetworkingFirewallsFirewallIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].devices[':deviceId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiVersionNetworkingFirewallsFirewallIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['devices'][':deviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].devices[':deviceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiVersionNetworkingFirewallsFirewallIdHistory(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].history.$get(args, options),
  )
}

export async function getApiVersionNetworkingFirewallsFirewallIdHistoryRulesVersion(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['history']['rules'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].history.rules[':version'].$get(
      args,
      options,
    ),
  )
}

export async function getApiVersionNetworkingFirewallsFirewallIdRules(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].rules.$get(args, options),
  )
}

export async function putApiVersionNetworkingFirewallsFirewallIdRules(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['firewalls'][':firewallId']['rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.firewalls[':firewallId'].rules.$put(args, options),
  )
}

export async function getApiVersionNetworkingIps(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ips.$get(args, options))
}

export async function postApiVersionNetworkingIps(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ips.$post(args, options))
}

export async function postApiVersionNetworkingIpsAssign(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ips.assign.$post(args, options))
}

export async function postApiVersionNetworkingIpsShare(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ips.share.$post(args, options))
}

export async function getApiVersionNetworkingIpsAddress(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ips[':address'].$get(args, options))
}

export async function putApiVersionNetworkingIpsAddress(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ips'][':address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ips[':address'].$put(args, options))
}

export async function postApiVersionNetworkingIpv4Assign(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv4']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ipv4.assign.$post(args, options))
}

export async function postApiVersionNetworkingIpv4Share(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv4']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ipv4.share.$post(args, options))
}

export async function getApiVersionNetworkingIpv6Pools(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ipv6.pools.$get(args, options))
}

export async function getApiVersionNetworkingIpv6Ranges(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ipv6.ranges.$get(args, options))
}

export async function postApiVersionNetworkingIpv6Ranges(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['ipv6']['ranges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.ipv6.ranges.$post(args, options))
}

export async function getApiVersionNetworkingIpv6RangesRange(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.ipv6.ranges[':range'].$get(args, options),
  )
}

export async function deleteApiVersionNetworkingIpv6RangesRange(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['ipv6']['ranges'][':range']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.ipv6.ranges[':range'].$delete(args, options),
  )
}

export async function getApiVersionNetworkingVlans(
  args: InferRequestType<(typeof client)[':apiVersion']['networking']['vlans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].networking.vlans.$get(args, options))
}

export async function deleteApiVersionNetworkingVlansRegionIdLabel(
  args: InferRequestType<
    (typeof client)[':apiVersion']['networking']['vlans'][':regionId'][':label']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].networking.vlans[':regionId'][':label'].$delete(args, options),
  )
}

export async function getApiVersionNodebalancers(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].nodebalancers.$get(args, options))
}

export async function postApiVersionNodebalancers(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].nodebalancers.$post(args, options))
}

export async function getApiVersionNodebalancersTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['nodebalancers']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].nodebalancers.types.$get(args, options))
}

export async function getApiVersionNodebalancersNodeBalancerId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].$get(args, options),
  )
}

export async function putApiVersionNodebalancersNodeBalancerId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].$put(args, options),
  )
}

export async function deleteApiVersionNodebalancersNodeBalancerId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].$delete(args, options),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdConfigs(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs.$get(args, options),
  )
}

export async function postApiVersionNodebalancersNodeBalancerIdConfigs(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs.$post(args, options),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdConfigsConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$get(args, options),
  )
}

export async function putApiVersionNodebalancersNodeBalancerIdConfigsConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$put(args, options),
  )
}

export async function deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodes(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(
      args,
      options,
    ),
  )
}

export async function postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodes(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
      ':nodeId'
    ].$get(args, options),
  )
}

export async function putApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
      ':nodeId'
    ].$put(args, options),
  )
}

export async function deleteApiVersionNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[
      ':nodeId'
    ].$delete(args, options),
  )
}

export async function postApiVersionNodebalancersNodeBalancerIdConfigsConfigIdRebuild(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].configs[':configId'].rebuild.$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdFirewalls(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].firewalls.$get(args, options),
  )
}

export async function putApiVersionNodebalancersNodeBalancerIdFirewalls(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['firewalls']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].firewalls.$put(args, options),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdStats(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].stats.$get(args, options),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdVpcs(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].vpcs.$get(args, options),
  )
}

export async function getApiVersionNodebalancersNodeBalancerIdVpcsNodeBalancerVpcConfigId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['nodebalancers'][':nodeBalancerId']['vpcs'][':nodeBalancerVpcConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].nodebalancers[':nodeBalancerId'].vpcs[':nodeBalancerVpcConfigId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiVersionObjectStorageBuckets(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['buckets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].buckets.$get(args, options))
}

export async function postApiVersionObjectStorageBuckets(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['buckets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].buckets.$post(args, options))
}

export async function getApiVersionObjectStorageBucketsRegionId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'].$get(args, options),
  )
}

export async function getApiVersionObjectStorageBucketsRegionIdBucket(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].$get(args, options),
  )
}

export async function deleteApiVersionObjectStorageBucketsRegionIdBucket(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].$delete(args, options),
  )
}

export async function getApiVersionObjectStorageBucketsRegionIdBucketAccess(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$get(
      args,
      options,
    ),
  )
}

export async function putApiVersionObjectStorageBucketsRegionIdBucketAccess(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$put(
      args,
      options,
    ),
  )
}

export async function postApiVersionObjectStorageBucketsRegionIdBucketAccess(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].access.$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionObjectStorageBucketsRegionIdBucketObjectAcl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket']['object-acl'].$get(
      args,
      options,
    ),
  )
}

export async function putApiVersionObjectStorageBucketsRegionIdBucketObjectAcl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-acl']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket']['object-acl'].$put(
      args,
      options,
    ),
  )
}

export async function getApiVersionObjectStorageBucketsRegionIdBucketObjectList(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket']['object-list'].$get(
      args,
      options,
    ),
  )
}

export async function postApiVersionObjectStorageBucketsRegionIdBucketObjectUrl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['object-url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket']['object-url'].$post(
      args,
      options,
    ),
  )
}

export async function getApiVersionObjectStorageBucketsRegionIdBucketSsl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$get(args, options),
  )
}

export async function postApiVersionObjectStorageBucketsRegionIdBucketSsl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$post(
      args,
      options,
    ),
  )
}

export async function deleteApiVersionObjectStorageBucketsRegionIdBucketSsl(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['buckets'][':regionId'][':bucket']['ssl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].buckets[':regionId'][':bucket'].ssl.$delete(
      args,
      options,
    ),
  )
}

export async function postApiVersionObjectStorageCancel(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].cancel.$post(args, options))
}

export async function getApiVersionObjectStorageClusters(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].clusters.$get(args, options))
}

export async function getApiVersionObjectStorageClustersClusterId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].clusters[':clusterId'].$get(args, options),
  )
}

export async function getApiVersionObjectStorageEndpoints(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].endpoints.$get(args, options))
}

export async function getApiVersionObjectStorageKeys(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].keys.$get(args, options))
}

export async function postApiVersionObjectStorageKeys(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].keys.$post(args, options))
}

export async function getApiVersionObjectStorageKeysKeyId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].keys[':keyId'].$get(args, options),
  )
}

export async function putApiVersionObjectStorageKeysKeyId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].keys[':keyId'].$put(args, options),
  )
}

export async function deleteApiVersionObjectStorageKeysKeyId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['keys'][':keyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].keys[':keyId'].$delete(args, options),
  )
}

export async function getApiVersionObjectStorageQuotas(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].quotas.$get(args, options))
}

export async function getApiVersionObjectStorageQuotasObjQuotaId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].quotas[':objQuotaId'].$get(args, options),
  )
}

export async function getApiVersionObjectStorageQuotasObjQuotaIdUsage(
  args: InferRequestType<
    (typeof client)[':apiVersion']['object-storage']['quotas'][':objQuotaId']['usage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion']['object-storage'].quotas[':objQuotaId'].usage.$get(args, options),
  )
}

export async function getApiVersionObjectStorageTransfer(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].transfer.$get(args, options))
}

export async function getApiVersionObjectStorageTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['object-storage']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion']['object-storage'].types.$get(args, options))
}

export async function getApiVersionPlacementGroups(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].placement.groups.$get(args, options))
}

export async function postApiVersionPlacementGroups(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].placement.groups.$post(args, options))
}

export async function getApiVersionPlacementGroupsGroupId(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].placement.groups[':groupId'].$get(args, options))
}

export async function putApiVersionPlacementGroupsGroupId(
  args: InferRequestType<(typeof client)[':apiVersion']['placement']['groups'][':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].placement.groups[':groupId'].$put(args, options))
}

export async function deleteApiVersionPlacementGroupsGroupId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['placement']['groups'][':groupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].placement.groups[':groupId'].$delete(args, options),
  )
}

export async function postApiVersionPlacementGroupsGroupIdAssign(
  args: InferRequestType<
    (typeof client)[':apiVersion']['placement']['groups'][':groupId']['assign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].placement.groups[':groupId'].assign.$post(args, options),
  )
}

export async function postApiVersionPlacementGroupsGroupIdUnassign(
  args: InferRequestType<
    (typeof client)[':apiVersion']['placement']['groups'][':groupId']['unassign']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].placement.groups[':groupId'].unassign.$post(args, options),
  )
}

export async function getApiVersionProfile(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.$get(args, options))
}

export async function putApiVersionProfile(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.$put(args, options))
}

export async function getApiVersionProfileApps(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.apps.$get(args, options))
}

export async function getApiVersionProfileAppsAppId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.apps[':appId'].$get(args, options))
}

export async function deleteApiVersionProfileAppsAppId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['apps'][':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.apps[':appId'].$delete(args, options))
}

export async function getApiVersionProfileDevices(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.devices.$get(args, options))
}

export async function getApiVersionProfileDevicesDeviceId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.devices[':deviceId'].$get(args, options))
}

export async function deleteApiVersionProfileDevicesDeviceId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['profile']['devices'][':deviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile.devices[':deviceId'].$delete(args, options),
  )
}

export async function getApiVersionProfileGrants(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['grants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.grants.$get(args, options))
}

export async function getApiVersionProfileLogins(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.logins.$get(args, options))
}

export async function getApiVersionProfileLoginsLoginId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['logins'][':loginId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.logins[':loginId'].$get(args, options))
}

export async function postApiVersionProfilePhoneNumber(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['phone-number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile['phone-number'].$post(args, options))
}

export async function deleteApiVersionProfilePhoneNumber(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['phone-number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile['phone-number'].$delete(args, options))
}

export async function postApiVersionProfilePhoneNumberVerify(
  args: InferRequestType<
    (typeof client)[':apiVersion']['profile']['phone-number']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile['phone-number'].verify.$post(args, options),
  )
}

export async function getApiVersionProfilePreferences(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.preferences.$get(args, options))
}

export async function putApiVersionProfilePreferences(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['preferences']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.preferences.$put(args, options))
}

export async function getApiVersionProfileSecurityQuestions(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['security-questions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile['security-questions'].$get(args, options),
  )
}

export async function postApiVersionProfileSecurityQuestions(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['security-questions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile['security-questions'].$post(args, options),
  )
}

export async function getApiVersionProfileSshkeys(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.sshkeys.$get(args, options))
}

export async function postApiVersionProfileSshkeys(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.sshkeys.$post(args, options))
}

export async function getApiVersionProfileSshkeysSshKeyId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.sshkeys[':sshKeyId'].$get(args, options))
}

export async function putApiVersionProfileSshkeysSshKeyId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.sshkeys[':sshKeyId'].$put(args, options))
}

export async function deleteApiVersionProfileSshkeysSshKeyId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['profile']['sshkeys'][':sshKeyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile.sshkeys[':sshKeyId'].$delete(args, options),
  )
}

export async function postApiVersionProfileTfaDisable(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile['tfa-disable'].$post(args, options))
}

export async function postApiVersionProfileTfaEnable(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile['tfa-enable'].$post(args, options))
}

export async function postApiVersionProfileTfaEnableConfirm(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tfa-enable-confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile['tfa-enable-confirm'].$post(args, options),
  )
}

export async function getApiVersionProfileTokens(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.tokens.$get(args, options))
}

export async function postApiVersionProfileTokens(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.tokens.$post(args, options))
}

export async function getApiVersionProfileTokensTokenId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.tokens[':tokenId'].$get(args, options))
}

export async function putApiVersionProfileTokensTokenId(
  args: InferRequestType<(typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].profile.tokens[':tokenId'].$put(args, options))
}

export async function deleteApiVersionProfileTokensTokenId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['profile']['tokens'][':tokenId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].profile.tokens[':tokenId'].$delete(args, options),
  )
}

export async function getApiVersionRegions(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].regions.$get(args, options))
}

export async function getApiVersionRegionsAvailability(
  args: InferRequestType<(typeof client)[':apiVersion']['regions']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].regions.availability.$get(args, options))
}

export async function getApiVersionRegionsRegionId(
  args: InferRequestType<(typeof client)[':apiVersion']['regions'][':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].regions[':regionId'].$get(args, options))
}

export async function getApiVersionRegionsRegionIdAvailability(
  args: InferRequestType<
    (typeof client)[':apiVersion']['regions'][':regionId']['availability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].regions[':regionId'].availability.$get(args, options),
  )
}

export async function getApiVersionSupportTickets(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].support.tickets.$get(args, options))
}

export async function postApiVersionSupportTickets(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].support.tickets.$post(args, options))
}

export async function getApiVersionSupportTicketsTicketId(
  args: InferRequestType<(typeof client)[':apiVersion']['support']['tickets'][':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].support.tickets[':ticketId'].$get(args, options))
}

export async function postApiVersionSupportTicketsTicketIdAttachments(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['attachments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].support.tickets[':ticketId'].attachments.$post(args, options),
  )
}

export async function postApiVersionSupportTicketsTicketIdClose(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['close']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].support.tickets[':ticketId'].close.$post(args, options),
  )
}

export async function getApiVersionSupportTicketsTicketIdReplies(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].support.tickets[':ticketId'].replies.$get(args, options),
  )
}

export async function postApiVersionSupportTicketsTicketIdReplies(
  args: InferRequestType<
    (typeof client)[':apiVersion']['support']['tickets'][':ticketId']['replies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].support.tickets[':ticketId'].replies.$post(args, options),
  )
}

export async function getApiVersionTags(
  args: InferRequestType<(typeof client)[':apiVersion']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].tags.$get(args, options))
}

export async function postApiVersionTags(
  args: InferRequestType<(typeof client)[':apiVersion']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].tags.$post(args, options))
}

export async function getApiVersionTagsTagLabel(
  args: InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].tags[':tagLabel'].$get(args, options))
}

export async function deleteApiVersionTagsTagLabel(
  args: InferRequestType<(typeof client)[':apiVersion']['tags'][':tagLabel']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].tags[':tagLabel'].$delete(args, options))
}

export async function getApiVersionVolumes(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes.$get(args, options))
}

export async function postApiVersionVolumes(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes.$post(args, options))
}

export async function getApiVersionVolumesTypes(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes.types.$get(args, options))
}

export async function getApiVersionVolumesVolumeId(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].$get(args, options))
}

export async function putApiVersionVolumesVolumeId(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].$put(args, options))
}

export async function deleteApiVersionVolumesVolumeId(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].$delete(args, options))
}

export async function postApiVersionVolumesVolumeIdAttach(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].attach.$post(args, options))
}

export async function postApiVersionVolumesVolumeIdClone(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].clone.$post(args, options))
}

export async function postApiVersionVolumesVolumeIdDetach(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['detach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].detach.$post(args, options))
}

export async function postApiVersionVolumesVolumeIdResize(
  args: InferRequestType<(typeof client)[':apiVersion']['volumes'][':volumeId']['resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].volumes[':volumeId'].resize.$post(args, options))
}

export async function getApiVersionVpcs(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs.$get(args, options))
}

export async function postApiVersionVpcs(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs.$post(args, options))
}

export async function getApiVersionVpcsIps(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs.ips.$get(args, options))
}

export async function getApiVersionVpcsVpcId(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs[':vpcId'].$get(args, options))
}

export async function putApiVersionVpcsVpcId(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs[':vpcId'].$put(args, options))
}

export async function deleteApiVersionVpcsVpcId(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs[':vpcId'].$delete(args, options))
}

export async function getApiVersionVpcsVpcIdIps(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs[':vpcId'].ips.$get(args, options))
}

export async function getApiVersionVpcsVpcIdSubnets(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs[':vpcId'].subnets.$get(args, options))
}

export async function postApiVersionVpcsVpcIdSubnets(
  args: InferRequestType<(typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':apiVersion'].vpcs[':vpcId'].subnets.$post(args, options))
}

export async function getApiVersionVpcsVpcIdSubnetsVpcSubnetId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$get(args, options),
  )
}

export async function putApiVersionVpcsVpcIdSubnetsVpcSubnetId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$put(args, options),
  )
}

export async function deleteApiVersionVpcsVpcIdSubnetsVpcSubnetId(
  args: InferRequestType<
    (typeof client)[':apiVersion']['vpcs'][':vpcId']['subnets'][':vpcSubnetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':apiVersion'].vpcs[':vpcId'].subnets[':vpcSubnetId'].$delete(args, options),
  )
}
