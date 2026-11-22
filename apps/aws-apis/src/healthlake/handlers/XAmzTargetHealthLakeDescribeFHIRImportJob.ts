import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeDescribeFHIRImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeDescribeFHIRImportJobHandler = app.openapi(
  postXAmzTargetHealthLakeDescribeFHIRImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
