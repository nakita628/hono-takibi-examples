import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.health.$get(undefined, options))
}

export async function getReady(options?: ClientRequestOptions) {
  return await parseResponse(client.ready.$get(undefined, options))
}

export async function getV1Clusters(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.clusters.$get(undefined, options))
}

export async function getV1ClustersClusterDatabases(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':cluster'].databases.$get(args, options))
}

export async function postV1ClustersClusterDatabases(
  args: InferRequestType<(typeof client.v1.clusters)[':cluster']['databases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.clusters[':cluster'].databases.$post(args, options))
}

export async function deleteV1ClustersClusterDatabasesDatabase(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].$delete(args, options),
  )
}

export async function getV1ClustersClusterDatabasesDatabaseTables(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables.$get(args, options),
  )
}

export async function postV1ClustersClusterDatabasesDatabaseTables(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables.$post(args, options),
  )
}

export async function getV1ClustersClusterDatabasesDatabaseTablesTable(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$get(args, options),
  )
}

export async function deleteV1ClustersClusterDatabasesDatabaseTablesTable(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$delete(args, options),
  )
}

export async function patchV1ClustersClusterDatabasesDatabaseTablesTable(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].$patch(args, options),
  )
}

export async function getV1ClustersClusterDatabasesDatabaseTablesTablePartitions(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$get(
      args,
      options,
    ),
  )
}

export async function postV1ClustersClusterDatabasesDatabaseTablesTablePartitions(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions.$post(
      args,
      options,
    ),
  )
}

export async function deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartition(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['partitions'][':partition']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].partitions[
      ':partition'
    ].$delete(args, options),
  )
}

export async function postV1ClustersClusterDatabasesDatabaseTablesTableRecords(
  args: InferRequestType<
    (typeof client.v1.clusters)[':cluster']['databases'][':database']['tables'][':table']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.clusters[':cluster'].databases[':database'].tables[':table'].records.$post(
      args,
      options,
    ),
  )
}

export async function getV1OpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['openapi.json'].$get(undefined, options))
}
