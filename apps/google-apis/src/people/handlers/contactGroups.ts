import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ResourceNameRoute,
  getV1ContactGroupsBatchGetRoute,
  getV1ContactGroupsRoute,
  postV1ContactGroupsRoute,
  postV1ResourceNameMembersModifyRoute,
  putV1ResourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactGroupsHandler = app
  .openapi(getV1ContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContactGroupsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceNameMembersModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
