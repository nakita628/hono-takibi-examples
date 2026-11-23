import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAvatarsBrowsersCodeRoute,
  getAvatarsCreditCardsCodeRoute,
  getAvatarsFaviconRoute,
  getAvatarsFlagsCodeRoute,
  getAvatarsImageRoute,
  getAvatarsInitialsRoute,
  getAvatarsQrRoute,
} from '../routes'

export const getAvatarsBrowsersCodeRouteHandler: RouteHandler<
  typeof getAvatarsBrowsersCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAvatarsCreditCardsCodeRouteHandler: RouteHandler<
  typeof getAvatarsCreditCardsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAvatarsFaviconRouteHandler: RouteHandler<typeof getAvatarsFaviconRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAvatarsFlagsCodeRouteHandler: RouteHandler<
  typeof getAvatarsFlagsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAvatarsImageRouteHandler: RouteHandler<typeof getAvatarsImageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAvatarsInitialsRouteHandler: RouteHandler<typeof getAvatarsInitialsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAvatarsQrRouteHandler: RouteHandler<typeof getAvatarsQrRoute> = async (c) => {
  throw new Error('Not implemented')
}
