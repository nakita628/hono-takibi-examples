import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMemoriesIdAssetsRoute,
  deleteMemoriesIdRoute,
  getMemoriesIdRoute,
  getMemoriesRoute,
  getMemoriesStatisticsRoute,
  postMemoriesRoute,
  putMemoriesIdAssetsRoute,
  putMemoriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memoriesHandler = app
  .openapi(getMemoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMemoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemoriesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMemoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMemoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMemoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMemoriesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMemoriesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
