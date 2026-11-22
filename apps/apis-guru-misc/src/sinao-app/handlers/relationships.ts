import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdRelationshipsIdAttachRoute,
  getAppsAppIdRelationshipsIdRoute,
  getAppsAppIdRelationshipsRoute,
  postAppsAppIdRelationshipsIdAttachRoute,
  postAppsAppIdRelationshipsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationshipsHandler = app
  .openapi(getAppsAppIdRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRelationshipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRelationshipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRelationshipsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRelationshipsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
