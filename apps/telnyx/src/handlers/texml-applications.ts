import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTexmlApplicationsIdRoute,
  getTexmlApplicationsIdRoute,
  getTexmlApplicationsRoute,
  patchTexmlApplicationsIdRoute,
  postTexmlApplicationsRoute,
} from '../routes'

export const getTexmlApplicationsRouteHandler: RouteHandler<
  typeof getTexmlApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTexmlApplicationsRouteHandler: RouteHandler<
  typeof postTexmlApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTexmlApplicationsIdRouteHandler: RouteHandler<
  typeof deleteTexmlApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTexmlApplicationsIdRouteHandler: RouteHandler<
  typeof getTexmlApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTexmlApplicationsIdRouteHandler: RouteHandler<
  typeof patchTexmlApplicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
