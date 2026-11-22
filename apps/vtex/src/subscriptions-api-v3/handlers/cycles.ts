import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRnsPubCyclesCycleIdRoute,
  getApiRnsPubCyclesRoute,
  postApiRnsPubCyclesCycleIdRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cyclesHandler = app
  .openapi(getApiRnsPubCyclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubCyclesCycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubCyclesCycleIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
