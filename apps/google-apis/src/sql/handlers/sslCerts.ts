import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslCertsHandler = app
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
