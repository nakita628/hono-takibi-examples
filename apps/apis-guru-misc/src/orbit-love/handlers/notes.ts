import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkspaceSlugMembersMemberSlugNotesRoute,
  postWorkspaceSlugMembersMemberSlugNotesRoute,
  putWorkspaceSlugMembersMemberSlugNotesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notesHandler = app
  .openapi(getWorkspaceSlugMembersMemberSlugNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersMemberSlugNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugMembersMemberSlugNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
