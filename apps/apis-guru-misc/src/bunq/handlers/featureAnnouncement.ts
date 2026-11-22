import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDFeatureAnnouncementItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const featureAnnouncementHandler = app.openapi(
  getUserUserIDFeatureAnnouncementItemIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
