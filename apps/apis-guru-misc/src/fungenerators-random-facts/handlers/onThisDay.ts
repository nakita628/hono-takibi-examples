import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFactOnthisdayBornRoute,
  getFactOnthisdayDiedRoute,
  getFactOnthisdayEventRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onThisDayHandler = app
  .openapi(getFactOnthisdayBornRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactOnthisdayDiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFactOnthisdayEventRoute, (c) => {
    throw new Error('Not implemented')
  })
