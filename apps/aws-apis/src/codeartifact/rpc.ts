import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1RepositoryExternalConnectionDomainRepositoryExternalConnection(
  args: InferRequestType<
    (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.repository['external-connection#domain&repository&external-connection'].$post(
      args,
      options,
    ),
  )
}

export async function deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnection(
  args: InferRequestType<
    (typeof client.v1.repository)['external-connection#domain&repository&external-connection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.repository['external-connection#domain&repository&external-connection'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackage(
  args: InferRequestType<
    (typeof client.v1.package.versions)['copy#domain&source-repository&destination-repository&format&package']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.versions[
      'copy#domain&source-repository&destination-repository&format&package'
    ].$post(args, options),
  )
}

export async function getV1DomainDomain(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['domain#domain'].$get(args, options))
}

export async function postV1DomainDomain(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['domain#domain'].$post(args, options))
}

export async function deleteV1DomainDomain(
  args: InferRequestType<(typeof client.v1)['domain#domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['domain#domain'].$delete(args, options))
}

export async function getV1RepositoryDomainRepository(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['repository#domain&repository'].$get(args, options))
}

export async function putV1RepositoryDomainRepository(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['repository#domain&repository'].$put(args, options))
}

export async function postV1RepositoryDomainRepository(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['repository#domain&repository'].$post(args, options))
}

export async function deleteV1RepositoryDomainRepository(
  args: InferRequestType<(typeof client.v1)['repository#domain&repository']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['repository#domain&repository'].$delete(args, options))
}

export async function getV1DomainPermissionsPolicyDomain(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain.permissions['policy#domain'].$get(args, options))
}

export async function deleteV1DomainPermissionsPolicyDomain(
  args: InferRequestType<(typeof client.v1.domain.permissions)['policy#domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain.permissions['policy#domain'].$delete(args, options))
}

export async function getV1PackageDomainRepositoryFormatPackage(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['package#domain&repository&format&package'].$get(args, options),
  )
}

export async function postV1PackageDomainRepositoryFormatPackage(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['package#domain&repository&format&package'].$post(args, options),
  )
}

export async function deleteV1PackageDomainRepositoryFormatPackage(
  args: InferRequestType<(typeof client.v1)['package#domain&repository&format&package']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['package#domain&repository&format&package'].$delete(args, options),
  )
}

export async function postV1PackageVersionsDeleteDomainRepositoryFormatPackage(
  args: InferRequestType<
    (typeof client.v1.package.versions)['delete#domain&repository&format&package']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.versions['delete#domain&repository&format&package'].$post(args, options),
  )
}

export async function deleteV1RepositoryPermissionsPoliciesDomainRepository(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policies#domain&repository']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.repository.permissions['policies#domain&repository'].$delete(args, options),
  )
}

export async function getV1PackageVersionDomainRepositoryFormatPackageVersion(
  args: InferRequestType<
    (typeof client.v1.package)['version#domain&repository&format&package&version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package['version#domain&repository&format&package&version'].$get(args, options),
  )
}

export async function postV1PackageVersionsDisposeDomainRepositoryFormatPackage(
  args: InferRequestType<
    (typeof client.v1.package.versions)['dispose#domain&repository&format&package']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.versions['dispose#domain&repository&format&package'].$post(args, options),
  )
}

export async function postV1AuthorizationTokenDomain(
  args: InferRequestType<(typeof client.v1)['authorization-token#domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['authorization-token#domain'].$post(args, options))
}

export async function getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAsset(
  args: InferRequestType<
    (typeof client.v1.package.version)['asset#domain&repository&format&package&version&asset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.version['asset#domain&repository&format&package&version&asset'].$get(
      args,
      options,
    ),
  )
}

export async function getV1PackageVersionReadmeDomainRepositoryFormatPackageVersion(
  args: InferRequestType<
    (typeof client.v1.package.version)['readme#domain&repository&format&package&version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.version['readme#domain&repository&format&package&version'].$get(
      args,
      options,
    ),
  )
}

export async function getV1RepositoryEndpointDomainRepositoryFormat(
  args: InferRequestType<
    (typeof client.v1.repository)['endpoint#domain&repository&format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.repository['endpoint#domain&repository&format'].$get(args, options),
  )
}

export async function getV1RepositoryPermissionsPolicyDomainRepository(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.repository.permissions['policy#domain&repository'].$get(args, options),
  )
}

export async function putV1RepositoryPermissionsPolicyDomainRepository(
  args: InferRequestType<
    (typeof client.v1.repository.permissions)['policy#domain&repository']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.repository.permissions['policy#domain&repository'].$put(args, options),
  )
}

export async function postV1Domains(
  args: InferRequestType<typeof client.v1.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domains.$post(args, options))
}

export async function postV1PackageVersionAssetsDomainRepositoryFormatPackageVersion(
  args: InferRequestType<
    (typeof client.v1.package.version)['assets#domain&repository&format&package&version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.version['assets#domain&repository&format&package&version'].$post(
      args,
      options,
    ),
  )
}

export async function postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersion(
  args: InferRequestType<
    (typeof client.v1.package.version)['dependencies#domain&repository&format&package&version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.version['dependencies#domain&repository&format&package&version'].$post(
      args,
      options,
    ),
  )
}

export async function postV1PackageVersionsDomainRepositoryFormatPackage(
  args: InferRequestType<
    (typeof client.v1.package)['versions#domain&repository&format&package']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package['versions#domain&repository&format&package'].$post(args, options),
  )
}

export async function postV1PackagesDomainRepository(
  args: InferRequestType<(typeof client.v1)['packages#domain&repository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['packages#domain&repository'].$post(args, options))
}

export async function postV1Repositories(
  args: InferRequestType<typeof client.v1.repositories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.repositories.$post(args, options))
}

export async function postV1DomainRepositoriesDomain(
  args: InferRequestType<(typeof client.v1.domain)['repositories#domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain['repositories#domain'].$post(args, options))
}

export async function postV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1)['tags#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['tags#resourceArn'].$post(args, options))
}

export async function postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256(
  args: InferRequestType<
    (typeof client.v1.package.version)['publish#domain&repository&format&package&version&asset&x-amz-content-sha256']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.version[
      'publish#domain&repository&format&package&version&asset&x-amz-content-sha256'
    ].$post(args, options),
  )
}

export async function putV1DomainPermissionsPolicy(
  args: InferRequestType<typeof client.v1.domain.permissions.policy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.domain.permissions.policy.$put(args, options))
}

export async function postV1TagResourceArn(
  args: InferRequestType<(typeof client.v1)['tag#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['tag#resourceArn'].$post(args, options))
}

export async function postV1UntagResourceArn(
  args: InferRequestType<(typeof client.v1)['untag#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['untag#resourceArn'].$post(args, options))
}

export async function postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackage(
  args: InferRequestType<
    (typeof client.v1.package.versions)['update_status#domain&repository&format&package']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.package.versions['update_status#domain&repository&format&package'].$post(
      args,
      options,
    ),
  )
}
