import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketListType2Route } from '../routes'

export const getBucketListType2RouteHandler: RouteHandler<typeof getBucketListType2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}
