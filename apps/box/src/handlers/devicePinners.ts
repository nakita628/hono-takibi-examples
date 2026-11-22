import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicePinnersDevicePinnerIdRoute,
  getDevicePinnersDevicePinnerIdRoute,
  getEnterprisesEnterpriseIdDevicePinnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicePinnersHandler = app
  .openapi(getDevicePinnersDevicePinnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicePinnersDevicePinnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdDevicePinnersRoute, (c) => {
    throw new Error('Not implemented')
  })
