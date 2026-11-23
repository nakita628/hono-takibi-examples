import type { RouteHandler } from '@hono/zod-openapi'
import type { getEncodingUtf8Route } from '../routes'

export const getEncodingUtf8RouteHandler: RouteHandler<typeof getEncodingUtf8Route> = async (c) => {
  throw new Error('Not implemented')
}
