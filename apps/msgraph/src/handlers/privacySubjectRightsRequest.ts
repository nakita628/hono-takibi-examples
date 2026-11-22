import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  deletePrivacySubjectRightsRequestsSubjectRightsRequestIdRoute,
  getPrivacySubjectRightsRequestsCountRoute,
  getPrivacySubjectRightsRequestsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversCountRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsCountRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserPrincipalNameUserPrincipalNameRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsCountRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsCountRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserPrincipalNameUserPrincipalNameRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdGetFinalAttachmentRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdGetFinalReportRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesCountRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute,
  getPrivacySubjectRightsRequestsSubjectRightsRequestIdTeamRoute,
  patchPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
  patchPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
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
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrivacySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrivacySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdApproversCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdGetFinalAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdGetFinalReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePrivacySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsSubjectRightsRequestIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrivacySubjectRightsRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
