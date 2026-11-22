import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIncidentsIdReviewActionItemsRoute,
  getIncidentsIdReviewRoute,
  getIncidentsReviewsActionItemsRoute,
  getIncidentsReviewsRoute,
  postIncidentsIdReviewMarkersRoute,
  postIncidentsIdReviewRoute,
  putIncidentsIdReviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postIncidentReviewsHandler = app
  .openapi(getIncidentsReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsReviewsActionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdReviewActionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdReviewMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
