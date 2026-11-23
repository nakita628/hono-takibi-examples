import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModalitiesIdRoute,
  getModalitiesIdConfigurationRoute,
  getModalitiesIdRoute,
  getModalitiesRoute,
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
  putModalitiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modalitiesHandler = app
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
