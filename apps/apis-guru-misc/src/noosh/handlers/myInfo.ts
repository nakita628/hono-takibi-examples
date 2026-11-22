import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdAutomaticInvitationsRoute,
  getV1WorkgroupsWorkgroupIdTeamTemplatesRoute,
  getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdRoute,
  postV1WorkgroupsWorkgroupIdProfileImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myInfoHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdAutomaticInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProfileImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdTeamTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
