import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiPdfRoute,
  postApiPdfPdfconcatRoute,
  postApiPdfPdftoimageRoute,
  postApiPdfPdfwritestringRoute,
  postApiPdfWkhtmltopdfRoute,
  postApiPdfXslfoRoute,
  postApiPdfXslfowithtransformRoute,
} from '../routes'

export const getApiPdfRouteHandler: RouteHandler<typeof getApiPdfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPdfPdfconcatRouteHandler: RouteHandler<
  typeof postApiPdfPdfconcatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPdfPdftoimageRouteHandler: RouteHandler<
  typeof postApiPdfPdftoimageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPdfPdfwritestringRouteHandler: RouteHandler<
  typeof postApiPdfPdfwritestringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPdfWkhtmltopdfRouteHandler: RouteHandler<
  typeof postApiPdfWkhtmltopdfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPdfXslfoRouteHandler: RouteHandler<typeof postApiPdfXslfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPdfXslfowithtransformRouteHandler: RouteHandler<
  typeof postApiPdfXslfowithtransformRoute
> = async (c) => {
  throw new Error('Not implemented')
}
