import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsOrgContactIdDirectReportsCountRoute,
  getContactsOrgContactIdDirectReportsDirectoryObjectIdGraphOrgContactRoute,
  getContactsOrgContactIdDirectReportsDirectoryObjectIdGraphUserRoute,
  getContactsOrgContactIdDirectReportsDirectoryObjectIdRoute,
  getContactsOrgContactIdDirectReportsGraphOrgContactCountRoute,
  getContactsOrgContactIdDirectReportsGraphOrgContactRoute,
  getContactsOrgContactIdDirectReportsGraphUserCountRoute,
  getContactsOrgContactIdDirectReportsGraphUserRoute,
  getContactsOrgContactIdDirectReportsRoute,
  getContactsOrgContactIdManagerRoute,
  getContactsOrgContactIdMemberOfCountRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdGraphGroupRoute,
  getContactsOrgContactIdMemberOfDirectoryObjectIdRoute,
  getContactsOrgContactIdMemberOfGraphAdministrativeUnitCountRoute,
  getContactsOrgContactIdMemberOfGraphAdministrativeUnitRoute,
  getContactsOrgContactIdMemberOfGraphGroupCountRoute,
  getContactsOrgContactIdMemberOfGraphGroupRoute,
  getContactsOrgContactIdMemberOfRoute,
  getContactsOrgContactIdTransitiveMemberOfCountRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdRoute,
  getContactsOrgContactIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getContactsOrgContactIdTransitiveMemberOfGraphAdministrativeUnitRoute,
  getContactsOrgContactIdTransitiveMemberOfGraphGroupCountRoute,
  getContactsOrgContactIdTransitiveMemberOfGraphGroupRoute,
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
  .openapi(getContactsOrgContactIdDirectReportsDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsGraphUserCountRoute, (c) => {
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
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getContactsOrgContactIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
