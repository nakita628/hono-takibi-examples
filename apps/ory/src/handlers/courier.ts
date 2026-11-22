import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminCourierMessagesIdRoute, getAdminCourierMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const courierHandler = app
  .openapi(getAdminCourierMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCourierMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
