import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApis(
  args: InferRequestType<typeof client.apis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.$get(args, options))
}

export async function postApis(
  args: InferRequestType<typeof client.apis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.$post(args, options))
}

export async function getApisApiId(
  args: InferRequestType<(typeof client.apis)[':apiId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].$get(args, options))
}

export async function putApisApiId(
  args: InferRequestType<(typeof client.apis)[':apiId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].$put(args, options))
}

export async function deleteApisApiId(
  args: InferRequestType<(typeof client.apis)[':apiId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].$delete(args, options))
}

export async function getApisApiIdVersions(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].versions.$get(args, options))
}

export async function postApisApiIdVersions(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].versions.$post(args, options))
}

export async function getApisApiIdVersionsApiVersionId(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$get(args, options))
}

export async function putApisApiIdVersionsApiVersionId(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$put(args, options))
}

export async function deleteApisApiIdVersionsApiVersionId(
  args: InferRequestType<(typeof client.apis)[':apiId']['versions'][':apiVersionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis[':apiId'].versions[':apiVersionId'].$delete(args, options))
}

export async function getApisApiIdVersionsApiVersionIdContracttest(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['contracttest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].contracttest.$get(args, options),
  )
}

export async function getApisApiIdVersionsApiVersionIdDocumentation(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['documentation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].documentation.$get(args, options),
  )
}

export async function getApisApiIdVersionsApiVersionIdEnvironment(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['environment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].environment.$get(args, options),
  )
}

export async function getApisApiIdVersionsApiVersionIdIntegrationtest(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['integrationtest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].integrationtest.$get(args, options),
  )
}

export async function getApisApiIdVersionsApiVersionIdMonitor(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['monitor']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].monitor.$get(args, options),
  )
}

export async function getApisApiIdVersionsApiVersionIdRelations(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].relations.$get(args, options),
  )
}

export async function postApisApiIdVersionsApiVersionIdRelations(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['relations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].relations.$post(args, options),
  )
}

export async function postApisApiIdVersionsApiVersionIdSchemas(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].schemas.$post(args, options),
  )
}

export async function getApisApiIdVersionsApiVersionIdSchemasSchemaId(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$get(args, options),
  )
}

export async function putApisApiIdVersionsApiVersionIdSchemasSchemaId(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].$put(args, options),
  )
}

export async function postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollections(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['schemas'][':schemaId']['collections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].schemas[':schemaId'].collections.$post(
      args,
      options,
    ),
  )
}

export async function getApisApiIdVersionsApiVersionIdTestsuite(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId']['testsuite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'].testsuite.$get(args, options),
  )
}

export async function putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchema(
  args: InferRequestType<
    (typeof client.apis)[':apiId']['versions'][':apiVersionId'][':entityType'][':entityId']['syncWithSchema']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis[':apiId'].versions[':apiVersionId'][':entityType'][':entityId'].syncWithSchema.$put(
      args,
      options,
    ),
  )
}

export async function getCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.$get(undefined, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$post(args, options))
}

export async function postCollectionsForkCollectionUid(
  args: InferRequestType<(typeof client.collections.fork)[':collection_uid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.fork[':collection_uid'].$post(args, options))
}

export async function postCollectionsMerge(
  args: InferRequestType<typeof client.collections.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.merge.$post(args, options))
}

export async function getCollectionsCollectionUid(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_uid'].$get(args, options))
}

export async function putCollectionsCollectionUid(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_uid'].$put(args, options))
}

export async function deleteCollectionsCollectionUid(
  args: InferRequestType<(typeof client.collections)[':collection_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_uid'].$delete(args, options))
}

export async function getEnvironments(options?: ClientRequestOptions) {
  return await parseResponse(client.environments.$get(undefined, options))
}

export async function postEnvironments(
  args: InferRequestType<typeof client.environments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments.$post(args, options))
}

export async function getEnvironmentsEnvironmentUid(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environment_uid'].$get(args, options))
}

export async function putEnvironmentsEnvironmentUid(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environment_uid'].$put(args, options))
}

export async function deleteEnvironmentsEnvironmentUid(
  args: InferRequestType<(typeof client.environments)[':environment_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.environments[':environment_uid'].$delete(args, options))
}

export async function postImportExported(options?: ClientRequestOptions) {
  return await parseResponse(client.import.exported.$post(undefined, options))
}

export async function postImportOpenapi(
  args: InferRequestType<typeof client.import.openapi.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.import.openapi.$post(args, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function getMocks(options?: ClientRequestOptions) {
  return await parseResponse(client.mocks.$get(undefined, options))
}

export async function postMocks(
  args: InferRequestType<typeof client.mocks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mocks.$post(args, options))
}

export async function getMocksMockUid(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mocks[':mock_uid'].$get(args, options))
}

export async function putMocksMockUid(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mocks[':mock_uid'].$put(args, options))
}

export async function deleteMocksMockUid(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mocks[':mock_uid'].$delete(args, options))
}

export async function postMocksMockUidPublish(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mocks[':mock_uid'].publish.$post(args, options))
}

export async function deleteMocksMockUidUnpublish(
  args: InferRequestType<(typeof client.mocks)[':mock_uid']['unpublish']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mocks[':mock_uid'].unpublish.$delete(args, options))
}

export async function getMonitors(options?: ClientRequestOptions) {
  return await parseResponse(client.monitors.$get(undefined, options))
}

export async function postMonitors(
  args: InferRequestType<typeof client.monitors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors.$post(args, options))
}

export async function getMonitorsMonitorUid(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':monitor_uid'].$get(args, options))
}

export async function putMonitorsMonitorUid(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':monitor_uid'].$put(args, options))
}

export async function deleteMonitorsMonitorUid(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':monitor_uid'].$delete(args, options))
}

export async function postMonitorsMonitorUidRun(
  args: InferRequestType<(typeof client.monitors)[':monitor_uid']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.monitors[':monitor_uid'].run.$post(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWorkspaces(options?: ClientRequestOptions) {
  return await parseResponse(client.workspaces.$get(undefined, options))
}

export async function postWorkspaces(
  args: InferRequestType<typeof client.workspaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.$post(args, options))
}

export async function getWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_id'].$get(args, options))
}

export async function putWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_id'].$put(args, options))
}

export async function deleteWorkspacesWorkspaceId(
  args: InferRequestType<(typeof client.workspaces)[':workspace_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces[':workspace_id'].$delete(args, options))
}
