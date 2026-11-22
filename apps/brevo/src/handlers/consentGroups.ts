import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsConsentGroupsIdRoute,
  getContactsConsentGroupsIdRoute,
  getContactsConsentGroupsRoute,
  postContactsConsentGroupsRoute,
  putContactsConsentGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consentGroupsHandler = app
  .openapi(getContactsConsentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsConsentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsConsentGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsConsentGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsConsentGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
