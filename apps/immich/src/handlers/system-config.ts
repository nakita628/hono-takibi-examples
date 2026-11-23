import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemConfigDefaultsRoute,
  getSystemConfigRoute,
  getSystemConfigStorageTemplateOptionsRoute,
  putSystemConfigRoute,
} from '../routes'

export const getSystemConfigRouteHandler: RouteHandler<typeof getSystemConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSystemConfigRouteHandler: RouteHandler<typeof putSystemConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConfigDefaultsRouteHandler: RouteHandler<
  typeof getSystemConfigDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemConfigStorageTemplateOptionsRouteHandler: RouteHandler<
  typeof getSystemConfigStorageTemplateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
