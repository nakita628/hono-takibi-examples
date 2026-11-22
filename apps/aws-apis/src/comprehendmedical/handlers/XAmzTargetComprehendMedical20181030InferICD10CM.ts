import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030InferICD10CMRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030InferICD10CMHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030InferICD10CMRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
