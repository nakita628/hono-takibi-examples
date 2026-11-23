import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAiAskRoute,
  postAiExtractRoute,
  postAiExtractStructuredRoute,
  postAiTextGenRoute,
} from '../routes'

export const postAiAskRouteHandler: RouteHandler<typeof postAiAskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiTextGenRouteHandler: RouteHandler<typeof postAiTextGenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiExtractRouteHandler: RouteHandler<typeof postAiExtractRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiExtractStructuredRouteHandler: RouteHandler<
  typeof postAiExtractStructuredRoute
> = async (c) => {
  throw new Error('Not implemented')
}
