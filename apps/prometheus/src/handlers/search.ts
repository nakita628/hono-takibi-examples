import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchLabelNamesRoute,
  getSearchLabelValuesRoute,
  getSearchMetricNamesRoute,
  postSearchLabelNamesRoute,
  postSearchLabelValuesRoute,
  postSearchMetricNamesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchMetricNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchMetricNamesRoute, (c) => {
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
