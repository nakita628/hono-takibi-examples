import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatSlaSlaIdRoute,
  getApiV1LivechatSlaRoute,
  getApiV1LivechatSlaSlaIdRoute,
  postApiV1LivechatSlaRoute,
  putApiV1LivechatSlaSlaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slaPoliciesHandler = app
  .openapi(getApiV1LivechatSlaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatSlaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatSlaSlaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatSlaSlaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatSlaSlaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
