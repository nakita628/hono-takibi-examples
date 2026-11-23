import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetHealthLakeCreateFhirDatastoreHandler,
  xAmzTargetHealthLakeDeleteFhirDatastoreHandler,
  xAmzTargetHealthLakeDescribeFhirDatastoreHandler,
  xAmzTargetHealthLakeDescribeFhirExportJobHandler,
  xAmzTargetHealthLakeDescribeFhirImportJobHandler,
  xAmzTargetHealthLakeListFhirDatastoresHandler,
  xAmzTargetHealthLakeListFhirExportJobsHandler,
  xAmzTargetHealthLakeListFhirImportJobsHandler,
  xAmzTargetHealthLakeListTagsForResourceHandler,
  xAmzTargetHealthLakeStartFhirExportJobHandler,
  xAmzTargetHealthLakeStartFhirImportJobHandler,
  xAmzTargetHealthLakeTagResourceHandler,
  xAmzTargetHealthLakeUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetHealthLakeCreateFhirDatastoreHandler)
  .route('/', xAmzTargetHealthLakeDeleteFhirDatastoreHandler)
  .route('/', xAmzTargetHealthLakeDescribeFhirDatastoreHandler)
  .route('/', xAmzTargetHealthLakeDescribeFhirExportJobHandler)
  .route('/', xAmzTargetHealthLakeDescribeFhirImportJobHandler)
  .route('/', xAmzTargetHealthLakeListFhirDatastoresHandler)
  .route('/', xAmzTargetHealthLakeListFhirExportJobsHandler)
  .route('/', xAmzTargetHealthLakeListFhirImportJobsHandler)
  .route('/', xAmzTargetHealthLakeListTagsForResourceHandler)
  .route('/', xAmzTargetHealthLakeStartFhirExportJobHandler)
  .route('/', xAmzTargetHealthLakeStartFhirImportJobHandler)
  .route('/', xAmzTargetHealthLakeTagResourceHandler)
  .route('/', xAmzTargetHealthLakeUntagResourceHandler)

export default app
