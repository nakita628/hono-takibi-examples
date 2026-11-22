import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesAddressDocumentsIdRoute,
  patchApiDataentitiesAddressDocumentsIdRoute,
  postApiDataentitiesAddressDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(postApiDataentitiesAddressDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesAddressDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDataentitiesAddressDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
