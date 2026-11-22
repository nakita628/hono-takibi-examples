import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedEffectTypesIdRoute,
  getSharedEffectTypesRoute,
  getSharedEffectTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedEffectTypesHandler = app
  .openapi(getSharedEffectTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedEffectTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedEffectTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
