import { OpenAPIHono } from '@hono/zod-openapi'
import { getMapsChrChromosomeMapKeyRoute, getMapsChrMapKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const chromosomeHandler = app
  .openapi(getMapsChrChromosomeMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsChrMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
