import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSamlConnectionsSamlConnectionIdRoute,
  getSamlConnectionsRoute,
  getSamlConnectionsSamlConnectionIdRoute,
  patchSamlConnectionsSamlConnectionIdRoute,
  postSamlConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const samlConnectionsHandler = app
  .openapi(getSamlConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSamlConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSamlConnectionsSamlConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSamlConnectionsSamlConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSamlConnectionsSamlConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
