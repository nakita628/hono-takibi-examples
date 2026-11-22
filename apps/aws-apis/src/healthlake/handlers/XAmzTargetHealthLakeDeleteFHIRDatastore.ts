import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeDeleteFHIRDatastoreHandler = app.openapi(
  postXAmzTargetHealthLakeDeleteFHIRDatastoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
