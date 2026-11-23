import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVersionsVersionIdExportFormatRoute,
  postVersionsPublishAnonRoute,
  postVersionsVersionIdPublishRoute,
  putVersionsVersionIdImportRoute,
  putVersionsVersionIdUnpublishRoute,
} from '../routes'

export const postVersionsPublishAnonRouteHandler: RouteHandler<
  typeof postVersionsPublishAnonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVersionsVersionIdExportFormatRouteHandler: RouteHandler<
  typeof getVersionsVersionIdExportFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVersionsVersionIdImportRouteHandler: RouteHandler<
  typeof putVersionsVersionIdImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVersionsVersionIdPublishRouteHandler: RouteHandler<
  typeof postVersionsVersionIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVersionsVersionIdUnpublishRouteHandler: RouteHandler<
  typeof putVersionsVersionIdUnpublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}
