import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLabelsLabelIDRoute,
  getLabelsLabelIDRoute,
  getLabelsRoute,
  patchLabelsLabelIDRoute,
  postLabelsRoute,
} from '../routes'

export const getLabelsRouteHandler: RouteHandler<typeof getLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLabelsRouteHandler: RouteHandler<typeof postLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLabelsLabelIDRouteHandler: RouteHandler<
  typeof deleteLabelsLabelIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLabelsLabelIDRouteHandler: RouteHandler<typeof getLabelsLabelIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchLabelsLabelIDRouteHandler: RouteHandler<typeof patchLabelsLabelIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
