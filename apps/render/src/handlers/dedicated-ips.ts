import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDedicatedIpsDedicatedIpIdRoute,
  getDedicatedIpsDedicatedIpIdRoute,
  getDedicatedIpsRoute,
  patchDedicatedIpsDedicatedIpIdRoute,
  postDedicatedIpsRoute,
} from '../routes'

export const getDedicatedIpsRouteHandler: RouteHandler<typeof getDedicatedIpsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDedicatedIpsRouteHandler: RouteHandler<typeof postDedicatedIpsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDedicatedIpsDedicatedIpIdRouteHandler: RouteHandler<
  typeof getDedicatedIpsDedicatedIpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDedicatedIpsDedicatedIpIdRouteHandler: RouteHandler<
  typeof patchDedicatedIpsDedicatedIpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDedicatedIpsDedicatedIpIdRouteHandler: RouteHandler<
  typeof deleteDedicatedIpsDedicatedIpIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
