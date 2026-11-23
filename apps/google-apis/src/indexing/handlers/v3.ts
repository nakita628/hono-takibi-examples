import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3UrlNotificationsMetadataRoute, postV3UrlNotificationsPublishRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3UrlNotificationsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3UrlNotificationsPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
