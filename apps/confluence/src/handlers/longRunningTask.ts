import { OpenAPIHono } from '@hono/zod-openapi'
import { getWikiRestApiLongtaskIdRoute, getWikiRestApiLongtaskRoute } from '../routes'

const app = new OpenAPIHono()

export const longRunningTaskHandler = app
  .openapi(getWikiRestApiLongtaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiLongtaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
