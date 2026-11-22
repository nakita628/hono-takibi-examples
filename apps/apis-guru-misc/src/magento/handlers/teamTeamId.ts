import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1TeamTeamIdRoute, getV1TeamTeamIdRoute, putV1TeamTeamIdRoute } from '../routes'

const app = new OpenAPIHono()

export const teamTeamIdHandler = app
  .openapi(deleteV1TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
