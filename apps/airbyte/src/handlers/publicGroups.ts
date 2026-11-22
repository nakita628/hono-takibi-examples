import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1GroupsGroupIdRoute,
  getPublicV1GroupsGroupIdRoute,
  getPublicV1GroupsRoute,
  patchPublicV1GroupsGroupIdRoute,
  postPublicV1GroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicGroupsHandler = app
  .openapi(getPublicV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
