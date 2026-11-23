import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1ParentNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
