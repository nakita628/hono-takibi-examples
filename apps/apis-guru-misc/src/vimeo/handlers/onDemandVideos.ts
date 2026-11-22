import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdVideosVideoIdRoute,
  getOndemandPagesOndemandIdVideosRoute,
  getOndemandPagesOndemandIdVideosVideoIdRoute,
  putOndemandPagesOndemandIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandVideosHandler = app
  .openapi(getOndemandPagesOndemandIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
