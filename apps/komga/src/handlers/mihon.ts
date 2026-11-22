import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ReadlistsIdReadProgressTachiyomiRoute,
  getApiV2SeriesSeriesIdReadProgressTachiyomiRoute,
  putApiV1ReadlistsIdReadProgressTachiyomiRoute,
  putApiV2SeriesSeriesIdReadProgressTachiyomiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mihonHandler = app
  .openapi(getApiV1ReadlistsIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReadlistsIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SeriesSeriesIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SeriesSeriesIdReadProgressTachiyomiRoute, (c) => {
    throw new Error('Not implemented')
  })
