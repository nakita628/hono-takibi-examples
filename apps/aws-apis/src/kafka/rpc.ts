import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1ClustersClusterArnScramSecrets(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn']['scram-secrets'].$get(args, options))
}

export async function postV1ClustersClusterArnScramSecrets(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':clusterArn']['scram-secrets'].$post(args, options),
  )
}

export async function patchV1ClustersClusterArnScramSecrets(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':clusterArn']['scram-secrets'].$patch(args, options),
  )
}

export async function getV1Clusters(
  args: InferRequestType<typeof client.v1.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters.$get(args, options))
}

export async function postV1Clusters(
  args: InferRequestType<typeof client.v1.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters.$post(args, options))
}

export async function getApiV2Clusters(
  args: InferRequestType<typeof client.api.v2.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.clusters.$get(args, options))
}

export async function postApiV2Clusters(
  args: InferRequestType<typeof client.api.v2.clusters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.clusters.$post(args, options))
}

export async function getV1Configurations(
  args: InferRequestType<typeof client.v1.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations.$get(args, options))
}

export async function postV1Configurations(
  args: InferRequestType<typeof client.v1.configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations.$post(args, options))
}

export async function postV1VpcConnection(
  args: InferRequestType<(typeof client.v1)['vpc-connection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vpc-connection'].$post(args, options))
}

export async function getV1ClustersClusterArn(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].$get(args, options))
}

export async function deleteV1ClustersClusterArn(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].$delete(args, options))
}

export async function getV1ClustersClusterArnPolicy(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].policy.$get(args, options))
}

export async function putV1ClustersClusterArnPolicy(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].policy.$put(args, options))
}

export async function deleteV1ClustersClusterArnPolicy(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].policy.$delete(args, options))
}

export async function getV1ConfigurationsArn(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':arn'].$get(args, options))
}

export async function putV1ConfigurationsArn(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':arn'].$put(args, options))
}

export async function deleteV1ConfigurationsArn(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':arn'].$delete(args, options))
}

export async function getV1VpcConnectionArn(
  args: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vpc-connection'][':arn'].$get(args, options))
}

export async function deleteV1VpcConnectionArn(
  args: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vpc-connection'][':arn'].$delete(args, options))
}

export async function getApiV2ClustersClusterArn(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.clusters[':clusterArn'].$get(args, options))
}

export async function getV1OperationsClusterOperationArn(
  args: InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations[':clusterOperationArn'].$get(args, options))
}

export async function getApiV2OperationsClusterOperationArn(
  args: InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.operations[':clusterOperationArn'].$get(args, options))
}

export async function getV1ConfigurationsArnRevisionsRevision(
  args: InferRequestType<
    (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.configurations[':arn'].revisions[':revision'].$get(args, options),
  )
}

export async function getV1ClustersClusterArnBootstrapBrokers(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':clusterArn']['bootstrap-brokers'].$get(args, options),
  )
}

export async function getV1CompatibleKafkaVersions(
  args: InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['compatible-kafka-versions'].$get(args, options))
}

export async function getV1ClustersClusterArnOperations(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].operations.$get(args, options))
}

export async function getApiV2ClustersClusterArnOperations(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.clusters[':clusterArn'].operations.$get(args, options))
}

export async function getV1ConfigurationsArnRevisions(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':arn'].revisions.$get(args, options))
}

export async function getV1KafkaVersions(
  args: InferRequestType<(typeof client.v1)['kafka-versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['kafka-versions'].$get(args, options))
}

export async function getV1ClustersClusterArnNodes(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].nodes.$get(args, options))
}

export async function getV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn'].$get(args, options))
}

export async function postV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
}

export async function getV1ClustersClusterArnClientVpcConnections(
  args: InferRequestType<
    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':clusterArn']['client-vpc-connections'].$get(args, options),
  )
}

export async function getV1VpcConnections(
  args: InferRequestType<(typeof client.v1)['vpc-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['vpc-connections'].$get(args, options))
}

export async function putV1ClustersClusterArnClientVpcConnection(
  args: InferRequestType<
    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':clusterArn']['client-vpc-connection'].$put(args, options),
  )
}

export async function putV1ClustersClusterArnRebootBroker(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn']['reboot-broker'].$put(args, options))
}

export async function deleteV1TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function putV1ClustersClusterArnNodesCount(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].nodes.count.$put(args, options))
}

export async function putV1ClustersClusterArnNodesType(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].nodes.type.$put(args, options))
}

export async function putV1ClustersClusterArnNodesStorage(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].nodes.storage.$put(args, options))
}

export async function putV1ClustersClusterArnConnectivity(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].connectivity.$put(args, options))
}

export async function putV1ClustersClusterArnConfiguration(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].configuration.$put(args, options))
}

export async function putV1ClustersClusterArnVersion(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].version.$put(args, options))
}

export async function putV1ClustersClusterArnMonitoring(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].monitoring.$put(args, options))
}

export async function patchV1ClustersClusterArnSecurity(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].security.$patch(args, options))
}

export async function putV1ClustersClusterArnStorage(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':clusterArn'].storage.$put(args, options))
}
