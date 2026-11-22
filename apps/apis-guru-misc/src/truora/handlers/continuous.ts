import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ContinuousChecksContinuousCheckIdHistoryRoute,
  getV1ContinuousChecksContinuousCheckIdRoute,
  getV1ContinuousChecksRoute,
  postV1ContinuousChecksRoute,
  putV1ContinuousChecksContinuousCheckIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const continuousHandler = app
  .openapi(getV1ContinuousChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContinuousChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContinuousChecksContinuousCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContinuousChecksContinuousCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContinuousChecksContinuousCheckIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
