import { OpenAPIHono } from '@hono/zod-openapi'
import { getComplianceRoute, patchComplianceRoute } from '../routes'

const app = new OpenAPIHono()

export const complianceComplianceHandler = app
  .openapi(getComplianceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchComplianceRoute, (c) => {
    throw new Error('Not implemented')
  })
