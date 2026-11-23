import type { RouteHandler } from '@hono/zod-openapi'
import type { postArtifactUploadRoute } from '../routes'

export const postArtifactUploadRouteHandler: RouteHandler<typeof postArtifactUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
