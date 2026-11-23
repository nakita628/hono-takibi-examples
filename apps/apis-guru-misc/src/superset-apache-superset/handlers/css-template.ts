import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCssTemplateIndexRoute,
  deleteCssTemplatePkRoute,
  getCssTemplateIndexRoute,
  getCssTemplateInfoRoute,
  getCssTemplatePkRoute,
  getCssTemplateRelatedColumnNameRoute,
  postCssTemplateIndexRoute,
  putCssTemplatePkRoute,
} from '../routes'

export const deleteCssTemplateIndexRouteHandler: RouteHandler<
  typeof deleteCssTemplateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCssTemplateIndexRouteHandler: RouteHandler<
  typeof getCssTemplateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCssTemplateIndexRouteHandler: RouteHandler<
  typeof postCssTemplateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCssTemplateInfoRouteHandler: RouteHandler<typeof getCssTemplateInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCssTemplateRelatedColumnNameRouteHandler: RouteHandler<
  typeof getCssTemplateRelatedColumnNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCssTemplatePkRouteHandler: RouteHandler<
  typeof deleteCssTemplatePkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCssTemplatePkRouteHandler: RouteHandler<typeof getCssTemplatePkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCssTemplatePkRouteHandler: RouteHandler<typeof putCssTemplatePkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
