import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMachinesMachineIdRoute,
  deleteMachinesMachineIdScopesOtherMachineIdRoute,
  getMachinesMachineIdRoute,
  getMachinesMachineIdSecretKeyRoute,
  getMachinesRoute,
  patchMachinesMachineIdRoute,
  postMachinesMachineIdScopesRoute,
  postMachinesMachineIdSecretKeyRotateRoute,
  postMachinesRoute,
} from '../routes'

export const getMachinesRouteHandler: RouteHandler<typeof getMachinesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMachinesRouteHandler: RouteHandler<typeof postMachinesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMachinesMachineIdRouteHandler: RouteHandler<
  typeof getMachinesMachineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMachinesMachineIdRouteHandler: RouteHandler<
  typeof patchMachinesMachineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMachinesMachineIdRouteHandler: RouteHandler<
  typeof deleteMachinesMachineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMachinesMachineIdSecretKeyRouteHandler: RouteHandler<
  typeof getMachinesMachineIdSecretKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMachinesMachineIdSecretKeyRotateRouteHandler: RouteHandler<
  typeof postMachinesMachineIdSecretKeyRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMachinesMachineIdScopesRouteHandler: RouteHandler<
  typeof postMachinesMachineIdScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMachinesMachineIdScopesOtherMachineIdRouteHandler: RouteHandler<
  typeof deleteMachinesMachineIdScopesOtherMachineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
