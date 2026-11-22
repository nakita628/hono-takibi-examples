import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4GroupIdDashPackagesComposerP2PackageNameRoute,
  getApiV4GroupIdDashPackagesComposerPackageNameRoute,
  getApiV4GroupIdDashPackagesComposerPackagesRoute,
  getApiV4GroupIdDashPackagesComposerPShaRoute,
  getApiV4ProjectsIdPackagesComposerArchivesPackageNameRoute,
  postApiV4ProjectsIdPackagesComposerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesComposerHandler = app
  .openapi(getApiV4GroupIdDashPackagesComposerPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupIdDashPackagesComposerPShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupIdDashPackagesComposerP2PackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupIdDashPackagesComposerPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesComposerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesComposerArchivesPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
