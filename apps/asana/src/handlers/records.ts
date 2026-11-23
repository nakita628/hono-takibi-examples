import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRecordsRecordGidRoute,
  getRecordsRecordGidRoute,
  getRecordsRecordGidStoriesRoute,
  postRecordsRecordGidStoriesRoute,
  postRecordsRoute,
  putRecordsRecordGidRoute,
} from '../routes'

export const postRecordsRouteHandler: RouteHandler<typeof postRecordsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordsRecordGidRouteHandler: RouteHandler<
  typeof getRecordsRecordGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRecordsRecordGidRouteHandler: RouteHandler<
  typeof putRecordsRecordGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecordsRecordGidRouteHandler: RouteHandler<
  typeof deleteRecordsRecordGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordsRecordGidStoriesRouteHandler: RouteHandler<
  typeof getRecordsRecordGidStoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRecordsRecordGidStoriesRouteHandler: RouteHandler<
  typeof postRecordsRecordGidStoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
