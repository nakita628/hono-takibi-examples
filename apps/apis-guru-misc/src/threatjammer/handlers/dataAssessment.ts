import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AssessIpIpAddressRoute, postV1AssessIpCsvRoute, postV1AssessIpRoute } from '../routes'

const app = new OpenAPIHono()

export const dataAssessmentHandler = app
  .openapi(postV1AssessIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AssessIpCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssessIpIpAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
