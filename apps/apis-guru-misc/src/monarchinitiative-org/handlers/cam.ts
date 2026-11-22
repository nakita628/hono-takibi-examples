import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCamActivityRoute,
  getCamInstanceIdRoute,
  getCamInstancesRoute,
  getCamModelContributorsRoute,
  getCamModelIdRoute,
  getCamModelPropertiesRoute,
  getCamModelPropertyValuesRoute,
  getCamModelQueryRoute,
  getCamModelRoute,
  getCamPhysicalInteractionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const camHandler = app
  .openapi(getCamActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamModelContributorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamModelPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamModelPropertyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamModelQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCamPhysicalInteractionRoute, (c) => {
    throw new Error('Not implemented')
  })
