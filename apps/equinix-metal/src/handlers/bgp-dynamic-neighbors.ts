import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBgpDynamicNeighborsIdRoute, getBgpDynamicNeighborsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const bgpDynamicNeighborsHandler = app
  .openapi(deleteBgpDynamicNeighborsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBgpDynamicNeighborsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
