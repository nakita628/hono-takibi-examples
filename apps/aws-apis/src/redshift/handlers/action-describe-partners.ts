import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribePartnersRoute, postActionDescribePartnersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribePartnersHandler = app
  .openapi(getActionDescribePartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
