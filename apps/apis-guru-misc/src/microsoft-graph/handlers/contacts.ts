import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactsCountRoute,
  getContactsOrgContactIdDirectReportsCountRoute,
  getContactsOrgContactIdDirectReportsMicrosoftGraphOrgContactCountRoute,
  getContactsOrgContactIdDirectReportsMicrosoftGraphUserCountRoute,
  getContactsOrgContactIdMemberOfCountRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphApplicationCountRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphDeviceCountRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphGroupCountRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphOrgContactCountRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getContactsOrgContactIdMemberOfMicrosoftGraphUserCountRoute,
  getContactsOrgContactIdTransitiveMemberOfCountRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphGroupCountRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
  getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphUserCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdDirectReportsMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphServicePrincipalCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getContactsOrgContactIdTransitiveMemberOfMicrosoftGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
