import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVolumesModificationsRoute,
  postActionDescribeVolumesModificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVolumesModificationsHandler = app
  .openapi(getActionDescribeVolumesModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVolumesModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
