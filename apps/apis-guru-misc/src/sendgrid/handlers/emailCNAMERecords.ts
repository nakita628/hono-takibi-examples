import { OpenAPIHono } from '@hono/zod-openapi'
import { postWhitelabelDnsEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const emailCNAMERecordsHandler = app.openapi(postWhitelabelDnsEmailRoute, (c) => {
  throw new Error('Not implemented')
})
