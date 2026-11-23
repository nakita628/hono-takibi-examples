import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAudiobooksIdChaptersRoute,
  getAudiobooksIdRoute,
  getAudiobooksRoute,
} from '../routes'

export const getAudiobooksRouteHandler: RouteHandler<typeof getAudiobooksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudiobooksIdRouteHandler: RouteHandler<typeof getAudiobooksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAudiobooksIdChaptersRouteHandler: RouteHandler<
  typeof getAudiobooksIdChaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
