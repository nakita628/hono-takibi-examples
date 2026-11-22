import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsPages202609LandingPagesFoldersObjectIdRoute,
  getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRoute,
  getCmsPages202609LandingPagesFoldersObjectIdRevisionsRoute,
  getCmsPages202609LandingPagesFoldersObjectIdRoute,
  getCmsPages202609LandingPagesFoldersRoute,
  patchCmsPages202609LandingPagesFoldersObjectIdRoute,
  postCmsPages202609LandingPagesFoldersBatchReadRoute,
  postCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRoute,
  postCmsPages202609LandingPagesFoldersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foldersHandler = app
  .openapi(getCmsPages202609LandingPagesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsPages202609LandingPagesFoldersObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609LandingPagesFoldersObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersObjectIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesFoldersObjectIdRevisionsRevisionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
