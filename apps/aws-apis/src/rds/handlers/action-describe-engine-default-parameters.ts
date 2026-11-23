import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEngineDefaultParametersRoute,
  postActionDescribeEngineDefaultParametersRoute,
} from '../routes'

export const getActionDescribeEngineDefaultParametersRouteHandler: RouteHandler<
  typeof getActionDescribeEngineDefaultParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEngineDefaultParametersRouteHandler: RouteHandler<
  typeof postActionDescribeEngineDefaultParametersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
