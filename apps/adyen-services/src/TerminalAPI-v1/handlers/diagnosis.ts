import type { RouteHandler } from '@hono/zod-openapi'
import type { postDiagnosisRoute } from '../routes'

export const postDiagnosisRouteHandler: RouteHandler<typeof postDiagnosisRoute> = async (c) => {
  throw new Error('Not implemented')
}
