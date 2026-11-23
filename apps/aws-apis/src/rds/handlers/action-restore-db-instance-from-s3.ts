import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBInstanceFromS3Route,
  postActionRestoreDBInstanceFromS3Route,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreDbInstanceFromS3Handler = app
  .openapi(getActionRestoreDBInstanceFromS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBInstanceFromS3Route, (c) => {
    throw new Error('Not implemented')
  })
