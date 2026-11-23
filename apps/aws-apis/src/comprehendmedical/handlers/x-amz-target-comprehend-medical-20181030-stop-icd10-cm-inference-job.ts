import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StopIcd10CmInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StopICD10CMInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
