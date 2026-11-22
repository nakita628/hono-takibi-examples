import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getLoadBalancerIdServiceServiceId(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['load-balancer'][':id'].service[':service-id'].$get(args, options),
  )
}

export async function putLoadBalancerIdServiceServiceId(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['service'][':service-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['load-balancer'][':id'].service[':service-id'].$put(args, options),
  )
}

export async function deleteLoadBalancerIdServiceServiceId(
  args: InferRequestType<
    (typeof client)['load-balancer'][':id']['service'][':service-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['load-balancer'][':id'].service[':service-id'].$delete(args, options),
  )
}

export async function getDbaasExternalEndpointOpensearchEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$get(args, options),
  )
}

export async function putDbaasExternalEndpointOpensearchEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$put(args, options),
  )
}

export async function deleteDbaasExternalEndpointOpensearchEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-opensearch'][':endpoint-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-opensearch'][':endpoint-id'].$delete(args, options),
  )
}

export async function getDbaasOpensearchNameAclConfig(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':name']['acl-config'].$get(args, options))
}

export async function putDbaasOpensearchNameAclConfig(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['acl-config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':name']['acl-config'].$put(args, options))
}

export async function putInstancePoolIdScale(
  args: InferRequestType<(typeof client)['instance-pool'][':id:scale']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'][':id:scale'].$put(args, options))
}

export async function postInstanceIdCreateSnapshot(
  args: InferRequestType<(typeof client.instance)[':id:create-snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:create-snapshot'].$post(args, options))
}

export async function postDbaasValkeyNameMigrationStop(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['migration']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':name'].migration.stop.$post(args, options))
}

export async function getReverseDnsElasticIpId(
  args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reverse-dns']['elastic-ip'][':id'].$get(args, options))
}

export async function postReverseDnsElasticIpId(
  args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reverse-dns']['elastic-ip'][':id'].$post(args, options))
}

export async function deleteReverseDnsElasticIpId(
  args: InferRequestType<(typeof client)['reverse-dns']['elastic-ip'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reverse-dns']['elastic-ip'][':id'].$delete(args, options))
}

export async function getAntiAffinityGroup(options?: ClientRequestOptions) {
  return await parseResponse(client['anti-affinity-group'].$get(undefined, options))
}

export async function postAntiAffinityGroup(
  args: InferRequestType<(typeof client)['anti-affinity-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['anti-affinity-group'].$post(args, options))
}

export async function getUsageReport(
  args: InferRequestType<(typeof client)['usage-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['usage-report'].$get(args, options))
}

export async function getEvent(
  args: InferRequestType<typeof client.event.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event.$get(args, options))
}

export async function deleteSecurityGroupIdRulesRuleId(
  args: InferRequestType<(typeof client)['security-group'][':id']['rules'][':rule-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['security-group'][':id'].rules[':rule-id'].$delete(args, options),
  )
}

export async function putDbaasGrafanaNameMaintenanceStart(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['maintenance']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-grafana'][':name'].maintenance.start.$put(args, options))
}

export async function postKmsKeyIdDisableKeyRotation(
  args: InferRequestType<(typeof client)['kms-key'][':id']['disable-key-rotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['disable-key-rotation'].$post(args, options))
}

export async function postDbaasPostgresServiceUpgradeCheck(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':service']['upgrade-check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service']['upgrade-check'].$post(args, options),
  )
}

export async function putDbaasMysqlServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-mysql'][':service-name'].user[':username'].password.reset.$put(args, options),
  )
}

export async function getAiHelpInferenceEngineParameters(
  args: InferRequestType<(typeof client.ai.help)['inference-engine-parameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.help['inference-engine-parameters'].$get(args, options))
}

export async function getLoadBalancer(options?: ClientRequestOptions) {
  return await parseResponse(client['load-balancer'].$get(undefined, options))
}

export async function postLoadBalancer(
  args: InferRequestType<(typeof client)['load-balancer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['load-balancer'].$post(args, options))
}

export async function getSecurityGroup(
  args: InferRequestType<(typeof client)['security-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'].$get(args, options))
}

export async function postSecurityGroup(
  args: InferRequestType<(typeof client)['security-group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'].$post(args, options))
}

export async function postDbaasPostgresServiceNameConnectionPool(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['connection-pool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name']['connection-pool'].$post(args, options),
  )
}

export async function getDbaasMysqlName(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].$get(args, options))
}

export async function putDbaasMysqlName(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].$put(args, options))
}

export async function postDbaasMysqlName(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].$post(args, options))
}

export async function deleteDbaasMysqlName(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].$delete(args, options))
}

export async function putPrivateNetworkIdAttach(
  args: InferRequestType<(typeof client)['private-network'][':id:attach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id:attach'].$put(args, options))
}

export async function postIamRoleIdAssume(
  args: InferRequestType<(typeof client)['iam-role'][':id']['assume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-role'][':id'].assume.$post(args, options))
}

export async function putVpcVpcIdSubnetSubnetIdAttach(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['attach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].attach.$put(args, options))
}

export async function getKmsKeyId(
  args: InferRequestType<(typeof client)['kms-key'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].$get(args, options))
}

export async function putDbaasThanosNameMaintenanceStart(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['maintenance']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-thanos'][':name'].maintenance.start.$put(args, options))
}

export async function getDbaasExternalEndpointElasticsearchEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$get(args, options),
  )
}

export async function putDbaasExternalEndpointElasticsearchEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$put(args, options),
  )
}

export async function deleteDbaasExternalEndpointElasticsearchEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':endpoint-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-elasticsearch'][':endpoint-id'].$delete(args, options),
  )
}

export async function getAiModel(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.model.$get(undefined, options))
}

export async function postAiModel(
  args: InferRequestType<typeof client.ai.model.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.model.$post(args, options))
}

export async function postDbaasMysqlServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':service-name'].user.$post(args, options))
}

export async function getDbaasServiceType(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-service-type'].$get(undefined, options))
}

export async function postAiDeploymentIdScale(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['scale']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment[':id'].scale.$post(args, options))
}

export async function getInstanceTypeId(
  args: InferRequestType<(typeof client)['instance-type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-type'][':id'].$get(args, options))
}

export async function getDbaasClickhouseName(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':name'].$get(args, options))
}

export async function putDbaasClickhouseName(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':name'].$put(args, options))
}

export async function postDbaasClickhouseName(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':name'].$post(args, options))
}

export async function deleteDbaasClickhouseName(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':name'].$delete(args, options))
}

export async function getInstanceIdPassword(
  args: InferRequestType<(typeof client.instance)[':id:password']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:password'].$get(args, options))
}

export async function getSksTemplateKubeVersionVariant(
  args: InferRequestType<(typeof client)['sks-template'][':kube-version'][':variant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-template'][':kube-version'][':variant'].$get(args, options),
  )
}

export async function putInstanceIdResizeDisk(
  args: InferRequestType<(typeof client.instance)[':id:resize-disk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:resize-disk'].$put(args, options))
}

export async function getDbaasService(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-service'].$get(undefined, options))
}

export async function getElasticIp(options?: ClientRequestOptions) {
  return await parseResponse(client['elastic-ip'].$get(undefined, options))
}

export async function postElasticIp(
  args: InferRequestType<(typeof client)['elastic-ip']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'].$post(args, options))
}

export async function getZone(options?: ClientRequestOptions) {
  return await parseResponse(client.zone.$get(undefined, options))
}

export async function getInstancePool(options?: ClientRequestOptions) {
  return await parseResponse(client['instance-pool'].$get(undefined, options))
}

export async function postInstancePool(
  args: InferRequestType<(typeof client)['instance-pool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'].$post(args, options))
}

export async function postDbaasExternalEndpointRsyslogName(
  args: InferRequestType<(typeof client)['dbaas-external-endpoint-rsyslog'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-rsyslog'][':name'].$post(args, options),
  )
}

export async function postSksClusterKubeconfigId(
  args: InferRequestType<(typeof client)['sks-cluster-kubeconfig'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster-kubeconfig'][':id'].$post(args, options))
}

export async function getDnsDomainDomainIdRecord(
  args: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dns-domain'][':domain-id'].record.$get(args, options))
}

export async function postDnsDomainDomainIdRecord(
  args: InferRequestType<(typeof client)['dns-domain'][':domain-id']['record']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dns-domain'][':domain-id'].record.$post(args, options))
}

export async function getDbaasCaCertificate(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-ca-certificate'].$get(undefined, options))
}

export async function getDbaasSettingsGrafana(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-grafana'].$get(undefined, options))
}

export async function postEnvironmentalImpactEstimate(
  args: InferRequestType<(typeof client)['environmental-impact']['estimate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['environmental-impact'].estimate.$post(args, options))
}

export async function getDeployTarget(options?: ClientRequestOptions) {
  return await parseResponse(client['deploy-target'].$get(undefined, options))
}

export async function getInstanceType(options?: ClientRequestOptions) {
  return await parseResponse(client['instance-type'].$get(undefined, options))
}

export async function getAiDeployment(
  args: InferRequestType<typeof client.ai.deployment.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment.$get(args, options))
}

export async function postAiDeployment(
  args: InferRequestType<typeof client.ai.deployment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment.$post(args, options))
}

export async function getLiveBalance(options?: ClientRequestOptions) {
  return await parseResponse(client['live-balance'].$get(undefined, options))
}

export async function deleteDbaasPostgresServiceNameDatabaseDatabaseName(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['database'][':database-name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name'].database[':database-name'].$delete(args, options),
  )
}

export async function getDbaasClickhouseServiceNameRole(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':service-name'].role.$get(args, options))
}

export async function putBlockStorageIdAttach(
  args: InferRequestType<(typeof client)['block-storage'][':id:attach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id:attach'].$put(args, options))
}

export async function postKmsKeyIdEnable(
  args: InferRequestType<(typeof client)['kms-key'][':id']['enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].enable.$post(args, options))
}

export async function postDbaasPostgresNameMigrationStop(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['migration']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-postgres'][':name'].migration.stop.$post(args, options))
}

export async function getDbaasKafkaName(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':name'].$get(args, options))
}

export async function putDbaasKafkaName(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':name'].$put(args, options))
}

export async function postDbaasKafkaName(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':name'].$post(args, options))
}

export async function deleteDbaasKafkaName(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':name'].$delete(args, options))
}

export async function putInstanceIdResetPassword(
  args: InferRequestType<(typeof client.instance)[':id:reset-password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:reset-password'].$put(args, options))
}

export async function postDbaasKafkaNameSchemaRegistryAclConfig(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':name']['schema-registry']['acl-config'].$post(args, options),
  )
}

export async function putPrivateNetworkIdUpdateIp(
  args: InferRequestType<(typeof client)['private-network'][':id:update-ip']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id:update-ip'].$put(args, options))
}

export async function getVpcVpcIdRoute(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['route']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].route.$get(args, options))
}

export async function getSksClusterIdNodepoolSksNodepoolId(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$get(args, options),
  )
}

export async function putSksClusterIdNodepoolSksNodepoolId(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$put(args, options),
  )
}

export async function deleteSksClusterIdNodepoolSksNodepoolId(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id'].nodepool[':sks-nodepool-id'].$delete(args, options),
  )
}

export async function getBlockStorageSnapshotId(
  args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage-snapshot'][':id'].$get(args, options))
}

export async function putBlockStorageSnapshotId(
  args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage-snapshot'][':id'].$put(args, options))
}

export async function deleteBlockStorageSnapshotId(
  args: InferRequestType<(typeof client)['block-storage-snapshot'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage-snapshot'][':id'].$delete(args, options))
}

export async function getKmsKeyIdListKeyRotations(
  args: InferRequestType<(typeof client)['kms-key'][':id']['list-key-rotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['list-key-rotations'].$get(args, options))
}

export async function postDbaasPostgresServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-postgres'][':service-name'].user.$post(args, options))
}

export async function getDbaasExternalIntegrationsServiceName(
  args: InferRequestType<(typeof client)['dbaas-external-integrations'][':service-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-integrations'][':service-name'].$get(args, options),
  )
}

export async function getDbaasExternalIntegrationIntegrationId(
  args: InferRequestType<(typeof client)['dbaas-external-integration'][':integration-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-integration'][':integration-id'].$get(args, options),
  )
}

export async function getInstancePoolId(
  args: InferRequestType<(typeof client)['instance-pool'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'][':id'].$get(args, options))
}

export async function putInstancePoolId(
  args: InferRequestType<(typeof client)['instance-pool'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'][':id'].$put(args, options))
}

export async function deleteInstancePoolId(
  args: InferRequestType<(typeof client)['instance-pool'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'][':id'].$delete(args, options))
}

export async function getDbaasExternalEndpointTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-external-endpoint-types'].$get(undefined, options))
}

export async function getAiApiKeyId(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai['api-key'][':id'].$get(args, options))
}

export async function deleteAiApiKeyId(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai['api-key'][':id'].$delete(args, options))
}

export async function patchAiApiKeyId(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai['api-key'][':id'].$patch(args, options))
}

export async function getPrivateNetwork(options?: ClientRequestOptions) {
  return await parseResponse(client['private-network'].$get(undefined, options))
}

export async function postPrivateNetwork(
  args: InferRequestType<(typeof client)['private-network']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'].$post(args, options))
}

export async function getVpc(options?: ClientRequestOptions) {
  return await parseResponse(client.vpc.$get(undefined, options))
}

export async function postVpc(
  args: InferRequestType<typeof client.vpc.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc.$post(args, options))
}

export async function postAiApiKeyIdRotate(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai['api-key'][':id'].rotate.$post(args, options))
}

export async function putInstanceIdStart(
  args: InferRequestType<(typeof client.instance)[':id:start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:start'].$put(args, options))
}

export async function postInstanceIdEnableTpm(
  args: InferRequestType<(typeof client.instance)[':id:enable-tpm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:enable-tpm'].$post(args, options))
}

export async function getOrganization(options?: ClientRequestOptions) {
  return await parseResponse(client.organization.$get(undefined, options))
}

export async function getSecurityGroupId(
  args: InferRequestType<(typeof client)['security-group'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id'].$get(args, options))
}

export async function deleteSecurityGroupId(
  args: InferRequestType<(typeof client)['security-group'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id'].$delete(args, options))
}

export async function deleteDbaasClickhouseServiceNameRoleRoleUuid(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['role'][':role-uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-clickhouse'][':service-name'].role[':role-uuid'].$delete(args, options),
  )
}

export async function getSksClusterIdAuthorityAuthorityCert(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['authority'][':authority']['cert']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id'].authority[':authority'].cert.$get(args, options),
  )
}

export async function postSnapshotIdExport(
  args: InferRequestType<(typeof client.snapshot)[':id:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshot[':id:export'].$post(args, options))
}

export async function getAiDeploymentId(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment[':id'].$get(args, options))
}

export async function deleteAiDeploymentId(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment[':id'].$delete(args, options))
}

export async function patchAiDeploymentId(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment[':id'].$patch(args, options))
}

export async function getDbaasKafkaServiceNameConnectPasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['connect']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':service-name'].connect.password.reveal.$get(args, options),
  )
}

export async function postKmsKeyIdEnableKeyRotation(
  args: InferRequestType<(typeof client)['kms-key'][':id']['enable-key-rotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['enable-key-rotation'].$post(args, options))
}

export async function getVpcVpcIdSubnetSubnetIdRoute(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].route.$get(args, options))
}

export async function postVpcVpcIdSubnetSubnetIdRoute(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].route.$post(args, options))
}

export async function deleteElasticIpIdField(
  args: InferRequestType<(typeof client)['elastic-ip'][':id'][':field']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'][':id'][':field'].$delete(args, options))
}

export async function getQuotaEntity(
  args: InferRequestType<(typeof client.quota)[':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quota[':entity'].$get(args, options))
}

export async function getVpcVpcIdSubnet(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet.$get(args, options))
}

export async function postVpcVpcIdSubnet(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet.$post(args, options))
}

export async function getSksClusterDeprecatedResourcesId(
  args: InferRequestType<(typeof client)['sks-cluster-deprecated-resources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster-deprecated-resources'][':id'].$get(args, options))
}

export async function getBlockStorageId(
  args: InferRequestType<(typeof client)['block-storage'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id'].$get(args, options))
}

export async function putBlockStorageId(
  args: InferRequestType<(typeof client)['block-storage'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id'].$put(args, options))
}

export async function deleteBlockStorageId(
  args: InferRequestType<(typeof client)['block-storage'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id'].$delete(args, options))
}

export async function deleteDbaasOpensearchServiceNameUserUsername(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-opensearch'][':service-name'].user[':username'].$delete(args, options),
  )
}

export async function getDbaasExternalEndpointPrometheusEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$get(args, options),
  )
}

export async function putDbaasExternalEndpointPrometheusEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$put(args, options),
  )
}

export async function deleteDbaasExternalEndpointPrometheusEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-prometheus'][':endpoint-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-prometheus'][':endpoint-id'].$delete(args, options),
  )
}

export async function postBlockStorageIdCreateSnapshot(
  args: InferRequestType<(typeof client)['block-storage'][':id:create-snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id:create-snapshot'].$post(args, options))
}

export async function putPrivateNetworkIdDetach(
  args: InferRequestType<(typeof client)['private-network'][':id:detach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id:detach'].$put(args, options))
}

export async function getPrivateNetworkId(
  args: InferRequestType<(typeof client)['private-network'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id'].$get(args, options))
}

export async function putPrivateNetworkId(
  args: InferRequestType<(typeof client)['private-network'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id'].$put(args, options))
}

export async function deletePrivateNetworkId(
  args: InferRequestType<(typeof client)['private-network'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id'].$delete(args, options))
}

export async function getAiInstanceType(options?: ClientRequestOptions) {
  return await parseResponse(client.ai['instance-type'].$get(undefined, options))
}

export async function deleteLoadBalancerIdField(
  args: InferRequestType<(typeof client)['load-balancer'][':id'][':field']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['load-balancer'][':id'][':field'].$delete(args, options))
}

export async function putInstanceIdScale(
  args: InferRequestType<(typeof client.instance)[':id:scale']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:scale'].$put(args, options))
}

export async function getApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client['api-key'].$get(undefined, options))
}

export async function postApiKey(
  args: InferRequestType<(typeof client)['api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-key'].$post(args, options))
}

export async function getBlockStorageSnapshot(options?: ClientRequestOptions) {
  return await parseResponse(client['block-storage-snapshot'].$get(undefined, options))
}

export async function getDnsDomain(options?: ClientRequestOptions) {
  return await parseResponse(client['dns-domain'].$get(undefined, options))
}

export async function postDnsDomain(
  args: InferRequestType<(typeof client)['dns-domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dns-domain'].$post(args, options))
}

export async function putInstanceIdStop(
  args: InferRequestType<(typeof client.instance)[':id:stop']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:stop'].$put(args, options))
}

export async function getDnsDomainDomainIdRecordRecordId(
  args: InferRequestType<
    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dns-domain'][':domain-id'].record[':record-id'].$get(args, options),
  )
}

export async function putDnsDomainDomainIdRecordRecordId(
  args: InferRequestType<
    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dns-domain'][':domain-id'].record[':record-id'].$put(args, options),
  )
}

export async function deleteDnsDomainDomainIdRecordRecordId(
  args: InferRequestType<
    (typeof client)['dns-domain'][':domain-id']['record'][':record-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dns-domain'][':domain-id'].record[':record-id'].$delete(args, options),
  )
}

export async function postDbaasKafkaServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':service-name']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':service-name'].user.$post(args, options))
}

export async function putDbaasValkeyServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-valkey'][':service-name'].user[':username'].password.reset.$put(args, options),
  )
}

export async function getDbaasExternalIntegrationSettingsDatadogIntegrationId(
  args: InferRequestType<
    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-integration-settings-datadog'][':integration-id'].$get(args, options),
  )
}

export async function postDbaasExternalIntegrationSettingsDatadogIntegrationId(
  args: InferRequestType<
    (typeof client)['dbaas-external-integration-settings-datadog'][':integration-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-integration-settings-datadog'][':integration-id'].$post(args, options),
  )
}

export async function putSecurityGroupIdAttach(
  args: InferRequestType<(typeof client)['security-group'][':id:attach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id:attach'].$put(args, options))
}

export async function getSnapshotId(
  args: InferRequestType<(typeof client.snapshot)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshot[':id'].$get(args, options))
}

export async function deleteSnapshotId(
  args: InferRequestType<(typeof client.snapshot)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshot[':id'].$delete(args, options))
}

export async function putSksClusterIdNodepoolSksNodepoolIdScale(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:scale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id'].nodepool[':sks-nodepool-id:scale'].$put(args, options),
  )
}

export async function getDbaasSettingsMysql(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-mysql'].$get(undefined, options))
}

export async function putSksClusterIdUpgradeServiceLevel(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade-service-level']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['upgrade-service-level'].$put(args, options),
  )
}

export async function getDbaasSettingsValkey(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-valkey'].$get(undefined, options))
}

export async function getApiKeyId(
  args: InferRequestType<(typeof client)['api-key'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-key'][':id'].$get(args, options))
}

export async function deleteApiKeyId(
  args: InferRequestType<(typeof client)['api-key'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-key'][':id'].$delete(args, options))
}

export async function deleteLoadBalancerIdServiceServiceIdField(
  args: InferRequestType<
    (typeof client)['load-balancer'][':id']['service'][':service-id'][':field']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['load-balancer'][':id'].service[':service-id'][':field'].$delete(args, options),
  )
}

export async function postDbaasPostgresServiceNameDatabase(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':service-name']['database']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name'].database.$post(args, options),
  )
}

export async function postKmsKeyIdRotate(
  args: InferRequestType<(typeof client)['kms-key'][':id']['rotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].rotate.$post(args, options))
}

export async function getDbaasSettingsThanos(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-thanos'].$get(undefined, options))
}

export async function postSecurityGroupIdRules(
  args: InferRequestType<(typeof client)['security-group'][':id']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id'].rules.$post(args, options))
}

export async function getDbaasSettingsClickhouse(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-clickhouse'].$get(undefined, options))
}

export async function postDbaasOpensearchServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':service-name']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':service-name'].user.$post(args, options))
}

export async function getDbaasIntegrationTypes(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-integration-types'].$get(undefined, options))
}

export async function getEnvImpactPeriod(
  args: InferRequestType<(typeof client)['env-impact'][':period']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['env-impact'][':period'].$get(args, options))
}

export async function deleteDbaasPostgresServiceNameUserUsername(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name'].user[':username'].$delete(args, options),
  )
}

export async function putInstanceIdAddProtection(
  args: InferRequestType<(typeof client.instance)[':id:add-protection']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:add-protection'].$put(args, options))
}

export async function putDbaasPostgresServiceNameUserUsernameAllowReplication(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['allow-replication']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name'].user[':username']['allow-replication'].$put(
      args,
      options,
    ),
  )
}

export async function getIamRoleId(
  args: InferRequestType<(typeof client)['iam-role'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-role'][':id'].$get(args, options))
}

export async function putIamRoleId(
  args: InferRequestType<(typeof client)['iam-role'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-role'][':id'].$put(args, options))
}

export async function deleteIamRoleId(
  args: InferRequestType<(typeof client)['iam-role'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-role'][':id'].$delete(args, options))
}

export async function deleteInstanceIdField(
  args: InferRequestType<(typeof client.instance)[':id'][':field']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id'][':field'].$delete(args, options))
}

export async function deleteInstancePoolIdField(
  args: InferRequestType<(typeof client)['instance-pool'][':id'][':field']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'][':id'][':field'].$delete(args, options))
}

export async function putInstanceIdRemoveProtection(
  args: InferRequestType<(typeof client.instance)[':id:remove-protection']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:remove-protection'].$put(args, options))
}

export async function postDbaasKafkaNameTopicAclConfig(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['topic']['acl-config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':name'].topic['acl-config'].$post(args, options),
  )
}

export async function getSnapshot(options?: ClientRequestOptions) {
  return await parseResponse(client.snapshot.$get(undefined, options))
}

export async function getOperationId(
  args: InferRequestType<(typeof client.operation)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operation[':id'].$get(args, options))
}

export async function getDnsDomainIdZone(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['zone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dns-domain'][':id'].zone.$get(args, options))
}

export async function postDbaasExternalEndpointOpensearchName(
  args: InferRequestType<(typeof client)['dbaas-external-endpoint-opensearch'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-opensearch'][':name'].$post(args, options),
  )
}

export async function deleteDbaasMysqlServiceNameDatabaseDatabaseName(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['database'][':database-name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-mysql'][':service-name'].database[':database-name'].$delete(args, options),
  )
}

export async function putSecurityGroupIdRemoveSource(
  args: InferRequestType<(typeof client)['security-group'][':id:remove-source']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id:remove-source'].$put(args, options))
}

export async function getIamOrganizationPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client['iam-organization-policy'].$get(undefined, options))
}

export async function putIamOrganizationPolicy(
  args: InferRequestType<(typeof client)['iam-organization-policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-organization-policy'].$put(args, options))
}

export async function postDbaasServiceLogsServiceName(
  args: InferRequestType<(typeof client)['dbaas-service-logs'][':service-name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-service-logs'][':service-name'].$post(args, options))
}

export async function postKmsKeyIdDecrypt(
  args: InferRequestType<(typeof client)['kms-key'][':id']['decrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].decrypt.$post(args, options))
}

export async function getTemplateId(
  args: InferRequestType<(typeof client.template)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template[':id'].$get(args, options))
}

export async function putTemplateId(
  args: InferRequestType<(typeof client.template)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template[':id'].$put(args, options))
}

export async function postTemplateId(
  args: InferRequestType<(typeof client.template)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template[':id'].$post(args, options))
}

export async function deleteTemplateId(
  args: InferRequestType<(typeof client.template)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template[':id'].$delete(args, options))
}

export async function putDbaasPostgresNameMaintenanceStart(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':name']['maintenance']['start']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':name'].maintenance.start.$put(args, options),
  )
}

export async function getDbaasGrafanaServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-grafana'][':service-name'].user[':username'].password.reveal.$get(args, options),
  )
}

export async function putUserId(
  args: InferRequestType<(typeof client.user)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':id'].$put(args, options))
}

export async function deleteUserId(
  args: InferRequestType<(typeof client.user)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':id'].$delete(args, options))
}

export async function getReverseDnsInstanceId(
  args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reverse-dns'].instance[':id'].$get(args, options))
}

export async function postReverseDnsInstanceId(
  args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reverse-dns'].instance[':id'].$post(args, options))
}

export async function deleteReverseDnsInstanceId(
  args: InferRequestType<(typeof client)['reverse-dns']['instance'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reverse-dns'].instance[':id'].$delete(args, options))
}

export async function putInstancePoolIdEvict(
  args: InferRequestType<(typeof client)['instance-pool'][':id:evict']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['instance-pool'][':id:evict'].$put(args, options))
}

export async function putSksClusterIdRotateCsiCredentials(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-csi-credentials']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['rotate-csi-credentials'].$put(args, options),
  )
}

export async function putDbaasGrafanaServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-grafana'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-grafana'][':service-name'].user[':username'].password.reset.$put(args, options),
  )
}

export async function putDbaasClickhouseServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-clickhouse'][':service-name'].user[':username'].password.reset.$put(
      args,
      options,
    ),
  )
}

export async function putSecurityGroupIdDetach(
  args: InferRequestType<(typeof client)['security-group'][':id:detach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id:detach'].$put(args, options))
}

export async function getDbaasClickhouseServiceNameAclConfig(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['acl-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-clickhouse'][':service-name']['acl-config'].$get(args, options),
  )
}

export async function getDbaasClickhouseServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':service-name'].user.$get(args, options))
}

export async function postDbaasClickhouseServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-clickhouse'][':service-name']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-clickhouse'][':service-name'].user.$post(args, options))
}

export async function putSksClusterIdNodepoolSksNodepoolIdEvict(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['nodepool'][':sks-nodepool-id:evict']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id'].nodepool[':sks-nodepool-id:evict'].$put(args, options),
  )
}

export async function putDbaasValkeyServiceNameUserUsername(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-valkey'][':service-name'].user[':username'].$put(args, options),
  )
}

export async function deleteDbaasValkeyServiceNameUserUsername(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-valkey'][':service-name'].user[':username'].$delete(args, options),
  )
}

export async function postKmsKeyIdDisable(
  args: InferRequestType<(typeof client)['kms-key'][':id']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].disable.$post(args, options))
}

export async function deleteDbaasKafkaNameSchemaRegistryAclConfigAclId(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':name']['schema-registry']['acl-config'][':acl-id'].$delete(
      args,
      options,
    ),
  )
}

export async function getDnsDomainId(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dns-domain'][':id'].$get(args, options))
}

export async function deleteDnsDomainId(
  args: InferRequestType<(typeof client)['dns-domain'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dns-domain'][':id'].$delete(args, options))
}

export async function putBlockStorageIdResizeVolume(
  args: InferRequestType<(typeof client)['block-storage'][':id:resize-volume']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id:resize-volume'].$put(args, options))
}

export async function deleteDbaasKafkaServiceNameUserUsername(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':service-name'].user[':username'].$delete(args, options),
  )
}

export async function getDbaasServiceTypeServiceTypeName(
  args: InferRequestType<(typeof client)['dbaas-service-type'][':service-type-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-service-type'][':service-type-name'].$get(args, options))
}

export async function putSecurityGroupIdAddSource(
  args: InferRequestType<(typeof client)['security-group'][':id:add-source']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['security-group'][':id:add-source'].$put(args, options))
}

export async function postDbaasExternalEndpointDatadogName(
  args: InferRequestType<(typeof client)['dbaas-external-endpoint-datadog'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-datadog'][':name'].$post(args, options),
  )
}

export async function putDbaasMysqlNameMaintenanceStart(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['maintenance']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].maintenance.start.$put(args, options))
}

export async function putDbaasOpensearchServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-opensearch'][':service-name'].user[':username'].password.reset.$put(
      args,
      options,
    ),
  )
}

export async function getAiModelId(
  args: InferRequestType<(typeof client.ai.model)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.model[':id'].$get(args, options))
}

export async function deleteAiModelId(
  args: InferRequestType<(typeof client.ai.model)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.model[':id'].$delete(args, options))
}

export async function getSosBucketsUsage(options?: ClientRequestOptions) {
  return await parseResponse(client['sos-buckets-usage'].$get(undefined, options))
}

export async function putInstanceIdReset(
  args: InferRequestType<(typeof client.instance)[':id:reset']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:reset'].$put(args, options))
}

export async function getDbaasMysqlServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-mysql'][':service-name'].user[':username'].password.reveal.$get(args, options),
  )
}

export async function getSshKeyName(
  args: InferRequestType<(typeof client)['ssh-key'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-key'][':name'].$get(args, options))
}

export async function deleteSshKeyName(
  args: InferRequestType<(typeof client)['ssh-key'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-key'][':name'].$delete(args, options))
}

export async function postDbaasServiceMetricsServiceName(
  args: InferRequestType<(typeof client)['dbaas-service-metrics'][':service-name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-service-metrics'][':service-name'].$post(args, options))
}

export async function getDeployTargetId(
  args: InferRequestType<(typeof client)['deploy-target'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['deploy-target'][':id'].$get(args, options))
}

export async function putElasticIpIdDetach(
  args: InferRequestType<(typeof client)['elastic-ip'][':id:detach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'][':id:detach'].$put(args, options))
}

export async function putDbaasMysqlNameEnableWrites(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['enable']['writes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].enable.writes.$put(args, options))
}

export async function getDbaasKafkaServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':service-name'].user[':username'].password.reveal.$get(args, options),
  )
}

export async function deleteVpcVpcIdSubnetSubnetIdRouteId(
  args: InferRequestType<
    (typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['route'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vpc[':vpc-id'].subnet[':subnet-id'].route[':id'].$delete(args, options),
  )
}

export async function postKmsKeyIdEncrypt(
  args: InferRequestType<(typeof client)['kms-key'][':id']['encrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].encrypt.$post(args, options))
}

export async function postDbaasTaskMigrationCheckService(
  args: InferRequestType<(typeof client)['dbaas-task-migration-check'][':service']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-task-migration-check'][':service'].$post(args, options))
}

export async function getDbaasExternalEndpointDatadogEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-datadog'][':endpoint-id'].$get(args, options),
  )
}

export async function putDbaasExternalEndpointDatadogEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-datadog'][':endpoint-id'].$put(args, options),
  )
}

export async function deleteDbaasExternalEndpointDatadogEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-datadog'][':endpoint-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-datadog'][':endpoint-id'].$delete(args, options),
  )
}

export async function postLoadBalancerIdService(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['service']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['load-balancer'][':id'].service.$post(args, options))
}

export async function getSshKey(options?: ClientRequestOptions) {
  return await parseResponse(client['ssh-key'].$get(undefined, options))
}

export async function postSshKey(
  args: InferRequestType<(typeof client)['ssh-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-key'].$post(args, options))
}

export async function postSnapshotIdPromote(
  args: InferRequestType<(typeof client.snapshot)[':id:promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshot[':id:promote'].$post(args, options))
}

export async function getDbaasClickhouseServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-clickhouse'][':service-name'].user[':username'].password.reveal.$get(
      args,
      options,
    ),
  )
}

export async function getSksCluster(options?: ClientRequestOptions) {
  return await parseResponse(client['sks-cluster'].$get(undefined, options))
}

export async function postSksCluster(
  args: InferRequestType<(typeof client)['sks-cluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'].$post(args, options))
}

export async function putBlockStorageIdDetach(
  args: InferRequestType<(typeof client)['block-storage'][':id:detach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'][':id:detach'].$put(args, options))
}

export async function postDbaasExternalEndpointPrometheusName(
  args: InferRequestType<(typeof client)['dbaas-external-endpoint-prometheus'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-prometheus'][':name'].$post(args, options),
  )
}

export async function getConsoleId(
  args: InferRequestType<(typeof client.console)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.console[':id'].$get(args, options))
}

export async function getDbaasIntegrationId(
  args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-integration'][':id'].$get(args, options))
}

export async function putDbaasIntegrationId(
  args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-integration'][':id'].$put(args, options))
}

export async function deleteDbaasIntegrationId(
  args: InferRequestType<(typeof client)['dbaas-integration'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-integration'][':id'].$delete(args, options))
}

export async function putElasticIpIdAttach(
  args: InferRequestType<(typeof client)['elastic-ip'][':id:attach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'][':id:attach'].$put(args, options))
}

export async function getSksClusterId(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'][':id'].$get(args, options))
}

export async function putSksClusterId(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'][':id'].$put(args, options))
}

export async function deleteSksClusterId(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'][':id'].$delete(args, options))
}

export async function getQuota(options?: ClientRequestOptions) {
  return await parseResponse(client.quota.$get(undefined, options))
}

export async function getDbaasIntegrationSettingsIntegrationTypeSourceTypeDestType(
  args: InferRequestType<
    (typeof client)['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-integration-settings'][':integration-type'][':source-type'][':dest-type'].$get(
      args,
      options,
    ),
  )
}

export async function getDbaasThanosServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-thanos'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-thanos'][':service-name'].user[':username'].password.reveal.$get(args, options),
  )
}

export async function deleteDbaasClickhouseServiceNameUserUserUuid(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':service-name']['user'][':user-uuid']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-clickhouse'][':service-name'].user[':user-uuid'].$delete(args, options),
  )
}

export async function getDbaasSettingsPg(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-pg'].$get(undefined, options))
}

export async function getElasticIpId(
  args: InferRequestType<(typeof client)['elastic-ip'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'][':id'].$get(args, options))
}

export async function putElasticIpId(
  args: InferRequestType<(typeof client)['elastic-ip'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'][':id'].$put(args, options))
}

export async function deleteElasticIpId(
  args: InferRequestType<(typeof client)['elastic-ip'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['elastic-ip'][':id'].$delete(args, options))
}

export async function getSksClusterIdInspection(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['inspection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'][':id'].inspection.$get(args, options))
}

export async function getDbaasValkeyName(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':name'].$get(args, options))
}

export async function putDbaasValkeyName(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':name'].$put(args, options))
}

export async function postDbaasValkeyName(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':name'].$post(args, options))
}

export async function deleteDbaasValkeyName(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':name'].$delete(args, options))
}

export async function getInstanceId(
  args: InferRequestType<(typeof client.instance)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id'].$get(args, options))
}

export async function putInstanceId(
  args: InferRequestType<(typeof client.instance)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id'].$put(args, options))
}

export async function deleteInstanceId(
  args: InferRequestType<(typeof client.instance)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id'].$delete(args, options))
}

export async function postDbaasMysqlNameMigrationStop(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':name']['migration']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':name'].migration.stop.$post(args, options))
}

export async function getVpcVpcIdSubnetId(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':id'].$get(args, options))
}

export async function putVpcVpcIdSubnetId(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':id'].$put(args, options))
}

export async function deleteVpcVpcIdSubnetId(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':id'].$delete(args, options))
}

export async function getDbaasExternalEndpoints(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-external-endpoints'].$get(undefined, options))
}

export async function putDbaasKafkaNameMaintenanceStart(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['maintenance']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':name'].maintenance.start.$put(args, options))
}

export async function putSksClusterIdRotateCcmCredentials(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-ccm-credentials']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['rotate-ccm-credentials'].$put(args, options),
  )
}

export async function putDbaasPostgresServiceNameConnectionPoolConnectionPoolName(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolName(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name']['connection-pool'][':connection-pool-name'].$delete(
      args,
      options,
    ),
  )
}

export async function getKmsKey(options?: ClientRequestOptions) {
  return await parseResponse(client['kms-key'].$get(undefined, options))
}

export async function postKmsKey(
  args: InferRequestType<(typeof client)['kms-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'].$post(args, options))
}

export async function getDbaasThanosName(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-thanos'][':name'].$get(args, options))
}

export async function putDbaasThanosName(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-thanos'][':name'].$put(args, options))
}

export async function postDbaasThanosName(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-thanos'][':name'].$post(args, options))
}

export async function deleteDbaasThanosName(
  args: InferRequestType<(typeof client)['dbaas-thanos'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-thanos'][':name'].$delete(args, options))
}

export async function putIamRoleIdPolicy(
  args: InferRequestType<(typeof client)['iam-role'][':id:policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-role'][':id:policy'].$put(args, options))
}

export async function getDbaasMigrationStatusName(
  args: InferRequestType<(typeof client)['dbaas-migration-status'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-migration-status'][':name'].$get(args, options))
}

export async function deleteDbaasMysqlServiceNameUserUsername(
  args: InferRequestType<
    (typeof client)['dbaas-mysql'][':service-name']['user'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-mysql'][':service-name'].user[':username'].$delete(args, options),
  )
}

export async function putSksClusterIdGenerateKarpenterNodepool(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['generate-karpenter-nodepool']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['generate-karpenter-nodepool'].$put(args, options),
  )
}

export async function getLoadBalancerId(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['load-balancer'][':id'].$get(args, options))
}

export async function putLoadBalancerId(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['load-balancer'][':id'].$put(args, options))
}

export async function deleteLoadBalancerId(
  args: InferRequestType<(typeof client)['load-balancer'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['load-balancer'][':id'].$delete(args, options))
}

export async function deleteDbaasServiceName(
  args: InferRequestType<(typeof client)['dbaas-service'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-service'][':name'].$delete(args, options))
}

export async function putVpcVpcIdSubnetSubnetIdDetach(
  args: InferRequestType<(typeof client.vpc)[':vpc-id']['subnet'][':subnet-id']['detach']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':vpc-id'].subnet[':subnet-id'].detach.$put(args, options))
}

export async function postDbaasMysqlServiceNameDatabase(
  args: InferRequestType<(typeof client)['dbaas-mysql'][':service-name']['database']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-mysql'][':service-name'].database.$post(args, options))
}

export async function getTemplate(
  args: InferRequestType<typeof client.template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.$get(args, options))
}

export async function postTemplate(
  args: InferRequestType<typeof client.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.$post(args, options))
}

export async function putInstanceIdReboot(
  args: InferRequestType<(typeof client.instance)[':id:reboot']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':id:reboot'].$put(args, options))
}

export async function getEnvironmentalImpactReport(
  args: InferRequestType<(typeof client)['environmental-impact']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['environmental-impact'].report.$get(args, options))
}

export async function getDbaasSettingsKafka(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-kafka'].$get(undefined, options))
}

export async function getDbaasPostgresServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name'].user[':username'].password.reveal.$get(args, options),
  )
}

export async function postIamOrganizationPolicyReset(options?: ClientRequestOptions) {
  return await parseResponse(client['iam-organization-policy:reset'].$post(undefined, options))
}

export async function getDbaasSettingsOpensearch(options?: ClientRequestOptions) {
  return await parseResponse(client['dbaas-settings-opensearch'].$get(undefined, options))
}

export async function putDbaasExternalEndpointSourceServiceNameAttach(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint'][':source-service-name']['attach']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint'][':source-service-name'].attach.$put(args, options),
  )
}

export async function postKmsKeyIdScheduleDeletion(
  args: InferRequestType<(typeof client)['kms-key'][':id']['schedule-deletion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['schedule-deletion'].$post(args, options))
}

export async function getDbaasGrafanaName(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-grafana'][':name'].$get(args, options))
}

export async function putDbaasGrafanaName(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-grafana'][':name'].$put(args, options))
}

export async function postDbaasGrafanaName(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-grafana'][':name'].$post(args, options))
}

export async function deleteDbaasGrafanaName(
  args: InferRequestType<(typeof client)['dbaas-grafana'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-grafana'][':name'].$delete(args, options))
}

export async function getDbaasExternalEndpointRsyslogEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$get(args, options),
  )
}

export async function putDbaasExternalEndpointRsyslogEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$put(args, options),
  )
}

export async function deleteDbaasExternalEndpointRsyslogEndpointId(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-rsyslog'][':endpoint-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-rsyslog'][':endpoint-id'].$delete(args, options),
  )
}

export async function putSksClusterIdGenerateKarpenterExoscaleNodeclass(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['generate-karpenter-exoscale-nodeclass'].$put(args, options),
  )
}

export async function postSksClusterIdNodepool(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['nodepool']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'][':id'].nodepool.$post(args, options))
}

export async function postDbaasExternalEndpointElasticsearchName(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint-elasticsearch'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint-elasticsearch'][':name'].$post(args, options),
  )
}

export async function getAiApiKeyIdReveal(
  args: InferRequestType<(typeof client.ai)['api-key'][':id']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai['api-key'][':id'].reveal.$get(args, options))
}

export async function putDbaasOpensearchNameMaintenanceStart(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':name']['maintenance']['start']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-opensearch'][':name'].maintenance.start.$put(args, options),
  )
}

export async function getDbaasKafkaNameAclConfig(
  args: InferRequestType<(typeof client)['dbaas-kafka'][':name']['acl-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-kafka'][':name']['acl-config'].$get(args, options))
}

export async function putDbaasKafkaServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':service-name'].user[':username'].password.reset.$put(args, options),
  )
}

export async function getAiApiKey(options?: ClientRequestOptions) {
  return await parseResponse(client.ai['api-key'].$get(undefined, options))
}

export async function postAiApiKey(
  args: InferRequestType<(typeof client.ai)['api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai['api-key'].$post(args, options))
}

export async function postKmsKeyIdReEncrypt(
  args: InferRequestType<(typeof client)['kms-key'][':id']['re-encrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['re-encrypt'].$post(args, options))
}

export async function getDbaasOpensearchServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-opensearch'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-opensearch'][':service-name'].user[':username'].password.reveal.$get(
      args,
      options,
    ),
  )
}

export async function putDbaasValkeyNameMaintenanceStart(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':name']['maintenance']['start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':name'].maintenance.start.$put(args, options))
}

export async function getDbaasOpensearchName(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':name'].$get(args, options))
}

export async function putDbaasOpensearchName(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':name'].$put(args, options))
}

export async function postDbaasOpensearchName(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':name'].$post(args, options))
}

export async function deleteDbaasOpensearchName(
  args: InferRequestType<(typeof client)['dbaas-opensearch'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-opensearch'][':name'].$delete(args, options))
}

export async function putDbaasExternalEndpointSourceServiceNameDetach(
  args: InferRequestType<
    (typeof client)['dbaas-external-endpoint'][':source-service-name']['detach']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-external-endpoint'][':source-service-name'].detach.$put(args, options),
  )
}

export async function getDbaasValkeyServiceNameUserUsernamePasswordReveal(
  args: InferRequestType<
    (typeof client)['dbaas-valkey'][':service-name']['user'][':username']['password']['reveal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-valkey'][':service-name'].user[':username'].password.reveal.$get(args, options),
  )
}

export async function getAiQuota(options?: ClientRequestOptions) {
  return await parseResponse(client.ai.quota.$get(undefined, options))
}

export async function getDbaasPostgresName(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-postgres'][':name'].$get(args, options))
}

export async function putDbaasPostgresName(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-postgres'][':name'].$put(args, options))
}

export async function postDbaasPostgresName(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-postgres'][':name'].$post(args, options))
}

export async function deleteDbaasPostgresName(
  args: InferRequestType<(typeof client)['dbaas-postgres'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-postgres'][':name'].$delete(args, options))
}

export async function getDbaasValkeyServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':service-name'].user.$get(args, options))
}

export async function postDbaasValkeyServiceNameUser(
  args: InferRequestType<(typeof client)['dbaas-valkey'][':service-name']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-valkey'][':service-name'].user.$post(args, options))
}

export async function putSksClusterIdRotateKarpenterCredentials(
  args: InferRequestType<
    (typeof client)['sks-cluster'][':id']['rotate-karpenter-credentials']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['rotate-karpenter-credentials'].$put(args, options),
  )
}

export async function postDbaasIntegration(
  args: InferRequestType<(typeof client)['dbaas-integration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-integration'].$post(args, options))
}

export async function getDbaasTaskServiceId(
  args: InferRequestType<(typeof client)['dbaas-task'][':service'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dbaas-task'][':service'][':id'].$get(args, options))
}

export async function getSosBucketPresignedUrl(
  args: InferRequestType<(typeof client.sos)[':bucket']['presigned-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sos[':bucket']['presigned-url'].$get(args, options))
}

export async function putSksClusterIdRotateOperatorsCa(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['rotate-operators-ca']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sks-cluster'][':id']['rotate-operators-ca'].$put(args, options),
  )
}

export async function getAiDeploymentIdApiKey(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['api-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment[':id']['api-key'].$get(args, options))
}

export async function getAntiAffinityGroupId(
  args: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['anti-affinity-group'][':id'].$get(args, options))
}

export async function deleteAntiAffinityGroupId(
  args: InferRequestType<(typeof client)['anti-affinity-group'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['anti-affinity-group'][':id'].$delete(args, options))
}

export async function postKmsKeyIdReplicate(
  args: InferRequestType<(typeof client)['kms-key'][':id']['replicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id'].replicate.$post(args, options))
}

export async function getSksClusterVersion(
  args: InferRequestType<(typeof client)['sks-cluster-version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster-version'].$get(args, options))
}

export async function getInstance(
  args: InferRequestType<typeof client.instance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.$get(args, options))
}

export async function postInstance(
  args: InferRequestType<typeof client.instance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance.$post(args, options))
}

export async function getIamRole(options?: ClientRequestOptions) {
  return await parseResponse(client['iam-role'].$get(undefined, options))
}

export async function postIamRole(
  args: InferRequestType<(typeof client)['iam-role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['iam-role'].$post(args, options))
}

export async function deletePrivateNetworkIdField(
  args: InferRequestType<(typeof client)['private-network'][':id'][':field']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['private-network'][':id'][':field'].$delete(args, options))
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}

export async function postUser(
  args: InferRequestType<typeof client.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$post(args, options))
}

export async function putDbaasClickhouseNameMaintenanceStart(
  args: InferRequestType<
    (typeof client)['dbaas-clickhouse'][':name']['maintenance']['start']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-clickhouse'][':name'].maintenance.start.$put(args, options),
  )
}

export async function getAiDeploymentIdLogs(
  args: InferRequestType<(typeof client.ai.deployment)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.deployment[':id'].logs.$get(args, options))
}

export async function putSksClusterIdUpgrade(
  args: InferRequestType<(typeof client)['sks-cluster'][':id']['upgrade']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sks-cluster'][':id'].upgrade.$put(args, options))
}

export async function postKmsKeyIdCancelDeletion(
  args: InferRequestType<(typeof client)['kms-key'][':id']['cancel-deletion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['cancel-deletion'].$post(args, options))
}

export async function postKmsKeyIdGenerateDataKey(
  args: InferRequestType<(typeof client)['kms-key'][':id']['generate-data-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kms-key'][':id']['generate-data-key'].$post(args, options))
}

export async function getVpcId(
  args: InferRequestType<(typeof client.vpc)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':id'].$get(args, options))
}

export async function putVpcId(
  args: InferRequestType<(typeof client.vpc)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':id'].$put(args, options))
}

export async function deleteVpcId(
  args: InferRequestType<(typeof client.vpc)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vpc[':id'].$delete(args, options))
}

export async function getBlockStorage(
  args: InferRequestType<(typeof client)['block-storage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'].$get(args, options))
}

export async function postBlockStorage(
  args: InferRequestType<(typeof client)['block-storage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['block-storage'].$post(args, options))
}

export async function deleteDbaasKafkaNameTopicAclConfigAclId(
  args: InferRequestType<
    (typeof client)['dbaas-kafka'][':name']['topic']['acl-config'][':acl-id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-kafka'][':name'].topic['acl-config'][':acl-id'].$delete(args, options),
  )
}

export async function postInstanceInstanceIdRevertSnapshot(
  args: InferRequestType<(typeof client.instance)[':instance-id:revert-snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instance[':instance-id:revert-snapshot'].$post(args, options))
}

export async function putDbaasPostgresServiceNameUserUsernamePasswordReset(
  args: InferRequestType<
    (typeof client)['dbaas-postgres'][':service-name']['user'][':username']['password']['reset']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['dbaas-postgres'][':service-name'].user[':username'].password.reset.$put(args, options),
  )
}
