import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdProjectsProjectIdOrdersIdRoute,
  getUserprofilesProfileIdProjectsProjectIdOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
