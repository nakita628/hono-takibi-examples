import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdDirectReportsDirectoryObjectIdRoute,
  getContactsOrgContactIdDirectReportsRoute,
  getContactsOrgContactIdManagerRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdRoute,
  getContactsOrgContactIdMemberOfRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdRoute,
  getContactsOrgContactIdTransitiveMemberOfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsDirectoryObjectHandler = app
  .openapi(getContactsOrgContactIdDirectReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
