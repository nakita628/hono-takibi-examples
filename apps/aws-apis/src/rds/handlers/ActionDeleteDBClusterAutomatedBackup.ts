import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBClusterAutomatedBackupRoute,
  postActionDeleteDBClusterAutomatedBackupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDBClusterAutomatedBackupHandler = app
  .openapi(getActionDeleteDBClusterAutomatedBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBClusterAutomatedBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
