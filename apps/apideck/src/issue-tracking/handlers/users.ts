import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIssueTrackingCollectionsCollectionIdUsersIdRoute,
  getIssueTrackingCollectionsCollectionIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getIssueTrackingCollectionsCollectionIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
