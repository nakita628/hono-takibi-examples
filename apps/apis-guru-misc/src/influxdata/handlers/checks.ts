import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChecksCheckIDLabelsLabelIDRoute,
  deleteChecksCheckIDRoute,
  getChecksCheckIDLabelsRoute,
  getChecksCheckIDQueryRoute,
  getChecksCheckIDRoute,
  getChecksRoute,
  patchChecksCheckIDRoute,
  postChecksCheckIDLabelsRoute,
  postChecksRoute,
  putChecksCheckIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksHandler = app
  .openapi(getChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecksCheckIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksCheckIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChecksCheckIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecksCheckIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksCheckIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChecksCheckIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecksCheckIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksCheckIDQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
