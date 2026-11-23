import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2alpha1NameRoute,
  postV2alpha1IdCheckInRoute,
  postV2alpha1NameCancelRoute,
  postV2alpha1PipelinesRunRoute,
  postV2alpha1WorkersIdCheckInRoute,
} from '../routes'

export const postV2alpha1PipelinesRunRouteHandler: RouteHandler<
  typeof postV2alpha1PipelinesRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2alpha1WorkersIdCheckInRouteHandler: RouteHandler<
  typeof postV2alpha1WorkersIdCheckInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2alpha1IdCheckInRouteHandler: RouteHandler<
  typeof postV2alpha1IdCheckInRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2alpha1NameRouteHandler: RouteHandler<typeof getV2alpha1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2alpha1NameCancelRouteHandler: RouteHandler<
  typeof postV2alpha1NameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
