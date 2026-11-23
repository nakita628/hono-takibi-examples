import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getJobsJobIdRoute,
  getJobsPollRoute,
  getJobsRoute,
  postJobsJobIdStatusRoute,
} from '../routes'

export const getJobsRouteHandler: RouteHandler<typeof getJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsPollRouteHandler: RouteHandler<typeof getJobsPollRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsJobIdRouteHandler: RouteHandler<typeof getJobsJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postJobsJobIdStatusRouteHandler: RouteHandler<
  typeof postJobsJobIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
