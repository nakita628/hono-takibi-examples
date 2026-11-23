import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSamlMetadataRoute,
  getSamlSloRoute,
  postSamlAcsRoute,
  postSamlSloRoute,
} from '../routes'

export const postSamlAcsRouteHandler: RouteHandler<typeof postSamlAcsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSamlMetadataRouteHandler: RouteHandler<typeof getSamlMetadataRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSamlSloRouteHandler: RouteHandler<typeof getSamlSloRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSamlSloRouteHandler: RouteHandler<typeof postSamlSloRoute> = async (c) => {
  throw new Error('Not implemented')
}
