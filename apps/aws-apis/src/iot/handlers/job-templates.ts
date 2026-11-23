import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteJobTemplatesJobTemplateIdRoute,
  getJobTemplatesJobTemplateIdRoute,
  getJobTemplatesRoute,
  putJobTemplatesJobTemplateIdRoute,
} from '../routes'

export const putJobTemplatesJobTemplateIdRouteHandler: RouteHandler<
  typeof putJobTemplatesJobTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteJobTemplatesJobTemplateIdRouteHandler: RouteHandler<
  typeof deleteJobTemplatesJobTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobTemplatesJobTemplateIdRouteHandler: RouteHandler<
  typeof getJobTemplatesJobTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobTemplatesRouteHandler: RouteHandler<typeof getJobTemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
