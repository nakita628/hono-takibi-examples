import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1HoldoutsIdRoute,
  getV1HoldoutsRoute,
  postV1HoldoutsIdStartAnalysisRoute,
  postV1HoldoutsIdStartRoute,
  postV1HoldoutsIdStopRoute,
  postV1HoldoutsRoute,
  putV1HoldoutsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const holdoutsHandler = app
  .openapi(getV1HoldoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1HoldoutsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HoldoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsIdStartAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HoldoutsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
