import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030DescribeIcd10CmInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DescribeICD10CMInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
