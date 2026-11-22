import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030StartICD10CMInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StartICD10CMInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
