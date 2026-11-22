import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsTagRoute,
  deleteApiV4PackagesNpmDashPackagePackageNameDistTagsTagRoute,
  deleteApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsTagRoute,
  getApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsRoute,
  getApiV4GroupsIdDashPackagesNpmPackageNameRoute,
  getApiV4PackagesNpmDashPackagePackageNameDistTagsRoute,
  getApiV4PackagesNpmPackageNameRoute,
  getApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsRoute,
  getApiV4ProjectsIdPackagesNpmPackageNameDashFileNameRoute,
  getApiV4ProjectsIdPackagesNpmPackageNameRoute,
  postApiV4GroupsIdDashPackagesNpmDashNpmV1SecurityAdvisoriesBulkRoute,
  postApiV4GroupsIdDashPackagesNpmDashNpmV1SecurityAuditsQuickRoute,
  postApiV4PackagesNpmDashNpmV1SecurityAdvisoriesBulkRoute,
  postApiV4PackagesNpmDashNpmV1SecurityAuditsQuickRoute,
  postApiV4ProjectsIdPackagesNpmDashNpmV1SecurityAdvisoriesBulkRoute,
  postApiV4ProjectsIdPackagesNpmDashNpmV1SecurityAuditsQuickRoute,
  putApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsTagRoute,
  putApiV4PackagesNpmDashPackagePackageNameDistTagsTagRoute,
  putApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsTagRoute,
  putApiV4ProjectsIdPackagesNpmPackageNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesNPMHandler = app
  .openapi(getApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdPackagesNpmDashPackagePackageNameDistTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesNpmDashNpmV1SecurityAdvisoriesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesNpmDashNpmV1SecurityAuditsQuickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNpmPackageNameDashFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesNpmPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesNpmPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PackagesNpmDashPackagePackageNameDistTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4PackagesNpmDashPackagePackageNameDistTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4PackagesNpmDashPackagePackageNameDistTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4PackagesNpmDashNpmV1SecurityAdvisoriesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4PackagesNpmDashNpmV1SecurityAuditsQuickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4PackagesNpmPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdDashPackagesNpmDashPackagePackageNameDistTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdDashPackagesNpmDashNpmV1SecurityAdvisoriesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdDashPackagesNpmDashNpmV1SecurityAuditsQuickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesNpmPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
