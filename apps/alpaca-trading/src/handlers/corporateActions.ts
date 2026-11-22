import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CorporateActionsAnnouncementsIdRoute,
  getV2CorporateActionsAnnouncementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const corporateActionsHandler = app
  .openapi(getV2CorporateActionsAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CorporateActionsAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
