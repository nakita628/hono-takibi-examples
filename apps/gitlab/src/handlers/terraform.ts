import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdTerraformStateNameLockRoute,
  deleteApiV4ProjectsIdTerraformStateNameRoute,
  deleteApiV4ProjectsIdTerraformStateNameVersionsSerialRoute,
  getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemDownloadRoute,
  getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionDownloadRoute,
  getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionFileRoute,
  getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionRoute,
  getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemRoute,
  getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemVersionsRoute,
  getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionRoute,
  getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemRoute,
  getApiV4ProjectsIdTerraformStateNameRoute,
  getApiV4ProjectsIdTerraformStateNameVersionsSerialRoute,
  postApiV4ProjectsIdTerraformStateNameAuthorizeRoute,
  postApiV4ProjectsIdTerraformStateNameLockRoute,
  postApiV4ProjectsIdTerraformStateNameRoute,
  putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionFileAuthorizeRoute,
  putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terraformHandler = app
  .openapi(getApiV4ProjectsIdTerraformStateNameVersionsSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdTerraformStateNameVersionsSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdTerraformStateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdTerraformStateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdTerraformStateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdTerraformStateNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdTerraformStateNameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdTerraformStateNameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionFileAuthorizeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystemModuleVersionFileRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionFileRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemModuleVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
