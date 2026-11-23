import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030InferSNOMEDCTRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030InferSnomedctHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030InferSNOMEDCTRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
