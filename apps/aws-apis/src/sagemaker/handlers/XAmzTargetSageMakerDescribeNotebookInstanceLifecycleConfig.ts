import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigHandler = app.openapi(
  postXAmzTargetSageMakerDescribeNotebookInstanceLifecycleConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
