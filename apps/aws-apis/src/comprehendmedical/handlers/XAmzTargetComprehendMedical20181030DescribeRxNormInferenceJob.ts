import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DescribeRxNormInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
