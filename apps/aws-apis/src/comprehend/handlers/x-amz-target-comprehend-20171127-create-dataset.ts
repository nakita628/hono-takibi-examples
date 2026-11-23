import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127CreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127CreateDatasetHandler = app.openapi(
  postXAmzTargetComprehend20171127CreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
