import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIssueTrackingCollectionsCollectionIdRoute,
  getIssueTrackingCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getIssueTrackingCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIssueTrackingCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
