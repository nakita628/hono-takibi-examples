import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableEbsEncryptionByDefaultRoute,
  postActionEnableEbsEncryptionByDefaultRoute,
} from '../routes'

export const getActionEnableEbsEncryptionByDefaultRouteHandler: RouteHandler<
  typeof getActionEnableEbsEncryptionByDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableEbsEncryptionByDefaultRouteHandler: RouteHandler<
  typeof postActionEnableEbsEncryptionByDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
