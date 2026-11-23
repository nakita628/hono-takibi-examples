import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeImagesRoute, postActionDescribeImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeImagesHandler = app
  .openapi(getActionDescribeImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
