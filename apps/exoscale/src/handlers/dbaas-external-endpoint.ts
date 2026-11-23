import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putDbaasExternalEndpointSourceServiceNameAttachRoute,
  putDbaasExternalEndpointSourceServiceNameDetachRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalEndpointHandler = app
  .openapi(putDbaasExternalEndpointSourceServiceNameAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasExternalEndpointSourceServiceNameDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
