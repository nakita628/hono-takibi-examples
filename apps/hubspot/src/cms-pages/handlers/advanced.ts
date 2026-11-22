import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRoute,
  getCmsPages202609LandingPagesObjectIdRevisionsRoute,
  postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRoute,
  postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(getCmsPages202609LandingPagesObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
