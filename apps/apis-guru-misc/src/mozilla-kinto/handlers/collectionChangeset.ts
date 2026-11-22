import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketsBidCollectionsCidChangesetRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionChangesetHandler = app.openapi(
  getBucketsBidCollectionsCidChangesetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
