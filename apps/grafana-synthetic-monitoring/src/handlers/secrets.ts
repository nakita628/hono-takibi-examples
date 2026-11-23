import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSecretsIdRoute,
  getSecretsFindByLabelsRoute,
  getSecretsIdDecryptRoute,
  getSecretsIdRoute,
  getSecretsRoute,
  postSecretsRoute,
  putSecretsIdRoute,
} from '../routes'

export const getSecretsRouteHandler: RouteHandler<typeof getSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSecretsRouteHandler: RouteHandler<typeof postSecretsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsFindByLabelsRouteHandler: RouteHandler<
  typeof getSecretsFindByLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsIdRouteHandler: RouteHandler<typeof getSecretsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSecretsIdRouteHandler: RouteHandler<typeof putSecretsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSecretsIdRouteHandler: RouteHandler<typeof deleteSecretsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSecretsIdDecryptRouteHandler: RouteHandler<
  typeof getSecretsIdDecryptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
