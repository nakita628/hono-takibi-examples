import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListDatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListDatasetsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListDatasetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
