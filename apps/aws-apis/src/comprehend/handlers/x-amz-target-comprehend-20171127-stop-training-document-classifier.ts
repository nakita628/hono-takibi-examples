import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopTrainingDocumentClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StopTrainingDocumentClassifierHandler = app.openapi(
  postXAmzTargetComprehend20171127StopTrainingDocumentClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
