import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateScalingParametersRoute,
  postActionUpdateScalingParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateScalingParametersHandler = app
  .openapi(getActionUpdateScalingParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateScalingParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
