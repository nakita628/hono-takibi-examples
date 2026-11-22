import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsRoute,
  getV1WorkgroupsWorkgroupIdDetailRoute,
  getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdRoute,
  getV1WorkgroupsWorkgroupIdSupplierWorkgroupsRoute,
  putV1WorkgroupsWorkgroupIdDetailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workgroupHandler = app
  .openapi(getV1WorkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdClientWorkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkgroupsWorkgroupIdDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdSupplierWorkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
