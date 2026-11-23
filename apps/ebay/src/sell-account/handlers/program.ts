import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProgramGetOptedInProgramsRoute,
  postProgramOptInRoute,
  postProgramOptOutRoute,
} from '../routes'

export const getProgramGetOptedInProgramsRouteHandler: RouteHandler<
  typeof getProgramGetOptedInProgramsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProgramOptInRouteHandler: RouteHandler<typeof postProgramOptInRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postProgramOptOutRouteHandler: RouteHandler<typeof postProgramOptOutRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
