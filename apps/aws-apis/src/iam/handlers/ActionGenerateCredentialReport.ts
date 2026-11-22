import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGenerateCredentialReportRoute,
  postActionGenerateCredentialReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGenerateCredentialReportHandler = app
  .openapi(getActionGenerateCredentialReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGenerateCredentialReportRoute, (c) => {
    throw new Error('Not implemented')
  })
