import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiReadingListRoute,
  getApiReadingListAllPeopleRoute,
  getApiReadingListInfoRoute,
  getApiReadingListItemsRoute,
  getApiReadingListListsForChapterRoute,
  getApiReadingListListsForSeriesRoute,
  getApiReadingListNameExistsRoute,
  getApiReadingListNextChapterRoute,
  getApiReadingListPeopleRoute,
  getApiReadingListPrevChapterRoute,
  getApiReadingListRoute,
  postApiReadingListAllRoute,
  postApiReadingListCreateRoute,
  postApiReadingListDeleteItemRoute,
  postApiReadingListDeleteMultipleRoute,
  postApiReadingListExportAsCblRoute,
  postApiReadingListListsRoute,
  postApiReadingListPromoteMultipleRoute,
  postApiReadingListRegenerateCoverRoute,
  postApiReadingListRemoveReadRoute,
  postApiReadingListUpdateByChapterRoute,
  postApiReadingListUpdateByMultipleRoute,
  postApiReadingListUpdateByMultipleSeriesRoute,
  postApiReadingListUpdateBySeriesRoute,
  postApiReadingListUpdateByVolumeRoute,
  postApiReadingListUpdatePositionRoute,
  postApiReadingListUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readingListHandler = app
  .openapi(getApiReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListListsForSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListListsForChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdatePositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListDeleteItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListRemoveReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateBySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByMultipleSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListUpdateByChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListAllPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListNextChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListPrevChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListPromoteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListDeleteMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingListInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListExportAsCblRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingListRegenerateCoverRoute, (c) => {
    throw new Error('Not implemented')
  })
