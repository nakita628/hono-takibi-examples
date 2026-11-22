import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeIamInstanceProfileAssociationsRoute,
  postActionDescribeIamInstanceProfileAssociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeIamInstanceProfileAssociationsHandler = app
  .openapi(getActionDescribeIamInstanceProfileAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIamInstanceProfileAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
