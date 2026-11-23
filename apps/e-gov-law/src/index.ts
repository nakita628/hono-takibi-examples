import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAttachmentLawRevisionIdRoute,
  getKeywordRoute,
  getLawDataLawIdOrNumOrRevisionIdRoute,
  getLawFileFileTypeLawIdOrNumOrRevisionIdRoute,
  getLawRevisionsLawIdOrNumRoute,
  getLawsRoute,
} from './routes'
import {
  getAttachmentLawRevisionIdRouteHandler,
  getKeywordRouteHandler,
  getLawDataLawIdOrNumOrRevisionIdRouteHandler,
  getLawFileFileTypeLawIdOrNumOrRevisionIdRouteHandler,
  getLawRevisionsLawIdOrNumRouteHandler,
  getLawsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getLawsRoute, getLawsRouteHandler)
  .openapi(getLawRevisionsLawIdOrNumRoute, getLawRevisionsLawIdOrNumRouteHandler)
  .openapi(getLawDataLawIdOrNumOrRevisionIdRoute, getLawDataLawIdOrNumOrRevisionIdRouteHandler)
  .openapi(getAttachmentLawRevisionIdRoute, getAttachmentLawRevisionIdRouteHandler)
  .openapi(getKeywordRoute, getKeywordRouteHandler)
  .openapi(
    getLawFileFileTypeLawIdOrNumOrRevisionIdRoute,
    getLawFileFileTypeLawIdOrNumOrRevisionIdRouteHandler,
  )

export default app
