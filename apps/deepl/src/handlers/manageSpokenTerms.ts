import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3SpokenTermsSpokenTermsIdRoute,
  deleteV3SpokenTermsSpokenTermsIdTermListsRoute,
  getV3SpokenTermsRoute,
  getV3SpokenTermsSpokenTermsIdEntriesRoute,
  getV3SpokenTermsSpokenTermsIdRoute,
  patchV3SpokenTermsSpokenTermsIdRoute,
  postV3SpokenTermsRoute,
  putV3SpokenTermsSpokenTermsIdTermListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageSpokenTermsHandler = app
  .openapi(postV3SpokenTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SpokenTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SpokenTermsSpokenTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3SpokenTermsSpokenTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SpokenTermsSpokenTermsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SpokenTermsSpokenTermsIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3SpokenTermsSpokenTermsIdTermListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SpokenTermsSpokenTermsIdTermListsRoute, (c) => {
    throw new Error('Not implemented')
  })
