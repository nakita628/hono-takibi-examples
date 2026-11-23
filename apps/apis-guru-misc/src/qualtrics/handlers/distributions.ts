import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDistributionsDistributionIdLinksRoute,
  getDistributionsRoute,
  postDistributionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const distributionsHandler = app
  .openapi(getDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistributionsDistributionIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
