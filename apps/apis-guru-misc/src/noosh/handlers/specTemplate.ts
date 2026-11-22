import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdSpecTemplatesRoute,
  getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specTemplateHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdSpecTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
