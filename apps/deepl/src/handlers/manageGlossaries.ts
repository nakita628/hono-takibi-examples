import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2GlossariesGlossaryIdRoute,
  getV2GlossariesGlossaryIdEntriesRoute,
  getV2GlossariesGlossaryIdRoute,
  getV2GlossariesRoute,
  getV2GlossaryLanguagePairsRoute,
  postV2GlossariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageGlossariesHandler = app
  .openapi(getV2GlossaryLanguagePairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2GlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2GlossariesGlossaryIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
