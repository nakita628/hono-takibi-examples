import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdTrafficSplitsRoute,
  getSitesSiteIdTrafficSplitsSplitTestIdRoute,
  postSitesSiteIdTrafficSplitsRoute,
  postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute,
  postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute,
  putSitesSiteIdTrafficSplitsSplitTestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const splitTestHandler = app
  .openapi(postSitesSiteIdTrafficSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTrafficSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdTrafficSplitsSplitTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTrafficSplitsSplitTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
