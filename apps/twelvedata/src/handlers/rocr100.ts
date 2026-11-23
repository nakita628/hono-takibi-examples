import type { RouteHandler } from '@hono/zod-openapi'
import type { getRocr100Route } from '../routes'

export const getRocr100RouteHandler: RouteHandler<typeof getRocr100Route> = async (c) => {
  throw new Error('Not implemented')
}
