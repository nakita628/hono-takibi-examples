import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute,
  getApiV2UpdateGroupClientRelationshipsRoute,
  postApiV2UpdateGroupClientRelationshipsRoute,
  putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute,
  putApiV2UpdateGroupClientRelationshipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const updateGroupClientRelationshipsHandler = app
  .openapi(getApiV2UpdateGroupClientRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UpdateGroupClientRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupClientRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateGroupClientRelationshipsRelationshipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UpdateGroupClientRelationshipsRelationshipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
