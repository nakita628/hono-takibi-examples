import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListCustomVerificationEmailTemplatesRoute,
  postActionListCustomVerificationEmailTemplatesRoute,
} from '../routes'

export const getActionListCustomVerificationEmailTemplatesRouteHandler: RouteHandler<
  typeof getActionListCustomVerificationEmailTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListCustomVerificationEmailTemplatesRouteHandler: RouteHandler<
  typeof postActionListCustomVerificationEmailTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
