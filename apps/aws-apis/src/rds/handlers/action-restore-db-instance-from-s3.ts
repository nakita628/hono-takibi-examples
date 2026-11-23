import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreDBInstanceFromS3Route,
  postActionRestoreDBInstanceFromS3Route,
} from '../routes'

export const getActionRestoreDBInstanceFromS3RouteHandler: RouteHandler<
  typeof getActionRestoreDBInstanceFromS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreDBInstanceFromS3RouteHandler: RouteHandler<
  typeof postActionRestoreDBInstanceFromS3Route
> = async (c) => {
  throw new Error('Not implemented')
}
