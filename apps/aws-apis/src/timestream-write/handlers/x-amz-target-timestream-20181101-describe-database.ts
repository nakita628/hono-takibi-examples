import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTimestream20181101DescribeDatabaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTimestream20181101DescribeDatabaseHandler = app.openapi(
  postXAmzTargetTimestream20181101DescribeDatabaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
