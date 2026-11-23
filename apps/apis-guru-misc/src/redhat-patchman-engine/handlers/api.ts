import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPatchV1SystemsInventoryIdRoute,
  getApiPatchV1AdvisoriesAdvisoryIdRoute,
  getApiPatchV1AdvisoriesAdvisoryIdSystemsRoute,
  getApiPatchV1AdvisoriesRoute,
  getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsRoute,
  getApiPatchV1ExportAdvisoriesRoute,
  getApiPatchV1ExportPackagesPackageNameSystemsRoute,
  getApiPatchV1ExportPackagesRoute,
  getApiPatchV1ExportSystemsInventoryIdAdvisoriesRoute,
  getApiPatchV1ExportSystemsInventoryIdPackagesRoute,
  getApiPatchV1ExportSystemsRoute,
  getApiPatchV1PackagesIndexRoute,
  getApiPatchV1PackagesPackageNameRoute,
  getApiPatchV1PackagesPackageNameSystemsRoute,
  getApiPatchV1PackagesPackageNameVersionsRoute,
  getApiPatchV1SystemsInventoryIdAdvisoriesRoute,
  getApiPatchV1SystemsInventoryIdPackagesRoute,
  getApiPatchV1SystemsInventoryIdRoute,
  getApiPatchV1SystemsRoute,
  postApiPatchV1ViewsAdvisoriesSystemsRoute,
  postApiPatchV1ViewsSystemsAdvisoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiPatchV1AdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1AdvisoriesAdvisoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1AdvisoriesAdvisoryIdSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportPackagesPackageNameSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportSystemsInventoryIdAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1ExportSystemsInventoryIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1PackagesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1PackagesPackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1PackagesPackageNameSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1PackagesPackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1SystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatchV1SystemsInventoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1SystemsInventoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1SystemsInventoryIdAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatchV1SystemsInventoryIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatchV1ViewsAdvisoriesSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatchV1ViewsSystemsAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
