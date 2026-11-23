import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCustomVerificationEmailTemplateRoute,
  postActionCreateCustomVerificationEmailTemplateRoute,
} from '../routes'

export const getActionCreateCustomVerificationEmailTemplateRouteHandler: RouteHandler<
  typeof getActionCreateCustomVerificationEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCustomVerificationEmailTemplateRouteHandler: RouteHandler<
  typeof postActionCreateCustomVerificationEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
