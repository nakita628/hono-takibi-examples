import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDynamicEmergencyAddressesIdRoute,
  getDynamicEmergencyAddressesIdRoute,
  getDynamicEmergencyAddressesRoute,
  postDynamicEmergencyAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicEmergencyAddressesHandler = app
  .openapi(getDynamicEmergencyAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDynamicEmergencyAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDynamicEmergencyAddressesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDynamicEmergencyAddressesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
