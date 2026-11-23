import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListConfigurationSetsRoute,
  postActionListConfigurationSetsRoute,
} from '../routes'

export const getActionListConfigurationSetsRouteHandler: RouteHandler<
  typeof getActionListConfigurationSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListConfigurationSetsRouteHandler: RouteHandler<
  typeof postActionListConfigurationSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
