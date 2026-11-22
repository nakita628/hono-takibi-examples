import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesClientDocumentsIdRoute,
  patchApiDataentitiesClientDocumentsIdRoute,
  postApiDataentitiesClientDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerProfilesHandler = app
  .openapi(postApiDataentitiesClientDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesClientDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesClientDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
