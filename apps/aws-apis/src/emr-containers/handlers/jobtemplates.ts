import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteJobtemplatesTemplateIdRoute,
  getJobtemplatesRoute,
  getJobtemplatesTemplateIdRoute,
  postJobtemplatesRoute,
} from '../routes'

export const postJobtemplatesRouteHandler: RouteHandler<typeof postJobtemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJobtemplatesRouteHandler: RouteHandler<typeof getJobtemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteJobtemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteJobtemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobtemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getJobtemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
