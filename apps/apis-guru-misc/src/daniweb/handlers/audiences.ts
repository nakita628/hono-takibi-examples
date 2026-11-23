import { OpenAPIHono } from '@hono/zod-openapi'
import { getAudiencesIDRoute, getAudiencesRoute, postAudiencesIDMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const audiencesHandler = app
  .openapi(getAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiencesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudiencesIDMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
