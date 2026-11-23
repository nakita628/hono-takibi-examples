import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdRoute,
  getOmnichannelOneTimeOrdersRoute,
} from '../routes'

export const getOmnichannelOneTimeOrdersRouteHandler: RouteHandler<
  typeof getOmnichannelOneTimeOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdRouteHandler: RouteHandler<
  typeof getOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
