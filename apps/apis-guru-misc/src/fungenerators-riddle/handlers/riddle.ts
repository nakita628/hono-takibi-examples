import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRiddleRoute,
  getRiddleRandomRoute,
  getRiddleRoute,
  getRiddleSearchRoute,
  postRiddleRoute,
  putRiddleRoute,
} from '../routes'

export const deleteRiddleRouteHandler: RouteHandler<typeof deleteRiddleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiddleRouteHandler: RouteHandler<typeof getRiddleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRiddleRouteHandler: RouteHandler<typeof postRiddleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRiddleRouteHandler: RouteHandler<typeof putRiddleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiddleRandomRouteHandler: RouteHandler<typeof getRiddleRandomRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRiddleSearchRouteHandler: RouteHandler<typeof getRiddleSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
