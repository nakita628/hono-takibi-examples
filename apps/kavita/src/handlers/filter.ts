import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiFilterRoute,
  getApiFilterRoute,
  postApiFilterDecodeRoute,
  postApiFilterEncodeAnnotationRoute,
  postApiFilterEncodePersonRoute,
  postApiFilterEncodeReadingListRoute,
  postApiFilterEncodeSeriesRoute,
  postApiFilterRenameRoute,
  postApiFilterUpdateAnnotationRoute,
  postApiFilterUpdatePersonRoute,
  postApiFilterUpdateReadingListRoute,
  postApiFilterUpdateSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filterHandler = app
  .openapi(postApiFilterUpdateSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdateReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdatePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterUpdateAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodeReadingListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodePersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterEncodeAnnotationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterDecodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFilterRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
