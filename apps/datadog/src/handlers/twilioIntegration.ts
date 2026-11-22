import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesTwilioAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesTwilioAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesTwilioAccountsRoute,
  patchApiV2IntegrationInterfacesTwilioAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesTwilioAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const twilioIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesTwilioAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesTwilioAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesTwilioAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesTwilioAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesTwilioAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
