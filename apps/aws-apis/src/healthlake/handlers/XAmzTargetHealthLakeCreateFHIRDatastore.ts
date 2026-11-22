import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeCreateFHIRDatastoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeCreateFHIRDatastoreHandler = app.openapi(
  postXAmzTargetHealthLakeCreateFHIRDatastoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
