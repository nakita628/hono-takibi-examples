import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTargetsTargetIdSiteIndexRoute,
  patchTargetsTargetIdSiteIndexRoute,
  postTargetsTargetIdSiteVerifyIndexRoute,
  putTargetsTargetIdSiteIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const siteHandler = app
  .openapi(getTargetsTargetIdSiteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdSiteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdSiteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdSiteVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
