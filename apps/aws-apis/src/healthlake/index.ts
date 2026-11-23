import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetHealthLakeCreateFHIRDatastoreRoute,
  postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute,
  postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute,
  postXAmzTargetHealthLakeDescribeFHIRExportJobRoute,
  postXAmzTargetHealthLakeDescribeFHIRImportJobRoute,
  postXAmzTargetHealthLakeListFHIRDatastoresRoute,
  postXAmzTargetHealthLakeListFHIRExportJobsRoute,
  postXAmzTargetHealthLakeListFHIRImportJobsRoute,
  postXAmzTargetHealthLakeListTagsForResourceRoute,
  postXAmzTargetHealthLakeStartFHIRExportJobRoute,
  postXAmzTargetHealthLakeStartFHIRImportJobRoute,
  postXAmzTargetHealthLakeTagResourceRoute,
  postXAmzTargetHealthLakeUntagResourceRoute,
} from './routes'
import {
  postXAmzTargetHealthLakeCreateFHIRDatastoreRouteHandler,
  postXAmzTargetHealthLakeDeleteFHIRDatastoreRouteHandler,
  postXAmzTargetHealthLakeDescribeFHIRDatastoreRouteHandler,
  postXAmzTargetHealthLakeDescribeFHIRExportJobRouteHandler,
  postXAmzTargetHealthLakeDescribeFHIRImportJobRouteHandler,
  postXAmzTargetHealthLakeListFHIRDatastoresRouteHandler,
  postXAmzTargetHealthLakeListFHIRExportJobsRouteHandler,
  postXAmzTargetHealthLakeListFHIRImportJobsRouteHandler,
  postXAmzTargetHealthLakeListTagsForResourceRouteHandler,
  postXAmzTargetHealthLakeStartFHIRExportJobRouteHandler,
  postXAmzTargetHealthLakeStartFHIRImportJobRouteHandler,
  postXAmzTargetHealthLakeTagResourceRouteHandler,
  postXAmzTargetHealthLakeUntagResourceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetHealthLakeCreateFHIRDatastoreRoute,
    postXAmzTargetHealthLakeCreateFHIRDatastoreRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute,
    postXAmzTargetHealthLakeDeleteFHIRDatastoreRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute,
    postXAmzTargetHealthLakeDescribeFHIRDatastoreRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeDescribeFHIRExportJobRoute,
    postXAmzTargetHealthLakeDescribeFHIRExportJobRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeDescribeFHIRImportJobRoute,
    postXAmzTargetHealthLakeDescribeFHIRImportJobRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeListFHIRDatastoresRoute,
    postXAmzTargetHealthLakeListFHIRDatastoresRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeListFHIRExportJobsRoute,
    postXAmzTargetHealthLakeListFHIRExportJobsRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeListFHIRImportJobsRoute,
    postXAmzTargetHealthLakeListFHIRImportJobsRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeListTagsForResourceRoute,
    postXAmzTargetHealthLakeListTagsForResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeStartFHIRExportJobRoute,
    postXAmzTargetHealthLakeStartFHIRExportJobRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeStartFHIRImportJobRoute,
    postXAmzTargetHealthLakeStartFHIRImportJobRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeTagResourceRoute,
    postXAmzTargetHealthLakeTagResourceRouteHandler,
  )
  .openapi(
    postXAmzTargetHealthLakeUntagResourceRoute,
    postXAmzTargetHealthLakeUntagResourceRouteHandler,
  )

export default app
