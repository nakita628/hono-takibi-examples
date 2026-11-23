import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1VoicesRoute,
  postV1beta1ParentSynthesizeLongAudioRoute,
  postV1beta1TextSynthesizeRoute,
} from '../routes'

export const postV1beta1TextSynthesizeRouteHandler: RouteHandler<
  typeof postV1beta1TextSynthesizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1VoicesRouteHandler: RouteHandler<typeof getV1beta1VoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameOperationsRouteHandler: RouteHandler<
  typeof getV1beta1NameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentSynthesizeLongAudioRouteHandler: RouteHandler<
  typeof postV1beta1ParentSynthesizeLongAudioRoute
> = async (c) => {
  throw new Error('Not implemented')
}
