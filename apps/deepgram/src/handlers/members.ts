import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdMembersMemberIdRoute,
  getV1ProjectsProjectIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getV1ProjectsProjectIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
