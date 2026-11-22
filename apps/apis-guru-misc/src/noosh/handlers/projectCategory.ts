import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryRoute,
  getV1WorkgroupsWorkgroupIdProjectCategoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectCategoryHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
