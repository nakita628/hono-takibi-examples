import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOutpostsOutpostIdRoute,
  getOutpostsOutpostIdAssetsRoute,
  getOutpostsOutpostIdInstanceTypesRoute,
  getOutpostsOutpostIdRoute,
  getOutpostsRoute,
  patchOutpostsOutpostIdRoute,
  postOutpostsRoute,
} from '../routes'

export const postOutpostsRouteHandler: RouteHandler<typeof postOutpostsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOutpostsRouteHandler: RouteHandler<typeof getOutpostsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOutpostsOutpostIdRouteHandler: RouteHandler<
  typeof deleteOutpostsOutpostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOutpostsOutpostIdRouteHandler: RouteHandler<
  typeof getOutpostsOutpostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOutpostsOutpostIdRouteHandler: RouteHandler<
  typeof patchOutpostsOutpostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOutpostsOutpostIdInstanceTypesRouteHandler: RouteHandler<
  typeof getOutpostsOutpostIdInstanceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOutpostsOutpostIdAssetsRouteHandler: RouteHandler<
  typeof getOutpostsOutpostIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
