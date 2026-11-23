import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212UpdateMLModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212UpdateMlModelHandler = app.openapi(
  postXAmzTargetAmazonML20141212UpdateMLModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
