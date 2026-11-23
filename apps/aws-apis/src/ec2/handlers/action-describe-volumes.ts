import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeVolumesRoute, postActionDescribeVolumesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVolumesHandler = app
  .openapi(getActionDescribeVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
