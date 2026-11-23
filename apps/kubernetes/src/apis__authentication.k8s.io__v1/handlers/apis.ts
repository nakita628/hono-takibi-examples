import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApisAuthenticationK8sIoV1IndexRoute,
  postApisAuthenticationK8sIoV1SelfsubjectreviewsRoute,
  postApisAuthenticationK8sIoV1TokenreviewsRoute,
} from '../routes'

export const getApisAuthenticationK8sIoV1IndexRouteHandler: RouteHandler<
  typeof getApisAuthenticationK8sIoV1IndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApisAuthenticationK8sIoV1SelfsubjectreviewsRouteHandler: RouteHandler<
  typeof postApisAuthenticationK8sIoV1SelfsubjectreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApisAuthenticationK8sIoV1TokenreviewsRouteHandler: RouteHandler<
  typeof postApisAuthenticationK8sIoV1TokenreviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
