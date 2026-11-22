import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusRoute,
  getV1WorkgroupsWorkgroupIdProjectStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectStatusHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
