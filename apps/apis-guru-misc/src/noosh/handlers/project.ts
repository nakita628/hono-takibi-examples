import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsRoute,
  patchV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenRoute,
  postV1WorkgroupsWorkgroupIdProjectsRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WorkgroupsWorkgroupIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1WorkgroupsWorkgroupIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkgroupsWorkgroupIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
