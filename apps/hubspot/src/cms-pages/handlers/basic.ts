import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsPages202609SitePagesObjectIdRevisionsRevisionIdRoute,
  getCmsPages202609SitePagesObjectIdRevisionsRoute,
  postCmsPages202609SitePagesObjectIdDraftResetRoute,
  postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(postCmsPages202609SitePagesObjectIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609SitePagesObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesObjectIdRevisionsRevisionIdRestoreToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
