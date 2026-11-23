import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMapsChrChromosomeMapKeyRoute,
  getMapsChrMapKeyRoute,
  getMapsSpeciesTypeKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mapsHandler = app
  .openapi(getMapsChrChromosomeMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsChrMapKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMapsSpeciesTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
