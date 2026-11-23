import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeDescribeFhirDatastoreHandler = app.openapi(
  postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
