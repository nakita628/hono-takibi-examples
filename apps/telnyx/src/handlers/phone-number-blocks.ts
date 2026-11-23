import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPhoneNumberBlocksJobsIdRoute,
  getPhoneNumberBlocksJobsRoute,
  postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute,
} from '../routes'

export const getPhoneNumberBlocksJobsRouteHandler: RouteHandler<
  typeof getPhoneNumberBlocksJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPhoneNumberBlocksJobsDeletePhoneNumberBlockRouteHandler: RouteHandler<
  typeof postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhoneNumberBlocksJobsIdRouteHandler: RouteHandler<
  typeof getPhoneNumberBlocksJobsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
