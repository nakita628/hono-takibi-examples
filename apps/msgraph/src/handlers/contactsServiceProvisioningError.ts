import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdServiceProvisioningErrorsCountRoute,
  getContactsOrgContactIdServiceProvisioningErrorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsServiceProvisioningErrorHandler = app
  .openapi(getContactsOrgContactIdServiceProvisioningErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdServiceProvisioningErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
