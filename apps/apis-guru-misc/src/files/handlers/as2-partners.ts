import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAs2PartnersIdRoute,
  getAs2PartnersIdRoute,
  getAs2PartnersRoute,
  patchAs2PartnersIdRoute,
  postAs2PartnersRoute,
} from '../routes'

export const getAs2PartnersRouteHandler: RouteHandler<typeof getAs2PartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAs2PartnersRouteHandler: RouteHandler<typeof postAs2PartnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAs2PartnersIdRouteHandler: RouteHandler<
  typeof deleteAs2PartnersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAs2PartnersIdRouteHandler: RouteHandler<typeof getAs2PartnersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAs2PartnersIdRouteHandler: RouteHandler<typeof patchAs2PartnersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
