import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute,
  getS3OutpostsListEndpointsRoute,
  getS3OutpostsListOutpostsWithS3Route,
  getS3OutpostsListSharedEndpointsOutpostIdRoute,
  postS3OutpostsCreateEndpointRoute,
} from '../routes'

export const postS3OutpostsCreateEndpointRouteHandler: RouteHandler<
  typeof postS3OutpostsCreateEndpointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRouteHandler: RouteHandler<
  typeof deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getS3OutpostsListEndpointsRouteHandler: RouteHandler<
  typeof getS3OutpostsListEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getS3OutpostsListOutpostsWithS3RouteHandler: RouteHandler<
  typeof getS3OutpostsListOutpostsWithS3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getS3OutpostsListSharedEndpointsOutpostIdRouteHandler: RouteHandler<
  typeof getS3OutpostsListSharedEndpointsOutpostIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
