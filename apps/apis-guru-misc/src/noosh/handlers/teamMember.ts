import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute,
  post11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamMemberHandler = app
  .openapi(post11WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
