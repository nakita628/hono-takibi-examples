import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLabelNameValuesRoute,
  getLabelsRoute,
  getSearchLabelNamesRoute,
  getSearchLabelValuesRoute,
  postLabelsRoute,
  postSearchLabelNamesRoute,
  postSearchLabelValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelNameValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchLabelNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchLabelNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchLabelValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchLabelValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
