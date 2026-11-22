import { OpenAPIHono } from '@hono/zod-openapi'
import { getIssueTrackingCollectionsCollectionIdTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app.openapi(getIssueTrackingCollectionsCollectionIdTagsRoute, (c) => {
  throw new Error('Not implemented')
})
