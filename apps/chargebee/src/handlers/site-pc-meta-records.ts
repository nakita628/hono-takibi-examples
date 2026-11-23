import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitePcMetaRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const sitePcMetaRecordsHandler = app.openapi(getSitePcMetaRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
