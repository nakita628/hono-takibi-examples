import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DomainDomainRoute,
  deleteV1DomainPermissionsPolicyDomainRoute,
  deleteV1PackageDomainRepositoryFormatPackageRoute,
  deleteV1RepositoryDomainRepositoryRoute,
  deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute,
  deleteV1RepositoryPermissionsPoliciesDomainRepositoryRoute,
  getV1DomainDomainRoute,
  getV1DomainPermissionsPolicyDomainRoute,
  getV1PackageDomainRepositoryFormatPackageRoute,
  getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetRoute,
  getV1PackageVersionDomainRepositoryFormatPackageVersionRoute,
  getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionRoute,
  getV1RepositoryDomainRepositoryRoute,
  getV1RepositoryEndpointDomainRepositoryFormatRoute,
  getV1RepositoryPermissionsPolicyDomainRepositoryRoute,
  postV1AuthorizationTokenDomainRoute,
  postV1DomainDomainRoute,
  postV1DomainRepositoriesDomainRoute,
  postV1DomainsRoute,
  postV1PackageDomainRepositoryFormatPackageRoute,
  postV1PackagesDomainRepositoryRoute,
  postV1PackageVersionAssetsDomainRepositoryFormatPackageVersionRoute,
  postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionRoute,
  postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256Route,
  postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageRoute,
  postV1PackageVersionsDeleteDomainRepositoryFormatPackageRoute,
  postV1PackageVersionsDisposeDomainRepositoryFormatPackageRoute,
  postV1PackageVersionsDomainRepositoryFormatPackageRoute,
  postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageRoute,
  postV1RepositoriesRoute,
  postV1RepositoryDomainRepositoryRoute,
  postV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute,
  postV1TagResourceArnRoute,
  postV1TagsResourceArnRoute,
  postV1UntagResourceArnRoute,
  putV1DomainPermissionsPolicyRoute,
  putV1RepositoryDomainRepositoryRoute,
  putV1RepositoryPermissionsPolicyDomainRepositoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1DomainDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RepositoryDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RepositoryDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RepositoryDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RepositoryDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DomainPermissionsPolicyDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainPermissionsPolicyDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PackageDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackageDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageVersionsDeleteDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RepositoryPermissionsPoliciesDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackageVersionDomainRepositoryFormatPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageVersionsDisposeDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthorizationTokenDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RepositoryEndpointDomainRepositoryFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RepositoryPermissionsPolicyDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RepositoryPermissionsPolicyDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageVersionAssetsDomainRepositoryFormatPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageVersionsDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackagesDomainRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainRepositoriesDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putV1DomainPermissionsPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UntagResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
