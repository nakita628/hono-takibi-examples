import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInvitationsInvitedUserMailboxSettingsRoute,
  getInvitationsInvitedUserRoute,
  getInvitationsInvitedUserServiceProvisioningErrorsCountRoute,
  getInvitationsInvitedUserServiceProvisioningErrorsRoute,
  patchInvitationsInvitedUserMailboxSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invitationsUserHandler = app
  .openapi(getInvitationsInvitedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsInvitedUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInvitationsInvitedUserMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsInvitedUserServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInvitationsInvitedUserServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
