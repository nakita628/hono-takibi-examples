import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  deleteSecuritySubjectRightsRequestsSubjectRightsRequestIdRoute,
  getSecuritySubjectRightsRequestsCountRoute,
  getSecuritySubjectRightsRequestsRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversCountRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsCountRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserPrincipalNameUserPrincipalNameRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsCountRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsCountRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserPrincipalNameUserPrincipalNameRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdGetFinalAttachmentRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdGetFinalReportRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesCountRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdRoute,
  getSecuritySubjectRightsRequestsSubjectRightsRequestIdTeamRoute,
  patchSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
  patchSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
  patchSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
  patchSecuritySubjectRightsRequestsSubjectRightsRequestIdRoute,
  postSecuritySubjectRightsRequestsRoute,
  postSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securitySubjectRightsRequestHandler = app
  .openapi(getSecuritySubjectRightsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySubjectRightsRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecuritySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecuritySubjectRightsRequestsSubjectRightsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdApproversCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdMailboxSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserIdServiceProvisioningErrorsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsUserPrincipalNameUserPrincipalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdCollaboratorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdGetFinalAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdGetFinalReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesAuthoredNoteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsSubjectRightsRequestIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecuritySubjectRightsRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
