import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1UserProfilesStudentIdGuardiansGuardianIdRoute,
  getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute,
  getV1UserProfilesStudentIdGuardianInvitationsRoute,
  getV1UserProfilesStudentIdGuardiansGuardianIdRoute,
  getV1UserProfilesStudentIdGuardiansRoute,
  getV1UserProfilesUserIdRoute,
  patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute,
  postV1UserProfilesStudentIdGuardianInvitationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userProfilesHandler = app
  .openapi(getV1UserProfilesStudentIdGuardianInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserProfilesStudentIdGuardianInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1UserProfilesStudentIdGuardianInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardiansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserProfilesStudentIdGuardiansGuardianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesStudentIdGuardiansGuardianIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserProfilesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
