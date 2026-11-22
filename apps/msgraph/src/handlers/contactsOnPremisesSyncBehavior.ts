import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsOrgContactIdOnPremisesSyncBehaviorRoute,
  getContactsOrgContactIdOnPremisesSyncBehaviorRoute,
  patchContactsOrgContactIdOnPremisesSyncBehaviorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsOnPremisesSyncBehaviorHandler = app
  .openapi(getContactsOrgContactIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactsOrgContactIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsOrgContactIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
