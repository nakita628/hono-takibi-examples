import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTemplatesHelmCommandRoute,
  getTemplatesHelmRoute,
  getTemplatesRoute,
  postTemplatesIdFileRoute,
} from '../routes'

export const getTemplatesRouteHandler: RouteHandler<typeof getTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesIdFileRouteHandler: RouteHandler<
  typeof postTemplatesIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesHelmRouteHandler: RouteHandler<typeof getTemplatesHelmRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTemplatesHelmCommandRouteHandler: RouteHandler<
  typeof getTemplatesHelmCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}
