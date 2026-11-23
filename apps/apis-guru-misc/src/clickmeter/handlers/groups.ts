import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIdRoute,
  getGroupsAggregatedListRoute,
  getGroupsAggregatedRoute,
  getGroupsCountRoute,
  getGroupsIdAggregatedListRoute,
  getGroupsIdAggregatedRoute,
  getGroupsIdAggregatedSummaryRoute,
  getGroupsIdDatapointsCountRoute,
  getGroupsIdDatapointsRoute,
  getGroupsIdHitsRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  postGroupsIdDatapointsRoute,
  postGroupsIdRoute,
  postGroupsRoute,
  putGroupsIdFavouriteRoute,
  putGroupsIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsAggregatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdAggregatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdAggregatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdAggregatedSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsIdDatapointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdDatapointsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdHitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
