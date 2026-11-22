import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ImportModelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ImportModelHandler = app.openapi(
  postXAmzTargetComprehend20171127ImportModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
