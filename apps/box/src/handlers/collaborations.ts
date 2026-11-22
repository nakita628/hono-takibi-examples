import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollaborationsCollaborationIdRoute,
  getCollaborationsCollaborationIdRoute,
  postCollaborationsRoute,
  putCollaborationsCollaborationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collaborationsHandler = app
  .openapi(getCollaborationsCollaborationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollaborationsCollaborationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollaborationsCollaborationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
