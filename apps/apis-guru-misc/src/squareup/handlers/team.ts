import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2TeamMembersTeamMemberIdRoute,
  getV2TeamMembersTeamMemberIdWageSettingRoute,
  postV2TeamMembersBulkCreateRoute,
  postV2TeamMembersBulkUpdateRoute,
  postV2TeamMembersRoute,
  postV2TeamMembersSearchRoute,
  putV2TeamMembersTeamMemberIdRoute,
  putV2TeamMembersTeamMemberIdWageSettingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app
  .openapi(postV2TeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersBulkCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TeamMembersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamMembersTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamMembersTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamMembersTeamMemberIdWageSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2TeamMembersTeamMemberIdWageSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
