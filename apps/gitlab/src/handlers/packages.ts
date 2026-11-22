import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdPackagesPackageIdPackageFilesPackageFileIdRoute,
  deleteApiV4ProjectsIdPackagesPackageIdRoute,
  getApiV4GroupsIdDashPackagesMavenPathFileNameRoute,
  getApiV4GroupsIdPackagesRoute,
  getApiV4PackagesMavenPathFileNameRoute,
  getApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameRoute,
  getApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameRoute,
  getApiV4ProjectsIdPackagesGoModuleNameVListRoute,
  getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionInfoRoute,
  getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionModRoute,
  getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionZipRoute,
  getApiV4ProjectsIdPackagesMavenPathFileNameRoute,
  getApiV4ProjectsIdPackagesPackageIdPackageFilesPackageFileIdDownloadRoute,
  getApiV4ProjectsIdPackagesPackageIdPackageFilesRoute,
  getApiV4ProjectsIdPackagesPackageIdPipelinesRoute,
  getApiV4ProjectsIdPackagesPackageIdRoute,
  getApiV4ProjectsIdPackagesRoute,
  putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameRoute,
  putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameRoute,
  putApiV4ProjectsIdPackagesMavenPathFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesMavenPathFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesHandler = app
  .openapi(getApiV4ProjectsIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPackageIdPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPackageIdPackageFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPackagesPackageIdPackageFilesPackageFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPackageIdPackageFilesPackageFileIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PackagesMavenPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesMavenPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesMavenPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesMavenPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesMavenPathFileNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesGoModuleNameVListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionModRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesGoModuleNameVModuleVersionZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesGenericPackageNamePackageVersionFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesGenericPackageNamePackageVersionPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
