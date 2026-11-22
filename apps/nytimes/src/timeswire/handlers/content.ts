import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentSourceSectionJsonRoute,
  getContentSourceSectionTimePeriodJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app
  .openapi(getContentSourceSectionJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContentSourceSectionTimePeriodJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
