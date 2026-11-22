import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TeamsIdMembersRoute,
  deleteV1TeamsIdRoute,
  getV1TeamsIdRoute,
  getV1TeamsRoute,
  postV1TeamsIdMembersRoute,
  postV1TeamsRoute,
  putV1TeamsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getV1TeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
