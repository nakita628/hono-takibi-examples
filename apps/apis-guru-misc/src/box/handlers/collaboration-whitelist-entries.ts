import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
  getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute,
  getCollaborationWhitelistEntriesRoute,
  postCollaborationWhitelistEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collaborationWhitelistEntriesHandler = app
  .openapi(getCollaborationWhitelistEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollaborationWhitelistEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollaborationWhitelistEntriesCollaborationWhitelistEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
