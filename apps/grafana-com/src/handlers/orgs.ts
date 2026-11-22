import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsSlugOrIdMembersUsernameOrIdRoute,
  getOrgsOrgSlugInstancesRoute,
  getOrgsOrgSlugOrIdBilledUsageHistoryRoute,
  getOrgsOrgSlugOrIdBilledUsageRoute,
  getOrgsSlugOrIdCheckVisibilityRoute,
  getOrgsSlugOrIdMembersRoute,
  getOrgsSlugOrIdMembersUsernameOrIdRoute,
  getOrgsSlugOrIdRoute,
  getOrgsSlugOrIdSettingsRoute,
  postOrgsSlugOrIdMembersRoute,
  postOrgsSlugOrIdMembersUsernameOrIdRoute,
  postOrgsSlugOrIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(getOrgsOrgSlugOrIdBilledUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSlugOrIdBilledUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgSlugInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsSlugOrIdCheckVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsSlugOrIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsSlugOrIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsSlugOrIdMembersUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsSlugOrIdMembersUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsSlugOrIdMembersUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsSlugOrIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsSlugOrIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
