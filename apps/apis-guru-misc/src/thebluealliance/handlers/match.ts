import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMatchMatchKeyRoute,
  getMatchMatchKeySimpleRoute,
  getMatchMatchKeyTimeseriesRoute,
  getMatchMatchKeyZebraMotionworksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matchHandler = app
  .openapi(getMatchMatchKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchMatchKeySimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchMatchKeyTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatchMatchKeyZebraMotionworksRoute, (c) => {
    throw new Error('Not implemented')
  })
