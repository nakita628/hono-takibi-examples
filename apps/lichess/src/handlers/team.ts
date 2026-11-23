import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamUpdatesRoute,
  getTeamUpdatesTeamIdRoute,
  postTeamTeamIdJoinRoute,
  postTeamTeamIdPmAllRoute,
  postTeamTeamIdQuitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app
  .openapi(postTeamTeamIdJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamTeamIdQuitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamUpdatesTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamTeamIdPmAllRoute, (c) => {
    throw new Error('Not implemented')
  })
