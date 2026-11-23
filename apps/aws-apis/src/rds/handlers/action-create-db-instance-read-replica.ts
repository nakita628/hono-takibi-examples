import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateDBInstanceReadReplicaRoute,
  postActionCreateDBInstanceReadReplicaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateDbInstanceReadReplicaHandler = app
  .openapi(getActionCreateDBInstanceReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBInstanceReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
