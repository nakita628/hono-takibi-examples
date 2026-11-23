import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerDescribeNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
