import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteExperimentTemplatesIdRoute,
  getExperimentTemplatesIdRoute,
  getExperimentTemplatesRoute,
  patchExperimentTemplatesIdRoute,
  postExperimentTemplatesRoute,
} from '../routes'

export const postExperimentTemplatesRouteHandler: RouteHandler<
  typeof postExperimentTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExperimentTemplatesRouteHandler: RouteHandler<
  typeof getExperimentTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteExperimentTemplatesIdRouteHandler: RouteHandler<
  typeof deleteExperimentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getExperimentTemplatesIdRouteHandler: RouteHandler<
  typeof getExperimentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExperimentTemplatesIdRouteHandler: RouteHandler<
  typeof patchExperimentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
