import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute, (c) => {
    throw new Error('Not implemented')
  })
