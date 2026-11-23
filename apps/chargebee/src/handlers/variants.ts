import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVariantsProductVariantIdRoute,
  postVariantsProductVariantIdDeleteRoute,
  postVariantsProductVariantIdRoute,
} from '../routes'

export const getVariantsProductVariantIdRouteHandler: RouteHandler<
  typeof getVariantsProductVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVariantsProductVariantIdRouteHandler: RouteHandler<
  typeof postVariantsProductVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVariantsProductVariantIdDeleteRouteHandler: RouteHandler<
  typeof postVariantsProductVariantIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
