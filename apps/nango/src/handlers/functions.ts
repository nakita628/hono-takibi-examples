import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFunctionsDeploymentsIdRoute,
  getFunctionsDryrunsIdRoute,
  postFunctionsCompileRoute,
  postFunctionsDeploymentsRoute,
  postFunctionsDryrunsRoute,
} from '../routes'

export const postFunctionsCompileRouteHandler: RouteHandler<
  typeof postFunctionsCompileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFunctionsDryrunsRouteHandler: RouteHandler<
  typeof postFunctionsDryrunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFunctionsDryrunsIdRouteHandler: RouteHandler<
  typeof getFunctionsDryrunsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFunctionsDeploymentsRouteHandler: RouteHandler<
  typeof postFunctionsDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFunctionsDeploymentsIdRouteHandler: RouteHandler<
  typeof getFunctionsDeploymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
