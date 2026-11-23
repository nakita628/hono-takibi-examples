import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCustomVerificationEmailTemplateRoute,
  postActionDeleteCustomVerificationEmailTemplateRoute,
} from '../routes'

export const getActionDeleteCustomVerificationEmailTemplateRouteHandler: RouteHandler<
  typeof getActionDeleteCustomVerificationEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCustomVerificationEmailTemplateRouteHandler: RouteHandler<
  typeof postActionDeleteCustomVerificationEmailTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
