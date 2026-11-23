import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1alphaIdeasRoute,
  getV1alphaParentIdeasRoute,
  getV1alphaParentLocalesRoute,
  patchV1alphaNameRoute,
  postV1alphaParentIdeaActivitiesRoute,
} from '../routes'

export const getV1alphaIdeasRouteHandler: RouteHandler<typeof getV1alphaIdeasRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1alphaNameRouteHandler: RouteHandler<typeof patchV1alphaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1alphaParentIdeaActivitiesRouteHandler: RouteHandler<
  typeof postV1alphaParentIdeaActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alphaParentIdeasRouteHandler: RouteHandler<
  typeof getV1alphaParentIdeasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1alphaParentLocalesRouteHandler: RouteHandler<
  typeof getV1alphaParentLocalesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
