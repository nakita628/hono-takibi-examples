import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsIdChildrenRoute,
  getItemsIdRelatedRoute,
  getItemsIdRoute,
  getItemsIdVideosRoute,
  getItemsItemIdNextRoute,
  getListsIdRoute,
  getListsRoute,
  getPlansIdRoute,
  getSchedulesRoute,
  getSearchRoute,
  postItvItemsClipsRoute,
  postItvItemsDownloadableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(getItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvItemsClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItvItemsDownloadableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
