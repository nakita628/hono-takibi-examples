import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsRoute,
  getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userFieldsHandler = app
  .openapi(
    getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
