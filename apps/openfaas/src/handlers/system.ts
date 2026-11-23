import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSystemFunctionsRoute,
  deleteSystemSecretsRoute,
  getSystemFunctionFunctionNameRoute,
  getSystemFunctionsRoute,
  getSystemInfoRoute,
  getSystemLogsRoute,
  getSystemNamespacesRoute,
  getSystemSecretsRoute,
  postSystemAlertRoute,
  postSystemFunctionsRoute,
  postSystemScaleFunctionFunctionNameRoute,
  postSystemSecretsRoute,
  putSystemFunctionsRoute,
  putSystemSecretsRoute,
} from '../routes'

export const getSystemInfoRouteHandler: RouteHandler<typeof getSystemInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemAlertRouteHandler: RouteHandler<typeof postSystemAlertRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemFunctionsRouteHandler: RouteHandler<typeof getSystemFunctionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSystemFunctionsRouteHandler: RouteHandler<typeof putSystemFunctionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSystemFunctionsRouteHandler: RouteHandler<
  typeof postSystemFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSystemFunctionsRouteHandler: RouteHandler<
  typeof deleteSystemFunctionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemScaleFunctionFunctionNameRouteHandler: RouteHandler<
  typeof postSystemScaleFunctionFunctionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemFunctionFunctionNameRouteHandler: RouteHandler<
  typeof getSystemFunctionFunctionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemSecretsRouteHandler: RouteHandler<typeof getSystemSecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSystemSecretsRouteHandler: RouteHandler<typeof putSystemSecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSystemSecretsRouteHandler: RouteHandler<typeof postSystemSecretsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSystemSecretsRouteHandler: RouteHandler<
  typeof deleteSystemSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemLogsRouteHandler: RouteHandler<typeof getSystemLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemNamespacesRouteHandler: RouteHandler<
  typeof getSystemNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
