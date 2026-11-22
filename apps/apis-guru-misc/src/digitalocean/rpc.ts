import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV21Clicks(
  args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['1-clicks'].$get(args, options))
}

export async function postV21ClicksKubernetes(
  args: InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['1-clicks'].kubernetes.$post(args, options))
}

export async function getV2Account(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.account.$get(undefined, options))
}

export async function getV2AccountKeys(
  args: InferRequestType<typeof client.v2.account.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys.$get(args, options))
}

export async function postV2AccountKeys(
  args: InferRequestType<typeof client.v2.account.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys.$post(args, options))
}

export async function getV2AccountKeysSshKeyIdentifier(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys[':ssh_key_identifier'].$get(args, options))
}

export async function putV2AccountKeysSshKeyIdentifier(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys[':ssh_key_identifier'].$put(args, options))
}

export async function deleteV2AccountKeysSshKeyIdentifier(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.account.keys[':ssh_key_identifier'].$delete(args, options))
}

export async function getV2Actions(
  args: InferRequestType<typeof client.v2.actions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actions.$get(args, options))
}

export async function getV2ActionsActionId(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.actions[':action_id'].$get(args, options))
}

export async function getV2Apps(
  args: InferRequestType<typeof client.v2.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.$get(args, options))
}

export async function postV2Apps(
  args: InferRequestType<typeof client.v2.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.$post(args, options))
}

export async function postV2AppsMetricsBandwidthDaily(
  args: InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.metrics.bandwidth_daily.$post(args, options))
}

export async function postV2AppsPropose(
  args: InferRequestType<typeof client.v2.apps.propose.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.propose.$post(args, options))
}

export async function getV2AppsRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.apps.regions.$get(undefined, options))
}

export async function getV2AppsTiers(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.apps.tiers.$get(undefined, options))
}

export async function getV2AppsTiersInstanceSizes(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.apps.tiers.instance_sizes.$get(undefined, options))
}

export async function getV2AppsTiersInstanceSizesSlug(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.tiers.instance_sizes[':slug'].$get(args, options))
}

export async function getV2AppsTiersSlug(
  args: InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps.tiers[':slug'].$get(args, options))
}

export async function getV2AppsAppIdAlerts(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].alerts.$get(args, options))
}

export async function postV2AppsAppIdAlertsAlertIdDestinations(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].alerts[':alert_id'].destinations.$post(args, options),
  )
}

export async function getV2AppsAppIdComponentsComponentNameLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].components[':component_name'].logs.$get(args, options),
  )
}

export async function getV2AppsAppIdDeployments(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].deployments.$get(args, options))
}

export async function postV2AppsAppIdDeployments(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].deployments.$post(args, options))
}

export async function getV2AppsAppIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].$get(args, options),
  )
}

export async function postV2AppsAppIdDeploymentsDeploymentIdCancel(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].cancel.$post(args, options),
  )
}

export async function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].components[':component_name'].logs.$get(
      args,
      options,
    ),
  )
}

export async function getV2AppsAppIdDeploymentsDeploymentIdLogs(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(args, options),
  )
}

export async function getV2AppsAppIdLogs(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].logs.$get(args, options))
}

export async function getV2AppsAppIdMetricsBandwidthDaily(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(args, options))
}

export async function postV2AppsAppIdRollback(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.$post(args, options))
}

export async function postV2AppsAppIdRollbackCommit(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.commit.$post(args, options))
}

export async function postV2AppsAppIdRollbackRevert(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.revert.$post(args, options))
}

export async function postV2AppsAppIdRollbackValidate(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':app_id'].rollback.validate.$post(args, options))
}

export async function getV2AppsId(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':id'].$get(args, options))
}

export async function putV2AppsId(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':id'].$put(args, options))
}

export async function deleteV2AppsId(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.apps[':id'].$delete(args, options))
}

export async function getV2CdnEndpoints(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints.$get(args, options))
}

export async function postV2CdnEndpoints(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints.$post(args, options))
}

export async function getV2CdnEndpointsCdnId(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].$get(args, options))
}

export async function putV2CdnEndpointsCdnId(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].$put(args, options))
}

export async function deleteV2CdnEndpointsCdnId(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].$delete(args, options))
}

export async function deleteV2CdnEndpointsCdnIdCache(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cdn.endpoints[':cdn_id'].cache.$delete(args, options))
}

export async function getV2Certificates(
  args: InferRequestType<typeof client.v2.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates.$get(args, options))
}

export async function postV2Certificates(
  args: InferRequestType<typeof client.v2.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates.$post(args, options))
}

export async function getV2CertificatesCertificateId(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates[':certificate_id'].$get(args, options))
}

export async function deleteV2CertificatesCertificateId(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.certificates[':certificate_id'].$delete(args, options))
}

export async function getV2CustomersMyBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.customers.my.balance.$get(undefined, options))
}

export async function getV2CustomersMyBillingHistory(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.customers.my.billing_history.$get(undefined, options))
}

export async function getV2CustomersMyInvoices(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.my.invoices.$get(args, options))
}

export async function getV2CustomersMyInvoicesInvoiceUuid(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.my.invoices[':invoice_uuid'].$get(args, options))
}

export async function getV2CustomersMyInvoicesInvoiceUuidCsv(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(args, options),
  )
}

export async function getV2CustomersMyInvoicesInvoiceUuidPdf(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(args, options),
  )
}

export async function getV2CustomersMyInvoicesInvoiceUuidSummary(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(args, options),
  )
}

export async function getV2Databases(
  args: InferRequestType<typeof client.v2.databases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases.$get(args, options))
}

export async function postV2Databases(
  args: InferRequestType<typeof client.v2.databases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases.$post(args, options))
}

export async function getV2DatabasesOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.databases.options.$get(undefined, options))
}

export async function getV2DatabasesDatabaseClusterUuid(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].$get(args, options))
}

export async function deleteV2DatabasesDatabaseClusterUuid(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].$delete(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidBackups(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].backups.$get(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidCa(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].ca.$get(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidConfig(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].config.$get(args, options),
  )
}

export async function patchV2DatabasesDatabaseClusterUuidConfig(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].config.$patch(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidDbs(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$get(args, options))
}

export async function postV2DatabasesDatabaseClusterUuidDbs(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$post(args, options))
}

export async function getV2DatabasesDatabaseClusterUuidDbsDatabaseName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidDbsDatabaseName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$delete(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidEvictionPolicy(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidEvictionPolicy(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].eviction_policy.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidFirewall(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].firewall.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidFirewall(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].firewall.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidMaintenance(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].maintenance.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidMigrate(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].migrate.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidOnlineMigration(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['online-migration'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidOnlineMigration(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['online-migration'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationId(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid']['online-migration'][':migration_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2DatabasesDatabaseClusterUuidPools(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidPools(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidPoolsPoolName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidPoolsPoolName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$put(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidPoolsPoolName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$delete(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidReplicas(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidReplicas(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidReplicasReplicaName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidReplicasReplicaName(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$delete(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromote(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].promote.$put(
      args,
      options,
    ),
  )
}

export async function putV2DatabasesDatabaseClusterUuidResize(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].resize.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidSqlMode(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].sql_mode.$get(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidSqlMode(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].sql_mode.$put(args, options),
  )
}

export async function putV2DatabasesDatabaseClusterUuidUpgrade(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].upgrade.$put(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidUsers(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users.$get(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidUsers(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users.$post(args, options),
  )
}

export async function getV2DatabasesDatabaseClusterUuidUsersUsername(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].$get(args, options),
  )
}

export async function deleteV2DatabasesDatabaseClusterUuidUsersUsername(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].$delete(args, options),
  )
}

export async function postV2DatabasesDatabaseClusterUuidUsersUsernameResetAuth(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.databases[':database_cluster_uuid'].users[':username'].reset_auth.$post(
      args,
      options,
    ),
  )
}

export async function getV2Domains(
  args: InferRequestType<typeof client.v2.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains.$get(args, options))
}

export async function postV2Domains(
  args: InferRequestType<typeof client.v2.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains.$post(args, options))
}

export async function getV2DomainsDomainName(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].$get(args, options))
}

export async function deleteV2DomainsDomainName(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].$delete(args, options))
}

export async function getV2DomainsDomainNameRecords(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].records.$get(args, options))
}

export async function postV2DomainsDomainNameRecords(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.domains[':domain_name'].records.$post(args, options))
}

export async function getV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$get(args, options),
  )
}

export async function putV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$put(args, options),
  )
}

export async function deleteV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$delete(args, options),
  )
}

export async function patchV2DomainsDomainNameRecordsDomainRecordId(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.domains[':domain_name'].records[':domain_record_id'].$patch(args, options),
  )
}

export async function getV2Droplets(
  args: InferRequestType<typeof client.v2.droplets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.$get(args, options))
}

export async function postV2Droplets(
  args: InferRequestType<typeof client.v2.droplets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.$post(args, options))
}

export async function deleteV2Droplets(
  args: InferRequestType<typeof client.v2.droplets.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.$delete(args, options))
}

export async function postV2DropletsActions(
  args: InferRequestType<typeof client.v2.droplets.actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets.actions.$post(args, options))
}

export async function getV2DropletsDropletId(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].$get(args, options))
}

export async function deleteV2DropletsDropletId(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].$delete(args, options))
}

export async function getV2DropletsDropletIdActions(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].actions.$get(args, options))
}

export async function postV2DropletsDropletIdActions(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].actions.$post(args, options))
}

export async function getV2DropletsDropletIdActionsActionId(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2DropletsDropletIdBackups(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].backups.$get(args, options))
}

export async function getV2DropletsDropletIdDestroyWithAssociatedResources(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(args, options),
  )
}

export async function deleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerous(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.dangerous.$delete(
      args,
      options,
    ),
  )
}

export async function postV2DropletsDropletIdDestroyWithAssociatedResourcesRetry(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.retry.$post(args, options),
  )
}

export async function deleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelective(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.selective.$delete(
      args,
      options,
    ),
  )
}

export async function getV2DropletsDropletIdDestroyWithAssociatedResourcesStatus(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(args, options),
  )
}

export async function getV2DropletsDropletIdFirewalls(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].firewalls.$get(args, options))
}

export async function getV2DropletsDropletIdKernels(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].kernels.$get(args, options))
}

export async function getV2DropletsDropletIdNeighbors(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].neighbors.$get(args, options))
}

export async function getV2DropletsDropletIdSnapshots(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.droplets[':droplet_id'].snapshots.$get(args, options))
}

export async function getV2Firewalls(
  args: InferRequestType<typeof client.v2.firewalls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls.$get(args, options))
}

export async function postV2Firewalls(
  args: InferRequestType<typeof client.v2.firewalls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls.$post(args, options))
}

export async function getV2FirewallsFirewallId(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].$get(args, options))
}

export async function putV2FirewallsFirewallId(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].$put(args, options))
}

export async function deleteV2FirewallsFirewallId(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].$delete(args, options))
}

export async function postV2FirewallsFirewallIdDroplets(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].droplets.$post(args, options))
}

export async function deleteV2FirewallsFirewallIdDroplets(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].droplets.$delete(args, options))
}

export async function postV2FirewallsFirewallIdRules(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].rules.$post(args, options))
}

export async function deleteV2FirewallsFirewallIdRules(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].rules.$delete(args, options))
}

export async function postV2FirewallsFirewallIdTags(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].tags.$post(args, options))
}

export async function deleteV2FirewallsFirewallIdTags(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.firewalls[':firewall_id'].tags.$delete(args, options))
}

export async function getV2FloatingIps(
  args: InferRequestType<typeof client.v2.floating_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips.$get(args, options))
}

export async function postV2FloatingIps(
  args: InferRequestType<typeof client.v2.floating_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips.$post(args, options))
}

export async function getV2FloatingIpsFloatingIp(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].$get(args, options))
}

export async function deleteV2FloatingIpsFloatingIp(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].$delete(args, options))
}

export async function getV2FloatingIpsFloatingIpActions(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].actions.$get(args, options))
}

export async function postV2FloatingIpsFloatingIpActions(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.floating_ips[':floating_ip'].actions.$post(args, options))
}

export async function getV2FloatingIpsFloatingIpActionsActionId(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2FunctionsNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.functions.namespaces.$get(undefined, options))
}

export async function postV2FunctionsNamespaces(
  args: InferRequestType<typeof client.v2.functions.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.functions.namespaces.$post(args, options))
}

export async function getV2FunctionsNamespacesNamespaceId(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.functions.namespaces[':namespace_id'].$get(args, options))
}

export async function deleteV2FunctionsNamespacesNamespaceId(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.functions.namespaces[':namespace_id'].$delete(args, options))
}

export async function getV2FunctionsNamespacesNamespaceIdTriggers(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers.$get(args, options),
  )
}

export async function postV2FunctionsNamespacesNamespaceIdTriggers(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers.$post(args, options),
  )
}

export async function getV2FunctionsNamespacesNamespaceIdTriggersTriggerName(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(args, options),
  )
}

export async function putV2FunctionsNamespacesNamespaceIdTriggersTriggerName(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$put(args, options),
  )
}

export async function deleteV2FunctionsNamespacesNamespaceIdTriggersTriggerName(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2Images(
  args: InferRequestType<typeof client.v2.images.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.$get(args, options))
}

export async function postV2Images(
  args: InferRequestType<typeof client.v2.images.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images.$post(args, options))
}

export async function getV2ImagesImageId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].$get(args, options))
}

export async function putV2ImagesImageId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].$put(args, options))
}

export async function deleteV2ImagesImageId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].$delete(args, options))
}

export async function getV2ImagesImageIdActions(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].actions.$get(args, options))
}

export async function postV2ImagesImageIdActions(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.images[':image_id'].actions.$post(args, options))
}

export async function getV2ImagesImageIdActionsActionId(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.images[':image_id'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2KubernetesClusters(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters.$get(args, options))
}

export async function postV2KubernetesClusters(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters.$post(args, options))
}

export async function getV2KubernetesClustersClusterId(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$get(args, options))
}

export async function putV2KubernetesClustersClusterId(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$put(args, options))
}

export async function deleteV2KubernetesClustersClusterId(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$delete(args, options))
}

export async function getV2KubernetesClustersClusterIdClusterlint(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdClusterlint(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$post(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdCredentials(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdDestroyWithAssociatedResources(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(
      args,
      options,
    ),
  )
}

export async function deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerous(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[
      ':cluster_id'
    ].destroy_with_associated_resources.dangerous.$delete(args, options),
  )
}

export async function deleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelective(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[
      ':cluster_id'
    ].destroy_with_associated_resources.selective.$delete(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdKubeconfig(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdNodePools(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdNodePools(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools.$post(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(args, options),
  )
}

export async function putV2KubernetesClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$put(args, options),
  )
}

export async function deleteV2KubernetesClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$delete(args, options),
  )
}

export async function deleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeId(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].nodes[
      ':node_id'
    ].$delete(args, options),
  )
}

export async function postV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycle(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].recycle.$post(
      args,
      options,
    ),
  )
}

export async function postV2KubernetesClustersClusterIdUpgrade(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].upgrade.$post(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdUpgrades(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(args, options),
  )
}

export async function getV2KubernetesClustersClusterIdUser(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.clusters[':cluster_id'].user.$get(args, options))
}

export async function getV2KubernetesOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.kubernetes.options.$get(undefined, options))
}

export async function postV2KubernetesRegistry(
  args: InferRequestType<typeof client.v2.kubernetes.registry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.registry.$post(args, options))
}

export async function deleteV2KubernetesRegistry(
  args: InferRequestType<typeof client.v2.kubernetes.registry.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.kubernetes.registry.$delete(args, options))
}

export async function getV2LoadBalancers(
  args: InferRequestType<typeof client.v2.load_balancers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers.$get(args, options))
}

export async function postV2LoadBalancers(
  args: InferRequestType<typeof client.v2.load_balancers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers.$post(args, options))
}

export async function getV2LoadBalancersLbId(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].$get(args, options))
}

export async function putV2LoadBalancersLbId(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].$put(args, options))
}

export async function deleteV2LoadBalancersLbId(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].$delete(args, options))
}

export async function postV2LoadBalancersLbIdDroplets(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].droplets.$post(args, options))
}

export async function deleteV2LoadBalancersLbIdDroplets(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.load_balancers[':lb_id'].droplets.$delete(args, options))
}

export async function postV2LoadBalancersLbIdForwardingRules(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.load_balancers[':lb_id'].forwarding_rules.$post(args, options),
  )
}

export async function deleteV2LoadBalancersLbIdForwardingRules(
  args: InferRequestType<
    (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.load_balancers[':lb_id'].forwarding_rules.$delete(args, options),
  )
}

export async function getV2MonitoringAlerts(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts.$get(args, options))
}

export async function postV2MonitoringAlerts(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts.$post(args, options))
}

export async function getV2MonitoringAlertsAlertUuid(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$get(args, options))
}

export async function putV2MonitoringAlertsAlertUuid(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$put(args, options))
}

export async function deleteV2MonitoringAlertsAlertUuid(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$delete(args, options))
}

export async function getV2MonitoringMetricsDropletBandwidth(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.bandwidth.$get(args, options))
}

export async function getV2MonitoringMetricsDropletCpu(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.cpu.$get(args, options))
}

export async function getV2MonitoringMetricsDropletFilesystemFree(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet.filesystem_free.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletFilesystemSize(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet.filesystem_size.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletLoad1(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.load_1.$get(args, options))
}

export async function getV2MonitoringMetricsDropletLoad15(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.load_15.$get(args, options))
}

export async function getV2MonitoringMetricsDropletLoad5(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.load_5.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryAvailable(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.monitoring.metrics.droplet.memory_available.$get(args, options),
  )
}

export async function getV2MonitoringMetricsDropletMemoryCached(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.memory_cached.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryFree(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.memory_free.$get(args, options))
}

export async function getV2MonitoringMetricsDropletMemoryTotal(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.monitoring.metrics.droplet.memory_total.$get(args, options))
}

export async function getV2Projects(
  args: InferRequestType<typeof client.v2.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.$get(args, options))
}

export async function postV2Projects(
  args: InferRequestType<typeof client.v2.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.$post(args, options))
}

export async function getV2ProjectsDefault(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.projects.default.$get(undefined, options))
}

export async function putV2ProjectsDefault(
  args: InferRequestType<typeof client.v2.projects.default.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.default.$put(args, options))
}

export async function patchV2ProjectsDefault(
  args: InferRequestType<typeof client.v2.projects.default.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.default.$patch(args, options))
}

export async function getV2ProjectsDefaultResources(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.projects.default.resources.$get(undefined, options))
}

export async function postV2ProjectsDefaultResources(
  args: InferRequestType<typeof client.v2.projects.default.resources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects.default.resources.$post(args, options))
}

export async function getV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$get(args, options))
}

export async function putV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$put(args, options))
}

export async function deleteV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$delete(args, options))
}

export async function patchV2ProjectsProjectId(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].$patch(args, options))
}

export async function getV2ProjectsProjectIdResources(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].resources.$get(args, options))
}

export async function postV2ProjectsProjectIdResources(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.projects[':project_id'].resources.$post(args, options))
}

export async function getV2Regions(
  args: InferRequestType<typeof client.v2.regions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.regions.$get(args, options))
}

export async function getV2Registry(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.$get(undefined, options))
}

export async function postV2Registry(
  args: InferRequestType<typeof client.v2.registry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry.$post(args, options))
}

export async function deleteV2Registry(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.$delete(undefined, options))
}

export async function getV2RegistryDockerCredentials(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry['docker-credentials'].$get(args, options))
}

export async function getV2RegistryOptions(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.options.$get(undefined, options))
}

export async function getV2RegistrySubscription(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.registry.subscription.$get(undefined, options))
}

export async function postV2RegistrySubscription(
  args: InferRequestType<typeof client.v2.registry.subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry.subscription.$post(args, options))
}

export async function postV2RegistryValidateName(
  args: InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry['validate-name'].$post(args, options))
}

export async function getV2RegistryRegistryNameGarbageCollection(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collection'].$get(args, options),
  )
}

export async function postV2RegistryRegistryNameGarbageCollection(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collection'].$post(args, options),
  )
}

export async function putV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuid(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collection'][':garbage_collection_uuid'].$put(
      args,
      options,
    ),
  )
}

export async function getV2RegistryRegistryNameGarbageCollections(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name']['garbage-collections'].$get(args, options),
  )
}

export async function getV2RegistryRegistryNameRepositories(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.registry[':registry_name'].repositories.$get(args, options))
}

export async function getV2RegistryRegistryNameRepositoriesV2(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'].repositoriesV2.$get(args, options),
  )
}

export async function getV2RegistryRegistryNameRepositoryNameDigests(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'][':repository_name'].digests.$get(args, options),
  )
}

export async function deleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigest(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'][':repository_name'].digests[':manifest_digest'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2RegistryRegistryNameRepositoryNameTags(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'][':repository_name'].tags.$get(args, options),
  )
}

export async function deleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTag(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.registry[':registry_name'][':repository_name'].tags[':repository_tag'].$delete(
      args,
      options,
    ),
  )
}

export async function getV2ReportsDropletNeighborsIds(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.reports.droplet_neighbors_ids.$get(undefined, options))
}

export async function getV2ReservedIps(
  args: InferRequestType<typeof client.v2.reserved_ips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips.$get(args, options))
}

export async function postV2ReservedIps(
  args: InferRequestType<typeof client.v2.reserved_ips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips.$post(args, options))
}

export async function getV2ReservedIpsReservedIp(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].$get(args, options))
}

export async function deleteV2ReservedIpsReservedIp(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].$delete(args, options))
}

export async function getV2ReservedIpsReservedIpActions(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$get(args, options))
}

export async function postV2ReservedIpsReservedIpActions(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$post(args, options))
}

export async function getV2ReservedIpsReservedIpActionsActionId(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2Sizes(
  args: InferRequestType<typeof client.v2.sizes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sizes.$get(args, options))
}

export async function getV2Snapshots(
  args: InferRequestType<typeof client.v2.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.snapshots.$get(args, options))
}

export async function getV2SnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.snapshots[':snapshot_id'].$get(args, options))
}

export async function deleteV2SnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.snapshots[':snapshot_id'].$delete(args, options))
}

export async function getV2Tags(
  args: InferRequestType<typeof client.v2.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags.$get(args, options))
}

export async function postV2Tags(
  args: InferRequestType<typeof client.v2.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags.$post(args, options))
}

export async function getV2TagsTagId(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].$get(args, options))
}

export async function deleteV2TagsTagId(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].$delete(args, options))
}

export async function postV2TagsTagIdResources(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].resources.$post(args, options))
}

export async function deleteV2TagsTagIdResources(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.tags[':tag_id'].resources.$delete(args, options))
}

export async function getV2UptimeChecks(
  args: InferRequestType<typeof client.v2.uptime.checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks.$get(args, options))
}

export async function postV2UptimeChecks(
  args: InferRequestType<typeof client.v2.uptime.checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks.$post(args, options))
}

export async function getV2UptimeChecksCheckId(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].$get(args, options))
}

export async function putV2UptimeChecksCheckId(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].$put(args, options))
}

export async function deleteV2UptimeChecksCheckId(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].$delete(args, options))
}

export async function getV2UptimeChecksCheckIdAlerts(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].alerts.$get(args, options))
}

export async function postV2UptimeChecksCheckIdAlerts(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].alerts.$post(args, options))
}

export async function getV2UptimeChecksCheckIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(args, options),
  )
}

export async function putV2UptimeChecksCheckIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$put(args, options),
  )
}

export async function deleteV2UptimeChecksCheckIdAlertsAlertId(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$delete(args, options),
  )
}

export async function getV2UptimeChecksCheckIdState(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.uptime.checks[':check_id'].state.$get(args, options))
}

export async function getV2Volumes(
  args: InferRequestType<typeof client.v2.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.$get(args, options))
}

export async function postV2Volumes(
  args: InferRequestType<typeof client.v2.volumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.$post(args, options))
}

export async function deleteV2Volumes(
  args: InferRequestType<typeof client.v2.volumes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.$delete(args, options))
}

export async function postV2VolumesActions(
  args: InferRequestType<typeof client.v2.volumes.actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.actions.$post(args, options))
}

export async function getV2VolumesSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$get(args, options))
}

export async function deleteV2VolumesSnapshotsSnapshotId(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$delete(args, options))
}

export async function getV2VolumesVolumeId(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].$get(args, options))
}

export async function deleteV2VolumesVolumeId(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].$delete(args, options))
}

export async function getV2VolumesVolumeIdActions(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].actions.$get(args, options))
}

export async function postV2VolumesVolumeIdActions(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].actions.$post(args, options))
}

export async function getV2VolumesVolumeIdActionsActionId(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.volumes[':volume_id'].actions[':action_id'].$get(args, options),
  )
}

export async function getV2VolumesVolumeIdSnapshots(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].snapshots.$get(args, options))
}

export async function postV2VolumesVolumeIdSnapshots(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.volumes[':volume_id'].snapshots.$post(args, options))
}

export async function getV2Vpcs(
  args: InferRequestType<typeof client.v2.vpcs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs.$get(args, options))
}

export async function postV2Vpcs(
  args: InferRequestType<typeof client.v2.vpcs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs.$post(args, options))
}

export async function getV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$get(args, options))
}

export async function putV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$put(args, options))
}

export async function deleteV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$delete(args, options))
}

export async function patchV2VpcsVpcId(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].$patch(args, options))
}

export async function getV2VpcsVpcIdMembers(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.vpcs[':vpc_id'].members.$get(args, options))
}
