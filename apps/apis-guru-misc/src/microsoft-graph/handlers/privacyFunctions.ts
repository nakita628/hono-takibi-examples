import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdMicrosoftGraphGetFinalAttachmentRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdMicrosoftGraphGetFinalReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privacyFunctionsHandler = app
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdMicrosoftGraphGetFinalAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdMicrosoftGraphGetFinalReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
