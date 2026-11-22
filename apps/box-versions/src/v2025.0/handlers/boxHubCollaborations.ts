import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHubCollaborationsHubCollaborationIdRoute,
  getHubCollaborationsHubCollaborationIdRoute,
  getHubCollaborationsRoute,
  postHubCollaborationsRoute,
  putHubCollaborationsHubCollaborationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boxHubCollaborationsHandler = app
  .openapi(getHubCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHubCollaborationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHubCollaborationsHubCollaborationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHubCollaborationsHubCollaborationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHubCollaborationsHubCollaborationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
