import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  getOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  getOndemandPagesOndemandIdBackgroundsRoute,
  patchOndemandPagesOndemandIdBackgroundsBackgroundIdRoute,
  postOndemandPagesOndemandIdBackgroundsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandBackgroundsHandler = app
  .openapi(getOndemandPagesOndemandIdBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOndemandPagesOndemandIdBackgroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdBackgroundsBackgroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdBackgroundsBackgroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOndemandPagesOndemandIdBackgroundsBackgroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
