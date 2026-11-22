import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameRoute,
  getV1beta1ParentInsightsRoute,
  getV1beta1ParentRecommendationsRoute,
  patchV1beta1NameRoute,
  postV1beta1NameMarkAcceptedRoute,
  postV1beta1NameMarkClaimedRoute,
  postV1beta1NameMarkDismissedRoute,
  postV1beta1NameMarkFailedRoute,
  postV1beta1NameMarkSucceededRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMarkAcceptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMarkClaimedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMarkDismissedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMarkFailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMarkSucceededRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
