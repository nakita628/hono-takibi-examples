import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPipelinePipelineIdConfigRoute,
  getPipelinePipelineIdRoute,
  getPipelinePipelineIdValuesRoute,
  getPipelinePipelineIdWorkflowRoute,
  getPipelineRoute,
  postPipelineContinueRoute,
} from '../routes'

export const getPipelineRouteHandler: RouteHandler<typeof getPipelineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPipelineContinueRouteHandler: RouteHandler<
  typeof postPipelineContinueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPipelinePipelineIdRouteHandler: RouteHandler<
  typeof getPipelinePipelineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPipelinePipelineIdConfigRouteHandler: RouteHandler<
  typeof getPipelinePipelineIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPipelinePipelineIdWorkflowRouteHandler: RouteHandler<
  typeof getPipelinePipelineIdWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPipelinePipelineIdValuesRouteHandler: RouteHandler<
  typeof getPipelinePipelineIdValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
