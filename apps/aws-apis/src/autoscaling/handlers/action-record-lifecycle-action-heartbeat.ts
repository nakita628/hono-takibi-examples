import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRecordLifecycleActionHeartbeatRoute,
  postActionRecordLifecycleActionHeartbeatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRecordLifecycleActionHeartbeatHandler = app
  .openapi(getActionRecordLifecycleActionHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRecordLifecycleActionHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
