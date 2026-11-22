import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WorkgroupsWorkgroupIdDeactivationReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const deactivationReasonHandler = app.openapi(
  getV1WorkgroupsWorkgroupIdDeactivationReasonsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
