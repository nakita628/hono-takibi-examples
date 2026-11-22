import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const estimateHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
