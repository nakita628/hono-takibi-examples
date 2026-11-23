import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVolumeAttributeRoute,
  postActionModifyVolumeAttributeRoute,
} from '../routes'

export const getActionModifyVolumeAttributeRouteHandler: RouteHandler<
  typeof getActionModifyVolumeAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVolumeAttributeRouteHandler: RouteHandler<
  typeof postActionModifyVolumeAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
