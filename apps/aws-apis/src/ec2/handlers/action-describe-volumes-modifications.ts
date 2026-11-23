import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVolumesModificationsRoute,
  postActionDescribeVolumesModificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVolumesModificationsHandler = app
  .openapi(getActionDescribeVolumesModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVolumesModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
