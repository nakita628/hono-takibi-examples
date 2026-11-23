import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFindingsFindingIdRevealAvailabilityRoute,
  getFindingsFindingIdRevealRoute,
  postFindingsDescribeRoute,
  postFindingsRoute,
  postFindingsSampleRoute,
  postFindingsStatisticsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingsHandler = app
  .openapi(postFindingsSampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFindingsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFindingsDescribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindingsFindingIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindingsFindingIdRevealAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
