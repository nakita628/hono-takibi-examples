import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DescribeBatchLoadTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101DescribeBatchLoadTaskHandler = app.openapi(
  postXAmzTargetTimestream20181101DescribeBatchLoadTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
