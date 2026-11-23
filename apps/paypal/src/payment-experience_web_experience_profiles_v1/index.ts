import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PaymentExperienceWebProfilesIdRoute,
  getV1PaymentExperienceWebProfilesIdRoute,
  getV1PaymentExperienceWebProfilesRoute,
  patchV1PaymentExperienceWebProfilesIdRoute,
  postV1PaymentExperienceWebProfilesRoute,
  putV1PaymentExperienceWebProfilesIdRoute,
} from './routes'
import {
  deleteV1PaymentExperienceWebProfilesIdRouteHandler,
  getV1PaymentExperienceWebProfilesIdRouteHandler,
  getV1PaymentExperienceWebProfilesRouteHandler,
  patchV1PaymentExperienceWebProfilesIdRouteHandler,
  postV1PaymentExperienceWebProfilesRouteHandler,
  putV1PaymentExperienceWebProfilesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1PaymentExperienceWebProfilesRoute, postV1PaymentExperienceWebProfilesRouteHandler)
  .openapi(getV1PaymentExperienceWebProfilesRoute, getV1PaymentExperienceWebProfilesRouteHandler)
  .openapi(
    putV1PaymentExperienceWebProfilesIdRoute,
    putV1PaymentExperienceWebProfilesIdRouteHandler,
  )
  .openapi(
    patchV1PaymentExperienceWebProfilesIdRoute,
    patchV1PaymentExperienceWebProfilesIdRouteHandler,
  )
  .openapi(
    getV1PaymentExperienceWebProfilesIdRoute,
    getV1PaymentExperienceWebProfilesIdRouteHandler,
  )
  .openapi(
    deleteV1PaymentExperienceWebProfilesIdRoute,
    deleteV1PaymentExperienceWebProfilesIdRouteHandler,
  )

export default app
