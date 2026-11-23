import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDownloadContentDataJobIdentifierRoute,
  getDownloadReportingDataJobIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadHandler = app
  .openapi(getDownloadReportingDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDownloadContentDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
