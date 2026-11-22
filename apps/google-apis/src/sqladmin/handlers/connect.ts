import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectInstancesInstanceConnectSettingsRoute,
  postV1ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app
  .openapi(getV1ProjectsProjectInstancesInstanceConnectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute, (c) => {
    throw new Error('Not implemented')
  })
