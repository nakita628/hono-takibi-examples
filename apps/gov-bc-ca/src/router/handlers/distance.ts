import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDistanceBetweenPairsOutputFormatRoute,
  postDistanceBetweenPairsOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const distanceHandler = app
  .openapi(getDistanceBetweenPairsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDistanceBetweenPairsOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
