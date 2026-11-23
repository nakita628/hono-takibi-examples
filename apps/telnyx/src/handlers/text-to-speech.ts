import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTextToSpeechSpeechRoute,
  getTextToSpeechVoicesRoute,
  postTextToSpeechSpeechRoute,
} from '../routes'

export const getTextToSpeechSpeechRouteHandler: RouteHandler<
  typeof getTextToSpeechSpeechRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTextToSpeechSpeechRouteHandler: RouteHandler<
  typeof postTextToSpeechSpeechRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTextToSpeechVoicesRouteHandler: RouteHandler<
  typeof getTextToSpeechVoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
