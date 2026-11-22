import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2TargetingTypesTargetingTypeTargetingOptionsRoute,
  getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRoute,
  postV2TargetingTypesTargetingTypeTargetingOptionsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetingTypesHandler = app
  .openapi(getV2TargetingTypesTargetingTypeTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TargetingTypesTargetingTypeTargetingOptionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
