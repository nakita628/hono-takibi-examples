import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStopwordsSetIdRoute,
  getStopwordsRoute,
  getStopwordsSetIdRoute,
  putStopwordsSetIdRoute,
} from '../routes'

export const getStopwordsRouteHandler: RouteHandler<typeof getStopwordsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putStopwordsSetIdRouteHandler: RouteHandler<typeof putStopwordsSetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStopwordsSetIdRouteHandler: RouteHandler<typeof getStopwordsSetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteStopwordsSetIdRouteHandler: RouteHandler<
  typeof deleteStopwordsSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
