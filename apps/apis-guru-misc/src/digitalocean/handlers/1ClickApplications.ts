import type { RouteHandler } from '@hono/zod-openapi'
import type { getV21ClicksRoute, postV21ClicksKubernetesRoute } from '../routes'

export const getV21ClicksRouteHandler: RouteHandler<typeof getV21ClicksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV21ClicksKubernetesRouteHandler: RouteHandler<
  typeof postV21ClicksKubernetesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
