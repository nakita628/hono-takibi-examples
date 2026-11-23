import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeWorldGenerationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const describeWorldGenerationJobHandler = app.openapi(
  postDescribeWorldGenerationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
