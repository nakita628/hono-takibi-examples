import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopTrainingEntityRecognizerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StopTrainingEntityRecognizerHandler = app.openapi(
  postXAmzTargetComprehend20171127StopTrainingEntityRecognizerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
