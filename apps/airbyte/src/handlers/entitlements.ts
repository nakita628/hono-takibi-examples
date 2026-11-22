import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1EntitlementsGetEntitlementsRoute,
  postV1EntitlementsIsEntitledRoute,
  postV1EntitlementsListPlansRoute,
  postV1EntitlementsUpdatePlanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(postV1EntitlementsIsEntitledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsGetEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsListPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitlementsUpdatePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
