import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailnetTailnetLoggingLogTypeStreamRoute,
  getTailnetTailnetLoggingConfigurationRoute,
  getTailnetTailnetLoggingLogTypeStreamRoute,
  getTailnetTailnetLoggingLogTypeStreamStatusRoute,
  getTailnetTailnetLoggingNetworkRoute,
  postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute,
  postTailnetTailnetAwsExternalIdRoute,
  putTailnetTailnetLoggingLogTypeStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loggingHandler = app
  .openapi(getTailnetTailnetLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingLogTypeStreamStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingLogTypeStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetLoggingLogTypeStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetLoggingLogTypeStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAwsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
