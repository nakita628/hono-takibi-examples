import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdBillingRecipientsRoute,
  getV1WorkgroupsWorkgroupIdContactsRoute,
  getV1WorkgroupsWorkgroupIdContactsUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdBillingRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdContactsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
