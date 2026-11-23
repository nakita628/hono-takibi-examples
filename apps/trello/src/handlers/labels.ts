import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLabelsIdRoute,
  getLabelsIdRoute,
  postLabelsRoute,
  putLabelsIdFieldRoute,
  putLabelsIdRoute,
} from '../routes'

export const getLabelsIdRouteHandler: RouteHandler<typeof getLabelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLabelsIdRouteHandler: RouteHandler<typeof putLabelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLabelsIdRouteHandler: RouteHandler<typeof deleteLabelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putLabelsIdFieldRouteHandler: RouteHandler<typeof putLabelsIdFieldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postLabelsRouteHandler: RouteHandler<typeof postLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
