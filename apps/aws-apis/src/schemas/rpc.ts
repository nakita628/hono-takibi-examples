import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Discoverers(
  args: InferRequestType<typeof client.v1.discoverers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.$get(args, options))
}

export async function postV1Discoverers(
  args: InferRequestType<typeof client.v1.discoverers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.$post(args, options))
}

export async function getV1RegistriesNameRegistryName(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registries.name[':registryName'].$get(args, options))
}

export async function putV1RegistriesNameRegistryName(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registries.name[':registryName'].$put(args, options))
}

export async function postV1RegistriesNameRegistryName(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registries.name[':registryName'].$post(args, options))
}

export async function deleteV1RegistriesNameRegistryName(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registries.name[':registryName'].$delete(args, options))
}

export async function getV1RegistriesNameRegistryNameSchemasNameSchemaName(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$get(args, options),
  )
}

export async function putV1RegistriesNameRegistryNameSchemasNameSchemaName(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$put(args, options),
  )
}

export async function postV1RegistriesNameRegistryNameSchemasNameSchemaName(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$post(args, options),
  )
}

export async function deleteV1RegistriesNameRegistryNameSchemasNameSchemaName(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].$delete(args, options),
  )
}

export async function getV1DiscoverersIdDiscovererId(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.id[':discovererId'].$get(args, options))
}

export async function putV1DiscoverersIdDiscovererId(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.id[':discovererId'].$put(args, options))
}

export async function deleteV1DiscoverersIdDiscovererId(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.id[':discovererId'].$delete(args, options))
}

export async function getV1Policy(
  args: InferRequestType<typeof client.v1.policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policy.$get(args, options))
}

export async function putV1Policy(
  args: InferRequestType<typeof client.v1.policy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policy.$put(args, options))
}

export async function deleteV1Policy(
  args: InferRequestType<typeof client.v1.policy.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.policy.$delete(args, options))
}

export async function deleteV1RegistriesNameRegistryNameSchemasNameSchemaNameVersionSchemaVersion(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['version'][':schemaVersion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].version[
      ':schemaVersion'
    ].$delete(args, options),
  )
}

export async function getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
      ':language'
    ].$get(args, options),
  )
}

export async function postV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguage(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
      ':language'
    ].$post(args, options),
  )
}

export async function getV1RegistriesNameRegistryNameSchemasNameSchemaNameExportType(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['export#type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName']['export#type'].$get(
      args,
      options,
    ),
  )
}

export async function getV1RegistriesNameRegistryNameSchemasNameSchemaNameLanguageLanguageSource(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['language'][':language']['source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].language[
      ':language'
    ].source.$get(args, options),
  )
}

export async function postV1Discover(
  args: InferRequestType<typeof client.v1.discover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discover.$post(args, options))
}

export async function getV1Registries(
  args: InferRequestType<typeof client.v1.registries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registries.$get(args, options))
}

export async function getV1RegistriesNameRegistryNameSchemasNameSchemaNameVersions(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['name'][':schemaName']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas.name[':schemaName'].versions.$get(
      args,
      options,
    ),
  )
}

export async function getV1RegistriesNameRegistryNameSchemas(
  args: InferRequestType<(typeof client.v1.registries.name)[':registryName']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registries.name[':registryName'].schemas.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$post(args, options))
}

export async function getV1RegistriesNameRegistryNameSchemasSearchKeywords(
  args: InferRequestType<
    (typeof client.v1.registries.name)[':registryName']['schemas']['search#keywords']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registries.name[':registryName'].schemas['search#keywords'].$get(args, options),
  )
}

export async function postV1DiscoverersIdDiscovererIdStart(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.id[':discovererId'].start.$post(args, options))
}

export async function postV1DiscoverersIdDiscovererIdStop(
  args: InferRequestType<(typeof client.v1.discoverers.id)[':discovererId']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.discoverers.id[':discovererId'].stop.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
}
