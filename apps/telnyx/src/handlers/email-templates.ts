import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteEmailTemplatesIdRoute,
  getEmailTemplatesIdRoute,
  getEmailTemplatesRoute,
  patchEmailTemplatesIdRoute,
  postEmailTemplatesIdRenderRoute,
  postEmailTemplatesRoute,
  putEmailTemplatesIdRoute,
} from '../routes'

export const getEmailTemplatesRouteHandler: RouteHandler<typeof getEmailTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEmailTemplatesRouteHandler: RouteHandler<typeof postEmailTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteEmailTemplatesIdRouteHandler: RouteHandler<
  typeof deleteEmailTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailTemplatesIdRouteHandler: RouteHandler<
  typeof getEmailTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEmailTemplatesIdRouteHandler: RouteHandler<
  typeof patchEmailTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEmailTemplatesIdRouteHandler: RouteHandler<
  typeof putEmailTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmailTemplatesIdRenderRouteHandler: RouteHandler<
  typeof postEmailTemplatesIdRenderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
