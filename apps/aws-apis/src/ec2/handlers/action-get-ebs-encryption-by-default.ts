import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetEbsEncryptionByDefaultRoute,
  postActionGetEbsEncryptionByDefaultRoute,
} from '../routes'

export const getActionGetEbsEncryptionByDefaultRouteHandler: RouteHandler<
  typeof getActionGetEbsEncryptionByDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetEbsEncryptionByDefaultRouteHandler: RouteHandler<
  typeof postActionGetEbsEncryptionByDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
