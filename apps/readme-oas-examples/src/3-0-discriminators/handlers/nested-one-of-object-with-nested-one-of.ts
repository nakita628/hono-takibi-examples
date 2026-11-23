import { OpenAPIHono } from '@hono/zod-openapi'
import { patchNestedOneOfObjectWithNestedOneOfRoute } from '../routes'

const app = new OpenAPIHono()

export const nestedOneOfObjectWithNestedOneOfHandler = app.openapi(
  patchNestedOneOfObjectWithNestedOneOfRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
