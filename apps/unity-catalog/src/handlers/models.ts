import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteModelsFullNameRoute,
  deleteModelsFullNameVersionsVersionRoute,
  getModelsFullNameRoute,
  getModelsFullNameVersionsRoute,
  getModelsFullNameVersionsVersionRoute,
  getModelsRoute,
  patchModelsFullNameRoute,
  patchModelsFullNameVersionsVersionFinalizeRoute,
  patchModelsFullNameVersionsVersionRoute,
  postModelsRoute,
  postModelsVersionsRoute,
} from '../routes'

export const postModelsRouteHandler: RouteHandler<typeof postModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getModelsRouteHandler: RouteHandler<typeof getModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getModelsFullNameRouteHandler: RouteHandler<typeof getModelsFullNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchModelsFullNameRouteHandler: RouteHandler<
  typeof patchModelsFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteModelsFullNameRouteHandler: RouteHandler<
  typeof deleteModelsFullNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postModelsVersionsRouteHandler: RouteHandler<typeof postModelsVersionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getModelsFullNameVersionsRouteHandler: RouteHandler<
  typeof getModelsFullNameVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getModelsFullNameVersionsVersionRouteHandler: RouteHandler<
  typeof getModelsFullNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchModelsFullNameVersionsVersionRouteHandler: RouteHandler<
  typeof patchModelsFullNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteModelsFullNameVersionsVersionRouteHandler: RouteHandler<
  typeof deleteModelsFullNameVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchModelsFullNameVersionsVersionFinalizeRouteHandler: RouteHandler<
  typeof patchModelsFullNameVersionsVersionFinalizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
