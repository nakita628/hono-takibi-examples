import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postReportsFilterRoute,
  postReportsLanguagePairsRoute,
  postReportsProjectsRoute,
  postReportsQaRoute,
  postReportsUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(postReportsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsLanguagePairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsQaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
