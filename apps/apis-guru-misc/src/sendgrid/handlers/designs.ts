import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDesignsIdRoute,
  getDesignsIdRoute,
  getDesignsPreBuiltsIdRoute,
  getDesignsPreBuiltsRoute,
  getDesignsRoute,
  patchDesignsIdRoute,
  postDesignsIdRoute,
  postDesignsPreBuiltsIdRoute,
  postDesignsRoute,
} from '../routes'

export const getDesignsRouteHandler: RouteHandler<typeof getDesignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDesignsRouteHandler: RouteHandler<typeof postDesignsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDesignsPreBuiltsRouteHandler: RouteHandler<
  typeof getDesignsPreBuiltsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDesignsPreBuiltsIdRouteHandler: RouteHandler<
  typeof getDesignsPreBuiltsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDesignsPreBuiltsIdRouteHandler: RouteHandler<
  typeof postDesignsPreBuiltsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDesignsIdRouteHandler: RouteHandler<typeof deleteDesignsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDesignsIdRouteHandler: RouteHandler<typeof getDesignsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDesignsIdRouteHandler: RouteHandler<typeof patchDesignsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDesignsIdRouteHandler: RouteHandler<typeof postDesignsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
