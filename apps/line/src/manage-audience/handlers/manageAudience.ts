import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2BotAudienceGroupAudienceGroupIdRoute,
  getV2BotAudienceGroupAudienceGroupIdRoute,
  getV2BotAudienceGroupListRoute,
  getV2BotAudienceGroupSharedAudienceGroupIdRoute,
  getV2BotAudienceGroupSharedListRoute,
  postV2BotAudienceGroupClickRoute,
  postV2BotAudienceGroupImpRoute,
  postV2BotAudienceGroupUploadRoute,
  putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRoute,
  putV2BotAudienceGroupUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageAudienceHandler = app
  .openapi(postV2BotAudienceGroupUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BotAudienceGroupUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotAudienceGroupClickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotAudienceGroupImpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BotAudienceGroupAudienceGroupIdUpdateDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BotAudienceGroupAudienceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotAudienceGroupAudienceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotAudienceGroupListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotAudienceGroupSharedAudienceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotAudienceGroupSharedListRoute, (c) => {
    throw new Error('Not implemented')
  })
