import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserMembershipsListRoute, postUserMembershipsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const userMembershipsHandler = app
  .openapi(postUserMembershipsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserMembershipsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
