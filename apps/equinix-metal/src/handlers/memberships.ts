import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMembershipsIdRoute, getMembershipsIdRoute, putMembershipsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const membershipsHandler = app
  .openapi(deleteMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
