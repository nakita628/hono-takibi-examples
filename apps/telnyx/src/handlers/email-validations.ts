import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEmailValidationsBatchIdRoute,
  postEmailValidationsBatchRoute,
  postEmailValidationsRoute,
} from '../routes'

export const postEmailValidationsRouteHandler: RouteHandler<
  typeof postEmailValidationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailValidationsBatchRouteHandler: RouteHandler<
  typeof postEmailValidationsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailValidationsBatchIdRouteHandler: RouteHandler<
  typeof getEmailValidationsBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
