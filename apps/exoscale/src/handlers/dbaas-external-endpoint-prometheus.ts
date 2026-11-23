import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasExternalEndpointPrometheusEndpointIdRoute,
  getDbaasExternalEndpointPrometheusEndpointIdRoute,
  postDbaasExternalEndpointPrometheusNameRoute,
  putDbaasExternalEndpointPrometheusEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointPrometheusHandler = app
  .openapi(getDbaasExternalEndpointPrometheusEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointPrometheusEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointPrometheusEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasExternalEndpointPrometheusNameRoute, (c) => {
    throw new Error('Not implemented')
  })
