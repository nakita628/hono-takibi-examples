import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePeopleIdRoute,
  deletePeopleRoute,
  deletePeopleUsersRoute,
  getPeopleIdRoute,
  getPeopleIdStatisticsRoute,
  getPeopleIdThumbnailRoute,
  getPeopleRoute,
  getPeopleUsersRoute,
  postPeopleIdMergeRoute,
  postPeopleMergeRoute,
  postPeopleRoute,
  putPeopleIdReassignRoute,
  putPeopleIdRoute,
  putPeopleRoute,
  putPeopleUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const peopleHandler = app
  .openapi(deletePeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeopleMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePeopleUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPeopleUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePeopleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPeopleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeopleIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPeopleIdReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
