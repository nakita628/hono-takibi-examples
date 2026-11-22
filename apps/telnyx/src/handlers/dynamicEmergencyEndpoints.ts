import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDynamicEmergencyEndpointsIdRoute,
  getDynamicEmergencyEndpointsIdRoute,
  getDynamicEmergencyEndpointsRoute,
  postDynamicEmergencyEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicEmergencyEndpointsHandler = app
  .openapi(getDynamicEmergencyEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDynamicEmergencyEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDynamicEmergencyEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDynamicEmergencyEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
