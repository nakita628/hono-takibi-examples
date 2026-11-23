import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyReplicationGroupShardConfigurationRoute,
  postActionModifyReplicationGroupShardConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyReplicationGroupShardConfigurationHandler = app
  .openapi(getActionModifyReplicationGroupShardConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyReplicationGroupShardConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
