import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdPackagesNugetPackageNamePackageVersionRoute,
  getApiV4GroupsIdDashPackagesNugetIndexRoute,
  getApiV4GroupsIdDashPackagesNugetMetadataPackageNameIndexRoute,
  getApiV4GroupsIdDashPackagesNugetMetadataPackageNamePackageVersionRoute,
  getApiV4GroupsIdDashPackagesNugetQueryRoute,
  getApiV4GroupsIdDashPackagesNugetSymbolfilesFileNameSignatureSameFileNameRoute,
  getApiV4GroupsIdDashPackagesNugetV2MetadataRoute,
  getApiV4GroupsIdDashPackagesNugetV2Route,
  getApiV4ProjectsIdPackagesNugetDownloadPackageNameIndexRoute,
  getApiV4ProjectsIdPackagesNugetDownloadPackageNamePackageVersionPackageFilenameRoute,
  getApiV4ProjectsIdPackagesNugetIndexRoute,
  getApiV4ProjectsIdPackagesNugetMetadataPackageNameIndexRoute,
  getApiV4ProjectsIdPackagesNugetMetadataPackageNamePackageVersionRoute,
  getApiV4ProjectsIdPackagesNugetQueryRoute,
  getApiV4ProjectsIdPackagesNugetSymbolfilesFileNameSignatureSameFileNameRoute,
  getApiV4ProjectsIdPackagesNugetV2MetadataRoute,
  getApiV4ProjectsIdPackagesNugetV2Route,
  getApiV4ProjectsProjectIdPackagesNugetV2FindPackagesByIdRoute,
  getApiV4ProjectsProjectIdPackagesNugetV2PackagesIdPackageNameVersionPackageVersionRoute,
  getApiV4ProjectsProjectIdPackagesNugetV2PackagesRoute,
  putApiV4ProjectsIdPackagesNugetAuthorizeRoute,
  putApiV4ProjectsIdPackagesNugetRoute,
  putApiV4ProjectsIdPackagesNugetSymbolpackageAuthorizeRoute,
  putApiV4ProjectsIdPackagesNugetSymbolpackageRoute,
  putApiV4ProjectsIdPackagesNugetV2AuthorizeRoute,
  putApiV4ProjectsIdPackagesNugetV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const packagesNuGetHandler = app
  .openapi(getApiV4ProjectsIdPackagesNugetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetSymbolfilesFileNameSignatureSameFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNugetV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetV2MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetMetadataPackageNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetMetadataPackageNamePackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNugetDownloadPackageNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesNugetDownloadPackageNamePackageVersionPackageFilenameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiV4ProjectsIdPackagesNugetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNugetAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNugetSymbolpackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNugetSymbolpackageAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPackagesNugetPackageNamePackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNugetV2AuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsProjectIdPackagesNugetV2FindPackagesByIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsProjectIdPackagesNugetV2PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsProjectIdPackagesNugetV2PackagesIdPackageNameVersionPackageVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4GroupsIdDashPackagesNugetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNugetSymbolfilesFileNameSignatureSameFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNugetV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNugetV2MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNugetMetadataPackageNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNugetMetadataPackageNamePackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNugetQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
