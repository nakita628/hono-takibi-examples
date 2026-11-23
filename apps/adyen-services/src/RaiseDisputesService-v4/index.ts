import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDisputesDisputeIdAttachmentsAttachmentIdRoute,
  getDisputesDisputeIdAttachmentsAttachmentIdRoute,
  getDisputesDisputeIdAttachmentsRoute,
  getDisputesIdRoute,
  getDisputesRoute,
  patchDisputesIdRoute,
  postDisputesDisputeIdAttachmentsRoute,
  postDisputesRoute,
} from './routes'
import {
  deleteDisputesDisputeIdAttachmentsAttachmentIdRouteHandler,
  getDisputesDisputeIdAttachmentsAttachmentIdRouteHandler,
  getDisputesDisputeIdAttachmentsRouteHandler,
  getDisputesIdRouteHandler,
  getDisputesRouteHandler,
  patchDisputesIdRouteHandler,
  postDisputesDisputeIdAttachmentsRouteHandler,
  postDisputesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDisputesRoute, getDisputesRouteHandler)
  .openapi(postDisputesRoute, postDisputesRouteHandler)
  .openapi(getDisputesDisputeIdAttachmentsRoute, getDisputesDisputeIdAttachmentsRouteHandler)
  .openapi(postDisputesDisputeIdAttachmentsRoute, postDisputesDisputeIdAttachmentsRouteHandler)
  .openapi(
    getDisputesDisputeIdAttachmentsAttachmentIdRoute,
    getDisputesDisputeIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(
    deleteDisputesDisputeIdAttachmentsAttachmentIdRoute,
    deleteDisputesDisputeIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(getDisputesIdRoute, getDisputesIdRouteHandler)
  .openapi(patchDisputesIdRoute, patchDisputesIdRouteHandler)

export default app
