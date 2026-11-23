import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTargetsMetadataRoute,
  getTargetsRelabelStepsRoute,
  getTargetsRoute,
} from '../routes'

export const getTargetsRouteHandler: RouteHandler<typeof getTargetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTargetsMetadataRouteHandler: RouteHandler<typeof getTargetsMetadataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTargetsRelabelStepsRouteHandler: RouteHandler<
  typeof getTargetsRelabelStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
