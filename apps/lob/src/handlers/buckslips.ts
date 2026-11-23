import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBuckslipsBuckslipIdRoute,
  getBuckslipsBuckslipIdOrdersRoute,
  getBuckslipsBuckslipIdRoute,
  getBuckslipsRoute,
  patchBuckslipsBuckslipIdRoute,
  postBuckslipsBuckslipIdOrdersRoute,
  postBuckslipsRoute,
} from '../routes'

export const getBuckslipsRouteHandler: RouteHandler<typeof getBuckslipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBuckslipsRouteHandler: RouteHandler<typeof postBuckslipsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBuckslipsBuckslipIdRouteHandler: RouteHandler<
  typeof getBuckslipsBuckslipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBuckslipsBuckslipIdRouteHandler: RouteHandler<
  typeof patchBuckslipsBuckslipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBuckslipsBuckslipIdRouteHandler: RouteHandler<
  typeof deleteBuckslipsBuckslipIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBuckslipsBuckslipIdOrdersRouteHandler: RouteHandler<
  typeof getBuckslipsBuckslipIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBuckslipsBuckslipIdOrdersRouteHandler: RouteHandler<
  typeof postBuckslipsBuckslipIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
