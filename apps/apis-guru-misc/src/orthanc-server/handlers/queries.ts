import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueriesIdRoute,
  getQueriesIdAnswersIndexContentRoute,
  getQueriesIdAnswersIndexRoute,
  getQueriesIdAnswersRoute,
  getQueriesIdLevelRoute,
  getQueriesIdModalityRoute,
  getQueriesIdQueryRoute,
  getQueriesIdRoute,
  getQueriesRoute,
  postQueriesIdAnswersIndexQueryInstancesRoute,
  postQueriesIdAnswersIndexQuerySeriesRoute,
  postQueriesIdAnswersIndexQueryStudiesRoute,
  postQueriesIdAnswersIndexRetrieveRoute,
  postQueriesIdRetrieveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(getQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdAnswersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdAnswersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdAnswersIndexContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueriesIdAnswersIndexQueryInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueriesIdAnswersIndexQuerySeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueriesIdAnswersIndexQueryStudiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueriesIdAnswersIndexRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdModalityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueriesIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueriesIdRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
