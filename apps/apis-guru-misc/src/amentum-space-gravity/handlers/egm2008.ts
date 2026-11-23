import { OpenAPIHono } from '@hono/zod-openapi'
import { getEgm2008GeoidHeightRoute, getEgm2008GravityAnomalyRoute } from '../routes'

const app = new OpenAPIHono()

export const egm2008Handler = app
  .openapi(getEgm2008GeoidHeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEgm2008GravityAnomalyRoute, (c) => {
    throw new Error('Not implemented')
  })
