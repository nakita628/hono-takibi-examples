import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSendCustomVerificationEmailRoute,
  postActionSendCustomVerificationEmailRoute,
} from '../routes'

export const getActionSendCustomVerificationEmailRouteHandler: RouteHandler<
  typeof getActionSendCustomVerificationEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSendCustomVerificationEmailRouteHandler: RouteHandler<
  typeof postActionSendCustomVerificationEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
