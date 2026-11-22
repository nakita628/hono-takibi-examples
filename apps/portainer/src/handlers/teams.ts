import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamsIdRoute,
  getTeamsIdRoute,
  getTeamsRoute,
  postTeamsRoute,
  putTeamsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
