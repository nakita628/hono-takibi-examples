import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetCustomVerificationEmailTemplateRoute,
  postActionGetCustomVerificationEmailTemplateRoute,
} from '../routes'

export const getActionGetCustomVerificationEmailTemplateRouteHandler: RouteHandler<
  typeof getActionGetCustomVerificationEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetCustomVerificationEmailTemplateRouteHandler: RouteHandler<
  typeof postActionGetCustomVerificationEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
