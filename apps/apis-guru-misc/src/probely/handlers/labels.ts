import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLabelsIdIndexRoute,
  getLabelsIdIndexRoute,
  getLabelsIndexRoute,
  patchLabelsIdIndexRoute,
  postLabelsIndexRoute,
  putLabelsIdIndexRoute,
} from '../routes'

export const getLabelsIndexRouteHandler: RouteHandler<typeof getLabelsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLabelsIndexRouteHandler: RouteHandler<typeof postLabelsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLabelsIdIndexRouteHandler: RouteHandler<
  typeof deleteLabelsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLabelsIdIndexRouteHandler: RouteHandler<typeof getLabelsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchLabelsIdIndexRouteHandler: RouteHandler<typeof patchLabelsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putLabelsIdIndexRouteHandler: RouteHandler<typeof putLabelsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
