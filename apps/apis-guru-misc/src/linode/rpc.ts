import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.account.$get(undefined, options))
}

export async function putAccount(
  args: InferRequestType<typeof client.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$put(args, options))
}

export async function postAccountCancel(
  args: InferRequestType<typeof client.account.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.cancel.$post(args, options))
}

export async function postAccountCreditCard(
  args: InferRequestType<(typeof client.account)['credit-card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['credit-card'].$post(args, options))
}

export async function getAccountEntityTransfers(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['entity-transfers'].$get(args, options))
}

export async function postAccountEntityTransfers(
  args: InferRequestType<(typeof client.account)['entity-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['entity-transfers'].$post(args, options))
}

export async function getAccountEntityTransfersToken(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['entity-transfers'][':token'].$get(args, options))
}

export async function deleteAccountEntityTransfersToken(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['entity-transfers'][':token'].$delete(args, options))
}

export async function postAccountEntityTransfersTokenAccept(
  args: InferRequestType<(typeof client.account)['entity-transfers'][':token']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['entity-transfers'][':token'].accept.$post(args, options),
  )
}

export async function getAccountEvents(
  args: InferRequestType<typeof client.account.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.events.$get(args, options))
}

export async function getAccountEventsEventId(
  args: InferRequestType<(typeof client.account.events)[':eventId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.events[':eventId'].$get(args, options))
}

export async function postAccountEventsEventIdRead(
  args: InferRequestType<(typeof client.account.events)[':eventId']['read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.events[':eventId'].read.$post(args, options))
}

export async function postAccountEventsEventIdSeen(
  args: InferRequestType<(typeof client.account.events)[':eventId']['seen']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.events[':eventId'].seen.$post(args, options))
}

export async function getAccountInvoices(
  args: InferRequestType<typeof client.account.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.invoices.$get(args, options))
}

export async function getAccountInvoicesInvoiceId(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.invoices[':invoiceId'].$get(args, options))
}

export async function getAccountInvoicesInvoiceIdItems(
  args: InferRequestType<(typeof client.account.invoices)[':invoiceId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.invoices[':invoiceId'].items.$get(args, options))
}

export async function getAccountLogins(options?: ClientRequestOptions) {
  return await parseResponse(client.account.logins.$get(undefined, options))
}

export async function getAccountLoginsLoginId(
  args: InferRequestType<(typeof client.account.logins)[':loginId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.logins[':loginId'].$get(args, options))
}

export async function getAccountMaintenance(options?: ClientRequestOptions) {
  return await parseResponse(client.account.maintenance.$get(undefined, options))
}

export async function getAccountNotifications(options?: ClientRequestOptions) {
  return await parseResponse(client.account.notifications.$get(undefined, options))
}

export async function getAccountOauthClients(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['oauth-clients'].$get(args, options))
}

export async function postAccountOauthClients(
  args: InferRequestType<(typeof client.account)['oauth-clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['oauth-clients'].$post(args, options))
}

export async function getAccountOauthClientsClientId(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['oauth-clients'][':clientId'].$get(args, options))
}

export async function putAccountOauthClientsClientId(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['oauth-clients'][':clientId'].$put(args, options))
}

export async function deleteAccountOauthClientsClientId(
  args: InferRequestType<(typeof client.account)['oauth-clients'][':clientId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['oauth-clients'][':clientId'].$delete(args, options))
}

export async function postAccountOauthClientsClientIdResetSecret(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['reset-secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['oauth-clients'][':clientId']['reset-secret'].$post(args, options),
  )
}

export async function getAccountOauthClientsClientIdThumbnail(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['oauth-clients'][':clientId'].thumbnail.$get(args, options),
  )
}

export async function putAccountOauthClientsClientIdThumbnail(
  args: InferRequestType<
    (typeof client.account)['oauth-clients'][':clientId']['thumbnail']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['oauth-clients'][':clientId'].thumbnail.$put(args, options),
  )
}

export async function getAccountPaymentMethods(
  args: InferRequestType<(typeof client.account)['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['payment-methods'].$get(args, options))
}

export async function postAccountPaymentMethods(
  args: InferRequestType<(typeof client.account)['payment-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['payment-methods'].$post(args, options))
}

export async function getAccountPaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['payment-methods'][':paymentMethodId'].$get(args, options),
  )
}

export async function deleteAccountPaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.account)['payment-methods'][':paymentMethodId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['payment-methods'][':paymentMethodId'].$delete(args, options),
  )
}

export async function postAccountPaymentMethodsPaymentMethodIdMakeDefault(
  args: InferRequestType<
    (typeof client.account)['payment-methods'][':paymentMethodId']['make-default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['payment-methods'][':paymentMethodId']['make-default'].$post(args, options),
  )
}

export async function getAccountPayments(
  args: InferRequestType<typeof client.account.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.payments.$get(args, options))
}

export async function postAccountPayments(
  args: InferRequestType<typeof client.account.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.payments.$post(args, options))
}

export async function postAccountPaymentsPaypal(
  args: InferRequestType<typeof client.account.payments.paypal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.payments.paypal.$post(args, options))
}

export async function postAccountPaymentsPaypalExecute(
  args: InferRequestType<typeof client.account.payments.paypal.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.payments.paypal.execute.$post(args, options))
}

export async function getAccountPaymentsPaymentId(
  args: InferRequestType<(typeof client.account.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.payments[':paymentId'].$get(args, options))
}

export async function postAccountPromoCodes(
  args: InferRequestType<(typeof client.account)['promo-codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['promo-codes'].$post(args, options))
}

export async function getAccountServiceTransfers(
  args: InferRequestType<(typeof client.account)['service-transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['service-transfers'].$get(args, options))
}

export async function postAccountServiceTransfers(
  args: InferRequestType<(typeof client.account)['service-transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['service-transfers'].$post(args, options))
}

export async function getAccountServiceTransfersToken(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['service-transfers'][':token'].$get(args, options))
}

export async function deleteAccountServiceTransfersToken(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['service-transfers'][':token'].$delete(args, options))
}

export async function postAccountServiceTransfersTokenAccept(
  args: InferRequestType<(typeof client.account)['service-transfers'][':token']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account['service-transfers'][':token'].accept.$post(args, options),
  )
}

export async function getAccountSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.account.settings.$get(undefined, options))
}

export async function putAccountSettings(
  args: InferRequestType<typeof client.account.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.settings.$put(args, options))
}

export async function postAccountSettingsManagedEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.account.settings['managed-enable'].$post(undefined, options))
}

export async function getAccountTransfer(options?: ClientRequestOptions) {
  return await parseResponse(client.account.transfer.$get(undefined, options))
}

export async function getAccountUsers(
  args: InferRequestType<typeof client.account.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users.$get(args, options))
}

export async function postAccountUsers(
  args: InferRequestType<typeof client.account.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users.$post(args, options))
}

export async function getAccountUsersUsername(
  args: InferRequestType<(typeof client.account.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':username'].$get(args, options))
}

export async function putAccountUsersUsername(
  args: InferRequestType<(typeof client.account.users)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':username'].$put(args, options))
}

export async function deleteAccountUsersUsername(
  args: InferRequestType<(typeof client.account.users)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':username'].$delete(args, options))
}

export async function getAccountUsersUsernameGrants(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':username'].grants.$get(args, options))
}

export async function putAccountUsersUsernameGrants(
  args: InferRequestType<(typeof client.account.users)[':username']['grants']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':username'].grants.$put(args, options))
}

export async function getDatabasesEngines(
  args: InferRequestType<typeof client.databases.engines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.engines.$get(args, options))
}

export async function getDatabasesEnginesEngineId(
  args: InferRequestType<(typeof client.databases.engines)[':engineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.engines[':engineId'].$get(args, options))
}

export async function getDatabasesInstances(
  args: InferRequestType<typeof client.databases.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.instances.$get(args, options))
}

export async function getDatabasesMongodbInstances(
  args: InferRequestType<typeof client.databases.mongodb.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mongodb.instances.$get(args, options))
}

export async function getDatabasesMongodbInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mongodb.instances[':instanceId'].$get(args, options))
}

export async function putDatabasesMongodbInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mongodb.instances[':instanceId'].$put(args, options))
}

export async function deleteDatabasesMongodbInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].$delete(args, options),
  )
}

export async function getDatabasesMongodbInstancesInstanceIdBackups(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].backups.$get(args, options),
  )
}

export async function postDatabasesMongodbInstancesInstanceIdBackups(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].backups.$post(args, options),
  )
}

export async function getDatabasesMongodbInstancesInstanceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$get(args, options),
  )
}

export async function deleteDatabasesMongodbInstancesInstanceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].backups[':backupId'].$delete(args, options),
  )
}

export async function postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].backups[':backupId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function getDatabasesMongodbInstancesInstanceIdCredentials(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].credentials.$get(args, options),
  )
}

export async function postDatabasesMongodbInstancesInstanceIdCredentialsReset(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['credentials']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].credentials.reset.$post(args, options),
  )
}

export async function postDatabasesMongodbInstancesInstanceIdPatch(
  args: InferRequestType<
    (typeof client.databases.mongodb.instances)[':instanceId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].patch.$post(args, options),
  )
}

export async function getDatabasesMongodbInstancesInstanceIdSsl(
  args: InferRequestType<(typeof client.databases.mongodb.instances)[':instanceId']['ssl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mongodb.instances[':instanceId'].ssl.$get(args, options),
  )
}

export async function getDatabasesMysqlInstances(
  args: InferRequestType<typeof client.databases.mysql.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mysql.instances.$get(args, options))
}

export async function postDatabasesMysqlInstances(
  args: InferRequestType<typeof client.databases.mysql.instances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mysql.instances.$post(args, options))
}

export async function getDatabasesMysqlInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mysql.instances[':instanceId'].$get(args, options))
}

export async function putDatabasesMysqlInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mysql.instances[':instanceId'].$put(args, options))
}

export async function deleteDatabasesMysqlInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.mysql.instances[':instanceId'].$delete(args, options))
}

export async function getDatabasesMysqlInstancesInstanceIdBackups(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].backups.$get(args, options),
  )
}

export async function postDatabasesMysqlInstancesInstanceIdBackups(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].backups.$post(args, options),
  )
}

export async function getDatabasesMysqlInstancesInstanceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].backups[':backupId'].$get(args, options),
  )
}

export async function deleteDatabasesMysqlInstancesInstanceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].backups[':backupId'].$delete(args, options),
  )
}

export async function postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].backups[':backupId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function getDatabasesMysqlInstancesInstanceIdCredentials(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].credentials.$get(args, options),
  )
}

export async function postDatabasesMysqlInstancesInstanceIdCredentialsReset(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['credentials']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].credentials.reset.$post(args, options),
  )
}

export async function postDatabasesMysqlInstancesInstanceIdPatch(
  args: InferRequestType<
    (typeof client.databases.mysql.instances)[':instanceId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].patch.$post(args, options),
  )
}

export async function getDatabasesMysqlInstancesInstanceIdSsl(
  args: InferRequestType<(typeof client.databases.mysql.instances)[':instanceId']['ssl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.mysql.instances[':instanceId'].ssl.$get(args, options),
  )
}

export async function getDatabasesPostgresqlInstances(
  args: InferRequestType<typeof client.databases.postgresql.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.postgresql.instances.$get(args, options))
}

export async function postDatabasesPostgresqlInstances(
  args: InferRequestType<typeof client.databases.postgresql.instances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.postgresql.instances.$post(args, options))
}

export async function getDatabasesPostgresqlInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].$get(args, options),
  )
}

export async function putDatabasesPostgresqlInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].$put(args, options),
  )
}

export async function deleteDatabasesPostgresqlInstancesInstanceId(
  args: InferRequestType<(typeof client.databases.postgresql.instances)[':instanceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].$delete(args, options),
  )
}

export async function getDatabasesPostgresqlInstancesInstanceIdBackups(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].backups.$get(args, options),
  )
}

export async function postDatabasesPostgresqlInstancesInstanceIdBackups(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].backups.$post(args, options),
  )
}

export async function getDatabasesPostgresqlInstancesInstanceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$get(args, options),
  )
}

export async function deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].backups[':backupId'].$delete(
      args,
      options,
    ),
  )
}

export async function postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['backups'][':backupId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].backups[':backupId'].restore.$post(
      args,
      options,
    ),
  )
}

export async function getDatabasesPostgresqlInstancesInstanceIdCredentials(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].credentials.$get(args, options),
  )
}

export async function postDatabasesPostgresqlInstancesInstanceIdCredentialsReset(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['credentials']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].credentials.reset.$post(args, options),
  )
}

export async function postDatabasesPostgresqlInstancesInstanceIdPatch(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['patch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].patch.$post(args, options),
  )
}

export async function getDatabasesPostgresqlInstancesInstanceIdSsl(
  args: InferRequestType<
    (typeof client.databases.postgresql.instances)[':instanceId']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.databases.postgresql.instances[':instanceId'].ssl.$get(args, options),
  )
}

export async function getDatabasesTypes(
  args: InferRequestType<typeof client.databases.types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.types.$get(args, options))
}

export async function getDatabasesTypesTypeId(
  args: InferRequestType<(typeof client.databases.types)[':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.databases.types[':typeId'].$get(args, options))
}

export async function getDomains(
  args: InferRequestType<typeof client.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$get(args, options))
}

export async function postDomains(
  args: InferRequestType<typeof client.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$post(args, options))
}

export async function postDomainsImport(
  args: InferRequestType<typeof client.domains.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.import.$post(args, options))
}

export async function getDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].$get(args, options))
}

export async function putDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domainId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].$put(args, options))
}

export async function deleteDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domainId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].$delete(args, options))
}

export async function postDomainsDomainIdClone(
  args: InferRequestType<(typeof client.domains)[':domainId']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].clone.$post(args, options))
}

export async function getDomainsDomainIdRecords(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].records.$get(args, options))
}

export async function postDomainsDomainIdRecords(
  args: InferRequestType<(typeof client.domains)[':domainId']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].records.$post(args, options))
}

export async function getDomainsDomainIdRecordsRecordId(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].records[':recordId'].$get(args, options))
}

export async function putDomainsDomainIdRecordsRecordId(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId'].records[':recordId'].$put(args, options))
}

export async function deleteDomainsDomainIdRecordsRecordId(
  args: InferRequestType<(typeof client.domains)[':domainId']['records'][':recordId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':domainId'].records[':recordId'].$delete(args, options),
  )
}

export async function getDomainsDomainIdZoneFile(
  args: InferRequestType<(typeof client.domains)[':domainId']['zone-file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domainId']['zone-file'].$get(args, options))
}

export async function getImages(
  args: InferRequestType<typeof client.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$get(args, options))
}

export async function postImages(
  args: InferRequestType<typeof client.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.$post(args, options))
}

export async function postImagesUpload(
  args: InferRequestType<typeof client.images.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images.upload.$post(args, options))
}

export async function getImagesImageId(
  args: InferRequestType<(typeof client.images)[':imageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageId'].$get(args, options))
}

export async function putImagesImageId(
  args: InferRequestType<(typeof client.images)[':imageId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageId'].$put(args, options))
}

export async function deleteImagesImageId(
  args: InferRequestType<(typeof client.images)[':imageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.images[':imageId'].$delete(args, options))
}

export async function getLinodeInstances(
  args: InferRequestType<typeof client.linode.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances.$get(args, options))
}

export async function postLinodeInstances(
  args: InferRequestType<typeof client.linode.instances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances.$post(args, options))
}

export async function getLinodeInstancesLinodeId(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].$get(args, options))
}

export async function putLinodeInstancesLinodeId(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].$put(args, options))
}

export async function deleteLinodeInstancesLinodeId(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].$delete(args, options))
}

export async function getLinodeInstancesLinodeIdBackups(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].backups.$get(args, options))
}

export async function postLinodeInstancesLinodeIdBackups(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['backups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].backups.$post(args, options))
}

export async function postLinodeInstancesLinodeIdBackupsCancel(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].backups.cancel.$post(args, options),
  )
}

export async function postLinodeInstancesLinodeIdBackupsEnable(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].backups.enable.$post(args, options),
  )
}

export async function getLinodeInstancesLinodeIdBackupsBackupId(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].backups[':backupId'].$get(args, options),
  )
}

export async function postLinodeInstancesLinodeIdBackupsBackupIdRestore(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['backups'][':backupId']['restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].backups[':backupId'].restore.$post(args, options),
  )
}

export async function postLinodeInstancesLinodeIdBoot(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['boot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].boot.$post(args, options))
}

export async function postLinodeInstancesLinodeIdClone(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].clone.$post(args, options))
}

export async function getLinodeInstancesLinodeIdConfigs(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].configs.$get(args, options))
}

export async function postLinodeInstancesLinodeIdConfigs(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].configs.$post(args, options))
}

export async function getLinodeInstancesLinodeIdConfigsConfigId(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].configs[':configId'].$get(args, options),
  )
}

export async function putLinodeInstancesLinodeIdConfigsConfigId(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].configs[':configId'].$put(args, options),
  )
}

export async function deleteLinodeInstancesLinodeIdConfigsConfigId(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['configs'][':configId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].configs[':configId'].$delete(args, options),
  )
}

export async function getLinodeInstancesLinodeIdDisks(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].disks.$get(args, options))
}

export async function postLinodeInstancesLinodeIdDisks(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].disks.$post(args, options))
}

export async function getLinodeInstancesLinodeIdDisksDiskId(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].disks[':diskId'].$get(args, options),
  )
}

export async function putLinodeInstancesLinodeIdDisksDiskId(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].disks[':diskId'].$put(args, options),
  )
}

export async function deleteLinodeInstancesLinodeIdDisksDiskId(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].disks[':diskId'].$delete(args, options),
  )
}

export async function postLinodeInstancesLinodeIdDisksDiskIdClone(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].disks[':diskId'].clone.$post(args, options),
  )
}

export async function postLinodeInstancesLinodeIdDisksDiskIdPassword(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['password']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].disks[':diskId'].password.$post(args, options),
  )
}

export async function postLinodeInstancesLinodeIdDisksDiskIdResize(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['disks'][':diskId']['resize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].disks[':diskId'].resize.$post(args, options),
  )
}

export async function getLinodeInstancesLinodeIdFirewalls(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].firewalls.$get(args, options))
}

export async function getLinodeInstancesLinodeIdIps(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].ips.$get(args, options))
}

export async function postLinodeInstancesLinodeIdIps(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].ips.$post(args, options))
}

export async function getLinodeInstancesLinodeIdIpsAddress(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].ips[':address'].$get(args, options),
  )
}

export async function putLinodeInstancesLinodeIdIpsAddress(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['ips'][':address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].ips[':address'].$put(args, options),
  )
}

export async function deleteLinodeInstancesLinodeIdIpsAddress(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['ips'][':address']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].ips[':address'].$delete(args, options),
  )
}

export async function postLinodeInstancesLinodeIdMigrate(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['migrate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].migrate.$post(args, options))
}

export async function postLinodeInstancesLinodeIdMutate(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['mutate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].mutate.$post(args, options))
}

export async function getLinodeInstancesLinodeIdNodebalancers(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['nodebalancers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].nodebalancers.$get(args, options))
}

export async function postLinodeInstancesLinodeIdPassword(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].password.$post(args, options))
}

export async function postLinodeInstancesLinodeIdReboot(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['reboot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].reboot.$post(args, options))
}

export async function postLinodeInstancesLinodeIdRebuild(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['rebuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].rebuild.$post(args, options))
}

export async function postLinodeInstancesLinodeIdRescue(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['rescue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].rescue.$post(args, options))
}

export async function postLinodeInstancesLinodeIdResize(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].resize.$post(args, options))
}

export async function postLinodeInstancesLinodeIdShutdown(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['shutdown']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].shutdown.$post(args, options))
}

export async function getLinodeInstancesLinodeIdStats(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].stats.$get(args, options))
}

export async function getLinodeInstancesLinodeIdStatsYearMonth(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['stats'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].stats[':year'][':month'].$get(args, options),
  )
}

export async function getLinodeInstancesLinodeIdTransfer(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].transfer.$get(args, options))
}

export async function getLinodeInstancesLinodeIdTransferYearMonth(
  args: InferRequestType<
    (typeof client.linode.instances)[':linodeId']['transfer'][':year'][':month']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.linode.instances[':linodeId'].transfer[':year'][':month'].$get(args, options),
  )
}

export async function getLinodeInstancesLinodeIdVolumes(
  args: InferRequestType<(typeof client.linode.instances)[':linodeId']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.instances[':linodeId'].volumes.$get(args, options))
}

export async function getLinodeKernels(
  args: InferRequestType<typeof client.linode.kernels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.kernels.$get(args, options))
}

export async function getLinodeKernelsKernelId(
  args: InferRequestType<(typeof client.linode.kernels)[':kernelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.kernels[':kernelId'].$get(args, options))
}

export async function getLinodeStackscripts(
  args: InferRequestType<typeof client.linode.stackscripts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.stackscripts.$get(args, options))
}

export async function postLinodeStackscripts(
  args: InferRequestType<typeof client.linode.stackscripts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.stackscripts.$post(args, options))
}

export async function getLinodeStackscriptsStackscriptId(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.stackscripts[':stackscriptId'].$get(args, options))
}

export async function putLinodeStackscriptsStackscriptId(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.stackscripts[':stackscriptId'].$put(args, options))
}

export async function deleteLinodeStackscriptsStackscriptId(
  args: InferRequestType<(typeof client.linode.stackscripts)[':stackscriptId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.stackscripts[':stackscriptId'].$delete(args, options))
}

export async function getLinodeTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.linode.types.$get(undefined, options))
}

export async function getLinodeTypesTypeId(
  args: InferRequestType<(typeof client.linode.types)[':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.linode.types[':typeId'].$get(args, options))
}

export async function getLkeClusters(options?: ClientRequestOptions) {
  return await parseResponse(client.lke.clusters.$get(undefined, options))
}

export async function postLkeClusters(
  args: InferRequestType<typeof client.lke.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters.$post(args, options))
}

export async function getLkeClustersClusterId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].$get(args, options))
}

export async function putLkeClustersClusterId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].$put(args, options))
}

export async function deleteLkeClustersClusterId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].$delete(args, options))
}

export async function getLkeClustersClusterIdApiEndpoints(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['api-endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId']['api-endpoints'].$get(args, options))
}

export async function getLkeClustersClusterIdDashboard(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].dashboard.$get(args, options))
}

export async function getLkeClustersClusterIdKubeconfig(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$get(args, options))
}

export async function deleteLkeClustersClusterIdKubeconfig(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['kubeconfig']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].kubeconfig.$delete(args, options))
}

export async function getLkeClustersClusterIdNodesNodeId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].nodes[':nodeId'].$get(args, options))
}

export async function deleteLkeClustersClusterIdNodesNodeId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lke.clusters[':clusterId'].nodes[':nodeId'].$delete(args, options),
  )
}

export async function postLkeClustersClusterIdNodesNodeIdRecycle(
  args: InferRequestType<
    (typeof client.lke.clusters)[':clusterId']['nodes'][':nodeId']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lke.clusters[':clusterId'].nodes[':nodeId'].recycle.$post(args, options),
  )
}

export async function getLkeClustersClusterIdPools(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].pools.$get(args, options))
}

export async function postLkeClustersClusterIdPools(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].pools.$post(args, options))
}

export async function getLkeClustersClusterIdPoolsPoolId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$get(args, options))
}

export async function putLkeClustersClusterIdPoolsPoolId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].pools[':poolId'].$put(args, options))
}

export async function deleteLkeClustersClusterIdPoolsPoolId(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lke.clusters[':clusterId'].pools[':poolId'].$delete(args, options),
  )
}

export async function postLkeClustersClusterIdPoolsPoolIdRecycle(
  args: InferRequestType<
    (typeof client.lke.clusters)[':clusterId']['pools'][':poolId']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.lke.clusters[':clusterId'].pools[':poolId'].recycle.$post(args, options),
  )
}

export async function postLkeClustersClusterIdRecycle(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['recycle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].recycle.$post(args, options))
}

export async function postLkeClustersClusterIdRegenerate(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['regenerate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].regenerate.$post(args, options))
}

export async function deleteLkeClustersClusterIdServicetoken(
  args: InferRequestType<(typeof client.lke.clusters)[':clusterId']['servicetoken']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.clusters[':clusterId'].servicetoken.$delete(args, options))
}

export async function getLkeVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.lke.versions.$get(undefined, options))
}

export async function getLkeVersionsVersion(
  args: InferRequestType<(typeof client.lke.versions)[':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lke.versions[':version'].$get(args, options))
}

export async function getLongviewClients(
  args: InferRequestType<typeof client.longview.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.clients.$get(args, options))
}

export async function postLongviewClients(
  args: InferRequestType<typeof client.longview.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.clients.$post(args, options))
}

export async function getLongviewClientsClientId(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.clients[':clientId'].$get(args, options))
}

export async function putLongviewClientsClientId(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.clients[':clientId'].$put(args, options))
}

export async function deleteLongviewClientsClientId(
  args: InferRequestType<(typeof client.longview.clients)[':clientId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.clients[':clientId'].$delete(args, options))
}

export async function getLongviewPlan(options?: ClientRequestOptions) {
  return await parseResponse(client.longview.plan.$get(undefined, options))
}

export async function putLongviewPlan(
  args: InferRequestType<typeof client.longview.plan.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.plan.$put(args, options))
}

export async function getLongviewSubscriptions(
  args: InferRequestType<typeof client.longview.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.subscriptions.$get(args, options))
}

export async function getLongviewSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.longview.subscriptions)[':subscriptionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.longview.subscriptions[':subscriptionId'].$get(args, options))
}

export async function getManagedContacts(
  args: InferRequestType<typeof client.managed.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.contacts.$get(args, options))
}

export async function postManagedContacts(
  args: InferRequestType<typeof client.managed.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.contacts.$post(args, options))
}

export async function getManagedContactsContactId(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.contacts[':contactId'].$get(args, options))
}

export async function putManagedContactsContactId(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.contacts[':contactId'].$put(args, options))
}

export async function deleteManagedContactsContactId(
  args: InferRequestType<(typeof client.managed.contacts)[':contactId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.contacts[':contactId'].$delete(args, options))
}

export async function getManagedCredentials(
  args: InferRequestType<typeof client.managed.credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.credentials.$get(args, options))
}

export async function postManagedCredentials(
  args: InferRequestType<typeof client.managed.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.credentials.$post(args, options))
}

export async function getManagedCredentialsSshkey(options?: ClientRequestOptions) {
  return await parseResponse(client.managed.credentials.sshkey.$get(undefined, options))
}

export async function getManagedCredentialsCredentialId(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.credentials[':credentialId'].$get(args, options))
}

export async function putManagedCredentialsCredentialId(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.credentials[':credentialId'].$put(args, options))
}

export async function postManagedCredentialsCredentialIdRevoke(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed.credentials[':credentialId'].revoke.$post(args, options),
  )
}

export async function postManagedCredentialsCredentialIdUpdate(
  args: InferRequestType<(typeof client.managed.credentials)[':credentialId']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.managed.credentials[':credentialId'].update.$post(args, options),
  )
}

export async function getManagedIssues(
  args: InferRequestType<typeof client.managed.issues.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.issues.$get(args, options))
}

export async function getManagedIssuesIssueId(
  args: InferRequestType<(typeof client.managed.issues)[':issueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.issues[':issueId'].$get(args, options))
}

export async function getManagedLinodeSettings(
  args: InferRequestType<(typeof client.managed)['linode-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed['linode-settings'].$get(args, options))
}

export async function getManagedLinodeSettingsLinodeId(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed['linode-settings'][':linodeId'].$get(args, options))
}

export async function putManagedLinodeSettingsLinodeId(
  args: InferRequestType<(typeof client.managed)['linode-settings'][':linodeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed['linode-settings'][':linodeId'].$put(args, options))
}

export async function getManagedServices(options?: ClientRequestOptions) {
  return await parseResponse(client.managed.services.$get(undefined, options))
}

export async function postManagedServices(
  args: InferRequestType<typeof client.managed.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.services.$post(args, options))
}

export async function getManagedServicesServiceId(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.services[':serviceId'].$get(args, options))
}

export async function putManagedServicesServiceId(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.services[':serviceId'].$put(args, options))
}

export async function deleteManagedServicesServiceId(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.services[':serviceId'].$delete(args, options))
}

export async function postManagedServicesServiceIdDisable(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.services[':serviceId'].disable.$post(args, options))
}

export async function postManagedServicesServiceIdEnable(
  args: InferRequestType<(typeof client.managed.services)[':serviceId']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.managed.services[':serviceId'].enable.$post(args, options))
}

export async function getManagedStats(options?: ClientRequestOptions) {
  return await parseResponse(client.managed.stats.$get(undefined, options))
}

export async function getNetworkingFirewalls(
  args: InferRequestType<typeof client.networking.firewalls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls.$get(args, options))
}

export async function postNetworkingFirewalls(
  args: InferRequestType<typeof client.networking.firewalls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls.$post(args, options))
}

export async function getNetworkingFirewallsFirewallId(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls[':firewallId'].$get(args, options))
}

export async function putNetworkingFirewallsFirewallId(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls[':firewallId'].$put(args, options))
}

export async function deleteNetworkingFirewallsFirewallId(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls[':firewallId'].$delete(args, options))
}

export async function getNetworkingFirewallsFirewallIdDevices(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls[':firewallId'].devices.$get(args, options))
}

export async function postNetworkingFirewallsFirewallIdDevices(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networking.firewalls[':firewallId'].devices.$post(args, options),
  )
}

export async function getNetworkingFirewallsFirewallIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networking.firewalls[':firewallId'].devices[':deviceId'].$get(args, options),
  )
}

export async function deleteNetworkingFirewallsFirewallIdDevicesDeviceId(
  args: InferRequestType<
    (typeof client.networking.firewalls)[':firewallId']['devices'][':deviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networking.firewalls[':firewallId'].devices[':deviceId'].$delete(args, options),
  )
}

export async function getNetworkingFirewallsFirewallIdRules(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls[':firewallId'].rules.$get(args, options))
}

export async function putNetworkingFirewallsFirewallIdRules(
  args: InferRequestType<(typeof client.networking.firewalls)[':firewallId']['rules']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.firewalls[':firewallId'].rules.$put(args, options))
}

export async function getNetworkingIps(options?: ClientRequestOptions) {
  return await parseResponse(client.networking.ips.$get(undefined, options))
}

export async function postNetworkingIps(
  args: InferRequestType<typeof client.networking.ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ips.$post(args, options))
}

export async function postNetworkingIpsAssign(
  args: InferRequestType<typeof client.networking.ips.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ips.assign.$post(args, options))
}

export async function postNetworkingIpsShare(
  args: InferRequestType<typeof client.networking.ips.share.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ips.share.$post(args, options))
}

export async function getNetworkingIpsAddress(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ips[':address'].$get(args, options))
}

export async function putNetworkingIpsAddress(
  args: InferRequestType<(typeof client.networking.ips)[':address']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ips[':address'].$put(args, options))
}

export async function postNetworkingIpv4Assign(
  args: InferRequestType<typeof client.networking.ipv4.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv4.assign.$post(args, options))
}

export async function postNetworkingIpv4Share(
  args: InferRequestType<typeof client.networking.ipv4.share.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv4.share.$post(args, options))
}

export async function getNetworkingIpv6Pools(
  args: InferRequestType<typeof client.networking.ipv6.pools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv6.pools.$get(args, options))
}

export async function getNetworkingIpv6Ranges(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv6.ranges.$get(args, options))
}

export async function postNetworkingIpv6Ranges(
  args: InferRequestType<typeof client.networking.ipv6.ranges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv6.ranges.$post(args, options))
}

export async function getNetworkingIpv6RangesRange(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv6.ranges[':range'].$get(args, options))
}

export async function deleteNetworkingIpv6RangesRange(
  args: InferRequestType<(typeof client.networking.ipv6.ranges)[':range']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.ipv6.ranges[':range'].$delete(args, options))
}

export async function getNetworkingVlans(
  args: InferRequestType<typeof client.networking.vlans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networking.vlans.$get(args, options))
}

export async function getNodebalancers(
  args: InferRequestType<typeof client.nodebalancers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers.$get(args, options))
}

export async function postNodebalancers(
  args: InferRequestType<typeof client.nodebalancers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers.$post(args, options))
}

export async function getNodebalancersNodeBalancerId(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers[':nodeBalancerId'].$get(args, options))
}

export async function putNodebalancersNodeBalancerId(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers[':nodeBalancerId'].$put(args, options))
}

export async function deleteNodebalancersNodeBalancerId(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers[':nodeBalancerId'].$delete(args, options))
}

export async function getNodebalancersNodeBalancerIdConfigs(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$get(args, options))
}

export async function postNodebalancersNodeBalancerIdConfigs(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers[':nodeBalancerId'].configs.$post(args, options))
}

export async function getNodebalancersNodeBalancerIdConfigsConfigId(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].$get(args, options),
  )
}

export async function putNodebalancersNodeBalancerIdConfigsConfigId(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].$put(args, options),
  )
}

export async function deleteNodebalancersNodeBalancerIdConfigsConfigId(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].$delete(args, options),
  )
}

export async function getNodebalancersNodeBalancerIdConfigsConfigIdNodes(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$get(args, options),
  )
}

export async function postNodebalancersNodeBalancerIdConfigsConfigIdNodes(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes.$post(args, options),
  )
}

export async function getNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$get(
      args,
      options,
    ),
  )
}

export async function putNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteNodebalancersNodeBalancerIdConfigsConfigIdNodesNodeId(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['nodes'][':nodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].nodes[':nodeId'].$delete(
      args,
      options,
    ),
  )
}

export async function postNodebalancersNodeBalancerIdConfigsConfigIdRebuild(
  args: InferRequestType<
    (typeof client.nodebalancers)[':nodeBalancerId']['configs'][':configId']['rebuild']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodebalancers[':nodeBalancerId'].configs[':configId'].rebuild.$post(args, options),
  )
}

export async function getNodebalancersNodeBalancerIdStats(
  args: InferRequestType<(typeof client.nodebalancers)[':nodeBalancerId']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodebalancers[':nodeBalancerId'].stats.$get(args, options))
}

export async function getObjectStorageBuckets(options?: ClientRequestOptions) {
  return await parseResponse(client['object-storage'].buckets.$get(undefined, options))
}

export async function postObjectStorageBuckets(
  args: InferRequestType<(typeof client)['object-storage']['buckets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].buckets.$post(args, options))
}

export async function getObjectStorageBucketsClusterId(
  args: InferRequestType<(typeof client)['object-storage']['buckets'][':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].buckets[':clusterId'].$get(args, options))
}

export async function getObjectStorageBucketsClusterIdBucket(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].$get(args, options),
  )
}

export async function deleteObjectStorageBucketsClusterIdBucket(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].$delete(args, options),
  )
}

export async function putObjectStorageBucketsClusterIdBucketAccess(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].access.$put(args, options),
  )
}

export async function postObjectStorageBucketsClusterIdBucketAccess(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['access']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].access.$post(args, options),
  )
}

export async function getObjectStorageBucketsClusterIdBucketObjectAcl(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$get(args, options),
  )
}

export async function putObjectStorageBucketsClusterIdBucketObjectAcl(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-acl']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket']['object-acl'].$put(args, options),
  )
}

export async function getObjectStorageBucketsClusterIdBucketObjectList(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket']['object-list'].$get(args, options),
  )
}

export async function postObjectStorageBucketsClusterIdBucketObjectUrl(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['object-url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket']['object-url'].$post(args, options),
  )
}

export async function getObjectStorageBucketsClusterIdBucketSsl(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$get(args, options),
  )
}

export async function postObjectStorageBucketsClusterIdBucketSsl(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$post(args, options),
  )
}

export async function deleteObjectStorageBucketsClusterIdBucketSsl(
  args: InferRequestType<
    (typeof client)['object-storage']['buckets'][':clusterId'][':bucket']['ssl']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['object-storage'].buckets[':clusterId'][':bucket'].ssl.$delete(args, options),
  )
}

export async function postObjectStorageCancel(options?: ClientRequestOptions) {
  return await parseResponse(client['object-storage'].cancel.$post(undefined, options))
}

export async function getObjectStorageClusters(options?: ClientRequestOptions) {
  return await parseResponse(client['object-storage'].clusters.$get(undefined, options))
}

export async function getObjectStorageClustersClusterId(
  args: InferRequestType<(typeof client)['object-storage']['clusters'][':clusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].clusters[':clusterId'].$get(args, options))
}

export async function getObjectStorageKeys(options?: ClientRequestOptions) {
  return await parseResponse(client['object-storage'].keys.$get(undefined, options))
}

export async function postObjectStorageKeys(
  args: InferRequestType<(typeof client)['object-storage']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].keys.$post(args, options))
}

export async function getObjectStorageKeysKeyId(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].keys[':keyId'].$get(args, options))
}

export async function putObjectStorageKeysKeyId(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].keys[':keyId'].$put(args, options))
}

export async function deleteObjectStorageKeysKeyId(
  args: InferRequestType<(typeof client)['object-storage']['keys'][':keyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['object-storage'].keys[':keyId'].$delete(args, options))
}

export async function getObjectStorageTransfer(options?: ClientRequestOptions) {
  return await parseResponse(client['object-storage'].transfer.$get(undefined, options))
}

export async function getProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.$get(undefined, options))
}

export async function putProfile(
  args: InferRequestType<typeof client.profile.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.$put(args, options))
}

export async function getProfileApps(
  args: InferRequestType<typeof client.profile.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.apps.$get(args, options))
}

export async function getProfileAppsAppId(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.apps[':appId'].$get(args, options))
}

export async function deleteProfileAppsAppId(
  args: InferRequestType<(typeof client.profile.apps)[':appId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.apps[':appId'].$delete(args, options))
}

export async function getProfileDevices(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.devices.$get(undefined, options))
}

export async function getProfileDevicesDeviceId(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.devices[':deviceId'].$get(args, options))
}

export async function deleteProfileDevicesDeviceId(
  args: InferRequestType<(typeof client.profile.devices)[':deviceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.devices[':deviceId'].$delete(args, options))
}

export async function getProfileGrants(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.grants.$get(undefined, options))
}

export async function getProfileLogins(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.logins.$get(undefined, options))
}

export async function getProfileLoginsLoginId(
  args: InferRequestType<(typeof client.profile.logins)[':loginId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.logins[':loginId'].$get(args, options))
}

export async function postProfilePhoneNumber(
  args: InferRequestType<(typeof client.profile)['phone-number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile['phone-number'].$post(args, options))
}

export async function deleteProfilePhoneNumber(options?: ClientRequestOptions) {
  return await parseResponse(client.profile['phone-number'].$delete(undefined, options))
}

export async function postProfilePhoneNumberVerify(
  args: InferRequestType<(typeof client.profile)['phone-number']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile['phone-number'].verify.$post(args, options))
}

export async function getProfilePreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.preferences.$get(undefined, options))
}

export async function putProfilePreferences(
  args: InferRequestType<typeof client.profile.preferences.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.preferences.$put(args, options))
}

export async function getProfileSecurityQuestions(options?: ClientRequestOptions) {
  return await parseResponse(client.profile['security-questions'].$get(undefined, options))
}

export async function postProfileSecurityQuestions(
  args: InferRequestType<(typeof client.profile)['security-questions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile['security-questions'].$post(args, options))
}

export async function getProfileSshkeys(
  args: InferRequestType<typeof client.profile.sshkeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.sshkeys.$get(args, options))
}

export async function postProfileSshkeys(
  args: InferRequestType<typeof client.profile.sshkeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.sshkeys.$post(args, options))
}

export async function getProfileSshkeysSshKeyId(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.sshkeys[':sshKeyId'].$get(args, options))
}

export async function putProfileSshkeysSshKeyId(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.sshkeys[':sshKeyId'].$put(args, options))
}

export async function deleteProfileSshkeysSshKeyId(
  args: InferRequestType<(typeof client.profile.sshkeys)[':sshKeyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.sshkeys[':sshKeyId'].$delete(args, options))
}

export async function postProfileTfaDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.profile['tfa-disable'].$post(undefined, options))
}

export async function postProfileTfaEnable(options?: ClientRequestOptions) {
  return await parseResponse(client.profile['tfa-enable'].$post(undefined, options))
}

export async function postProfileTfaEnableConfirm(
  args: InferRequestType<(typeof client.profile)['tfa-enable-confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile['tfa-enable-confirm'].$post(args, options))
}

export async function getProfileTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.tokens.$get(undefined, options))
}

export async function postProfileTokens(
  args: InferRequestType<typeof client.profile.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.tokens.$post(args, options))
}

export async function getProfileTokensTokenId(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.tokens[':tokenId'].$get(args, options))
}

export async function putProfileTokensTokenId(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.tokens[':tokenId'].$put(args, options))
}

export async function deleteProfileTokensTokenId(
  args: InferRequestType<(typeof client.profile.tokens)[':tokenId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile.tokens[':tokenId'].$delete(args, options))
}

export async function getRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.regions.$get(undefined, options))
}

export async function getRegionsRegionId(
  args: InferRequestType<(typeof client.regions)[':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regions[':regionId'].$get(args, options))
}

export async function getSupportTickets(
  args: InferRequestType<typeof client.support.tickets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets.$get(args, options))
}

export async function postSupportTickets(
  args: InferRequestType<typeof client.support.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets.$post(args, options))
}

export async function getSupportTicketsTicketId(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets[':ticketId'].$get(args, options))
}

export async function postSupportTicketsTicketIdAttachments(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets[':ticketId'].attachments.$post(args, options))
}

export async function postSupportTicketsTicketIdClose(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets[':ticketId'].close.$post(args, options))
}

export async function getSupportTicketsTicketIdReplies(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets[':ticketId'].replies.$get(args, options))
}

export async function postSupportTicketsTicketIdReplies(
  args: InferRequestType<(typeof client.support.tickets)[':ticketId']['replies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.support.tickets[':ticketId'].replies.$post(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function getTagsLabel(
  args: InferRequestType<(typeof client.tags)[':label']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':label'].$get(args, options))
}

export async function deleteTagsLabel(
  args: InferRequestType<(typeof client.tags)[':label']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':label'].$delete(args, options))
}

export async function getVolumes(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$get(args, options))
}

export async function postVolumes(
  args: InferRequestType<typeof client.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes.$post(args, options))
}

export async function getVolumesVolumeId(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].$get(args, options))
}

export async function putVolumesVolumeId(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].$put(args, options))
}

export async function deleteVolumesVolumeId(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].$delete(args, options))
}

export async function postVolumesVolumeIdAttach(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].attach.$post(args, options))
}

export async function postVolumesVolumeIdClone(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['clone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].clone.$post(args, options))
}

export async function postVolumesVolumeIdDetach(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['detach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].detach.$post(args, options))
}

export async function postVolumesVolumeIdResize(
  args: InferRequestType<(typeof client.volumes)[':volumeId']['resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.volumes[':volumeId'].resize.$post(args, options))
}
