import type { RouteHandler } from '@hono/zod-openapi'
import type { postBulkMd5Route, postBulkSha1Route } from '../routes'

export const postBulkMd5RouteHandler: RouteHandler<typeof postBulkMd5Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postBulkSha1RouteHandler: RouteHandler<typeof postBulkSha1Route> = async (c) => {
  throw new Error('Not implemented')
}
