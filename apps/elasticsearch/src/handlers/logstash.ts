import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLogstashPipelineIdRoute,
  getLogstashPipelineIdRoute,
  getLogstashPipelineRoute,
  putLogstashPipelineIdRoute,
} from '../routes'

export const getLogstashPipelineIdRouteHandler: RouteHandler<
  typeof getLogstashPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLogstashPipelineIdRouteHandler: RouteHandler<
  typeof putLogstashPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLogstashPipelineIdRouteHandler: RouteHandler<
  typeof deleteLogstashPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogstashPipelineRouteHandler: RouteHandler<
  typeof getLogstashPipelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
