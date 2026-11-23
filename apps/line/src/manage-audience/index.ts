import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2BotAudienceGroupAudienceGroupIdRoute,
  getV2BotAudienceGroupAudienceGroupIdRoute,
  getV2BotAudienceGroupListRoute,
  getV2BotAudienceGroupSharedAudienceGroupIdRoute,
  getV2BotAudienceGroupSharedListRoute,
  postV2BotAudienceGroupClickRoute,
  postV2BotAudienceGroupImpRoute,
  postV2BotAudienceGroupUploadByFileRoute,
  postV2BotAudienceGroupUploadRoute,
  putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRoute,
  putV2BotAudienceGroupUploadByFileRoute,
  putV2BotAudienceGroupUploadRoute,
} from './routes'
import {
  deleteV2BotAudienceGroupAudienceGroupIdRouteHandler,
  getV2BotAudienceGroupAudienceGroupIdRouteHandler,
  getV2BotAudienceGroupListRouteHandler,
  getV2BotAudienceGroupSharedAudienceGroupIdRouteHandler,
  getV2BotAudienceGroupSharedListRouteHandler,
  postV2BotAudienceGroupClickRouteHandler,
  postV2BotAudienceGroupImpRouteHandler,
  postV2BotAudienceGroupUploadByFileRouteHandler,
  postV2BotAudienceGroupUploadRouteHandler,
  putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRouteHandler,
  putV2BotAudienceGroupUploadByFileRouteHandler,
  putV2BotAudienceGroupUploadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2BotAudienceGroupUploadRoute, postV2BotAudienceGroupUploadRouteHandler)
  .openapi(putV2BotAudienceGroupUploadRoute, putV2BotAudienceGroupUploadRouteHandler)
  .openapi(postV2BotAudienceGroupUploadByFileRoute, postV2BotAudienceGroupUploadByFileRouteHandler)
  .openapi(putV2BotAudienceGroupUploadByFileRoute, putV2BotAudienceGroupUploadByFileRouteHandler)
  .openapi(postV2BotAudienceGroupClickRoute, postV2BotAudienceGroupClickRouteHandler)
  .openapi(postV2BotAudienceGroupImpRoute, postV2BotAudienceGroupImpRouteHandler)
  .openapi(
    putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRoute,
    putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRouteHandler,
  )
  .openapi(
    deleteV2BotAudienceGroupAudienceGroupIdRoute,
    deleteV2BotAudienceGroupAudienceGroupIdRouteHandler,
  )
  .openapi(
    getV2BotAudienceGroupAudienceGroupIdRoute,
    getV2BotAudienceGroupAudienceGroupIdRouteHandler,
  )
  .openapi(getV2BotAudienceGroupListRoute, getV2BotAudienceGroupListRouteHandler)
  .openapi(
    getV2BotAudienceGroupSharedAudienceGroupIdRoute,
    getV2BotAudienceGroupSharedAudienceGroupIdRouteHandler,
  )
  .openapi(getV2BotAudienceGroupSharedListRoute, getV2BotAudienceGroupSharedListRouteHandler)

export default app
