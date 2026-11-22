import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiReferenceAnsweringBodiesRoute,
  getApiReferenceDepartmentsIdLogoRoute,
  getApiReferenceDepartmentsRoute,
  getApiReferencePolicyInterestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceHandler = app
  .openapi(getApiReferenceAnsweringBodiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReferenceDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReferenceDepartmentsIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReferencePolicyInterestsRoute, (c) => {
    throw new Error('Not implemented')
  })
