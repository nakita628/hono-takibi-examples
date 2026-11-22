import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3GlossariesGlossaryIdDictionariesRoute,
  deleteV3GlossariesGlossaryIdRoute,
  getV3GlossariesGlossaryIdEntriesRoute,
  getV3GlossariesGlossaryIdRoute,
  getV3GlossariesRoute,
  patchV3GlossariesGlossaryIdRoute,
  postV3GlossariesRoute,
  putV3GlossariesGlossaryIdDictionariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageMultilingualGlossariesHandler = app
  .openapi(postV3GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3GlossariesGlossaryIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3GlossariesGlossaryIdDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV3GlossariesGlossaryIdDictionariesRoute, (c) => {
    throw new Error('Not implemented')
  })
