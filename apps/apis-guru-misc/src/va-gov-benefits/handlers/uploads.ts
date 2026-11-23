import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUploadsIdDownloadRoute,
  getUploadsIdRoute,
  postUploadsReportRoute,
  postUploadsRoute,
  postUploadsValidateDocumentRoute,
} from '../routes'

export const postUploadsRouteHandler: RouteHandler<typeof postUploadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsReportRouteHandler: RouteHandler<typeof postUploadsReportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUploadsValidateDocumentRouteHandler: RouteHandler<
  typeof postUploadsValidateDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUploadsIdRouteHandler: RouteHandler<typeof getUploadsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUploadsIdDownloadRouteHandler: RouteHandler<
  typeof getUploadsIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
