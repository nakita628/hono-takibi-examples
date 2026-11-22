import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePlansIdRoute,
  getPlansIdRoute,
  getPlansRoute,
  postPlansRoute,
  putPlansIdRoute,
} from '../routes'

export const getPlansRouteHandler: RouteHandler<typeof getPlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPlansRouteHandler: RouteHandler<typeof postPlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePlansIdRouteHandler: RouteHandler<typeof deletePlansIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlansIdRouteHandler: RouteHandler<typeof getPlansIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPlansIdRouteHandler: RouteHandler<typeof putPlansIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
