import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeOnPremisesSyncBehaviorRoute,
  getMeOnPremisesSyncBehaviorRoute,
  patchMeOnPremisesSyncBehaviorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meOnPremisesSyncBehaviorHandler = app
  .openapi(getMeOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
