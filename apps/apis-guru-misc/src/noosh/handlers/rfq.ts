import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rfqHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdRoute, (c) => {
    throw new Error('Not implemented')
  })
