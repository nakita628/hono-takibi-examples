import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateFeedbackDefinitionsIdRoute,
  getV1PrivateFeedbackDefinitionsIdRoute,
  getV1PrivateFeedbackDefinitionsRoute,
  postV1PrivateFeedbackDefinitionsDeleteRoute,
  postV1PrivateFeedbackDefinitionsRoute,
  putV1PrivateFeedbackDefinitionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedbackDefinitionsHandler = app
  .openapi(getV1PrivateFeedbackDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateFeedbackDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateFeedbackDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateFeedbackDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateFeedbackDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateFeedbackDefinitionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
