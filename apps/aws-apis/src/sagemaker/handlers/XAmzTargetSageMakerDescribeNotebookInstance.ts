import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeNotebookInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeNotebookInstanceHandler = app.openapi(
  postXAmzTargetSageMakerDescribeNotebookInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
