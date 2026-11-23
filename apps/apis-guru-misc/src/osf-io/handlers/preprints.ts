import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPreprintsIndexRoute,
  getPreprintsPreprintIdBibliographicContributorsIndexRoute,
  getPreprintsPreprintIdCitationIndexRoute,
  getPreprintsPreprintIdCitationStyleIdIndexRoute,
  getPreprintsPreprintIdContributorsIndexRoute,
  getPreprintsPreprintIdContributorsUserIdIndexRoute,
  getPreprintsPreprintIdIndexRoute,
  patchPreprintsPreprintIdIndexRoute,
  postPreprintsIndexRoute,
  postPreprintsPreprintIdContributorsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preprintsHandler = app
  .openapi(getPreprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPreprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintsPreprintIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPreprintsPreprintIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintsPreprintIdBibliographicContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintsPreprintIdCitationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintsPreprintIdCitationStyleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintsPreprintIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPreprintsPreprintIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintsPreprintIdContributorsUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
