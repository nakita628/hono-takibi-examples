import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterAutomatedBackupsRoute,
  postActionDescribeDBClusterAutomatedBackupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBClusterAutomatedBackupsHandler = app
  .openapi(getActionDescribeDBClusterAutomatedBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterAutomatedBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
