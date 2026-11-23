import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasExternalEndpointDatadogEndpointIdRoute,
  getDbaasExternalEndpointDatadogEndpointIdRoute,
  postDbaasExternalEndpointDatadogNameRoute,
  putDbaasExternalEndpointDatadogEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointDatadogHandler = app
  .openapi(postDbaasExternalEndpointDatadogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointDatadogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointDatadogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointDatadogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
