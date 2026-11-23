import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127TagResourceHandler = app.openapi(
  postXAmzTargetComprehend20171127TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
