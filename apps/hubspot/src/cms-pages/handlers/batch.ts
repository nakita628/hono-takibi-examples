import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCmsPages202609LandingPagesBatchArchiveRoute,
  postCmsPages202609LandingPagesBatchCreateRoute,
  postCmsPages202609LandingPagesBatchReadRoute,
  postCmsPages202609LandingPagesBatchUpdateRoute,
  postCmsPages202609LandingPagesFoldersBatchArchiveRoute,
  postCmsPages202609LandingPagesFoldersBatchCreateRoute,
  postCmsPages202609LandingPagesFoldersBatchUpdateRoute,
  postCmsPages202609SitePagesBatchArchiveRoute,
  postCmsPages202609SitePagesBatchCreateRoute,
  postCmsPages202609SitePagesBatchReadRoute,
  postCmsPages202609SitePagesBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCmsPages202609LandingPagesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609SitePagesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
