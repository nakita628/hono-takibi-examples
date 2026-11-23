import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postWatchlistScreeningEntityCreateRoute,
  postWatchlistScreeningEntityGetRoute,
  postWatchlistScreeningEntityHistoryListRoute,
  postWatchlistScreeningEntityHitListRoute,
  postWatchlistScreeningEntityListRoute,
  postWatchlistScreeningEntityProgramGetRoute,
  postWatchlistScreeningEntityProgramListRoute,
  postWatchlistScreeningEntityReviewCreateRoute,
  postWatchlistScreeningEntityReviewListRoute,
  postWatchlistScreeningEntityUpdateRoute,
  postWatchlistScreeningIndividualCreateRoute,
  postWatchlistScreeningIndividualGetRoute,
  postWatchlistScreeningIndividualHistoryListRoute,
  postWatchlistScreeningIndividualHitListRoute,
  postWatchlistScreeningIndividualListRoute,
  postWatchlistScreeningIndividualProgramGetRoute,
  postWatchlistScreeningIndividualProgramListRoute,
  postWatchlistScreeningIndividualReviewCreateRoute,
  postWatchlistScreeningIndividualReviewListRoute,
  postWatchlistScreeningIndividualUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchlistScreeningHandler = app
  .openapi(postWatchlistScreeningEntityCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityHitListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityProgramGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityProgramListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityReviewCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityReviewListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningEntityUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualHitListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualProgramGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualProgramListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualReviewCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualReviewListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWatchlistScreeningIndividualUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
