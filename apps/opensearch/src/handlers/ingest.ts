import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIngestPipelineIdRoute,
  getIngestPipelineIdRoute,
  getIngestPipelineIdSimulateRoute,
  getIngestPipelineRoute,
  getIngestPipelineSimulateRoute,
  getIngestProcessorGrokRoute,
  postIngestPipelineIdSimulateRoute,
  postIngestPipelineSimulateRoute,
  putIngestPipelineIdRoute,
} from '../routes'

export const getIngestPipelineRouteHandler: RouteHandler<typeof getIngestPipelineRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIngestPipelineSimulateRouteHandler: RouteHandler<
  typeof getIngestPipelineSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIngestPipelineSimulateRouteHandler: RouteHandler<
  typeof postIngestPipelineSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIngestPipelineIdRouteHandler: RouteHandler<
  typeof deleteIngestPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIngestPipelineIdRouteHandler: RouteHandler<
  typeof getIngestPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIngestPipelineIdRouteHandler: RouteHandler<
  typeof putIngestPipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIngestPipelineIdSimulateRouteHandler: RouteHandler<
  typeof getIngestPipelineIdSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIngestPipelineIdSimulateRouteHandler: RouteHandler<
  typeof postIngestPipelineIdSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIngestProcessorGrokRouteHandler: RouteHandler<
  typeof getIngestProcessorGrokRoute
> = async (c) => {
  throw new Error('Not implemented')
}
