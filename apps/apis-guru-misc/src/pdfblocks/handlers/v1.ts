import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1AddPasswordRoute,
  postV1AddRestrictionsRoute,
  postV1AddWatermarkImageRoute,
  postV1AddWatermarkTextRoute,
  postV1ExtractPagesRoute,
  postV1MergeDocumentsRoute,
  postV1RemovePagesRoute,
  postV1RemovePasswordRoute,
  postV1RemoveRestrictionsRoute,
  postV1RemoveSignaturesRoute,
  postV1ReversePagesRoute,
  postV1RotatePagesRoute,
} from '../routes'

export const postV1AddPasswordRouteHandler: RouteHandler<typeof postV1AddPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AddRestrictionsRouteHandler: RouteHandler<
  typeof postV1AddRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AddWatermarkImageRouteHandler: RouteHandler<
  typeof postV1AddWatermarkImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AddWatermarkTextRouteHandler: RouteHandler<
  typeof postV1AddWatermarkTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExtractPagesRouteHandler: RouteHandler<typeof postV1ExtractPagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1MergeDocumentsRouteHandler: RouteHandler<
  typeof postV1MergeDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RemovePagesRouteHandler: RouteHandler<typeof postV1RemovePagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1RemovePasswordRouteHandler: RouteHandler<
  typeof postV1RemovePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RemoveRestrictionsRouteHandler: RouteHandler<
  typeof postV1RemoveRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RemoveSignaturesRouteHandler: RouteHandler<
  typeof postV1RemoveSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReversePagesRouteHandler: RouteHandler<typeof postV1ReversePagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1RotatePagesRouteHandler: RouteHandler<typeof postV1RotatePagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
