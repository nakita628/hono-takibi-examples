import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableEbsEncryptionByDefaultRoute,
  postActionDisableEbsEncryptionByDefaultRoute,
} from '../routes'

export const getActionDisableEbsEncryptionByDefaultRouteHandler: RouteHandler<
  typeof getActionDisableEbsEncryptionByDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableEbsEncryptionByDefaultRouteHandler: RouteHandler<
  typeof postActionDisableEbsEncryptionByDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
