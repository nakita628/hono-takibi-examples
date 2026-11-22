import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeDescribeFHIRDatastoreHandler = app.openapi(
  postXAmzTargetHealthLakeDescribeFHIRDatastoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
