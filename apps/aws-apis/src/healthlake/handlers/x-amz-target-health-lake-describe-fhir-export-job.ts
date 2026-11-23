import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeDescribeFHIRExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeDescribeFhirExportJobHandler = app.openapi(
  postXAmzTargetHealthLakeDescribeFHIRExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
