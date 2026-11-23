import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMissionprofileMissionProfileIdRoute,
  getMissionprofileMissionProfileIdRoute,
  getMissionprofileRoute,
  postMissionprofileRoute,
  putMissionprofileMissionProfileIdRoute,
} from '../routes'

export const postMissionprofileRouteHandler: RouteHandler<typeof postMissionprofileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMissionprofileRouteHandler: RouteHandler<typeof getMissionprofileRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteMissionprofileMissionProfileIdRouteHandler: RouteHandler<
  typeof deleteMissionprofileMissionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMissionprofileMissionProfileIdRouteHandler: RouteHandler<
  typeof getMissionprofileMissionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMissionprofileMissionProfileIdRouteHandler: RouteHandler<
  typeof putMissionprofileMissionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
