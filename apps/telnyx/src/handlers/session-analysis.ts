import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSessionAnalysisMetadataRecordTypeRoute,
  getSessionAnalysisMetadataRoute,
  getSessionAnalysisRecordTypeEventIdRoute,
} from '../routes'

export const getSessionAnalysisMetadataRouteHandler: RouteHandler<
  typeof getSessionAnalysisMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionAnalysisMetadataRecordTypeRouteHandler: RouteHandler<
  typeof getSessionAnalysisMetadataRecordTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionAnalysisRecordTypeEventIdRouteHandler: RouteHandler<
  typeof getSessionAnalysisRecordTypeEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
