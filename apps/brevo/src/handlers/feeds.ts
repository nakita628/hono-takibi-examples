import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFeedsUuidRoute,
  getFeedsRoute,
  getFeedsUuidRoute,
  postFeedsRoute,
  putFeedsUuidRoute,
} from '../routes'

export const getFeedsRouteHandler: RouteHandler<typeof getFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFeedsRouteHandler: RouteHandler<typeof postFeedsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFeedsUuidRouteHandler: RouteHandler<typeof deleteFeedsUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeedsUuidRouteHandler: RouteHandler<typeof getFeedsUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFeedsUuidRouteHandler: RouteHandler<typeof putFeedsUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}
