import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PaymentExperienceWebProfilesIdRoute,
  getV1PaymentExperienceWebProfilesIdRoute,
  getV1PaymentExperienceWebProfilesRoute,
  patchV1PaymentExperienceWebProfilesIdRoute,
  postV1PaymentExperienceWebProfilesRoute,
  putV1PaymentExperienceWebProfilesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webProfilesHandler = app
  .openapi(postV1PaymentExperienceWebProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentExperienceWebProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentExperienceWebProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PaymentExperienceWebProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentExperienceWebProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentExperienceWebProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
