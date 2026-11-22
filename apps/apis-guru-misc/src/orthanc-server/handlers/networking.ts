import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModalitiesIdRoute,
  deletePeersIdRoute,
  deleteQueriesIdRoute,
  getModalitiesIdConfigurationRoute,
  getModalitiesIdRoute,
  getModalitiesRoute,
  getPeersIdConfigurationRoute,
  getPeersIdRoute,
  getPeersIdSystemRoute,
  getPeersRoute,
  getQueriesIdAnswersIndexContentRoute,
  getQueriesIdAnswersIndexRoute,
  getQueriesIdAnswersRoute,
  getQueriesIdLevelRoute,
  getQueriesIdModalityRoute,
  getQueriesIdQueryRoute,
  getQueriesIdRoute,
  getQueriesRoute,
  getStorageCommitmentIdRoute,
  postModalitiesIdEchoRoute,
  postModalitiesIdFindInstanceRoute,
  postModalitiesIdFindPatientRoute,
  postModalitiesIdFindRoute,
  postModalitiesIdFindSeriesRoute,
  postModalitiesIdFindStudyRoute,
  postModalitiesIdFindWorklistRoute,
  postModalitiesIdMoveRoute,
  postModalitiesIdQueryRoute,
  postModalitiesIdStorageCommitmentRoute,
  postModalitiesIdStoreRoute,
  postModalitiesIdStoreStraightRoute,
  postPeersIdStoreRoute,
  postPeersIdStoreStraightRoute,
  postQueriesIdAnswersIndexQueryInstancesRoute,
  postQueriesIdAnswersIndexQuerySeriesRoute,
  postQueriesIdAnswersIndexQueryStudiesRoute,
  postQueriesIdAnswersIndexRetrieveRoute,
  postQueriesIdRetrieveRoute,
  postStorageCommitmentIdRemoveRoute,
  putModalitiesIdRoute,
  putPeersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkingHandler = app
  .openapi(getModalitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModalitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModalitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putModalitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModalitiesIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdEchoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdFindInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdFindPatientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdFindSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdFindStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdFindWorklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdStorageCommitmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModalitiesIdStoreStraightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeersIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPeersIdStoreStraightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeersIdSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getStorageCommitmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageCommitmentIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
