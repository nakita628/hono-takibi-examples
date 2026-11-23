import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTaskRoute,
  getTaskTaskIdDownloadInputFileRoute,
  getTaskTaskIdDownloadResultFileRoute,
  getTaskTaskIdRoute,
  postTaskRoute,
  postTaskTaskIdUploadFileRoute,
} from '../routes'

export const getTaskRouteHandler: RouteHandler<typeof getTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaskRouteHandler: RouteHandler<typeof postTaskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskTaskIdRouteHandler: RouteHandler<typeof getTaskTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskTaskIdDownloadInputFileRouteHandler: RouteHandler<
  typeof getTaskTaskIdDownloadInputFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskTaskIdDownloadResultFileRouteHandler: RouteHandler<
  typeof getTaskTaskIdDownloadResultFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTaskTaskIdUploadFileRouteHandler: RouteHandler<
  typeof postTaskTaskIdUploadFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}
