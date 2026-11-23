import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRecordLifecycleActionHeartbeatRoute,
  postActionRecordLifecycleActionHeartbeatRoute,
} from '../routes'

export const getActionRecordLifecycleActionHeartbeatRouteHandler: RouteHandler<
  typeof getActionRecordLifecycleActionHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRecordLifecycleActionHeartbeatRouteHandler: RouteHandler<
  typeof postActionRecordLifecycleActionHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
