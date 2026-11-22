import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CorporateActionsAnnouncementsIdRoute,
  getV1CorporateActionsAnnouncementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const corporateActionsHandler = app
  .openapi(getV1CorporateActionsAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CorporateActionsAnnouncementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
