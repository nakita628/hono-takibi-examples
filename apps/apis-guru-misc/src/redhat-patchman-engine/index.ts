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
} from './routes'
import {
  deleteApiPatchV1SystemsInventoryIdRouteHandler,
  getApiPatchV1AdvisoriesAdvisoryIdRouteHandler,
  getApiPatchV1AdvisoriesAdvisoryIdSystemsRouteHandler,
  getApiPatchV1AdvisoriesRouteHandler,
  getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsRouteHandler,
  getApiPatchV1ExportAdvisoriesRouteHandler,
  getApiPatchV1ExportPackagesPackageNameSystemsRouteHandler,
  getApiPatchV1ExportPackagesRouteHandler,
  getApiPatchV1ExportSystemsInventoryIdAdvisoriesRouteHandler,
  getApiPatchV1ExportSystemsInventoryIdPackagesRouteHandler,
  getApiPatchV1ExportSystemsRouteHandler,
  getApiPatchV1PackagesIndexRouteHandler,
  getApiPatchV1PackagesPackageNameRouteHandler,
  getApiPatchV1PackagesPackageNameSystemsRouteHandler,
  getApiPatchV1PackagesPackageNameVersionsRouteHandler,
  getApiPatchV1SystemsInventoryIdAdvisoriesRouteHandler,
  getApiPatchV1SystemsInventoryIdPackagesRouteHandler,
  getApiPatchV1SystemsInventoryIdRouteHandler,
  getApiPatchV1SystemsRouteHandler,
  postApiPatchV1ViewsAdvisoriesSystemsRouteHandler,
  postApiPatchV1ViewsSystemsAdvisoriesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiPatchV1AdvisoriesRoute, getApiPatchV1AdvisoriesRouteHandler)
  .openapi(getApiPatchV1AdvisoriesAdvisoryIdRoute, getApiPatchV1AdvisoriesAdvisoryIdRouteHandler)
  .openapi(
    getApiPatchV1AdvisoriesAdvisoryIdSystemsRoute,
    getApiPatchV1AdvisoriesAdvisoryIdSystemsRouteHandler,
  )
  .openapi(getApiPatchV1ExportAdvisoriesRoute, getApiPatchV1ExportAdvisoriesRouteHandler)
  .openapi(
    getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsRoute,
    getApiPatchV1ExportAdvisoriesAdvisoryIdSystemsRouteHandler,
  )
  .openapi(getApiPatchV1ExportPackagesRoute, getApiPatchV1ExportPackagesRouteHandler)
  .openapi(
    getApiPatchV1ExportPackagesPackageNameSystemsRoute,
    getApiPatchV1ExportPackagesPackageNameSystemsRouteHandler,
  )
  .openapi(getApiPatchV1ExportSystemsRoute, getApiPatchV1ExportSystemsRouteHandler)
  .openapi(
    getApiPatchV1ExportSystemsInventoryIdAdvisoriesRoute,
    getApiPatchV1ExportSystemsInventoryIdAdvisoriesRouteHandler,
  )
  .openapi(
    getApiPatchV1ExportSystemsInventoryIdPackagesRoute,
    getApiPatchV1ExportSystemsInventoryIdPackagesRouteHandler,
  )
  .openapi(getApiPatchV1PackagesIndexRoute, getApiPatchV1PackagesIndexRouteHandler)
  .openapi(getApiPatchV1PackagesPackageNameRoute, getApiPatchV1PackagesPackageNameRouteHandler)
  .openapi(
    getApiPatchV1PackagesPackageNameSystemsRoute,
    getApiPatchV1PackagesPackageNameSystemsRouteHandler,
  )
  .openapi(
    getApiPatchV1PackagesPackageNameVersionsRoute,
    getApiPatchV1PackagesPackageNameVersionsRouteHandler,
  )
  .openapi(getApiPatchV1SystemsRoute, getApiPatchV1SystemsRouteHandler)
  .openapi(deleteApiPatchV1SystemsInventoryIdRoute, deleteApiPatchV1SystemsInventoryIdRouteHandler)
  .openapi(getApiPatchV1SystemsInventoryIdRoute, getApiPatchV1SystemsInventoryIdRouteHandler)
  .openapi(
    getApiPatchV1SystemsInventoryIdAdvisoriesRoute,
    getApiPatchV1SystemsInventoryIdAdvisoriesRouteHandler,
  )
  .openapi(
    getApiPatchV1SystemsInventoryIdPackagesRoute,
    getApiPatchV1SystemsInventoryIdPackagesRouteHandler,
  )
  .openapi(
    postApiPatchV1ViewsAdvisoriesSystemsRoute,
    postApiPatchV1ViewsAdvisoriesSystemsRouteHandler,
  )
  .openapi(
    postApiPatchV1ViewsSystemsAdvisoriesRoute,
    postApiPatchV1ViewsSystemsAdvisoriesRouteHandler,
  )

export default app
