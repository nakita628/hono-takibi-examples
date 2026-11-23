import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLawCongressLawTypeLawNumberRoute,
  getLawCongressLawTypeRoute,
  getLawCongressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lawHandler = app
  .openapi(getLawCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawCongressLawTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawCongressLawTypeLawNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
