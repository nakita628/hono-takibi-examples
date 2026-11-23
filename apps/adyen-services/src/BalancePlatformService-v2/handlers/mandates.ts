import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMandatesMandateIdRoute,
  getMandatesRoute,
  patchMandatesMandateIdRoute,
  postMandatesMandateIdCancelRoute,
} from '../routes'

export const getMandatesRouteHandler: RouteHandler<typeof getMandatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMandatesMandateIdRouteHandler: RouteHandler<
  typeof getMandatesMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMandatesMandateIdRouteHandler: RouteHandler<
  typeof patchMandatesMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMandatesMandateIdCancelRouteHandler: RouteHandler<
  typeof postMandatesMandateIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
