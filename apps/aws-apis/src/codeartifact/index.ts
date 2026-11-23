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
} from './routes'
import {
  deleteV1DomainDomainRouteHandler,
  deleteV1DomainPermissionsPolicyDomainRouteHandler,
  deleteV1PackageDomainRepositoryFormatPackageRouteHandler,
  deleteV1RepositoryDomainRepositoryRouteHandler,
  deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRouteHandler,
  deleteV1RepositoryPermissionsPoliciesDomainRepositoryRouteHandler,
  getV1DomainDomainRouteHandler,
  getV1DomainPermissionsPolicyDomainRouteHandler,
  getV1PackageDomainRepositoryFormatPackageRouteHandler,
  getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetRouteHandler,
  getV1PackageVersionDomainRepositoryFormatPackageVersionRouteHandler,
  getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionRouteHandler,
  getV1RepositoryDomainRepositoryRouteHandler,
  getV1RepositoryEndpointDomainRepositoryFormatRouteHandler,
  getV1RepositoryPermissionsPolicyDomainRepositoryRouteHandler,
  postV1AuthorizationTokenDomainRouteHandler,
  postV1DomainDomainRouteHandler,
  postV1DomainRepositoriesDomainRouteHandler,
  postV1DomainsRouteHandler,
  postV1PackageDomainRepositoryFormatPackageRouteHandler,
  postV1PackagesDomainRepositoryRouteHandler,
  postV1PackageVersionAssetsDomainRepositoryFormatPackageVersionRouteHandler,
  postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionRouteHandler,
  postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256RouteHandler,
  postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageRouteHandler,
  postV1PackageVersionsDeleteDomainRepositoryFormatPackageRouteHandler,
  postV1PackageVersionsDisposeDomainRepositoryFormatPackageRouteHandler,
  postV1PackageVersionsDomainRepositoryFormatPackageRouteHandler,
  postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageRouteHandler,
  postV1RepositoriesRouteHandler,
  postV1RepositoryDomainRepositoryRouteHandler,
  postV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRouteHandler,
  postV1TagResourceArnRouteHandler,
  postV1TagsResourceArnRouteHandler,
  postV1UntagResourceArnRouteHandler,
  putV1DomainPermissionsPolicyRouteHandler,
  putV1RepositoryDomainRepositoryRouteHandler,
  putV1RepositoryPermissionsPolicyDomainRepositoryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute,
    postV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRouteHandler,
  )
  .openapi(
    deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRoute,
    deleteV1RepositoryExternalConnectionDomainRepositoryExternalConnectionRouteHandler,
  )
  .openapi(
    postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageRoute,
    postV1PackageVersionsCopyDomainSourceRepositoryDestinationRepositoryFormatPackageRouteHandler,
  )
  .openapi(postV1DomainDomainRoute, postV1DomainDomainRouteHandler)
  .openapi(deleteV1DomainDomainRoute, deleteV1DomainDomainRouteHandler)
  .openapi(getV1DomainDomainRoute, getV1DomainDomainRouteHandler)
  .openapi(postV1RepositoryDomainRepositoryRoute, postV1RepositoryDomainRepositoryRouteHandler)
  .openapi(deleteV1RepositoryDomainRepositoryRoute, deleteV1RepositoryDomainRepositoryRouteHandler)
  .openapi(getV1RepositoryDomainRepositoryRoute, getV1RepositoryDomainRepositoryRouteHandler)
  .openapi(putV1RepositoryDomainRepositoryRoute, putV1RepositoryDomainRepositoryRouteHandler)
  .openapi(
    deleteV1DomainPermissionsPolicyDomainRoute,
    deleteV1DomainPermissionsPolicyDomainRouteHandler,
  )
  .openapi(getV1DomainPermissionsPolicyDomainRoute, getV1DomainPermissionsPolicyDomainRouteHandler)
  .openapi(
    deleteV1PackageDomainRepositoryFormatPackageRoute,
    deleteV1PackageDomainRepositoryFormatPackageRouteHandler,
  )
  .openapi(
    getV1PackageDomainRepositoryFormatPackageRoute,
    getV1PackageDomainRepositoryFormatPackageRouteHandler,
  )
  .openapi(
    postV1PackageDomainRepositoryFormatPackageRoute,
    postV1PackageDomainRepositoryFormatPackageRouteHandler,
  )
  .openapi(
    postV1PackageVersionsDeleteDomainRepositoryFormatPackageRoute,
    postV1PackageVersionsDeleteDomainRepositoryFormatPackageRouteHandler,
  )
  .openapi(
    deleteV1RepositoryPermissionsPoliciesDomainRepositoryRoute,
    deleteV1RepositoryPermissionsPoliciesDomainRepositoryRouteHandler,
  )
  .openapi(
    getV1PackageVersionDomainRepositoryFormatPackageVersionRoute,
    getV1PackageVersionDomainRepositoryFormatPackageVersionRouteHandler,
  )
  .openapi(
    postV1PackageVersionsDisposeDomainRepositoryFormatPackageRoute,
    postV1PackageVersionsDisposeDomainRepositoryFormatPackageRouteHandler,
  )
  .openapi(postV1AuthorizationTokenDomainRoute, postV1AuthorizationTokenDomainRouteHandler)
  .openapi(
    getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetRoute,
    getV1PackageVersionAssetDomainRepositoryFormatPackageVersionAssetRouteHandler,
  )
  .openapi(
    getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionRoute,
    getV1PackageVersionReadmeDomainRepositoryFormatPackageVersionRouteHandler,
  )
  .openapi(
    getV1RepositoryEndpointDomainRepositoryFormatRoute,
    getV1RepositoryEndpointDomainRepositoryFormatRouteHandler,
  )
  .openapi(
    getV1RepositoryPermissionsPolicyDomainRepositoryRoute,
    getV1RepositoryPermissionsPolicyDomainRepositoryRouteHandler,
  )
  .openapi(
    putV1RepositoryPermissionsPolicyDomainRepositoryRoute,
    putV1RepositoryPermissionsPolicyDomainRepositoryRouteHandler,
  )
  .openapi(postV1DomainsRoute, postV1DomainsRouteHandler)
  .openapi(
    postV1PackageVersionAssetsDomainRepositoryFormatPackageVersionRoute,
    postV1PackageVersionAssetsDomainRepositoryFormatPackageVersionRouteHandler,
  )
  .openapi(
    postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionRoute,
    postV1PackageVersionDependenciesDomainRepositoryFormatPackageVersionRouteHandler,
  )
  .openapi(
    postV1PackageVersionsDomainRepositoryFormatPackageRoute,
    postV1PackageVersionsDomainRepositoryFormatPackageRouteHandler,
  )
  .openapi(postV1PackagesDomainRepositoryRoute, postV1PackagesDomainRepositoryRouteHandler)
  .openapi(postV1RepositoriesRoute, postV1RepositoriesRouteHandler)
  .openapi(postV1DomainRepositoriesDomainRoute, postV1DomainRepositoriesDomainRouteHandler)
  .openapi(postV1TagsResourceArnRoute, postV1TagsResourceArnRouteHandler)
  .openapi(
    postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256Route,
    postV1PackageVersionPublishDomainRepositoryFormatPackageVersionAssetXAmzContentSha256RouteHandler,
  )
  .openapi(putV1DomainPermissionsPolicyRoute, putV1DomainPermissionsPolicyRouteHandler)
  .openapi(postV1TagResourceArnRoute, postV1TagResourceArnRouteHandler)
  .openapi(postV1UntagResourceArnRoute, postV1UntagResourceArnRouteHandler)
  .openapi(
    postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageRoute,
    postV1PackageVersionsUpdateStatusDomainRepositoryFormatPackageRouteHandler,
  )

export default app
