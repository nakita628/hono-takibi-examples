import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnythingArrayOfObjectsRoute,
  getAnythingArrayOfPrimitivesRoute,
  getAnythingMarkdownRoute,
  getAnythingObjectRoute,
  getAnythingPolymorphismRoute,
  getAnythingRecursiveRoute,
  getAnythingReturnsAsJsonButIsActuallyStringRoute,
} from '../routes'

export const getAnythingArrayOfPrimitivesRouteHandler: RouteHandler<
  typeof getAnythingArrayOfPrimitivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingObjectRouteHandler: RouteHandler<typeof getAnythingObjectRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnythingMarkdownRouteHandler: RouteHandler<
  typeof getAnythingMarkdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingArrayOfObjectsRouteHandler: RouteHandler<
  typeof getAnythingArrayOfObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingPolymorphismRouteHandler: RouteHandler<
  typeof getAnythingPolymorphismRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingRecursiveRouteHandler: RouteHandler<
  typeof getAnythingRecursiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingReturnsAsJsonButIsActuallyStringRouteHandler: RouteHandler<
  typeof getAnythingReturnsAsJsonButIsActuallyStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
