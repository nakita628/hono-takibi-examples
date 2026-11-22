import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute,
  deleteMeActivitiesUserActivityIdRoute,
  getMeActivitiesCountRoute,
  getMeActivitiesRecentRoute,
  getMeActivitiesRoute,
  getMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdActivityRoute,
  getMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute,
  getMeActivitiesUserActivityIdHistoryItemsCountRoute,
  getMeActivitiesUserActivityIdHistoryItemsRoute,
  getMeActivitiesUserActivityIdRoute,
  patchMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute,
  patchMeActivitiesUserActivityIdRoute,
  postMeActivitiesRoute,
  postMeActivitiesUserActivityIdHistoryItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserActivityHandler = app
  .openapi(getMeActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesUserActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeActivitiesUserActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeActivitiesUserActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesUserActivityIdHistoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeActivitiesUserActivityIdHistoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesUserActivityIdHistoryItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeActivitiesRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
