import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAsyncSearchIdRoute,
  deletePitRoute,
  deleteSearchScrollRoute,
  deleteSearchScrollScrollIdRoute,
  getAsyncSearchIdRoute,
  getAsyncSearchStatusIdRoute,
  getCountRoute,
  getFieldCapsRoute,
  getIndexCountRoute,
  getIndexExplainIdRoute,
  getIndexFieldCapsRoute,
  getIndexKnnEvalRoute,
  getIndexMsearchRoute,
  getIndexMsearchTemplateRoute,
  getIndexMvtFieldZoomXYRoute,
  getIndexRankEvalRoute,
  getIndexSearchRoute,
  getIndexSearchShardsRoute,
  getIndexSearchTemplateRoute,
  getIndexTermsEnumRoute,
  getMsearchRoute,
  getMsearchTemplateRoute,
  getRankEvalRoute,
  getRenderTemplateIdRoute,
  getRenderTemplateRoute,
  getSearchRoute,
  getSearchScrollRoute,
  getSearchScrollScrollIdRoute,
  getSearchShardsRoute,
  getSearchTemplateRoute,
  postAsyncSearchRoute,
  postCountRoute,
  postFieldCapsRoute,
  postIndexAsyncSearchRoute,
  postIndexCountRoute,
  postIndexExplainIdRoute,
  postIndexFieldCapsRoute,
  postIndexKnnEvalRoute,
  postIndexMsearchRoute,
  postIndexMsearchTemplateRoute,
  postIndexMvtFieldZoomXYRoute,
  postIndexPitRoute,
  postIndexRankEvalRoute,
  postIndexSearchRoute,
  postIndexSearchShardsRoute,
  postIndexSearchTemplateRoute,
  postIndexTermsEnumRoute,
  postMsearchRoute,
  postMsearchTemplateRoute,
  postRankEvalRoute,
  postRenderTemplateIdRoute,
  postRenderTemplateRoute,
  postSearchRoute,
  postSearchScrollRoute,
  postSearchScrollScrollIdRoute,
  postSearchShardsRoute,
  postSearchTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getAsyncSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsyncSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsyncSearchStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsyncSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexAsyncSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexExplainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexExplainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexKnnEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexKnnEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRenderTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRenderTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRenderTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRenderTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMvtFieldZoomXYRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMvtFieldZoomXYRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTermsEnumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTermsEnumRoute, (c) => {
    throw new Error('Not implemented')
  })
