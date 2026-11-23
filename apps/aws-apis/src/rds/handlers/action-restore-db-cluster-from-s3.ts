import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreDBClusterFromS3Route,
  postActionRestoreDBClusterFromS3Route,
} from '../routes'

export const getActionRestoreDBClusterFromS3RouteHandler: RouteHandler<
  typeof getActionRestoreDBClusterFromS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreDBClusterFromS3RouteHandler: RouteHandler<
  typeof postActionRestoreDBClusterFromS3Route
> = async (c) => {
  throw new Error('Not implemented')
}
