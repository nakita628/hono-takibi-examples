import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiWantToReadRoute,
  postApiWantToReadAddSeriesRoute,
  postApiWantToReadRemoveSeriesRoute,
  postApiWantToReadV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const wantToReadHandler = app
  .openapi(postApiWantToReadV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWantToReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWantToReadAddSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWantToReadRemoveSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
