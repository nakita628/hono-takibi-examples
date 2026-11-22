import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrivacySubjectRightsRequestsCountRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privacyHandler = app
  .openapi(getPrivacySubjectRightsRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
