import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDesignerTemplatesIdRoute,
  getDesignerTemplatesIdRoute,
  getDesignerTemplatesIndexRoute,
  postDesignerTemplatesIdGenerateRoute,
  postDesignerTemplatesIndexRoute,
  postDesignerTemplatesPreviewRoute,
  putDesignerTemplatesIdRoute,
} from '../routes'

export const getDesignerTemplatesIndexRouteHandler: RouteHandler<
  typeof getDesignerTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDesignerTemplatesIndexRouteHandler: RouteHandler<
  typeof postDesignerTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDesignerTemplatesPreviewRouteHandler: RouteHandler<
  typeof postDesignerTemplatesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDesignerTemplatesIdRouteHandler: RouteHandler<
  typeof deleteDesignerTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDesignerTemplatesIdRouteHandler: RouteHandler<
  typeof getDesignerTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDesignerTemplatesIdRouteHandler: RouteHandler<
  typeof putDesignerTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDesignerTemplatesIdGenerateRouteHandler: RouteHandler<
  typeof postDesignerTemplatesIdGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
