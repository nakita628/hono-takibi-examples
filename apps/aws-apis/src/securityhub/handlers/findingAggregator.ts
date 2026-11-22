import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFindingAggregatorDeleteFindingAggregatorArnRoute,
  getFindingAggregatorGetFindingAggregatorArnRoute,
  getFindingAggregatorListRoute,
  patchFindingAggregatorUpdateRoute,
  postFindingAggregatorCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingAggregatorHandler = app
  .openapi(postFindingAggregatorCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFindingAggregatorDeleteFindingAggregatorArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindingAggregatorGetFindingAggregatorArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFindingAggregatorListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFindingAggregatorUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
