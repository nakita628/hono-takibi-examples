import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  deleteSourceLocationSourceLocationNameRoute,
  deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
  getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  getSourceLocationSourceLocationNameLiveSourcesRoute,
  getSourceLocationSourceLocationNameRoute,
  getSourceLocationSourceLocationNameVodSourcesRoute,
  getSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
  postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  postSourceLocationSourceLocationNameRoute,
  postSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
  putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  putSourceLocationSourceLocationNameRoute,
  putSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceLocationHandler = app
  .openapi(postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourceLocationSourceLocationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourceLocationSourceLocationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceLocationSourceLocationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourceLocationSourceLocationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSourceLocationSourceLocationNameVodSourceVodSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceLocationSourceLocationNameVodSourceVodSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSourceLocationSourceLocationNameVodSourceVodSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceLocationSourceLocationNameLiveSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourceLocationSourceLocationNameVodSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
