import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSpeakersRoute, getSpeakersRoute, postSpeakersRoute } from '../routes'

export const getSpeakersRouteHandler: RouteHandler<typeof getSpeakersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpeakersRouteHandler: RouteHandler<typeof postSpeakersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSpeakersRouteHandler: RouteHandler<typeof deleteSpeakersRoute> = async (c) => {
  throw new Error('Not implemented')
}
