import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRoute,
  getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRoute,
  postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRoute,
  postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
  putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collaborationResourcesHandler = app
  .openapi(getOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCollaborationResourcesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCollaborationResourcesCollectionsSearchFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCollaborationResourcesResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCollaborationResourcesBaseResourceTypeBaseResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
