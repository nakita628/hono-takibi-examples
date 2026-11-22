import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdWorkgroupMembersRoute,
  getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workgroupMembersHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdWorkgroupMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
