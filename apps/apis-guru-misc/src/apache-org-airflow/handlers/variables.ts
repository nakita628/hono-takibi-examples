import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVariablesVariableKeyRoute,
  getVariablesRoute,
  getVariablesVariableKeyRoute,
  patchVariablesVariableKeyRoute,
  postVariablesRoute,
} from '../routes'

export const getVariablesRouteHandler: RouteHandler<typeof getVariablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVariablesRouteHandler: RouteHandler<typeof postVariablesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVariablesVariableKeyRouteHandler: RouteHandler<
  typeof deleteVariablesVariableKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVariablesVariableKeyRouteHandler: RouteHandler<
  typeof getVariablesVariableKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVariablesVariableKeyRouteHandler: RouteHandler<
  typeof patchVariablesVariableKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
