import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030InferICD10CMRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030InferIcd10CmHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030InferICD10CMRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
