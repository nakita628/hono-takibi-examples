import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DrainsIdRoute,
  getV1DrainsIdRoute,
  getV1DrainsRoute,
  patchV1DrainsIdRoute,
  postV1DrainsRoute,
  postV1DrainsTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drainsHandler = app
  .openapi(postV1DrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DrainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DrainsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
