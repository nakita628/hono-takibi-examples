import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTopicsRoute,
  getTopicsTopicnamePartitionsPartitionidOffsetsRoute,
  getTopicsTopicnamePartitionsPartitionidRoute,
  getTopicsTopicnamePartitionsRoute,
  getTopicsTopicnameRoute,
  postTopicsTopicnamePartitionsPartitionidRoute,
  postTopicsTopicnameRoute,
} from '../routes'

export const getTopicsRouteHandler: RouteHandler<typeof getTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsTopicnameRouteHandler: RouteHandler<typeof getTopicsTopicnameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTopicsTopicnameRouteHandler: RouteHandler<
  typeof postTopicsTopicnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsTopicnamePartitionsRouteHandler: RouteHandler<
  typeof getTopicsTopicnamePartitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsTopicnamePartitionsPartitionidRouteHandler: RouteHandler<
  typeof getTopicsTopicnamePartitionsPartitionidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTopicsTopicnamePartitionsPartitionidRouteHandler: RouteHandler<
  typeof postTopicsTopicnamePartitionsPartitionidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopicsTopicnamePartitionsPartitionidOffsetsRouteHandler: RouteHandler<
  typeof getTopicsTopicnamePartitionsPartitionidOffsetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
