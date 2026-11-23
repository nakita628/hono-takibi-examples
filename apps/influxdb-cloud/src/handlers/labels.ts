import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLabelsLabelIDRoute,
  getLabelsLabelIDRoute,
  getLabelsRoute,
  patchLabelsLabelIDRoute,
  postLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(postLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
