import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecretsSecretIdRoute,
  getSecretsRoute,
  optionsSecretsRoute,
  optionsSecretsSecretIdRoute,
  patchSecretsSecretIdRoute,
  postSecretsRoute,
} from '../routes'

export const getSecretsRouteHandler: RouteHandler<typeof getSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsSecretsRouteHandler: RouteHandler<typeof optionsSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretsRouteHandler: RouteHandler<typeof postSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecretsSecretIdRouteHandler: RouteHandler<
  typeof deleteSecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsSecretsSecretIdRouteHandler: RouteHandler<
  typeof optionsSecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSecretsSecretIdRouteHandler: RouteHandler<
  typeof patchSecretsSecretIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
