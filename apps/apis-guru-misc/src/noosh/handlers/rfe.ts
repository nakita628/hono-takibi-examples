import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rfeHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
