import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdReportMetadataReportTypeRoute, getAdReportMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const adReportMetadataHandler = app
  .openapi(getAdReportMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdReportMetadataReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
