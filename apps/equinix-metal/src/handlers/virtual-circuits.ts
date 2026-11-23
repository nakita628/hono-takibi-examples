import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVirtualCircuitsIdRoute,
  getVirtualCircuitsIdEventsRoute,
  getVirtualCircuitsIdRoute,
  putVirtualCircuitsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualCircuitsHandler = app
  .openapi(getVirtualCircuitsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualCircuitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualCircuitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVirtualCircuitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
