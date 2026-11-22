import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBClusterFromS3Route,
  postActionRestoreDBClusterFromS3Route,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRestoreDBClusterFromS3Handler = app
  .openapi(getActionRestoreDBClusterFromS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBClusterFromS3Route, (c) => {
    throw new Error('Not implemented')
  })
