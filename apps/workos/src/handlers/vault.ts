import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVaultV1KvIdRoute,
  getVaultV1KvIdMetadataRoute,
  getVaultV1KvIdRoute,
  getVaultV1KvIdVersionsRoute,
  getVaultV1KvNameNameRoute,
  getVaultV1KvRoute,
  postVaultV1KeysDataKeyRoute,
  postVaultV1KeysDecryptRoute,
  postVaultV1KeysRekeyRoute,
  postVaultV1KvRoute,
  putVaultV1KvIdRoute,
} from '../routes'

export const postVaultV1KeysDataKeyRouteHandler: RouteHandler<
  typeof postVaultV1KeysDataKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultV1KeysDecryptRouteHandler: RouteHandler<
  typeof postVaultV1KeysDecryptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultV1KeysRekeyRouteHandler: RouteHandler<
  typeof postVaultV1KeysRekeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultV1KvRouteHandler: RouteHandler<typeof getVaultV1KvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultV1KvRouteHandler: RouteHandler<typeof postVaultV1KvRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultV1KvNameNameRouteHandler: RouteHandler<
  typeof getVaultV1KvNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVaultV1KvIdRouteHandler: RouteHandler<typeof deleteVaultV1KvIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getVaultV1KvIdRouteHandler: RouteHandler<typeof getVaultV1KvIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putVaultV1KvIdRouteHandler: RouteHandler<typeof putVaultV1KvIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultV1KvIdMetadataRouteHandler: RouteHandler<
  typeof getVaultV1KvIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultV1KvIdVersionsRouteHandler: RouteHandler<
  typeof getVaultV1KvIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
