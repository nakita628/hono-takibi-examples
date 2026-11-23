import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLabelsIdLabelRoute,
  getLabelsIdLabelBoardFieldRoute,
  getLabelsIdLabelBoardRoute,
  getLabelsIdLabelRoute,
  postLabelsRoute,
  putLabelsIdLabelColorRoute,
  putLabelsIdLabelNameRoute,
  putLabelsIdLabelRoute,
} from '../routes'

export const postLabelsRouteHandler: RouteHandler<typeof postLabelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLabelsIdLabelRouteHandler: RouteHandler<
  typeof deleteLabelsIdLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLabelsIdLabelRouteHandler: RouteHandler<typeof getLabelsIdLabelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putLabelsIdLabelRouteHandler: RouteHandler<typeof putLabelsIdLabelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLabelsIdLabelBoardRouteHandler: RouteHandler<
  typeof getLabelsIdLabelBoardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLabelsIdLabelBoardFieldRouteHandler: RouteHandler<
  typeof getLabelsIdLabelBoardFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLabelsIdLabelColorRouteHandler: RouteHandler<
  typeof putLabelsIdLabelColorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLabelsIdLabelNameRouteHandler: RouteHandler<
  typeof putLabelsIdLabelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
