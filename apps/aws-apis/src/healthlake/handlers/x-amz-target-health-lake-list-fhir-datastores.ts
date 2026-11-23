import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeListFHIRDatastoresRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeListFhirDatastoresHandler = app.openapi(
  postXAmzTargetHealthLakeListFHIRDatastoresRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
