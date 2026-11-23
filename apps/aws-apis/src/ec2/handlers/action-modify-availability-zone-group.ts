import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyAvailabilityZoneGroupRoute,
  postActionModifyAvailabilityZoneGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyAvailabilityZoneGroupHandler = app
  .openapi(getActionModifyAvailabilityZoneGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyAvailabilityZoneGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
