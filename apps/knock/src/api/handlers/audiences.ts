import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AudiencesKeyMembersRoute,
  getV1AudiencesKeyMembersRoute,
  postV1AudiencesKeyMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audiencesHandler = app
  .openapi(deleteV1AudiencesKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AudiencesKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AudiencesKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
