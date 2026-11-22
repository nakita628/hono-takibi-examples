import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeImagesRoute, postActionDescribeImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeImagesHandler = app
  .openapi(getActionDescribeImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
