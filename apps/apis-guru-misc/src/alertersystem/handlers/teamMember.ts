import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTeamMemberIdRoute,
  getApiTeamMemberIdRoute,
  getApiTeamMemberRoute,
  putApiTeamMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamMemberHandler = app
  .openapi(getApiTeamMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
