import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetsItemlistsIdIdsItemIdRoute,
  deleteSetsItemlistsIdRoute,
  deleteSetsSpotlistsIdIdsItemIdRoute,
  deleteSetsSpotlistsIdRoute,
  getSetsItemlistsIdIdsRoute,
  getSetsItemlistsIdRoute,
  getSetsItemlistsRoute,
  getSetsSpotlistsIdIdsRoute,
  getSetsSpotlistsIdRoute,
  getSetsSpotlistsRoute,
  postSetsItemlistsIdIdsRoute,
  postSetsItemlistsRoute,
  postSetsSpotlistsIdIdsRoute,
  postSetsSpotlistsRoute,
  putSetsItemlistsIdRoute,
  putSetsSpotlistsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const setsHandler = app
  .openapi(getSetsItemlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetsItemlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetsItemlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsItemlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetsItemlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsItemlistsIdIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetsItemlistsIdIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetsItemlistsIdIdsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSpotlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetsSpotlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetsSpotlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSpotlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetsSpotlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetsSpotlistsIdIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetsSpotlistsIdIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetsSpotlistsIdIdsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
