import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  getV1ProjectsProjectInstancesInstanceSslCertsRoute,
  getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  postV1ProjectsProjectInstancesInstanceCreateEphemeralRoute,
  postV1ProjectsProjectInstancesInstanceSslCertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslCertsHandler = app
  .openapi(postV1ProjectsProjectInstancesInstanceCreateEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
