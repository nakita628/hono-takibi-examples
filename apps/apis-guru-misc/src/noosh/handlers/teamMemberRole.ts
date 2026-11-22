import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const teamMemberRoleHandler = app.openapi(
  getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
