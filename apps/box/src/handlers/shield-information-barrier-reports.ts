import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getShieldInformationBarrierReportsRoute,
  getShieldInformationBarrierReportsShieldInformationBarrierReportIdRoute,
  postShieldInformationBarrierReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shieldInformationBarrierReportsHandler = app
  .openapi(getShieldInformationBarrierReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShieldInformationBarrierReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShieldInformationBarrierReportsShieldInformationBarrierReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
