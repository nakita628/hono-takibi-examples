import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteControlsControlIdRoute,
  getControlsControlIdRoute,
  postControlsRoute,
  putControlsControlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const controlsHandler = app
  .openapi(postControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteControlsControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getControlsControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putControlsControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
