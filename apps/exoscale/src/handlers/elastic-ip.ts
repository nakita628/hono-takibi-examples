import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteElasticIpIdFieldRoute,
  deleteElasticIpIdRoute,
  getElasticIpIdRoute,
  getElasticIpRoute,
  postElasticIpRoute,
  putElasticIpIdAttachRoute,
  putElasticIpIdDetachRoute,
  putElasticIpIdRoute,
} from '../routes'

export const postElasticIpRouteHandler: RouteHandler<typeof postElasticIpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getElasticIpRouteHandler: RouteHandler<typeof getElasticIpRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteElasticIpIdFieldRouteHandler: RouteHandler<
  typeof deleteElasticIpIdFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putElasticIpIdDetachRouteHandler: RouteHandler<
  typeof putElasticIpIdDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putElasticIpIdAttachRouteHandler: RouteHandler<
  typeof putElasticIpIdAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putElasticIpIdRouteHandler: RouteHandler<typeof putElasticIpIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getElasticIpIdRouteHandler: RouteHandler<typeof getElasticIpIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteElasticIpIdRouteHandler: RouteHandler<typeof deleteElasticIpIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
