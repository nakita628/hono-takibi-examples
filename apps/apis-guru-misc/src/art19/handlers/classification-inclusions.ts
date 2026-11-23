import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClassificationInclusionsIdRoute,
  getClassificationInclusionsRoute,
} from '../routes'

export const getClassificationInclusionsRouteHandler: RouteHandler<
  typeof getClassificationInclusionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClassificationInclusionsIdRouteHandler: RouteHandler<
  typeof getClassificationInclusionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
