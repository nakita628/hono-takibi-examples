import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDisputesEvidenceRoute,
  getDisputesAggregateRoute,
  getDisputesDisputeIdRoute,
  getDisputesEvidenceDisputeIdRoute,
  getDisputesFilterRoute,
  getDisputesListRoute,
  getDisputesProfileAggregateRoute,
  getDisputesProfileFilterRoute,
  getDisputesProfileListRoute,
  postDisputesAcceptDisputeIdRoute,
  postDisputesEvidenceRoute,
  putDisputesEvidenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app
  .openapi(getDisputesDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesProfileListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesProfileFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisputesAcceptDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisputesEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDisputesEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDisputesEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesEvidenceDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesProfileAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
