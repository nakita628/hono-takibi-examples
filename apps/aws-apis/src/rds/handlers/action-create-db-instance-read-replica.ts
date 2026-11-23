import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBInstanceReadReplicaRoute,
  postActionCreateDBInstanceReadReplicaRoute,
} from '../routes'

export const getActionCreateDBInstanceReadReplicaRouteHandler: RouteHandler<
  typeof getActionCreateDBInstanceReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBInstanceReadReplicaRouteHandler: RouteHandler<
  typeof postActionCreateDBInstanceReadReplicaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
