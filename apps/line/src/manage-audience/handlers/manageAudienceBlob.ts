import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2BotAudienceGroupUploadByFileRoute,
  putV2BotAudienceGroupUploadByFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageAudienceBlobHandler = app
  .openapi(postV2BotAudienceGroupUploadByFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BotAudienceGroupUploadByFileRoute, (c) => {
    throw new Error('Not implemented')
  })
