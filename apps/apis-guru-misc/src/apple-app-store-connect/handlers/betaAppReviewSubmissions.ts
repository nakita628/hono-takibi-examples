import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BetaAppReviewSubmissionsIdBuildRoute,
  getV1BetaAppReviewSubmissionsIdRoute,
  getV1BetaAppReviewSubmissionsRoute,
  postV1BetaAppReviewSubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaAppReviewSubmissionsHandler = app
  .openapi(getV1BetaAppReviewSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BetaAppReviewSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewSubmissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewSubmissionsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
