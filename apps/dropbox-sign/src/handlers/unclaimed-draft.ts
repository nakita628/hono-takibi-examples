import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUnclaimedDraftCreateEmbeddedRoute,
  postUnclaimedDraftCreateEmbeddedWithTemplateRoute,
  postUnclaimedDraftCreateRoute,
  postUnclaimedDraftEditAndResendSignatureRequestIdRoute,
} from '../routes'

export const postUnclaimedDraftCreateRouteHandler: RouteHandler<
  typeof postUnclaimedDraftCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUnclaimedDraftCreateEmbeddedRouteHandler: RouteHandler<
  typeof postUnclaimedDraftCreateEmbeddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUnclaimedDraftCreateEmbeddedWithTemplateRouteHandler: RouteHandler<
  typeof postUnclaimedDraftCreateEmbeddedWithTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUnclaimedDraftEditAndResendSignatureRequestIdRouteHandler: RouteHandler<
  typeof postUnclaimedDraftEditAndResendSignatureRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
