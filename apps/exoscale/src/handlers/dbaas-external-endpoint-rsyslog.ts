import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasExternalEndpointRsyslogEndpointIdRoute,
  getDbaasExternalEndpointRsyslogEndpointIdRoute,
  postDbaasExternalEndpointRsyslogNameRoute,
  putDbaasExternalEndpointRsyslogEndpointIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointRsyslogHandler = app
  .openapi(postDbaasExternalEndpointRsyslogNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasExternalEndpointRsyslogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointRsyslogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalEndpointRsyslogEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
