import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeDeleteFhirDatastoreHandler = app.openapi(
  postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
