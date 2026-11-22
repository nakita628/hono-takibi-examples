import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetHealthLakeCreateFHIRDatastoreHandler,
  XAmzTargetHealthLakeDeleteFHIRDatastoreHandler,
  XAmzTargetHealthLakeDescribeFHIRDatastoreHandler,
  XAmzTargetHealthLakeDescribeFHIRExportJobHandler,
  XAmzTargetHealthLakeDescribeFHIRImportJobHandler,
  XAmzTargetHealthLakeListFHIRDatastoresHandler,
  XAmzTargetHealthLakeListFHIRExportJobsHandler,
  XAmzTargetHealthLakeListFHIRImportJobsHandler,
  XAmzTargetHealthLakeListTagsForResourceHandler,
  XAmzTargetHealthLakeStartFHIRExportJobHandler,
  XAmzTargetHealthLakeStartFHIRImportJobHandler,
  XAmzTargetHealthLakeTagResourceHandler,
  XAmzTargetHealthLakeUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetHealthLakeCreateFHIRDatastoreHandler)
  .route('/', XAmzTargetHealthLakeDeleteFHIRDatastoreHandler)
  .route('/', XAmzTargetHealthLakeDescribeFHIRDatastoreHandler)
  .route('/', XAmzTargetHealthLakeDescribeFHIRExportJobHandler)
  .route('/', XAmzTargetHealthLakeDescribeFHIRImportJobHandler)
  .route('/', XAmzTargetHealthLakeListFHIRDatastoresHandler)
  .route('/', XAmzTargetHealthLakeListFHIRExportJobsHandler)
  .route('/', XAmzTargetHealthLakeListFHIRImportJobsHandler)
  .route('/', XAmzTargetHealthLakeListTagsForResourceHandler)
  .route('/', XAmzTargetHealthLakeStartFHIRExportJobHandler)
  .route('/', XAmzTargetHealthLakeStartFHIRImportJobHandler)
  .route('/', XAmzTargetHealthLakeTagResourceHandler)
  .route('/', XAmzTargetHealthLakeUntagResourceHandler)

export default app
