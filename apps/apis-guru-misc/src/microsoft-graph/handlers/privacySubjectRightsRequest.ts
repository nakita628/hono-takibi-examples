import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  deletePrivacySubjectRightsRequestsSubjectRightsRequestIdRoute,
  getPrivacySubjectRightsRequestsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdTeamRoute,
  patchPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  patchPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute,
  postPrivacySubjectRightsRequestsRoute,
  postPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const privacySubjectRightsRequestHandler = app
  .openapi(getPrivacySubjectRightsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrivacySubjectRightsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrivacySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
