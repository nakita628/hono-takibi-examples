import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBarcodeDecodeTypesRoute,
  getBarcodeEncodeRoute,
  getBarcodeEncodeTypesRoute,
  postBarcodeDecodeRoute,
} from '../routes'

export const postBarcodeDecodeRouteHandler: RouteHandler<typeof postBarcodeDecodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBarcodeDecodeTypesRouteHandler: RouteHandler<
  typeof getBarcodeDecodeTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBarcodeEncodeRouteHandler: RouteHandler<typeof getBarcodeEncodeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBarcodeEncodeTypesRouteHandler: RouteHandler<
  typeof getBarcodeEncodeTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
