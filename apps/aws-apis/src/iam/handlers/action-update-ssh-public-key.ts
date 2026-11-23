import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateSSHPublicKeyRoute, postActionUpdateSSHPublicKeyRoute } from '../routes'

export const getActionUpdateSSHPublicKeyRouteHandler: RouteHandler<
  typeof getActionUpdateSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateSSHPublicKeyRouteHandler: RouteHandler<
  typeof postActionUpdateSSHPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
