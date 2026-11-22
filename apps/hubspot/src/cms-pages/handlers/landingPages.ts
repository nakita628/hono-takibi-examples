import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsPages202609LandingPagesObjectIdRoute,
  getCmsPages202609LandingPagesObjectIdDraftRoute,
  getCmsPages202609LandingPagesObjectIdRoute,
  getCmsPages202609LandingPagesRoute,
  patchCmsPages202609LandingPagesObjectIdDraftRoute,
  patchCmsPages202609LandingPagesObjectIdRoute,
  postCmsPages202609LandingPagesCloneRoute,
  postCmsPages202609LandingPagesObjectIdDraftPushLiveRoute,
  postCmsPages202609LandingPagesObjectIdDraftResetRoute,
  postCmsPages202609LandingPagesRoute,
  postCmsPages202609LandingPagesScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const landingPagesHandler = app
  .openapi(getCmsPages202609LandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsPages202609LandingPagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609LandingPagesObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsPages202609LandingPagesObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsPages202609LandingPagesObjectIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdDraftPushLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsPages202609LandingPagesObjectIdDraftResetRoute, (c) => {
    throw new Error('Not implemented')
  })
