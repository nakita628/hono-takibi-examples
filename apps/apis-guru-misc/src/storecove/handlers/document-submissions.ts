import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDocumentSubmissionsGuidEvidenceEvidenceTypeRoute,
  postDocumentSubmissionsRoute,
} from '../routes'

export const postDocumentSubmissionsRouteHandler: RouteHandler<
  typeof postDocumentSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDocumentSubmissionsGuidEvidenceEvidenceTypeRouteHandler: RouteHandler<
  typeof getDocumentSubmissionsGuidEvidenceEvidenceTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
