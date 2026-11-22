import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBtPlansRoute,
  getBtPlanTokenRoute,
  getBtTokenValidateRoute,
  postBtTokenAssignRoute,
} from '../routes'

const app = new OpenAPIHono()

export const btHandler = app
  .openapi(getBtPlanTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBtPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBtTokenAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBtTokenValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
