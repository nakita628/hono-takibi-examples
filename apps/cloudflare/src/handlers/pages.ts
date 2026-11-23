import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPagesAssetsCheckMissingRoute,
  postPagesAssetsUploadRoute,
  postPagesAssetsUpsertHashesRoute,
  postPagesWebhooksDeployHooksDeployHookIdRoute,
} from '../routes'

export const postPagesAssetsCheckMissingRouteHandler: RouteHandler<
  typeof postPagesAssetsCheckMissingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPagesAssetsUploadRouteHandler: RouteHandler<
  typeof postPagesAssetsUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPagesAssetsUpsertHashesRouteHandler: RouteHandler<
  typeof postPagesAssetsUpsertHashesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPagesWebhooksDeployHooksDeployHookIdRouteHandler: RouteHandler<
  typeof postPagesWebhooksDeployHooksDeployHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
