import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030InferRxNormRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030InferRxNormHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030InferRxNormRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
