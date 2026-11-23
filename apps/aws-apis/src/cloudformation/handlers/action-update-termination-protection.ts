import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateTerminationProtectionRoute,
  postActionUpdateTerminationProtectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateTerminationProtectionHandler = app
  .openapi(getActionUpdateTerminationProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateTerminationProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
