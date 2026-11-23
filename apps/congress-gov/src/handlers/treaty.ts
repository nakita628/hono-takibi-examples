import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTreatyCongressRoute,
  getTreatyCongressTreatyNumberActionsRoute,
  getTreatyCongressTreatyNumberCommitteesRoute,
  getTreatyCongressTreatyNumberRoute,
  getTreatyCongressTreatyNumberTreatySuffixActionsRoute,
  getTreatyCongressTreatyNumberTreatySuffixRoute,
  getTreatyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const treatyHandler = app
  .openapi(getTreatyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTreatyCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTreatyCongressTreatyNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTreatyCongressTreatyNumberTreatySuffixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTreatyCongressTreatyNumberActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTreatyCongressTreatyNumberTreatySuffixActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTreatyCongressTreatyNumberCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
