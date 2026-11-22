import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectionsConnectionIdEnablementRoute,
  getV1ConnectionsConnectionIdEnablementRoute,
  postV1ConnectionsConnectionIdEnablementRoute,
  putV1ConnectionsConnectionIdEnablementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fusionConnectionEnablementHandler = app
  .openapi(postV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectionsConnectionIdEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
