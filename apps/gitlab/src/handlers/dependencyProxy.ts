import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdDependencyProxyCacheRoute,
  getApiV4ProjectsIdDependencyProxyPackagesMavenPathFileNameRoute,
  getApiV4ProjectsIdDependencyProxyPackagesNpmPackageNameDashFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dependencyProxyHandler = app
  .openapi(getApiV4ProjectsIdDependencyProxyPackagesNpmPackageNameDashFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDependencyProxyPackagesMavenPathFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdDependencyProxyCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
