import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdPackagesCargo1PackageNameRoute,
  getApiV4ProjectsIdPackagesCargo2PackageNameRoute,
  getApiV4ProjectsIdPackagesCargo3FirstCharPackageNameRoute,
  getApiV4ProjectsIdPackagesCargoConfigJsonRoute,
  getApiV4ProjectsIdPackagesCargoPackageNamePackageVersionDownloadRoute,
  getApiV4ProjectsIdPackagesCargoPrefix1Prefix2PackageNameRoute,
  putApiV4ProjectsIdPackagesCargoApiV1CratesNewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesCargoHandler = app
  .openapi(getApiV4ProjectsIdPackagesCargoConfigJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesCargo1PackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesCargo2PackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesCargo3FirstCharPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesCargoPrefix1Prefix2PackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesCargoPackageNamePackageVersionDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesCargoApiV1CratesNewRoute, (c) => {
    throw new Error('Not implemented')
  })
