import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingEmails202609EmailIdRoute,
  getMarketingEmails202609EmailIdAbTestGetVariationRoute,
  getMarketingEmails202609EmailIdDraftRoute,
  getMarketingEmails202609EmailIdRevisionsRevisionIdRoute,
  getMarketingEmails202609EmailIdRevisionsRoute,
  getMarketingEmails202609EmailIdRoute,
  patchMarketingEmails202609EmailIdDraftRoute,
  patchMarketingEmails202609EmailIdRoute,
  postMarketingEmails202609AbTestCreateVariationRoute,
  postMarketingEmails202609CloneRoute,
  postMarketingEmails202609EmailIdDraftResetRoute,
  postMarketingEmails202609EmailIdPublishRoute,
  postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRoute,
  postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRoute,
  postMarketingEmails202609EmailIdUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app
  .openapi(postMarketingEmails202609AbTestCreateVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609CloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609EmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingEmails202609EmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingEmails202609EmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609EmailIdAbTestGetVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609EmailIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingEmails202609EmailIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609EmailIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609EmailIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609EmailIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingEmails202609EmailIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingEmails202609EmailIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
