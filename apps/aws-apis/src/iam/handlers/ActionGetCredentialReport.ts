import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetCredentialReportRoute, postActionGetCredentialReportRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetCredentialReportHandler = app
  .openapi(getActionGetCredentialReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetCredentialReportRoute, (c) => {
    throw new Error('Not implemented')
  })
