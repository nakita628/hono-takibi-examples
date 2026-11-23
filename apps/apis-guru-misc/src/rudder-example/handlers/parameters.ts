import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteParametersParameterIdRoute,
  getParametersParameterIdRoute,
  getParametersRoute,
  postParametersParameterIdRoute,
  putParametersRoute,
} from '../routes'

export const getParametersRouteHandler: RouteHandler<typeof getParametersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putParametersRouteHandler: RouteHandler<typeof putParametersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteParametersParameterIdRouteHandler: RouteHandler<
  typeof deleteParametersParameterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getParametersParameterIdRouteHandler: RouteHandler<
  typeof getParametersParameterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postParametersParameterIdRouteHandler: RouteHandler<
  typeof postParametersParameterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
