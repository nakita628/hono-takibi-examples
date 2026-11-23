import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEmbeddedSignUrlSignatureIdRoute,
  postEmbeddedEditUrlTemplateIdRoute,
} from '../routes'

export const postEmbeddedEditUrlTemplateIdRouteHandler: RouteHandler<
  typeof postEmbeddedEditUrlTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmbeddedSignUrlSignatureIdRouteHandler: RouteHandler<
  typeof getEmbeddedSignUrlSignatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
