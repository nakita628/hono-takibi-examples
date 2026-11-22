import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1ConnectionsConnectionIdRoute,
  getPublicV1ConnectionsConnectionIdRoute,
  getPublicV1ConnectionsRoute,
  patchPublicV1ConnectionsConnectionIdRoute,
  postPublicV1ConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicConnectionsHandler = app
  .openapi(postPublicV1ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1ConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
