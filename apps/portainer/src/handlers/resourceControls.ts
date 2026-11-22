import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteResourceControlsIdRoute,
  postResourceControlsRoute,
  putResourceControlsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceControlsHandler = app
  .openapi(postResourceControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteResourceControlsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResourceControlsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
