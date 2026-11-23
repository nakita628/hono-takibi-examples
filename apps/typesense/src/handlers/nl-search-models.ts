import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNlSearchModelsModelIdRoute,
  getNlSearchModelsModelIdRoute,
  getNlSearchModelsRoute,
  postNlSearchModelsRoute,
  putNlSearchModelsModelIdRoute,
} from '../routes'

export const getNlSearchModelsRouteHandler: RouteHandler<typeof getNlSearchModelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postNlSearchModelsRouteHandler: RouteHandler<typeof postNlSearchModelsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNlSearchModelsModelIdRouteHandler: RouteHandler<
  typeof getNlSearchModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNlSearchModelsModelIdRouteHandler: RouteHandler<
  typeof putNlSearchModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNlSearchModelsModelIdRouteHandler: RouteHandler<
  typeof deleteNlSearchModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
